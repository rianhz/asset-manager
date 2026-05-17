"use client";
import {Moon,Sun} from '@gravity-ui/icons';
import { useTheme } from 'next-themes';
import { Switch } from '@heroui/react';
import { useEffect, useState } from 'react';

export const DarkModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-6 bg-transparent" />; 
    }

    return (
        <div>
            <Switch defaultSelected size="lg" onChange={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }}>
                <Switch.Control className='bg-surface-secondary dark:bg-white'>
                <Switch.Thumb className='text-black dark:text-white bg-white dark:bg-surface-secondary'>
                  <Switch.Icon>
                    {theme === 'dark' ? <Moon /> : <Sun />}
                  </Switch.Icon>
                </Switch.Thumb>
              </Switch.Control>
            </Switch>
        </div>
    )
}