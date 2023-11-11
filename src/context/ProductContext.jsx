"use client"
import React, { createContext } from "react";

export const GetProductContext = createContext();
export const ProductContext = ({ children }) => {
    const categories = [
        {
            'name': "Hardware",
            'subCategories': [

                { 'name': 'Load Protection' },
                { 'name': 'Condition Monitoring' },
                { 'name': 'Connection Device' },
                { 'name': 'Distributed Control System' },
                { 'name': 'Drives' },
                { 'name': 'Energy Monitoring' },
                { 'name': 'HMI' },
                { 'name': 'Cart Technology' },
                { 'name': 'LComputer & Monitor' },
                { 'name': 'Industrial Control Products' },
                { 'name': 'Lightning Control ' },
                { 'name': 'Power Supplies' },
                { 'name': 'Motor Control' },
                { 'name': 'Packaged Solutions' },
                { 'name': 'Safety Products' },
                { 'name': 'Signal interface' },
                { 'name': 'Sensors' },
                { 'name': 'Relays & Times' },

            ]
        },
        {
            'name': "Software",
            'subCategories': [

                { 'name': 'Industrial Control Products' },
                { 'name': 'Lightning Control' },
                { 'name': 'Power Supplies' },
                { 'name': 'Motor Control' },
                { 'name': 'Drives' },
                { 'name': 'Motion Control' },
                { 'name': 'Packaged Solutions' },
                { 'name': 'Safety Products' },
                { 'name': 'Signal interface' },
                { 'name': 'Sensors' },
                { 'name': 'Relays & Times' },


            ]
        },
    ]
    const tags = [
        {
            'name': 'Automation',
        },
        {
            'name': 'Drives',
        },
        {
            'name': 'Black',
        },
        {
            'name': 'White',
        },
        {
            'name': 'Device',
        },
        {
            'name': 'System',
        },
        {
            'name': 'Power',
        },
        {
            'name': 'Omron',
        },
        {
            'name': 'NX',
        },
        {
            'name': 'Hardware',
        },
    ]
    return (
        <GetProductContext.Provider value={{ categories, tags }}>{children}</GetProductContext.Provider>
    )
}