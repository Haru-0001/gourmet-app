'use client'
import type { NextApiRequest, NextApiResponse } from "next";
import React, { useState } from 'react'
import getLocation from "../../../features/getLocation/getLocation";


export default function Handler(
    // req: NextApiRequest,
    // res: NextApiResponse
) {
    const apiUrl = process.env.HOT_PEPPER_API_URL
    const apiKey = process.env.HOT_PEPPER_API_KEY
    
    const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null)
    const useLocation = async () => {
        try {
            const position = await getLocation()
            setLocation(position)
            console.log('Latitude:', position.latitude);
            console.log('Longitude:', position.longitude);
        } catch (error) {
           console.error("Error getting location")
        }
    }
    useLocation()
}