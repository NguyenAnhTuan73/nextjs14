"use client";

const UserItem = () => {
  return (
    <div className="flex items-center justify-between border-2  rounded-3xl p-2">
      <div className="mr-2 w-12 min-w-12 h-12 min-h-12 rounded-full bg-green-500 font-bold text-white flex items-center justify-center">
        <p className="text-xl">AT</p>
      </div>
      <div>
        <p className="text-base font-bold">Anh Tuấn</p>
        <p className="text-sm text-neutral-500">nguyentuanqb73@gmail.com</p>
      </div>
    </div>
  );
};

export default UserItem;
