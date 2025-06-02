"use client"
import { useEffect, useState } from "react"



export const useUrl = () => {
    const [url, setUrl] = useState<string | null>(null);
    useEffect(() => {
        setUrl(window.location.href)
    }, []);
    return url
}