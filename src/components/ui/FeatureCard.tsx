export function FeatureCard({ icon, title, description }: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 w-64 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-200">
            <div className="text-blue-400 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}
