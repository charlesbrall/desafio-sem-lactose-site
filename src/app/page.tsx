"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, UtensilsCrossed, ShoppingCart, Lightbulb, ShieldCheck, Check } from 'lucide-react';
import Image from 'next/image';


export default function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  
  const painPoints = [
    { text: "Sofre com inchaço extremo, dores abdominais intensas, diarreia (ou constipação severa!), vômitos e náuseas após comer?" },
    { text: "Sua comida fica sem graça, sem a textura que você ama (aquele queijo que não gratina, o molho que não encorpa)?" },
    { text: "Sente-se isolado(a) em eventos sociais ou tem medo de comer fora por causa da lactose (e talvez glúten ou outras restrições)?" },
    { text: "A jornada para o diagnóstico foi difícil e você ainda se sente perdido(a) sobre como adaptar sua alimentação?" },
    { text: "Preocupado(a) com o custo elevado dos produtos zero lactose e a dificuldade de encontrá-los?" },
    { text: "A enzima lactase nem sempre resolve, ou você tem receio de usá-la diariamente para tudo?" },
    { text: "Tem medo de ingredientes ocultos e contaminação cruzada em alimentos industrializados ou até em medicamentos?" },
    { text: "Lida com perda de peso indesejada, fraqueza ou o impacto emocional de ter que se privar de tanta coisa?" }
  ];

  const whatYouGet = [
    { icon: Calendar, title: "Plano de Refeições Diário Completo", description: "Um cronograma detalhado para 7 dias, com café da manhã, almoço, jantar e lanches, tudo 100% zero lactose. Acabe com a dúvida do 'o que comer?'" },
    { icon: UtensilsCrossed, title: "Receitas Exclusivas e Saborosas", description: "Receitas fáceis de seguir, com ingredientes acessíveis, que provam que o zero lactose pode ser delicioso e variado. Desfrute de pratos com sabor e textura incríveis!" },
    { icon: ShoppingCart, title: "Lista de Compras Otimizada", description: "Tudo o que você precisa para a semana, organizado para economizar seu tempo e seu bolso no supermercado. Menos preocupação, mais economia." },
    { icon: Lightbulb, title: "Dicas de Substituição Inteligentes", description: "Aprenda a fazer trocas simples e eficazes para adaptar suas receitas favoritas sem perder o sabor e a textura. Recupere o prazer de cozinhar!" },
    { icon: ShieldCheck, title: "Foco em Resultados Rápidos e Bem-Estar", description: "Sinta a diferença no seu corpo em apenas 7 dias: menos inchaço, mais energia e o fim dos desconfortos que tanto te incomodam." },
  ];

  const bonuses = [
    { title: "Bônus #1: E-book \"Técnicas Culinárias Zero Lactose: O Segredo do Sabor e Textura\"", description: "Ataca a Dor: \"Medo de errar\", \"minhas receitas desandam\", \"perda de sabor e textura\". Um guia completo com o passo a passo para dominar as substituições mais desafiadoras (como aquele queijo que você ama!), garantindo sabor e consistência perfeitos. Inclui dicas e ilustrações para facilitar seu aprendizado." },
    { title: "Bônus #2: Guia \"Desvendando Rótulos e Ingredientes Ocultos\"", description: "Ataca a Dor: \"Confusão com rótulos\", \"medo de contaminação cruzada (até em remédios!)\". Torne-se um(a) expert em ler rótulos e identificar lactose disfarçada, comprando com segurança e sem ansiedade." },
    { title: "Bônus #3: Comunidade VIP de Suporte no WhatsApp/Telegram (30 dias)", description: "Ataca a Dor: \"Me sinto sozinho(a)\", \"preciso de apoio\", \"dúvidas que ninguém responde\". Conecte-se, tire dúvidas com especialistas, compartilhe experiências e receba motivação em um grupo exclusivo." },
    { title: "Bônus #4: Módulo Extra \"Zero Lactose & Sem Glúten: Primeiros Passos\"", description: "Ataca a Dor: \"Tenho múltiplas restrições\", \"é tudo muito complexo\". Guia rápido com as principais substituições e 5 receitas essenciais que são tanto zero lactose quanto sem glúten, para simplificar sua vida." },
  ];

  const testimonials = [
    { name: "Miriane S.", role: "Participante do Desafio", text: "Sofri por anos com dores horríveis, inchaço и sem saber o que tinha. Depois de descobrir a intolerância, o Desafio 7 Dias foi uma libertação! Finalmente me sinto no controle e sem o medo de passar mal." },
    { name: "Cliente Satisfeito", role: "São Paulo", text: "Eu tinha muita dor de barriga e gases. Mudei minha alimentação com o Desafio e em poucos dias já me sinto outra pessoa! Valeu cada centavo." },
    { name: "Lira P.", role: "Participante do Desafio", text: "Passei muito mal por anos e fui forçada a mudar. Com o plano de refeições e as dicas de substituição, estou muito melhor e comendo com prazer novamente!" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-20 bg-gradient-to-b from-accent/50 to-background text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground max-w-3xl mx-auto mb-8">
              DESAFIO 7 DIAS SEM LACTOSE: <span className="text-primary font-bold">Sabor, Leveza e Liberdade</span> na Sua Mesa!
            </h1>
             <Image 
              src="https://i.imgur.com/bpPL2HL.png" 
              alt="Prato de comida saudável e colorida" 
              width={600} 
              height={400}
              className="mx-auto rounded-xl shadow-lg mb-8 w-full max-w-md"
              data-ai-hint="healthy food vibrant"
            />
            <p className="text-md sm:text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
              Cansado(a) de inchaço, dores e a frustração de não poder comer o que ama? Aceite o desafio e descubra como é fácil viver sem lactose, <span className="text-primary font-semibold">comendo com prazer!</span>
            </p>
            <a href="https://pay.kirvano.com/e5f45d01-223a-4886-ae05-5ced3b68a2f3" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-auto whitespace-normal py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                Quero Aceitar o Desafio Agora!
              </Button>
            </a>
          </div>
        </section>

        {/* Pain Points Section */}
        <
