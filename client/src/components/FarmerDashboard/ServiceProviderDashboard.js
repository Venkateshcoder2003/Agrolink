// import React, { useState, useEffect } from 'react';
// import { User, Calendar, Briefcase, DollarSign, MessageCircle, Bell, HelpCircle, LogOut, ArrowLeft } from 'lucide-react';
// import axios from 'axios';

// const ServiceProviderDashboard = ({ onBackClick }) => {
//     const [currentPage, setCurrentPage] = useState('profile');
//     const [providerProfile] = useState({
//         name: 'AgriTech Solutions',
//         service: 'Soil Testing',
//         experience: '7 years',
//         location: 'Tumkur, Karnataka',
//         phone: '+91 9876543210',
//         email: 'info@agritechsolutions.com'
//     });
//     const [services, setServices] = useState([]);
//     const [newService, setNewService] = useState({ name: '', amount: '', mobileNumber: '' });

//     const [activeContracts] = useState([
//         { id: 1, farm: 'Farm X', service: 'Equipment Rental', duration: '1 month' },
//         { id: 2, farm: 'Farm Y', service: 'Pest Control', duration: '2 weeks' },
//     ]);
//     const [messages] = useState([
//         { id: 1, from: 'Farm X', content: 'When can you deliver the equipment?', timestamp: '2024-09-05 10:30' },
//         { id: 2, from: 'Farm Y', content: 'Need urgent pest control service', timestamp: '2024-09-05 11:45' },
//     ]);
//     const [notifications] = useState([
//         { id: 1, content: 'New service request from Farm Z', timestamp: '2024-09-05 09:15' },
//         { id: 2, content: 'Payment received from Farm X', timestamp: '2024-09-05 14:20' },
//     ]);

//     useEffect(() => {
//         fetchServices();
//     }, []);

//     const fetchServices = async () => {
//         try {
//             const response = await axios.get('http://localhost:6002/api/services');
//             setServices(response.data);
//         } catch (error) {
//             console.error('Error fetching services:', error);
//         }
//     };

//     const handleAddService = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:6002/api/services', newService);
//             setServices([...services, response.data]);
//             setNewService({ name: '', amount: '', mobileNumber: '' });
//         } catch (error) {
//             console.error('Error adding service:', error);
//         }
//     };

//     const menuItems = [
//         { icon: <User className="w-5 h-5 mr-3" />, text: "My Profile", page: 'profile' },
//         { icon: <Calendar className="w-5 h-5 mr-3" />, text: "Active Contracts", page: 'contracts' },
//         { icon: <Briefcase className="w-5 h-5 mr-3" />, text: "Services", page: 'services' },
//         { icon: <DollarSign className="w-5 h-5 mr-3" />, text: "Revenue", page: 'revenue' },
//         { icon: <MessageCircle className="w-5 h-5 mr-3" />, text: "Messages", page: 'messages' },
//         { icon: <Bell className="w-5 h-5 mr-3" />, text: "Notifications", page: 'notifications' },
//         { icon: <HelpCircle className="w-5 h-5 mr-3" />, text: "Help & Support", page: 'support' },
//         { icon: <LogOut className="w-5 h-5 mr-3" />, text: "Logout", page: 'logout' },
//     ];

//     const renderProfile = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="flex items-center">
//                     <User className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Name:</span> {providerProfile.name}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <Briefcase className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Service:</span> {providerProfile.service}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <Calendar className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Experience:</span> {providerProfile.experience}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <User className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Location:</span> {providerProfile.location}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <User className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Phone:</span> {providerProfile.phone}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <User className="w-6 h-6 mr-2 text-gray-600" />
//                     <p><span className="font-semibold">Email:</span> {providerProfile.email}</p>
//                 </div>
//             </div>
//         </div>
//     );

//     const renderContracts = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Active Contracts</h2>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white">
//                     <thead className="bg-gray-100">
//                         <tr>
//                             <th className="py-2 px-4 border-b text-left">Farm</th>
//                             <th className="py-2 px-4 border-b text-left">Service</th>
//                             <th className="py-2 px-4 border-b text-left">Duration</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {activeContracts.map((contract) => (
//                             <tr key={contract.id}>
//                                 <td className="py-2 px-4 border-b">{contract.farm}</td>
//                                 <td className="py-2 px-4 border-b">{contract.service}</td>
//                                 <td className="py-2 px-4 border-b">{contract.duration}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );

//     const renderServices = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
//             <form onSubmit={handleAddService} className="mb-4">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <input
//                         type="text"
//                         placeholder="Service Name"
//                         value={newService.name}
//                         onChange={(e) => setNewService({ ...newService, name: e.target.value })}
//                         className="border rounded px-2 py-1"
//                         required
//                     />
//                     <input
//                         type="number"
//                         placeholder="Amount"
//                         value={newService.amount}
//                         onChange={(e) => setNewService({ ...newService, amount: e.target.value })}
//                         className="border rounded px-2 py-1"
//                         required
//                     />
//                     <input
//                         type="tel"
//                         placeholder="Mobile Number"
//                         value={newService.mobileNumber}
//                         onChange={(e) => setNewService({ ...newService, mobileNumber: e.target.value })}
//                         className="border rounded px-2 py-1"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Add Service</button>
//             </form>
//             <ul className="space-y-2">
//                 {services.map(service => (
//                     <li key={service._id} className="flex justify-between items-center">
//                         <span>{service.name}</span>
//                         <span>₹{service.amount}</span>
//                         <span>{service.mobileNumber}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );

//     const renderRevenue = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Revenue</h2>
//             <p className="text-xl font-bold">Total: ₹50,000</p>
//             <p className="text-sm text-gray-600">Last 30 days</p>
//         </div>
//     );

//     const renderMessages = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Messages</h2>
//             <div className="space-y-4">
//                 {messages.map(message => (
//                     <div key={message.id} className="bg-gray-100 p-3 rounded">
//                         <p className="font-semibold">{message.from}</p>
//                         <p>{message.content}</p>
//                         <p className="text-xs text-gray-500">{message.timestamp}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );

//     const renderNotifications = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
//             <div className="space-y-4">
//                 {notifications.map(notification => (
//                     <div key={notification.id} className="bg-yellow-100 p-3 rounded">
//                         <p>{notification.content}</p>
//                         <p className="text-xs text-gray-500">{notification.timestamp}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );

//     const renderSupport = () => (
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Help & Support</h2>
//             <p>If you need any assistance, please contact our support team at support@farmunity.com</p>
//         </div>
//     );


//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className="w-64 bg-green-800 text-white shadow-lg">
//                 <div className="p-4">
//                     <div className="flex items-center mb-4">
//                         <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
//                         <div>
//                             <h2 className="font-bold">{providerProfile.name}</h2>
//                             <p className="text-sm text-green-200">Provider ID: SP12345</p>
//                         </div>
//                     </div>
//                     {menuItems.map((item, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center py-2 px-4 hover:bg-green-700 cursor-pointer"
//                             onClick={() => setCurrentPage(item.page)}
//                         >
//                             {item.icon}
//                             <span>{item.text}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Main content */}
//             <div className="flex-1 flex flex-col overflow-hidden">
//                 {/* Header */}
//                 <header className="bg-white shadow-sm">
//                     <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//                         <h1 className="text-2xl font-bold text-gray-900">Service Provider Dashboard</h1>
//                         <button
//                             onClick={onBackClick}
//                             className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
//                         >
//                             <ArrowLeft className="w-5 h-5 mr-2" />
//                             Back
//                         </button>
//                     </div>
//                 </header>

//                 {/* Dashboard content */}
//                 <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                         {currentPage === 'profile' && renderProfile()}
//                         {currentPage === 'contracts' && renderContracts()}
//                         {currentPage === 'services' && renderServices()}
//                         {currentPage === 'revenue' && renderRevenue()}
//                         {currentPage === 'messages' && renderMessages()}
//                         {currentPage === 'notifications' && renderNotifications()}
//                         {currentPage === 'support' && renderSupport()}
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default ServiceProviderDashboard;


import React, { useState, useEffect } from 'react';
import { User, Calendar, Briefcase, DollarSign, MessageCircle, Bell, HelpCircle, LogOut, ArrowLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

const ServiceProviderDashboard = ({ onBackClick }) => {
    const [currentPage, setCurrentPage] = useState('profile');
    const [providerProfile] = useState({
        name: 'AgriTech Solutions',
        service: 'Soil Testing',
        experience: '7 years',
        location: 'Tumkur, Karnataka',
        phone: '+91 9876543210',
        email: 'info@agritechsolutions.com'
    });
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ name: '', amount: '', mobileNumber: '' });

    const [activeContracts] = useState([
        { id: 1, farm: 'Farm X', service: 'Equipment Rental', duration: '1 month' },
        { id: 2, farm: 'Farm Y', service: 'Pest Control', duration: '2 weeks' },
    ]);
    const [messages] = useState([
        { id: 1, from: 'Farm X', content: 'When can you deliver the equipment?', timestamp: '2024-09-05 10:30' },
        { id: 2, from: 'Farm Y', content: 'Need urgent pest control service', timestamp: '2024-09-05 11:45' },
    ]);
    const [notifications] = useState([
        { id: 1, content: 'New service request from Farm Z', timestamp: '2024-09-05 09:15' },
        { id: 2, content: 'Payment received from Farm X', timestamp: '2024-09-05 14:20' },
    ]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:6002/api/services');
            setServices(response.data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    const handleAddService = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6002/api/services', newService);
            setServices([...services, response.data]);
            setNewService({ name: '', amount: '', mobileNumber: '' });
        } catch (error) {
            console.error('Error adding service:', error);
        }
    };

    const menuItems = [
        { icon: <User className="w-5 h-5 mr-3" />, text: "My Profile", page: 'profile' },
        { icon: <Calendar className="w-5 h-5 mr-3" />, text: "Active Contracts", page: 'contracts' },
        { icon: <Briefcase className="w-5 h-5 mr-3" />, text: "Services", page: 'services' },
        { icon: <DollarSign className="w-5 h-5 mr-3" />, text: "Revenue", page: 'revenue' },
        { icon: <MessageCircle className="w-5 h-5 mr-3" />, text: "Messages", page: 'messages' },
        { icon: <Bell className="w-5 h-5 mr-3" />, text: "Notifications", page: 'notifications' },
        { icon: <HelpCircle className="w-5 h-5 mr-3" />, text: "Help & Support", page: 'support' },
        { icon: <LogOut className="w-5 h-5 mr-3" />, text: "Logout", page: 'logout' },
    ];

    const renderProfile = () => (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">My Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <User className="w-8 h-8 mr-4 text-green-600" />
                    <div>
                        <p className="text-sm text-green-600">Name</p>
                        <p className="font-semibold">{providerProfile.name}</p>
                    </div>
                </div>
                <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <Briefcase className="w-8 h-8 mr-4 text-green-600" />
                    <div>
                        <p className="text-sm text-green-600">Service</p>
                        <p className="font-semibold">{providerProfile.service}</p>
                    </div>
                </div>
                <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <Calendar className="w-8 h-8 mr-4 text-green-600" />
                    <div>
                        <p className="text-sm text-green-600">Experience</p>
                        <p className="font-semibold">{providerProfile.experience}</p>
                    </div>
                </div>
                <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <User className="w-8 h-8 mr-4 text-green-600" />
                    <div>
                        <p className="text-sm text-green-600">Location</p>
                        <p className="font-semibold">{providerProfile.location}</p>
                    </div>
                </div>
                <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <User className="w-8 h-8 mr-4 text-green-600" />
                    <div>
                        <p className="text-sm text-green-600">Phone</p>
                        <p className="font-semibold">{providerProfile.phone}</p>
                    </div>
                </div>
                <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <User className="w-8 h-8 mr-4 text-green-600" />
                    <div>
                        <p className="text-sm text-green-600">Email</p>
                        <p className="font-semibold">{providerProfile.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContracts = () => (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Active Contracts</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="py-3 px-4 border-b-2 border-green-200 text-left text-xs font-semibold text-green-600 uppercase tracking-wider">Farm</th>
                            <th className="py-3 px-4 border-b-2 border-green-200 text-left text-xs font-semibold text-green-600 uppercase tracking-wider">Service</th>
                            <th className="py-3 px-4 border-b-2 border-green-200 text-left text-xs font-semibold text-green-600 uppercase tracking-wider">Duration</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                        {activeContracts.map((contract) => (
                            <tr key={contract.id} className="hover:bg-green-50">
                                <td className="py-4 px-4">{contract.farm}</td>
                                <td className="py-4 px-4">{contract.service}</td>
                                <td className="py-4 px-4">{contract.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderServices = () => (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Our Services</h2>
            <form onSubmit={handleAddService} className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Service Name"
                        value={newService.name}
                        onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                        className="border-2 border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={newService.amount}
                        onChange={(e) => setNewService({ ...newService, amount: e.target.value })}
                        className="border-2 border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={newService.mobileNumber}
                        onChange={(e) => setNewService({ ...newService, mobileNumber: e.target.value })}
                        className="border-2 border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                        required
                    />
                </div>
                <button type="submit" className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">Add Service</button>
            </form>
            <ul className="space-y-4">
                {services.map(service => (
                    <li key={service._id} className="flex justify-between items-center bg-green-50 p-4 rounded-lg">
                        <span className="font-semibold text-green-800">{service.name}</span>
                        <span className="text-green-600">₹{service.amount}</span>
                        <span className="text-sm text-green-600">{service.mobileNumber}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    const renderRevenue = () => (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Revenue</h2>
            <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-green-600">₹50,000</p>
                <p className="text-sm text-green-600 mt-2">Last 30 days</p>
            </div>
        </div>
    );

    const renderMessages = () => (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Messages</h2>
            <div className="space-y-4">
                {messages.map(message => (
                    <div key={message.id} className="bg-green-50 p-4 rounded-lg">
                        <p className="font-semibold text-green-800">{message.from}</p>
                        <p className="text-green-600 mt-1">{message.content}</p>
                        <p className="text-xs text-green-500 mt-2">{message.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderNotifications = () => (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Notifications</h2>
            <div className="space-y-4">
                {notifications.map(notification => (
                    <div key={notification.id} className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <p className="text-yellow-800">{notification.content}</p>
                        <p className="text-xs text-yellow-600 mt-2">{notification.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderSupport = () => (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Help & Support</h2>
            <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-800">If you need any assistance, please contact our support team at:</p>
                <p className="text-green-600 font-semibold mt-2">support@farmunity.com</p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">Contact Support</button>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-green-800 text-white shadow-lg">
                <div className="p-6">
                    <div className="flex items-center mb-6">
                        <img src="/placeholder.svg?height=48&width=48" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <h2 className="font-bold text-lg">{providerProfile.name}</h2>
                            <p className="text-sm text-green-300">Provider ID: SP12345</p>
                        </div>
                    </div>
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center py-3 px-4 rounded-lg cursor-pointer transition-colors duration-200 ${currentPage === item.page ? 'bg-green-700' : 'hover:bg-green-700'}`}
                            onClick={() => setCurrentPage(item.page)}
                        >
                            {item.icon}
                            <span className="ml-3">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-green-800">Service Provider Dashboard</h1>
                        <button
                            onClick={onBackClick}
                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back
                        </button>
                    </div>
                </header>

                {/* Dashboard content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {currentPage === 'profile' && renderProfile()}
                        {currentPage === 'contracts' && renderContracts()}
                        {currentPage === 'services' && renderServices()}
                        {currentPage === 'revenue' && renderRevenue()}
                        {currentPage === 'messages' && renderMessages()}
                        {currentPage === 'notifications' && renderNotifications()}
                        {currentPage === 'support' && renderSupport()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ServiceProviderDashboard;

