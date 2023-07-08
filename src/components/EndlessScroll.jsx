import React, { useState, useEffect, useRef } from 'react';

const EndlessScroll = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState(null);
    const [page, setPage] = useState(i);
};

const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
        const response = await fetch
    }
}
