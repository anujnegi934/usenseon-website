import { useEffect, useRef, useState } from "react";

const rows = [
    { feature: "Real-time Monitoring", ivx: true, others: "Limited" },
    { feature: "Remote Alerts", ivx: true, others: false },
    { feature: "Analytics Dashboard", ivx: true, others: "Basic" },
    { feature: "Battery Life (8h+)", ivx: true, others: false },
    { feature: "Data Privacy (HIPAA-ready)", ivx: true, others: "Partial" },
    { feature: "Cost Efficiency", ivx: true, others: false },
];

function Specifications() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24"
        >
            <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <p className="text-xs font-medium uppercase tracking-widest text-blue-500 mb-4">
                    Comparison
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-12">
                    Why Choose Usenseon IVX?
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                    <table className="w-full min-w-[480px]">

                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="text-left p-5 text-sm font-semibold w-2/5">Feature</th>
                                <th className="text-left p-5 text-sm font-semibold">
                                    <span className="text-blue-400">Usenseon</span> IVX
                                </th>
                                <th className="text-left p-5 text-sm font-semibold text-gray-400">Others</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows.map((row, i) => (
                                <tr
                                    key={i}
                                    className="border-t border-gray-100 hover:bg-gray-50/80 transition-colors"
                                >
                                    <td className="p-5 text-sm font-medium text-gray-700">
                                        {row.feature}
                                    </td>
                                    <td className="p-5">
                                        {row.ivx === true ? (
                                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-50 text-green-600 text-sm font-bold">
                                                ✓
                                            </span>
                                        ) : (
                                            <span className="text-sm text-gray-500">{row.ivx}</span>
                                        )}
                                    </td>
                                    <td className="p-5">
                                        {row.others === false ? (
                                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50 text-red-400 text-sm">
                                                ✕
                                            </span>
                                        ) : (
                                            <span className="text-sm text-gray-400">{row.others}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </section>
    );
}

export default Specifications;