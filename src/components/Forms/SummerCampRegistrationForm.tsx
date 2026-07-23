'use client';

import { useState, useRef, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import Button from "@/components/UI/Button";

// Pre-fetched and sorted list of countries.
const COUNTRY_DATA = [
  { iso: 'au', code: '+61', name: 'Australia' },
  { iso: 'bd', code: '+880', name: 'Bangladesh' },
  { iso: 'br', code: '+55', name: 'Brazil' },
  { iso: 'ca', code: '+1', name: 'Canada' },
  { iso: 'cn', code: '+86', name: 'China' },
  { iso: 'eg', code: '+20', name: 'Egypt' },
  { iso: 'fr', code: '+33', name: 'France' },
  { iso: 'de', code: '+49', name: 'Germany' },
  { iso: 'in', code: '+91', name: 'India' },
  { iso: 'id', code: '+62', name: 'Indonesia' },
  { iso: 'ie', code: '+353', name: 'Ireland' },
  { iso: 'it', code: '+39', name: 'Italy' },
  { iso: 'jp', code: '+81', name: 'Japan' },
  { iso: 'ke', code: '+254', name: 'Kenya' },
  { iso: 'my', code: '+60', name: 'Malaysia' },
  { iso: 'mx', code: '+52', name: 'Mexico' },
  { iso: 'np', code: '+977', name: 'Nepal' },
  { iso: 'nz', code: '+64', name: 'New Zealand' },
  { iso: 'ng', code: '+234', name: 'Nigeria' },
  { iso: 'pk', code: '+92', name: 'Pakistan' },
  { iso: 'ph', code: '+63', name: 'Philippines' },
  { iso: 'sa', code: '+966', name: 'Saudi Arabia' },
  { iso: 'sg', code: '+65', name: 'Singapore' },
  { iso: 'za', code: '+27', name: 'South Africa' },
  { iso: 'es', code: '+34', name: 'Spain' },
  { iso: 'lk', code: '+94', name: 'Sri Lanka' },
  { iso: 'ae', code: '+971', name: 'United Arab Emirates' },
  { iso: 'gb', code: '+44', name: 'United Kingdom' },
  { iso: 'us', code: '+1', name: 'United States' },
  { iso: 'zw', code: '+263', name: 'Zimbabwe' },
];

export default function SummerCampRegistrationForm() {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    countryIso: 'ca', // Default to Canada
    countryCode: '+1',
    mobileNo: '',
    email: '',
    city: '',
    postalCode: '',
    workshop: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // State and Ref for Custom Dropdown & Search
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside and reset search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setSearchQuery(''); // Clear search query when closed
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Centralized real-time validation logic per field
  const validateField = (name: string, value: string) => {
    let error = '';
    const alphaRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^\d{10,12}$/;
    const postalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (name) {
      case 'childName':
        if (!value.trim()) error = 'Please enter child name.';
        else if (value.length > 100) error = 'Maximum 100 characters allowed.';
        else if (!alphaRegex.test(value)) error = 'Only alphabets allowed.';
        break;
      case 'childAge':
        const age = parseInt(value);
        if (!value.trim()) error = 'Please enter child age.';
        else if (isNaN(age) || age < 1 || age > 26) error = 'Age must be between 1 and 26.';
        break;
      case 'parentName':
        if (!value.trim()) error = 'Please enter parent name.';
        else if (value.length > 100) error = 'Maximum 100 characters allowed.';
        else if (!alphaRegex.test(value)) error = 'Only alphabets allowed.';
        break;
      case 'mobileNo':
        if (!value.trim()) error = 'Please enter mobile number.';
        else if (!phoneRegex.test(value)) error = 'Must be between 10 and 12 digits.';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Please enter email id.';
        } else if (value.length > 100) {
          error = 'Maximum 100 characters allowed.';
        } else if (!emailRegex.test(value)) {
          error = 'Please add email in this format: abc@abc.com';
        }
        break;
      case 'city':
        if (!value.trim()) error = 'Please enter city.';
        else if (value.length > 100) error = 'Maximum 100 characters allowed.';
        else if (!alphaRegex.test(value)) error = 'Only alphabets allowed.';
        break;
      case 'postalCode':
        if (!value.trim()) error = 'Please enter postal code.';
        else if (!postalRegex.test(value)) error = 'Invalid Canada Postal Code (e.g. L1L 1L1).';
        break;
      case 'workshop':
        if (!value) error = 'Please select a workshop.';
        break;
      default:
        break;
    }
    return error;
  };

  const validateForm = () => {
    let newErrors: Record<string, string> = {};
    
    // Check all fields before submit
    Object.keys(formData).forEach((key) => {
      // Exclude countryIso and countryCode from direct validation if not needed
      if (key !== 'countryIso' && key !== 'countryCode') {
        const err = validateField(key, formData[key as keyof typeof formData]);
        if (err) {
          newErrors[key] = err;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCaptchaError('');

    const isValid = validateForm();

    if (isValid) {
      if (!captchaToken) {
        setCaptchaError('Please solve the captcha to continue.');
        return;
      }

      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === 'childAge' || name === 'mobileNo') {
      finalValue = value.replace(/\D/g, ''); 
    }

    setFormData((prev) => ({ ...prev, [name]: finalValue }));
    
    // Real-time validation triggered immediately on change
    const errorMsg = validateField(name, finalValue);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const handleCountrySelect = (iso: string, code: string) => {
    setFormData((prev) => ({ ...prev, countryIso: iso, countryCode: code }));
    setIsDropdownOpen(false);
    setSearchQuery(''); // Reset search on select
  };

  // Filter countries based on search query (by code or country name)
  const filteredCountries = COUNTRY_DATA.filter(country => 
    country.code.includes(searchQuery) || 
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="border border-ucmas-orange rounded-xl p-6  bg-light-offwhite  shadow-lg shadow-ucmas-orange/20 w-full h-full max-w-lg mx-auto lg:ml-auto">
      <h3 className="text-xl font-bold text-center text-ucmas-blue mb-6">Registration Form</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input type="text" name="childName" placeholder="Child Name" maxLength={100} value={formData.childName} onChange={handleChange} className={`w-full border rounded-md font-base px-3 py-2 focus:outline-none ${errors.childName ? 'border-red-500' : 'border-gray-300 focus:border-ucmas-orange'}`} />
          {errors.childName && <p className="text-red-500 text-xs mt-1">{errors.childName}</p>}
        </div>

        <div>
          <input 
            type="text" 
            name="childAge" 
            placeholder="Child Age (1-26)" 
            value={formData.childAge} 
            onChange={handleChange} 
            maxLength={2} 
            className={`w-full border rounded-md font-base px-3 py-2 focus:outline-none ${errors.childAge ? 'border-red-500' : 'border-gray-300 focus:border-ucmas-orange'}`} 
          />
          {errors.childAge && <p className="text-red-500 text-xs mt-1">{errors.childAge}</p>}
        </div>

        <div>
          <input type="text" name="parentName" placeholder="Parent Name" maxLength={100} value={formData.parentName} onChange={handleChange} className={`w-full border rounded-md font-base px-3 py-2 focus:outline-none ${errors.parentName ? 'border-red-500' : 'border-gray-300 focus:border-ucmas-orange'}`} />
          {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
        </div>

        {/* Mobile & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
          <div>
            <div className={`flex border rounded-md overflow-visible focus-within:border-ucmas-orange items-stretch relative ${errors.mobileNo ? 'border-red-500' : 'border-gray-300'}`}>
              
              {/* CUSTOM DROPDOWN */}
              <div className="relative flex" ref={dropdownRef}>
                {/* Dropdown Button */}
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className=" border-r rounded-l-md border-gray-300 px-3 flex items-center justify-center gap-2 outline-none cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={`https://flagcdn.com/w20/${formData.countryIso}.png`}
                    srcSet={`https://flagcdn.com/w40/${formData.countryIso}.png 2x`}
                    width="20"
                    alt="Country flag"
                    className="rounded-sm"
                  />
                  <span className="text-sm text-gray-700 w-7.5 text-left">{formData.countryCode}</span>
                </button>

                {/* Dropdown List with Search */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-55 bg-white border border-gray-300 rounded-md shadow-lg z-50 flex flex-col overflow-hidden">
                    {/* Search Input */}
                    <div className="p-2 border-b border-gray-200 bg-gray-50">
                      <input 
                        type="text" 
                        autoFocus // Automatically focus when dropdown opens
                        placeholder="Search code or country..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-ucmas-orange"
                      />
                    </div>
                    
                    {/* Filtered Country List */}
                    <div className="max-h-48 overflow-y-auto">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <div
                            key={country.iso}
                            onClick={() => handleCountrySelect(country.iso, country.code)}
                            className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-orange-50 transition-colors"
                          >
                            <img
                              src={`https://flagcdn.com/w20/${country.iso}.png`}
                              srcSet={`https://flagcdn.com/w40/${country.iso}.png 2x`}
                              width="20"
                              alt={`${country.name} flag`}
                              className="rounded-sm shadow-sm"
                            />
                            <span className="text-sm text-gray-700 font-medium w-[40px]">{country.code}</span>
                            <span className="text-sm text-gray-500 truncate">{country.name}</span>
                          </div>
                        ))
                      ) : (
                        <div className="p-3 text-sm text-center text-gray-500">
                          No results found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <input 
                type="text" 
                name="mobileNo" 
                placeholder="Mobile No" 
                value={formData.mobileNo} 
                onChange={handleChange} 
                maxLength={12} 
                className="w-full p-3 outline-none min-w-0 rounded-r-md" 
              />
            </div>
            {errors.mobileNo && <p className="text-red-500 text-xs mt-1">{errors.mobileNo}</p>}
          </div>

          <div>
            <input type="email" name="email" placeholder="Email id" maxLength={100} value={formData.email} onChange={handleChange} className={`w-full border rounded-md font-base px-3 py-2 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-ucmas-orange'}`} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input type="text" name="city" placeholder="City" maxLength={100} value={formData.city} onChange={handleChange} className={`w-full border rounded-md font-base px-3 py-2 focus:outline-none ${errors.city ? 'border-red-500' : 'border-gray-300 focus:border-ucmas-orange'}`} />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
          <div>
            <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className={`w-full border rounded-md font-base px-3 py-2 focus:outline-none ${errors.postalCode ? 'border-red-500' : 'border-gray-300 focus:border-ucmas-orange'}`} />
            {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
          </div>
        </div>

        <div>
          <select name="workshop" value={formData.workshop} onChange={handleChange} className={`w-full border rounded-md font-base px-3 py-2 focus:outline-none text-gray-600 ${errors.workshop ? 'border-red-500' : 'border-gray-300 focus:border-ucmas-orange'}`}>
            <option value="">Select Workshops</option>
            <option value="abacus">Abacus Math</option>
            <option value="robotics">Robotics & Coding</option>
            <option value="puzzles">Math Games & Puzzles</option>
          </select>
          {errors.workshop && <p className="text-red-500 text-xs mt-1">{errors.workshop}</p>}
        </div>

        <div className="flex md:flex-row items-center justify-center flex-col-reverse lg:flex-col-reverse xl:flex-row gap-4 mt-2">
          <Button
            type="submit"
            disabled={isSubmitting || isSuccess}
            variant="form_orange_btn"
            className="w-full md:w-auto px-10 py-3 flex items-center flex-1 justify-center gap-2 text-lg font-bold"
          >
            {isSubmitting ? 'Sending...' : isSuccess ? 'Sent!' : 'Send →'}
          </Button>

          <div className="w-full md:w-auto text-center">
            <Turnstile className='zoom-75 origin-center' siteKey="1x00000000000000000000AA" onSuccess={(token) => setCaptchaToken(token)} />
          </div>
        </div>
        {captchaError && <p className="text-red-500 text-sm mt-1">{captchaError}</p>}
      </form>
    </div>
  );
}