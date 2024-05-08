import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from '../redux/actions'
import Girl from '../assets/Girl.png'
import Male from '../assets/Male.png'
import { useEffect } from "react";

interface ContactItemsProps {
  contactDetail: {
    id: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    status: string;
    Gender: string;
  };
}



const ContactItems: React.FC<ContactItemsProps> = ({ contactDetail }) => {
  const dispachFn = useDispatch()

  const clickToDeleteItem = () => {
    dispachFn(deleteContact(contactDetail.id))
  }

  const clickedToEdit = () => {
    dispachFn(editContact(contactDetail))
  }
  useEffect(() => {
    console.log("contact detail", contactDetail)
  }, [contactDetail])

  const isActiveStatus =
    contactDetail.status === "ACTIVE" ? "text-[#2BBB00]" : "text-[#DF0000]";

  return (
    <li className="bg-white m-5 w-[200px] h-fit border text-[#143d59] font-grey p-3 flex flex-col items-center justify-center font-bold rounded-xl shadow-lg border-[#F49F1C]">
      {
        contactDetail.Gender === "Male" ? (
          <img src={Male} alt="" className="rounded-full w-20" />
        ) : (
          <img src={Girl} alt="" className="rounded-full w-20" />
        )
      }
      <h1>{`${contactDetail.firstName} ${contactDetail.lastName}`}</h1>
      <h3>{`${contactDetail.contactNumber}`}</h3>
      <div className="flex items-center">
        <RiCheckboxBlankCircleFill className={`${isActiveStatus} mr-2`} />
        {contactDetail.status}
      </div>
      <div className="">
        <button onClick={clickedToEdit} className="block bg-[#F49F1C] hover:bg-[#6e5227] w-20 m-3 rounded-xl h-15 text-white" type="button">
          Edit
        </button>
        <button onClick={clickToDeleteItem} className="block bg-[#F49F1C] hover:bg-[#6e5227] w-20 m-3 rounded-xl h-15 text-white" type="button">Delete</button>
      </div>
    </li>
  );
};

export default ContactItems;
