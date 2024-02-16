import Image from 'next/image';
import { IoMdStats } from 'react-icons/io';

export default function Home() {
  return (
    <main>
      <header className="container max-w-2xl px-6 py-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://thispersondoesnotexist.com/"
                alt="User Profile"
              />
            </div>
            <small>Hi, Username</small>
          </div>
          <nav className="flex items-center gap-4">
            <div>
              <a href="#stats">
                <IoMdStats className="text-xl" />
              </a>
            </div>
            <div className="btn btn-danger">Log out!</div>
          </nav>
        </div>
      </header>
    </main>
  );
}
