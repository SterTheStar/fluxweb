"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Sun, Moon, Download, ExternalLink, ChevronRight, ShoppingCart } from "lucide-react"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [showTerms, setShowTerms] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleFluxDownload = () => {
    window.open("https://discord.gg/xuY8R92aMc", "_blank")
  }

  const handleSteamToolsClick = () => {
    setShowTerms(true)
  }

  const handleAcceptTerms = () => {
    if (acceptedTerms) {
      window.open("https://www.steamtools.net/", "_blank")
      setShowTerms(false)
      setAcceptedTerms(false)
    }
  }

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
            <Link href="/" className="font-medium text-foreground border-b-2 border-violet-500">
              Início
            </Link>
            <Link href="/store" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
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
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full text-center space-y-16">
          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Bem-vindo ao{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-500">
                  Flux
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experimente a próxima geração de ferramentas para jogos com nossa plataforma moderna e poderosa.
              </p>
            </div>
          </motion.div>

          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={handleFluxDownload}
                className="w-full h-16 text-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 border-0 shadow-lg shadow-violet-500/20 group"
              >
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  Baixar Flux
                  <ChevronRight className="h-5 w-5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={handleSteamToolsClick}
                className="w-full h-16 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 border-0 shadow-lg shadow-emerald-500/20 group"
              >
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  Baixar Steam Tools
                  <ChevronRight className="h-5 w-5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Features section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Poderoso",
                description: "Ferramentas avançadas projetadas para desempenho ideal em jogos",
                icon: "⚡",
              },
              {
                title: "Seguro",
                description: "Construído com segurança em mente para proteger seus dados e privacidade",
                icon: "🔒",
              },
              {
                title: "Moderno",
                description: "Interface elegante com controles intuitivos e recursos de última geração",
                icon: "✨",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-xl"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Store CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para desbloquear todo o potencial?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Confira nossos planos de assinatura e tenha acesso a todos os recursos do Flux por um preço acessível.
              </p>
              <Link href="/store">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 border-0"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Ver Planos de Preços
                </Button>
              </Link>
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

      {/* Terms Modal */}
      <AnimatePresence>
        <Dialog open={showTerms} onOpenChange={setShowTerms}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Termos de Uso do Steam Tools</DialogTitle>
              <DialogDescription>
                Por favor, leia e aceite os seguintes termos antes de baixar o Steam Tools.
              </DialogDescription>
            </DialogHeader>
            <div className="max-h-[60vh] overflow-y-auto pr-6 -mr-6 space-y-4 text-sm">
              <p>Ao ser redirecionado para o Steam Tools, você reconhece e concorda com os seguintes termos:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Isenção de Responsabilidade:</strong> A equipe do Flux não é a criadora e não tem qualquer
                  responsabilidade pelo Steam Tools. A Flux está apenas redirecionando para o site oficial.
                </li>
                <li>
                  <strong>Responsabilidade do Usuário:</strong> Toda a responsabilidade é do usuário. Você tem total
                  autonomia e responsabilidade sobre suas ações ao usar este software.
                </li>
                <li>
                  <strong>Conformidade com os Termos da Steam:</strong> Você deve cumprir os Termos de Serviço da Steam
                  em todos os momentos.
                </li>
                <li>
                  <strong>Violações:</strong> Qualquer violação dos Termos de Serviço da Steam é de sua exclusiva
                  responsabilidade.
                </li>
                <li>
                  <strong>Sem Garantia:</strong> O Flux não oferece esta ferramenta, apenas redireciona para ela. O
                  Steam Tools é fornecido "como está" sem qualquer garantia por seus desenvolvedores.
                </li>
              </ol>
              <div className="pt-4 flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                />
                <Label htmlFor="terms" className="text-sm font-normal leading-tight">
                  Li e concordo com os termos acima e entendo que devo seguir os Termos de Serviço da Steam. Reconheço
                  que sou o único responsável por minhas ações.
                </Label>
              </div>
            </div>
            <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
              <Button variant="outline" onClick={() => setShowTerms(false)}>
                Cancelar
              </Button>
              <Button
                onClick={handleAcceptTerms}
                disabled={!acceptedTerms}
                className={`${!acceptedTerms ? "opacity-50" : ""} bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 border-0`}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Baixar Steam Tools
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </AnimatePresence>
    </div>
  )
}
