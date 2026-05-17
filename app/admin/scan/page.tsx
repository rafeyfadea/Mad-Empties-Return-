"use client";

import { useState } from "react";
import { CheckCircle, Keyboard } from "lucide-react";
import { Button } from "../../components/Button";

type ScanState = "scanning" | "success";

const mockResult = {
  user: "Alex",
  points: 30,
  newBalance: 370,
};

export default function AdminScan() {
  const [state, setState] = useState<ScanState>("scanning");
  const [showManual, setShowManual] = useState(false);
  const [manualCode, setManualCode] = useState("");

  const handleSimulateScan = () => {
    setState("success");
  };

  const handleReset = () => {
    setState("scanning");
    setManualCode("");
    setShowManual(false);
  };

  if (state === "success") {
    return (
      <div className="min-h-screen bg-sage-100 flex items-center justify-center px-6">
        <div className="bg-white rounded-card shadow-card p-8 w-full max-w-sm text-center">
          <CheckCircle
            size={48}
            strokeWidth={1.5}
            className="text-sage-700 mx-auto mb-5"
          />
          <h2
            className="font-serif text-2xl text-warm-900 mb-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Return verified
          </h2>
          <p className="text-warm-700 text-base mb-1">
            {mockResult.user} earned {mockResult.points} points
          </p>
          <p className="text-warm-400 text-sm mb-8">
            New balance: {mockResult.newBalance} points
          </p>
          <Button variant="primary" fullWidth onClick={handleReset}>
            Scan next
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      {/* Viewfinder */}
      <div className="relative mb-8">
        <div
          className="w-72 h-72 border-2 border-white rounded-card"
          style={{ boxShadow: "0 0 0 9999px rgba(0,0,0,0.55)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-8 bg-mad-rose-500 opacity-60 rounded-full" />
        </div>
      </div>

      <p
        className="text-white text-sm mb-12 text-center px-8"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
      >
        Scan packaging QR code
      </p>

      {/* Demo button (would be camera in production) */}
      <Button variant="primary" onClick={handleSimulateScan}>
        Simulate successful scan
      </Button>

      {!showManual ? (
        <button
          onClick={() => setShowManual(true)}
          className="mt-6 flex items-center gap-1.5 text-white text-xs opacity-60 hover:opacity-100 transition-opacity"
        >
          <Keyboard size={14} strokeWidth={1.5} />
          Manual entry
        </button>
      ) : (
        <div className="mt-6 flex gap-2 items-center">
          <input
            type="text"
            value={manualCode}
            onChange={(e) => setManualCode(e.target.value)}
            placeholder="Enter code"
            className="bg-white/10 border border-white/30 rounded-input px-4 py-2 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/60"
          />
          <Button
            variant="secondary"
            className="border-white/30 text-white"
            onClick={handleSimulateScan}
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}
