'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/shared/Container';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const projectTypes = [
  {
    id: 'tryck',
    name: 'Trycksaker',
    description: 'Visitkort, broschyrer, kataloger, etc.'
  },
  {
    id: 'profil',
    name: 'Profilprodukter',
    description: 'Give-aways, företagskläder, mässprodukter'
  },
  {
    id: 'design',
    name: 'Design & Profilering',
    description: 'Logotyp, grafisk profil, förpackningsdesign'
  },
  {
    id: 'storformat',
    name: 'Storformat & Skyltar',
    description: 'Fasadskyltar, vepor, fordonsdekor'
  }
];

interface FileWithPreview extends File {
  preview?: string;
}

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    deadline: '',
    quantity: '',
    description: '',
    specifications: '',
    budget: '',
    hearAboutUs: ''
  });

  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Här implementerar vi formulärhantering senare
    console.log('Form submitted:', formData);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOut = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(selectedFiles);
  };

  const handleFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter(file => {
      // Tillåt bilder och vanliga dokumentformat
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 
        'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      return validTypes.includes(file.type);
    });

    const filesWithPreviews = validFiles.map(file => {
      const fileWithPreview = file as FileWithPreview;
      if (file.type.startsWith('image/')) {
        fileWithPreview.preview = URL.createObjectURL(file);
      }
      return fileWithPreview;
    });

    setFiles(prev => [...prev, ...filesWithPreviews]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = [...prev];
      if (newFiles[index].preview) {
        URL.revokeObjectURL(newFiles[index].preview!);
      }
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Begär offert
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl text-gray-100"
            >
              Berätta om ert projekt så återkommer vi med en skräddarsydd offert 
              inom 24 timmar.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Kontaktinformation
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Namn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Företag
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Projektinformation
                </h2>
                
                {/* Project Type */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Typ av projekt *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <label
                        key={type.id}
                        className={`relative flex flex-col p-4 cursor-pointer rounded-xl border-2 transition-colors ${
                          formData.projectType === type.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={type.id}
                          className="absolute opacity-0"
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        />
                        <span className="text-lg font-medium text-gray-900">{type.name}</span>
                        <span className="mt-1 text-sm text-gray-500">{type.description}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Other Details */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                        Önskad deadline
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                        Antal/Upplaga
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Projektbeskrivning *
                    </label>
                    <textarea
                      id="description"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Beskriv ert projekt och era önskemål..."
                    />
                  </div>

                  <div>
                    <label htmlFor="specifications" className="block text-sm font-medium text-gray-700 mb-2">
                      Tekniska specifikationer
                    </label>
                    <textarea
                      id="specifications"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.specifications}
                      onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                      placeholder="T.ex. format, material, färger, efterbehandling..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget (ungefärlig)
                      </label>
                      <input
                        type="text"
                        id="budget"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-2">
                        Hur hittade ni oss?
                      </label>
                      <select
                        id="hearAboutUs"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={formData.hearAboutUs}
                        onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value })}
                      >
                        <option value="">Välj alternativ</option>
                        <option value="google">Google</option>
                        <option value="recommendation">Rekommendation</option>
                        <option value="social">Sociala medier</option>
                        <option value="other">Annat</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filuppladdning */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Bilder & Filer</h2>
                <div
                  onDragEnter={handleDragIn}
                  onDragLeave={handleDragOut}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    isDragging
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-300 hover:border-primary/50'
                  }`}
                >
                  <div className="space-y-4">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      />
                    </svg>
                    <div className="text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80"
                      >
                        <span>Ladda upp filer</span>
                        <input
                          id="file-upload"
                          type="file"
                          multiple
                          className="sr-only"
                          onChange={handleFileInput}
                          accept="image/*,.pdf,.doc,.docx"
                        />
                      </label>
                      <p className="pl-1">eller dra och släpp</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF upp till 10MB
                    </p>
                  </div>
                </div>

                {/* Förhandsvisning av uppladdade filer */}
                {files.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="relative group rounded-lg overflow-hidden border border-gray-200"
                      >
                        {file.preview ? (
                          <img
                            src={file.preview}
                            alt={file.name}
                            className="w-full h-32 object-cover"
                          />
                        ) : (
                          <div className="w-full h-32 bg-gray-50 flex items-center justify-center">
                            <svg
                              className="h-8 w-8 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                        <div className="p-2 text-xs truncate">{file.name}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
              >
                Skicka offertförfrågan
              </button>

              <p className="text-sm text-gray-500 text-center">
                Genom att skicka denna förfrågan godkänner du vår{' '}
                <a href="/integritetspolicy" className="text-primary hover:underline">
                  integritetspolicy
                </a>
              </p>
            </form>
          </motion.div>
        </Container>
      </section>
    </div>
  );
} 