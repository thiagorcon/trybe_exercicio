let pecaXadrez= "cavalo";

switch (pecaXadrez.toLowerCase()) {
  case 'rei': console.log(" anda apenas uma casa");    
    break;
    case 'rainha': console.log(" anda duas casas na horizontal");    
    break;
    case 'cavalo': console.log(" anda em movimento L nas casas");    
    break;
  
  default: console.log(" peça inválida");    
  break;
};