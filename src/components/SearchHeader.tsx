import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { useNavigate, Link, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [searchInput, setSearchInput] = useState<string>('');
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/videos/${searchInput}`);
  };
  useEffect(() => {
    setSearchInput(keyword || '');
  }, [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleOnChange}
        />
        <button
          className="bg-zinc-600 px-4"
          type="button"
          onClick={handleSubmit}
        >
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
