function Feature({ icon: Icon, label }) {
  return (
    <div className="flex flex-col gap-2">
      <Icon className="h-5 w-5 text-ICON-COLOR" strokeWidth={2.5} />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
}

export default Feature;