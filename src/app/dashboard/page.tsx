// import Form from "@/components/Form";
// import prisma from "@/lib/prisma";


// export default async function DashboardPage() {

// const User = await prisma.user.findMany();

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
//       <p className="text-lg">Welcome to your dashboard!</p>
//   <ul >
//     {User.map((user)=>(
//       <li key={user.id} className="p-4 bg-white shadow rounded mb-2">
//         <li className="text-lg font-semibold">{user.name}</li>
//         <li className="text-gray-600">{user.email}</li>
//       </li>
//     ))}
//   </ul>
//       <div className=" ">
//         <Form/>
//         </div>
//     </div>
//   );
// }