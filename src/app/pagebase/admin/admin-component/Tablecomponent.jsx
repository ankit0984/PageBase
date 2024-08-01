"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from "../../app-component/pagination";
import { Pencil, Trash2 } from "lucide-react";
import Loading from "@/app/pageComponent/loading";

const ITEMS_PER_PAGE = 10;

function Tablecomp() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [deleteStatus, setDeleteStatus] = useState({ message: '', type: '' });

    const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:9595/api/v1/bookdb');
            setBooks(response.data);
        } catch (err) {
            console.error("pageComponent fetching books:", err);
            setDeleteStatus({ message: 'pageComponent fetching books. Please try again later.', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    useEffect(() => {
        if (deleteStatus.message) {
            const timer = setTimeout(() => {
                setDeleteStatus({ message: '', type: '' });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [deleteStatus]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleDelete = async (bookId) => {
        try {
            setLoading(true);
            await axios.delete(`http://localhost:9595/api/v1/bookdb/delete/${bookId}`);
            setDeleteStatus({ message: 'Book deleted successfully', type: 'success' });
            // Refresh the book list after successful deletion
            await fetchBooks();
        } catch (err) {
            console.error("pageComponent deleting book:", err);
            setDeleteStatus({ message: 'pageComponent deleting book. Please try again later.', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.Category?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
    const bookDetails = filteredBooks.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    if (loading) return <Loading/>;

    return (
        <div className="lg:p-16 md:p-12">
            <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                <h1>Books</h1>
                <p className="mt-1 text-sm w-1.6 font-normal text-gray-500 dark:text-gray-400">
                    Our database features a wide array of books exploring the intersection of technology and biology.
                </p>
            </div>
            {deleteStatus.message && (
                <div className={`p-4 mb-4 text-sm rounded-lg ${
                    deleteStatus.type === 'success'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                }`} role="alert">
                    {deleteStatus.message}
                </div>
            )}
            <div className="flex flex-col mb-4 sm:mb-2">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for books"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className="relative overflow-x-auto border-2 border-b-amber-300 shadow-md sm:rounded-lg">
                <table className="lg:w-full md:w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3">Book Name</th>
                        <th scope="col" className="px-6 py-3">Description</th>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3">Authors</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookDetails.map((book, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium w-2/6 text-gray-900 dark:text-white">
                                {book.title}
                            </th>
                            <td className="px-6 py-4 w-2/6">{book.description}</td>
                            <td className="px-6 py-4">{book.category}</td>
                            <td className="px-6 py-4">{book.authors}</td>
                            <td className="px-6 py-4 flex items-center justify-between gap-2">
                                <Pencil className="cursor-pointer" />
                                <Trash2
                                    className="cursor-pointer text-red-500 hover:text-red-700"
                                    onClick={() => handleDelete(book._id)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="flex flex-col items-center mt-8">
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to <span
                        className="font-semibold text-gray-900 dark:text-white">{Math.min(currentPage * ITEMS_PER_PAGE, filteredBooks.length)}</span> of <span
                        className="font-semibold text-gray-900 dark:text-white">{filteredBooks.length}</span> Entries
                    </span>
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
                </div>
            </div>
        </div>
    );
}

export default Tablecomp;