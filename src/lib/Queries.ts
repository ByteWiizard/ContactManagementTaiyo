import { useMutation } from '@tanstack/react-query'
import { Contact } from '../types/index'
import { useDispatch } from 'react-redux'
import { addContact, changeCreateContactStatus, saveEditedContact } from '../redux/actions';


export const AddNewContact = () => {
    const dispatch = useDispatch();
    const mutation = useMutation({
        mutationFn: (newContactData: Contact) => {
            return Promise.resolve(newContactData);
        },
        onSuccess: (data) => {
            console.log("New Contact Data",data)
            dispatch(addContact(data));
            dispatch(changeCreateContactStatus())
        }
    });

    return mutation;
}

export const EditContactQueryFunction = () => {
    const dispatch = useDispatch();
    const mutation = useMutation({
        mutationFn: (editedContact: Contact) => {
            return Promise.resolve(editedContact)
        },
        onSuccess: (data) => {
            console.log("edited data:->",data)
            dispatch(saveEditedContact(data))
        }
    })

    return mutation;
}