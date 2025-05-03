import React, { useState } from 'react';
import Terminal from './ui/Terminal';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formValues.name.trim()) {
      errors.name = 'Nome é obrigatório';
    }
    
    if (!formValues.email.trim()) {
      errors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = 'Formato de email inválido';
    }
    
    if (!formValues.subject.trim()) {
      errors.subject = 'Assunto é obrigatório';
    }
    
    if (!formValues.message.trim()) {
      errors.message = 'Mensagem é obrigatória';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#C9D1D9] mb-4">Entre em Contato</h2>
          <p className="text-[#8B949E] max-w-2xl mx-auto">
            Interessado em trabalhar junto? Sinta-se à vontade para entrar em contato
            para colaboração ou discutir as necessidades do seu projeto.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Terminal title="contato.sh" className="mb-8">
            <p className="text-[#8B949E] mb-4">
              $ enviar-mensagem --para="kelton.lima@ragt.com.br"
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-[#8B949E] text-sm mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className={`w-full bg-[#0D1117] border ${
                      formErrors.name ? 'border-[#F85149]' : 'border-[#30363D]'
                    } rounded-md px-3 py-2 text-[#C9D1D9] focus:outline-none focus:border-[#2F81F7]`}
                  />
                  {formErrors.name && (
                    <p className="text-[#F85149] text-xs mt-1">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#8B949E] text-sm mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className={`w-full bg-[#0D1117] border ${
                      formErrors.email ? 'border-[#F85149]' : 'border-[#30363D]'
                    } rounded-md px-3 py-2 text-[#C9D1D9] focus:outline-none focus:border-[#2F81F7]`}
                  />
                  {formErrors.email && (
                    <p className="text-[#F85149] text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-[#8B949E] text-sm mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange}
                  className={`w-full bg-[#0D1117] border ${
                    formErrors.subject ? 'border-[#F85149]' : 'border-[#30363D]'
                  } rounded-md px-3 py-2 text-[#C9D1D9] focus:outline-none focus:border-[#2F81F7]`}
                />
                {formErrors.subject && (
                  <p className="text-[#F85149] text-xs mt-1">{formErrors.subject}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#8B949E] text-sm mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formValues.message}
                  onChange={handleChange}
                  className={`w-full bg-[#0D1117] border ${
                    formErrors.message ? 'border-[#F85149]' : 'border-[#30363D]'
                  } rounded-md px-3 py-2 text-[#C9D1D9] focus:outline-none focus:border-[#2F81F7] resize-none`}
                ></textarea>
                {formErrors.message && (
                  <p className="text-[#F85149] text-xs mt-1">{formErrors.message}</p>
                )}
              </div>
              
              <div className="flex items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${
                    isSubmitting 
                      ? 'bg-[#30363D] cursor-not-allowed' 
                      : 'bg-[#238636] hover:bg-[#2ea043]'
                  } text-white px-6 py-2 rounded-md transition-colors duration-200 flex items-center justify-center min-w-[120px]`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="ml-4 text-[#238636]">Mensagem enviada com sucesso!</p>
                )}
                
                {submitStatus === 'error' && (
                  <p className="ml-4 text-[#F85149]">Falha ao enviar mensagem. Tente novamente.</p>
                )}
              </div>
            </form>
          </Terminal>
          
          <div className="text-center text-[#8B949E]">
            <p>Você também pode me contatar diretamente em:</p>
            <a href="mailto:kelton.lima@ragt.com.br" className="text-[#2F81F7] hover:underline">
              kelton.lima@ragt.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;