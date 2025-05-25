"use client"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sun, Moon, ArrowLeft, Sparkles, Check, Star, Clock, Calendar } from "lucide-react"

export default function Store() {
  const { theme, setTheme } = useTheme()

  const features = [
    "Acesso completo a todos os recursos do Flux",
    "Atualizações e melhorias regulares",
    "Acesso à integração com Steam Tools",
    "Suporte da comunidade",
    "Suporte para múltiplos dispositivos",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/90 flex flex-col">
      {/* Header with navigation and theme toggle */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-500">
            Flux
          </span>
        </motion.div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 mr-4">
            <Link href="/" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
              Início
            </Link>
            <Link href="/store" className="font-medium text-foreground border-b-2 border-violet-500">
              Loja
            </Link>
          </nav>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Back to home link for mobile */}
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="md:hidden mb-8">
            <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Voltar para Início
            </Link>
          </motion.div>

          {/* Store header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Escolha Seu{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-500">
                Plano
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todos os planos incluem os mesmos ótimos recursos. Escolha a assinatura que funciona melhor para você.
            </p>
          </motion.div>

          {/* Pricing Plans */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Free Trial Plan */}
            <motion.div
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-3xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-indigo-600/20 to-purple-600/20 backdrop-blur-sm z-0"></div>
              <div className="absolute inset-0 bg-card/80 backdrop-blur-sm z-10"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 z-20"></div>
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-medium py-1.5 text-center z-20">
                EXPERIMENTE GRÁTIS
              </div>
              <div className="p-8 pt-12 relative z-20 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">Teste Grátis</h3>
                    <p className="text-muted-foreground text-sm mt-1">Acesso completo por 7 dias</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-violet-500/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-violet-500" />
                  </div>
                </div>

                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-bold">R$0,00</span>
                  <div className="flex flex-col items-start mb-1.5">
                    <span className="text-muted-foreground text-sm">/7 dias</span>
                    <span className="text-xs text-violet-500 font-medium">Sem compromisso</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-violet-500/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-violet-500" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full h-14 text-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 border-0 shadow-lg shadow-violet-500/20 rounded-xl">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Começar Teste
                </Button>
              </div>
            </motion.div>

            {/* Monthly Plan */}
            <motion.div
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-3xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-green-600/20 backdrop-blur-sm z-0"></div>
              <div className="absolute inset-0 bg-card/80 backdrop-blur-sm z-10"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 z-20"></div>
              <div className="p-8 relative z-20 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">Mensal</h3>
                    <p className="text-muted-foreground text-sm mt-1">Perfeito para experimentar o Flux</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-emerald-500" />
                  </div>
                </div>

                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-bold">R$4,99</span>
                  <div className="flex flex-col items-start mb-1.5">
                    <span className="text-muted-foreground text-sm">/mês</span>
                    <span className="text-xs text-emerald-500 font-medium">Cancele quando quiser</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-emerald-500" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full h-14 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 border-0 shadow-lg shadow-emerald-500/20 rounded-xl">
                  Começar Agora
                </Button>
              </div>
            </motion.div>

            {/* Quarterly Plan */}
            <motion.div
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-3xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-yellow-600/20 backdrop-blur-sm z-0"></div>
              <div className="absolute inset-0 bg-card/80 backdrop-blur-sm z-10"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 z-20"></div>
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-medium py-1.5 text-center z-20">
                MAIS POPULAR
              </div>
              <div className="p-8 pt-12 relative z-20 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">Trimestral</h3>
                    <p className="text-muted-foreground text-sm mt-1">Economize 7% em relação ao mensal</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-amber-500" />
                  </div>
                </div>

                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-bold">R$13,99</span>
                  <div className="flex flex-col items-start mb-1.5">
                    <span className="text-muted-foreground text-sm">/3 meses</span>
                    <span className="text-xs text-amber-500 font-medium">Melhor valor</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-amber-500/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full h-14 text-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 border-0 shadow-lg shadow-amber-500/20 rounded-xl">
                  <Star className="h-5 w-5 mr-2" />
                  Começar Agora
                </Button>
              </div>
            </motion.div>

            {/* Annual Plan */}
            <motion.div
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-3xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-sky-600/20 to-cyan-600/20 backdrop-blur-sm z-0"></div>
              <div className="absolute inset-0 bg-card/80 backdrop-blur-sm z-10"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-sky-500 z-20"></div>
              <div className="p-8 relative z-20 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">Anual</h3>
                    <p className="text-muted-foreground text-sm mt-1">Economize 25% em relação ao mensal</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-blue-500" />
                  </div>
                </div>

                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-bold">R$149,99</span>
                  <div className="flex flex-col items-start mb-1.5">
                    <span className="text-muted-foreground text-sm">/ano</span>
                    <span className="text-xs text-blue-500 font-medium">Maior economia</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-blue-500" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 border-0 shadow-lg shadow-blue-500/20 rounded-xl">
                  Começar Agora
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                {
                  question: "O que está incluído em todos os planos?",
                  answer:
                    "Todos os planos incluem os mesmos recursos e funcionalidades. A única diferença é a duração da assinatura e o preço.",
                },
                {
                  question: "Posso cancelar minha assinatura?",
                  answer:
                    "Sim, você pode cancelar sua assinatura a qualquer momento. Você continuará tendo acesso até o final do seu período de cobrança.",
                },
                {
                  question: "Existe um período de teste gratuito?",
                  answer:
                    "Sim, oferecemos um teste gratuito de 7 dias para todos os novos usuários. Você pode experimentar todos os recursos antes de se comprometer com uma assinatura.",
                },
                {
                  question: "Como obtenho suporte?",
                  answer:
                    "Todos os assinantes têm acesso aos nossos fóruns de suporte da comunidade e documentação. Você também pode entrar em contato conosco diretamente através do aplicativo.",
                },
              ].map((faq, index) => (
                <div key={index} className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-6 px-4 border-t border-border/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Flux. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
