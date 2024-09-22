import ContactForm from "../ContactForm/ContactForm";
import Contactlist from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { Bars } from "react-loader-spinner";
import { selectLoading, selectError } from "../../redux/contactsSlice";

export default function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && (
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && <h2>Sorry something went wrong,please try again</h2>}
      <Contactlist />
    </div>
  );
}
