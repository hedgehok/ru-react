import { useState, useEffect } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
    value: LocalStorageReturnValue,
    {
        setItem: (value: LocalStorageSetValue) => void;
        removeItem: () => void;
    }
];

export const useLocalStorage: UseLocalStorage = (key) => {
    const getStoredValue = (): LocalStorageReturnValue => {
        try {
            const item = localStorage.getItem(key);
            return item ? item : null;
        } catch (error) {
            console.error("Ошибка при чтении из LocalStorage:", error);
            return null;
        }
    };

    const [value, setValue] = useState<LocalStorageReturnValue>(getStoredValue);

    useEffect(() => {
        setValue(getStoredValue());
    }, [key]);

    const setItem = (newValue: LocalStorageSetValue) => {
        try {
            localStorage.setItem(key, newValue);
            setValue(newValue);
        } catch (error) {
            console.error("Ошибка при записи в LocalStorage:", error);
        }
    };

    const removeItem = () => {
        try {
            localStorage.removeItem(key);
            setValue(null);
        } catch (error) {
            console.error("Ошибка при удалении из LocalStorage:", error);
        }
    };

    return [value, { setItem, removeItem }];
};
