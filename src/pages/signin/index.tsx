import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@radix-ui/react-separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import CarouselSignin from "@/components/carousel-signin";
import { Link } from "react-router-dom";
import { useLogin } from "./hooks/useLoguin";

type FormData = {
  email: string;
  senha: string;
};

export default function Signin() {
  const { register, handleSubmit } = useForm<FormData>();
  const { login } = useLogin();

  const onSubmit = (data: FormData) => {
    login(data);
  };

  return (
    <>
      <main className=" h-screen flex w-full">
        <CarouselSignin />

        <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tighter">
                  Entre com sua conta
                </CardTitle>
                <CardDescription>
                  Utilize seu email e senha ou GitHub para entrar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    placeholder="Digite seu e-mail"
                    type="email"
                    {...register("email", { required: "E-mail é obrigatório" })}
                  />
                </div>
                <div className="mt-4">
                  <Label htmlFor="senha">Senha</Label>
                  <Input
                    id="senha"
                    placeholder="Digite sua  senha"
                    type="password"
                    {...register("senha", { required: "Senha é obrigatória" })}
                  />
                </div>
                <Button className="mt-6 w-full">Entrar</Button>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <Separator />
                  <span className="text-xs text-muted-foreground">OU</span>
                  <Separator />
                </div>
                <Button variant="outline" className="mt-6 w-full">
                  <GitHubLogoIcon className="mr-2" /> Entrar com GitHub
                </Button>
              </CardContent>
              <CardFooter>
                <p className="text-muted-foreground text-center text-sm">
                  Ao entrar no Fintrack você concorda com nossos termos de Uso e
                  Política de Privacidade.
                </p>
              </CardFooter>
              <CardFooter className="flex items-center justify-center">
                <p className="text-muted-foreground text-center text-sm">
                  Não possui uma conta?
                </p>
                <Link to="/" className="flex justify-center">
                  Criar Conta
                </Link>
              </CardFooter>
            </Card>
          </form>
        </section>
      </main>
    </>
  );
}
