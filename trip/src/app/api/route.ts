import { NextRequest, NextResponse } from 'next/server';
 
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Aqui você implementaria a lógica de processamento da mensagem
    // Exemplo simples:
    const userMessage = data.message || '';
    let response = 'Olá! Como posso ajudar com sua viagem hoje?';
    
    // Lógica simplificada de resposta baseada em palavras-chave
    if (userMessage.toLowerCase().includes('bilhete')) {
      response = 'Para comprar bilhetes, você pode acessar o site oficial do TOP ou utilizar os terminais de autoatendimento nas estações.';
    } else if (userMessage.toLowerCase().includes('horário')) {
      response = 'Os trens operam das 4h às 00h, com intervalos que variam de acordo com o horário e a linha.';
    } else if (userMessage.toLowerCase().includes('problema') || userMessage.toLowerCase().includes('ajuda')) {
      response = 'Estou aqui para ajudar! Por favor, descreva seu problema com mais detalhes para que eu possa oferecer a melhor assistência.';
    }
    
    return NextResponse.json({ 
      message: response,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Erro ao processar mensagem:', error);
    return NextResponse.json(
      { error: 'Erro ao processar sua mensagem' },
      { status: 500 }
    );
  }
}