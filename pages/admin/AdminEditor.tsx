
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { Guide, Step, CategoryId } from '../../types';
import { Save, ArrowLeft, Plus, X, GripVertical } from 'lucide-react';

const AdminEditor: React.FC = () => {
  const navigate = useNavigate();
  const { addGuide, categories } = useData();

  const [formData, setFormData] = useState<Partial<Guide>>({
    title: '',
    // Fix: 'civil' is not a valid CategoryId. Defaulting to 'family'.
    categoryId: 'family',
    summary: '',
    estimatedCost: '',
    estimatedTime: '',
    locationName: '',
    requirements: [''],
    steps: [{ title: '', description: '' }],
    verified: true,
  });

  const handleChange = (field: keyof Guide, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: 'requirements', index: number, value: string) => {
    const newArray = [...(formData[field] || [])];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field: 'requirements') => {
    setFormData(prev => ({ ...prev, [field]: [...(prev[field] || []), ''] }));
  };

  const removeArrayItem = (field: 'requirements', index: number) => {
    setFormData(prev => ({ ...prev, [field]: (prev[field] || []).filter((_, i) => i !== index) }));
  };

  const handleStepChange = (index: number, field: keyof Step, value: string) => {
    const newSteps = [...(formData.steps || [])];
    newSteps[index] = { ...newSteps[index], [field]: value };
    setFormData(prev => ({ ...prev, steps: newSteps }));
  };

  const addStep = () => {
    setFormData(prev => ({ ...prev, steps: [...(prev.steps || []), { title: '', description: '' }] }));
  };

  const removeStep = (index: number) => {
    setFormData(prev => ({ ...prev, steps: (prev.steps || []).filter((_, i) => i !== index) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.summary) return;

    // Fix: Removed 'author' which is not in type Guide, and added missing 'scope'.
    const newGuide: Guide = {
      id: Date.now().toString(),
      title: formData.title,
      categoryId: formData.categoryId as CategoryId,
      slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
      summary: formData.summary,
      lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      estimatedCost: formData.estimatedCost || 'Variable',
      estimatedTime: formData.estimatedTime || 'Variable',
      requirements: formData.requirements?.filter(r => r) || [],
      steps: formData.steps || [],
      locationName: formData.locationName,
      scope: 'Lagos',
      verified: formData.verified || false,
    };

    addGuide(newGuide);
    navigate('/admin');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between sticky top-0 bg-brand-zinc-100/90 backdrop-blur-sm py-4 z-10">
        <div className="flex items-center gap-4">
           <button type="button" onClick={() => navigate('/admin')} className="p-2 hover:bg-white rounded-full transition-colors"><ArrowLeft size={20} /></button>
           <h1 className="text-2xl font-bold text-brand-zinc-900">New Guide</h1>
        </div>
        <button 
          type="submit" 
          className="bg-brand-zinc-900 text-white px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-brand-zinc-800 transition-all shadow-md"
        >
          <Save size={16} />
          Publish Guide
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Column */}
         <div className="lg:col-span-2 space-y-6">
            
            {/* Basic Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-zinc-200 space-y-4">
               <h2 className="text-lg font-bold text-brand-zinc-900 border-b border-brand-zinc-100 pb-2">Basic Information</h2>
               <div>
                 <label className="block text-sm font-medium text-brand-zinc-500 mb-1">Title</label>
                 <input 
                   required
                   type="text" 
                   className="w-full px-4 py-2 border border-brand-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-zinc-900"
                   placeholder="e.g. How to Register a Company"
                   value={formData.title}
                   onChange={e => handleChange('title', e.target.value)}
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-brand-zinc-500 mb-1">Summary</label>
                 <textarea 
                   required
                   rows={3}
                   className="w-full px-4 py-2 border border-brand-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-zinc-900"
                   placeholder="A brief overview of the process..."
                   value={formData.summary}
                   onChange={e => handleChange('summary', e.target.value)}
                 />
               </div>
            </div>

            {/* Steps Builder */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-zinc-200 space-y-4">
               <div className="flex justify-between items-center border-b border-brand-zinc-100 pb-2">
                 <h2 className="text-lg font-bold text-brand-zinc-900">Process Steps</h2>
                 <button type="button" onClick={addStep} className="text-xs font-bold uppercase tracking-wider text-brand-lemon bg-brand-zinc-900 px-3 py-1 rounded-md hover:bg-brand-zinc-700">+ Add Step</button>
               </div>
               
               <div className="space-y-4">
                  {formData.steps?.map((step, idx) => (
                    <div key={idx} className="bg-brand-zinc-50 p-4 rounded-lg border border-brand-zinc-200 relative group">
                       <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button type="button" onClick={() => removeStep(idx)} className="text-red-500 hover:bg-red-50 p-1 rounded"><X size={16}/></button>
                       </div>
                       <div className="flex gap-4">
                          <div className="flex-shrink-0 w-6 h-6 bg-brand-zinc-200 rounded-full flex items-center justify-center text-xs font-bold text-brand-zinc-500 mt-2">{idx + 1}</div>
                          <div className="flex-grow space-y-3">
                             <input 
                               type="text"
                               placeholder="Step Title"
                               className="w-full bg-transparent border-b border-brand-zinc-200 focus:border-brand-zinc-900 px-0 py-1 font-medium focus:outline-none"
                               value={step.title}
                               onChange={e => handleStepChange(idx, 'title', e.target.value)}
                             />
                             <textarea 
                               rows={2}
                               placeholder="Description"
                               className="w-full bg-white border border-brand-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:border-brand-zinc-900"
                               value={step.description}
                               onChange={e => handleStepChange(idx, 'description', e.target.value)}
                             />
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

         </div>

         {/* Sidebar Column */}
         <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-zinc-200 space-y-4">
               <h2 className="text-sm font-bold uppercase tracking-wider text-brand-zinc-400">Settings</h2>
               
               <div>
                 <label className="block text-sm font-medium text-brand-zinc-500 mb-1">Category</label>
                 <select 
                   className="w-full px-3 py-2 border border-brand-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-zinc-900 bg-white"
                   value={formData.categoryId}
                   onChange={e => handleChange('categoryId', e.target.value)}
                 >
                   {categories.map(cat => (
                     <option key={cat.id} value={cat.id}>{cat.name}</option>
                   ))}
                 </select>
               </div>

               <div className="grid grid-cols-2 gap-3">
                 <div>
                    <label className="block text-sm font-medium text-brand-zinc-500 mb-1">Cost (Est.)</label>
                    <input 
                      type="text"
                      className="w-full px-3 py-2 border border-brand-zinc-200 rounded-lg text-sm"
                      placeholder="₦0.00"
                      value={formData.estimatedCost}
                      onChange={e => handleChange('estimatedCost', e.target.value)}
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-brand-zinc-500 mb-1">Time (Est.)</label>
                    <input 
                      type="text"
                      className="w-full px-3 py-2 border border-brand-zinc-200 rounded-lg text-sm"
                      placeholder="e.g. 2 weeks"
                      value={formData.estimatedTime}
                      onChange={e => handleChange('estimatedTime', e.target.value)}
                    />
                 </div>
               </div>

               <div>
                  <label className="block text-sm font-medium text-brand-zinc-500 mb-1">Location</label>
                  <input 
                    type="text"
                    className="w-full px-3 py-2 border border-brand-zinc-200 rounded-lg text-sm"
                    placeholder="Office Name"
                    value={formData.locationName}
                    onChange={e => handleChange('locationName', e.target.value)}
                  />
               </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-zinc-200">
               <div className="flex justify-between items-center mb-4">
                 <h2 className="text-sm font-bold uppercase tracking-wider text-brand-zinc-400">Requirements</h2>
                 <button type="button" onClick={() => addArrayItem('requirements')} className="text-brand-zinc-900 hover:bg-brand-zinc-100 p-1 rounded"><Plus size={16}/></button>
               </div>
               <div className="space-y-2">
                 {formData.requirements?.map((req, idx) => (
                   <div key={idx} className="flex gap-2">
                      <input 
                        type="text"
                        className="flex-grow px-3 py-1.5 border border-brand-zinc-200 rounded-md text-sm"
                        value={req}
                        onChange={e => handleArrayChange('requirements', idx, e.target.value)}
                      />
                      <button type="button" onClick={() => removeArrayItem('requirements', idx)} className="text-brand-zinc-400 hover:text-red-500"><X size={16}/></button>
                   </div>
                 ))}
               </div>
            </div>
         </div>
      </div>
    </form>
  );
};

export default AdminEditor;
