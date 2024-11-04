import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-3 flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-2xl">MEUS TREINOS DE ACADEMIA</h1>

      <div className="mb-8">
      <h2 className="font-semibold text-red-500">SEGUNDA: COSTAS e BÍCEPS</h2>
      <div>
        <h3 className="text-blue-500 font-bold text-lg">COSTAS</h3>
        <Image
          src="/img1.webp"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Primeiro Exercício: Puxada com barra alta frente - 4 x 10 a 12 repetições</p>
        <p className="font-medium">OBS: sempre manter fechado as escapulas nas puxadas</p>
      </div>
      <div>
        <Image
          src="/img2.jpg"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Segundo Exercício: remada baixa com triângulo - 4 x 10 a 12 repetições</p>
        <p className="font-medium">OBS: sempre manter fechado as escapulas nas puxadas</p>
      </div>
      <div>
        <Image
          src="/img3.webp"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Terceiro Exercício: remada curvada pronada com barra - 4 x 8 a 10 repetições</p>
        <p className="font-medium">OBS: sempre manter coluna ereta a todo momento</p>
      </div>
      <div>
        <Image
          src="/img4.webp"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Quarto Exercício: serrote unilateral - 3 x 8 a 10 repetições cada braço</p>
        <p className="font-medium">OBS: movimento é trazer o haltere em direção ao quadril e não levantar o cotovelo para cima.</p>
      </div>
      <div>
        <Image
          src="/img5.png"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Quinto Exercício: pulldown com corda - 4 x 8 a 10 repetições</p>
        <p className="font-medium">OBS: direcione a força para suas costas fechando a escapula e não fazendo força com o cotovelo.</p>
      </div>
      <div>
        <h3 className="text-blue-500 font-bold text-lg">BÍCEPS</h3>
        <Image
          src="/img6.jpg"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Primeiro Exercício: Rosca direta na barra W - 4 x 8 a 10 repetições</p>
      </div>
      <div>
        <Image
          src="/img7.webp"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Segundo Exercício: Rosca Scott - 4 x 8 a 10 repetições</p>
        <p className="font-medium">OBS: Livre ou máquina.</p>
      </div>
      <div>
      <Image
          src="/img8.webp"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Terceiro Exercício: Rosca no banco inclinado - 4 x 8 a 10 repetições</p>
        <p className="font-medium">OBS: banco 45 graus de inclinação.</p>
      </div>
      <div>
        <Image
          src="/img9.webp"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Quarto Exercício: Rosca martelo/rosca inversa - 4 x 8 a 10 repetições</p>
      </div>
      <div>
        <Image
          src="/img10.png"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Quinto Exercício: flexão de punho na polia alta - 4 x 8 a 10 repetições</p>
      </div>
      <div>
        <Image
          src="/img11.png"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Sexto Exercício: extensão de punho na polia baixa - 4 x 8 a 10 repetições</p>
      </div>
      <div>
        <Image
          src="/img12.png"
          alt="Imagem ilustrando o treino de costas"
          width={500} 
          height={300} 
        />
        <p className="font-medium">Sexto Exercício: rosca inversa na polia baixa - 4 x 8 a 10 repetições</p>
      </div>
      </div>


      <div>
        <h2 className="font-semibold text-red-500">TERÇA: PERNAS COMPLETAS (QUADRICEPS/POSTERIOR/PANTURRILHA)</h2>
        <div>
          <p className="font-medium">Primeiro Exercício: Elevação pélvica - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Segundo Exercício: Leg press 45 - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Terceiro Exercício: agachamento livre - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Quarto Exercício: Stiff - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Quinto Exercício: agachamento búlgaro - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Sexto Exercício: mesa flexora - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Sétimo Exercício: cadeira extensora - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Último Exercício: panturrilha gêmeos - 4 x 10 a 12 repetições</p>
        </div>
      
      </div>


      <div>
        <h2 className="font-semibold">QUARTA: PEITOS E TRICEPS</h2>
        <div>
          <h3 className="text-blue-500 font-bold text-lg">PEITO</h3>
          <p className="font-medium">Primeiro Exercício: supino inclinado com halteres - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Segundo Exercício: supino reto máquina - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Terceiro Exercício: crucifixo na máquina - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Quarto Exercício: paralela (pode substituir o crossover na polia) - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Quinto Exercício: supino declinado (pode substituir o crossover na polia) - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Sexto Exercício: mesa flexora - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <h3 className="text-blue-500 font-bold text-lg">TRICEPS</h3>
          <p className="font-medium">Sétimo Exercício: barra na polia - 3 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Oitavo Exercício: triceps francês unilateral (pode fazer no cabo) - 3 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Nono Exercício: triceps testa na polia - 3 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Nono Exercício: paralela na máquina - 3 x 10 a 12 repetições</p>
        </div>
      

      </div>


      <div>
        <h2 className="font-semibold">QUINTA: ABDÔMEN E PANTURRILHA</h2>
        <div>
          <h3 className="text-blue-500 font-bold text-lg">ABDÔMEN</h3>
          <p className="font-medium">Primeiro Exercício: abdominal normal - máximo de repetição dentro de 1 min</p>
        </div>
        <div>
          <p className="font-medium">Segundo Exercício: abdominal infra - máximo de repetição dentro de 1 min</p>
        </div>
        <div>
          <p className="font-medium">Terceiro Exercício: abdominal supra com anilha - máximo de repetição dentro de 1 min</p>
        </div>
        <div>
          <p className="font-medium">Quarto Exercício: 1 min de prancha</p>
        </div>
        <div>
          <h3 className="text-blue-500 font-bold text-lg">PANTURRILHA</h3>
          <p className="font-medium">Quinto Exercício: gemêos em pé - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Sexto Exercício: gemêos leg press reta - 4 x 10 a 12 repetições</p>
        </div>
      </div>

      <div>
        <h2 className="font-semibold">QUINTA: OMBROS E TRAPEZIO</h2>
        <div>
          <h3 className="text-blue-500 font-bold text-lg">OMBROS</h3>
          <p className="font-medium">Primeiro Exercício: elevação lateral com halteres - 3x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Segundo Exercício: elevação lateral na polia - 3x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Terceiro Exercício: crucifixo inverso na polia - 3x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Quarto Exercício: elevação frontal com corda - 3x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Quinto Exercício: posterior de ombro na polia - 3 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Sexto Exercício: desenvolvimento com halteres - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <h3 className="text-blue-500 font-bold text-lg">TRAPEZIO</h3>
          <p className="font-medium">Sétimo Exercício: remada alta - 4 x 10 a 12 repetições</p>
        </div>
        <div>
          <p className="font-medium">Oitavo Exercício: encolhimento com anilhas - 4 x 10 a 12 repetições</p>
        </div>
      </div>
    </div>
  );
}
