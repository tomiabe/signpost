import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { Edit2, Trash2, Plus, Eye } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { guides, deleteGuide } = useData();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-brand-zinc-900">Content Overview</h1>
          <p className="text-brand-zinc-500 mt-1">Manage your directory guides.</p>
        </div>
        <Link 
          to="/admin/new" 
          className="bg-brand-zinc-900 text-white px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-brand-zinc-800 transition-all shadow-md hover:shadow-lg"
        >
          <Plus size={16} />
          Create New Guide
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-brand-zinc-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-zinc-50 border-b border-brand-zinc-200 text-brand-zinc-500 font-medium uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Last Updated</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-zinc-100">
              {guides.map((guide) => (
                <tr key={guide.id} className="hover:bg-brand-zinc-50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-brand-zinc-900">{guide.title}</td>
                  <td className="px-6 py-4 text-brand-zinc-500 capitalize">{guide.categoryId}</td>
                  <td className="px-6 py-4 text-brand-zinc-500">{guide.lastUpdated}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${guide.verified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {guide.verified ? 'Verified' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={`/guide/${guide.id}`} className="p-2 text-brand-zinc-400 hover:text-brand-zinc-900 hover:bg-brand-zinc-200 rounded-md" title="View">
                         <Eye size={16} />
                      </Link>
                      <button 
                        onClick={() => deleteGuide(guide.id)} 
                        className="p-2 text-brand-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        title="Delete"
                      >
                         <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {guides.length === 0 && (
                <tr>
                   <td colSpan={5} className="px-6 py-12 text-center text-brand-zinc-400">
                      No guides found. Create your first one.
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;