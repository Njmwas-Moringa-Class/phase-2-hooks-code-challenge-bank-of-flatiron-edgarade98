import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList searchTerm={searchTerm} />
    </div>
  );
}

export default AccountContainer;
