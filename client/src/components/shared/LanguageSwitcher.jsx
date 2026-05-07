const LanguageSwitcher = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="px-3 py-1 rounded-lg bg-orange-500 text-white text-sm font-semibold">
        EN
      </button>

      <button className="px-3 py-1 rounded-lg border border-orange-200 text-sm font-semibold">
        বাংলা
      </button>
    </div>
  );
};

export default LanguageSwitcher;