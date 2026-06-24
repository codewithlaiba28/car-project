import { models } from '@/data/models';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Zap, Gauge, Timer } from 'lucide-react';
import { notFound } from 'next/navigation';
import CarActionButtons from '@/components/CarActionButtons';

export default async function ModelPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const modelId = parseInt(resolvedParams.id);
  const model = models.find((m) => m.id === modelId);

  if (!model) {
    notFound();
  }

  const otherModels = models.filter((m) => m.id !== modelId);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 container mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/#models" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold tracking-wider text-sm uppercase">Back to Models</span>
        </Link>
        <div className="text-2xl font-bold tracking-tighter">EM<span className="text-primary">POWER</span></div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
        
        {/* Left: Content */}
        <div className="flex flex-col justify-center space-y-10">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 font-heading">{model.name}</h1>
            <p className="text-primary text-2xl font-semibold tracking-wide">{model.price}</p>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl border-l-4 border-primary pl-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {model.description}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col space-y-2 group">
              <Timer className="text-primary group-hover:scale-110 transition-transform" size={28} />
              <span className="text-3xl font-bold">{model.specs.zeroToHundred}</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">0-100 km/h</span>
            </div>
            <div className="flex flex-col space-y-2 group">
              <Zap className="text-primary group-hover:scale-110 transition-transform" size={28} />
              <span className="text-3xl font-bold">{model.specs.hp}</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Horsepower</span>
            </div>
            <div className="flex flex-col space-y-2 group">
              <Gauge className="text-primary group-hover:scale-110 transition-transform" size={28} />
              <span className="text-3xl font-bold">{model.specs.topSpeed.split(' ')[0]}</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Top Speed (km/h)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <CarActionButtons modelName={model.name} price={model.price} />
        </div>

        {/* Right: Image */}
        <div className="relative h-[320px] md:h-[420px] lg:h-[480px] w-full flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Red glow behind car */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-primary/30 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

          <div className="relative w-full h-full rounded-3xl overflow-hidden z-10 border border-white/10">
            <Image 
              src={model.image} 
              alt={model.name} 
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
          </div>

          {/* Floor reflection */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        
      </main>

      {/* Other Models Section */}
      <section className="relative z-10 container mx-auto px-6 py-16 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="text-3xl font-bold font-heading mb-10 tracking-tighter">Explore Other Models</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {otherModels.map((otherModel) => (
            <Link 
              href={`/models/${otherModel.id}`} 
              key={otherModel.id}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden">
                <Image 
                  src={otherModel.image} 
                  alt={otherModel.name} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold font-heading">{otherModel.name}</h3>
              <p className="text-primary font-semibold mt-1">{otherModel.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
