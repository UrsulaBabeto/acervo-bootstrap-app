import { useEffect, useState } from "react";

import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";


function FAQPage() {
  const [details, setDetails] = useState (false)
  

  return (
    <>
      <Header />
      <Banner />
      <Search />
      <details>
        <summary>Como funciona a Política de Vendas?</summary>
        <p>
          obrigatoriamente iguais aos apresentados na rede de lojas físicas da
          Acervo, e somente são válidos para as compras efetuadas no ato de sua
          exibição. Apenas aos pedidos efetivamente formulados e aceitos não se
          aplicarão eventuais alterações posteriores de preço. Para os pedidos
          parcelados no cartão de crédito, compostos por mais de um produto,
          poderá ocorrer uma redução do número de parcelas caso o valor mínimo
          de cada p
        </p>
      </details>

      {/*    <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Como funciona a Política de Vendas?</a>
      <div className="collapse" id="collapseExample"><div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div></div>
      <ul className="dropdown">
        <li className="">
          <a
            className="dropdown-toggle"
            href="#txt1"
            id=""
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Como funciona a Política de Vendas?
          </a>
          <ul class="dropdown-menu">
    <li class="dropdown-item"><a  href="#">  Os preços apresentados no site //www.Acervo.com.br não são
            obrigatoriamente iguais aos apresentados na rede de lojas físicas da
            Acervo, e somente são válidos para as compras efetuadas no ato de
            sua exibição. Apenas aos pedidos efetivamente formulados e aceitos
            não se aplicarão eventuais alterações posteriores de preço. Para os
            pedidos parcelados no cartão de crédito, compostos por mais de um
            produto, poderá ocorrer uma redução do número de parcelas caso o
            valor mínimo de cada parcela não atinja o limite estabelecido pelas
            operadoras de cartão de crédito.</a></li></ul>
        {/*   <p id="txt1" className="dropdown-item"> 
            {" "}
            Os preços apresentados no site //www.Acervo.com.br não são
            obrigatoriamente iguais aos apresentados na rede de lojas físicas da
            Acervo, e somente são válidos para as compras efetuadas no ato de
            sua exibição. Apenas aos pedidos efetivamente formulados e aceitos
            não se aplicarão eventuais alterações posteriores de preço. Para os
            pedidos parcelados no cartão de crédito, compostos por mais de um
            produto, poderá ocorrer uma redução do número de parcelas caso o
            valor mínimo de cada parcela não atinja o limite estabelecido pelas
            operadoras de cartão de crédito.
          </p> 
        </li>
        <li className="nav-item dropdown">
          <a
            className="dropdown-item"
            href="#"
            id=""
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Qual é a Política de Privacidade e Segurança da Acervo?
          </a>
          <p>
            {" "}
            A Acervo sempre construiu sua imagem baseada na proteção e no
            respeito aos direitos de seus consumidores. Dessa forma,
            apresentamos aqui nossa Política de Privacidade e Segurança para
            que, ao realizar sua compra conosco, você tenha sempre a certeza de
            que o sigilo e a privacidade de seus dados serão respeitados dentro
            dos mais rigorosos padrões de segurança na internet. Isso significa
            que qualquer dado fornecido por você, seja no momento da compra ou
            no cadastramento para receber algum dos nossos serviços, será
            guardado em nossos arquivos. Poderemos compartilhar as informações
            recebidas com empresas que fazem parte legal do mesmo grupo de
            empresas do Grupo Acervo e Siciliano S.A. e utilizá-las de acordo
            com esta Política de Privacidade e Segurança. As empresas do Grupo
            Acervo e Siciliano S.A. poderão combinar essas informações pessoais
            para que possamos entender melhor o comportamento dos nossos
            clientes para fornecer e aperfeiçoar nossas ofertas, promoções e
            serviços. Poderemos compartilhar as informações recebidas que
            possibilitam o contato com o cliente com lojistas parceiros
            (marketplace), para auxiliar no contato e na tratativa de qualquer
            necessidade de atendimento ao cliente. Periodicamente poderão ser
            utilizadas informações pessoais para o envio de avisos importantes,
            como, por exemplo, o andamento e o histórico de seu pedido. Como a
            Acervo entende que informações são importantes, não é possível optar
            por não receber esse tipo de comunicação.
          </p>
        </li>
        <li className="nav-item dropdown">
          <a
            className="dropdown-item"
            href="#"
            id=""
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Como funciona a Política de Vendas?
          </a>
          <p>
            {" "}
            Os preços apresentados no site //www.Acervo.com.br não são
            obrigatoriamente iguais aos apresentados na rede de lojas físicas da
            Acervo, e somente são válidos para as compras efetuadas no ato de
            sua exibição. Apenas aos pedidos efetivamente formulados e aceitos
            não se aplicarão eventuais alterações posteriores de preço. Para os
            pedidos parcelados no cartão de crédito, compostos por mais de um
            produto, poderá ocorrer uma redução do número de parcelas caso o
            valor mínimo de cada parcela não atinja o limite estabelecido pelas
            operadoras de cartão de crédito.
          </p>
        </li>
        <li className="nav-item dropdown">
          <a
            className="dropdown-item"
            href="#"
            id=""
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Qual é a Política de Cookies?
          </a>
          <p>
            {" "}
            Este site usa cookies para melhorar sua experiência enquanto você
            navega pelo site. Os cookies são categorizados em “essenciais” e de
            “mídias”. Os cookies que são categorizados como “essenciais” são
            armazenados no seu navegador, pois são necessários para o
            funcionamento das principais funções do site. Não sendo possível
            inativa-los sem comprometer o próprio funcionamento do site. Também
            usamos cookies de “mídias” que podem ser compartilhados com
            terceiros que nos ajudam a analisar e entender como você usa este
            site, esses cookies nos informam quais partes do nosso site você
            visitou, nos ajudam a medir a eficácia dos anúncios e pesquisas na
            web, bem como nos fornecem informações de seu comportamento no site,
            melhorando nossas comunicações, possibilitando interações futuras
            com você e aprimorando sua experiência no site da Acervo. Esses
            cookies nos permitem guardar seu histórico de navegação para
            auxiliá-lo em seu retorno, bem como para oferecer-lhe recomendações
            e promoções personalizadas. Os dois tipos de cookies são armazenados
            em seu computador automaticamente no momento de sua interação com o
            nosso site. Detalhe sobre cookies essenciais: Os cookies
            “essenciais” são absolutamente necessários para o funcionamento
            adequado do site. Esta categoria inclui apenas cookies que garantem
            funcionalidades básicas e recursos de segurança do site. Esses
            cookies não armazenam nenhuma informação pessoal e não podem ser
            inativados.
          </p>
        </li>
        <li className="nav-item dropdown">
          <a
            className="dropdown-item"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Qual a referência legal adotada pela Acervo para redigir sua
            Política de Privacidade e Segurança?
          </a>
          <p>
            {" "}
            Nossa Política de Privacidade e Segurança é amparada no Código de
            Defesa do Consumidor, principal lei que rege os direitos dos
            consumidores no Brasil, bem como é validada por nosso Departamento
            Jurídico e auditada pela Pricewaterhouse Coopers. Em caso de alguma
            divergência sobre nossa Política de Privacidade e Segurança, ou
            reclamações sobre os serviços prestados pela Acervo, sinta-se livre
            para entrar em contato conosco ou procurar alguma das entidades
            defensoras dos direitos dos consumidores, listadas abaixo: IDEC
            (Instituto de Defesa do Consumidor): (11) 3874.2151 para associados
            e (11) 3874.2152 para não-associados. PROCON (Fundação de Proteção e
            Defesa do Consumidor): (11) 1512
          </p>
        </li>
        <li className="nav-item dropdown">
          <a
            className="dropdown-item"
            href="#"
            id=""
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Qual é a Política de Troca e Devolução para compras no site?
          </a>
          <p>
            {" "}
            1.1. CONDIÇÕES GERAIS Ao receber seu pedido confira se todos os
            produtos foram entregues em suas embalagens originais, devidamente
            lacradas. Se no momento da entrega do pedido constatar alguma
            irregularidade, como embalagem ou produto avariado, recuse o mesmo.
            Caso ocorra o recebimento entre em contato com a nossa Central de
            Atendimento ao Cliente em até 24h. Confira o Termo de Garantia e o
            Manual de Instrução que acompanha o aparelho adquirido no que diz
            respeito à forma adequada de utilização, para não perder a garantia
            legal e a garantia fornecida pelo fabricante do produto. Nos casos
            de arrependimento ou insatisfação de qualquer produto adquirido no
            site da Acervo, o cliente deverá efetivar sua solicitação de
            devolução em até 7 (sete) dias corridos, a contar da data do
            recebimento do produto. Após esta data ficaremos impedidos de acatar
            o pedido. Caso algum produto apresente defeito após 7 (sete) dias
            corridos, a contar da data do recebimento, mas dentro do prazo de
            garantia do fabricante, entre em contato com a Assistência Técnica
            do fabricante no prazo de garantia, para o devido reparo ou
            substituição. O cliente somente poderá efetuar a troca ou a
            devolução do produto mediante a apresentação da respectiva nota
            fiscal. O produto deve estar em perfeitas condições de uso e em sua
            embalagem original devidamente lacrado, com exceção dos produtos com
            defeito de fabricação, os quais deverão estar acompanhados dos
            respectivos manuais e acessórios. 1.2. COMPRE NO SITE E DEVOLVA
            PELOS CORREIOS 1.2.1. Irregularidade no recebimento Caso ocorra
            alguma irregularidade no recebimento, como embalagem e produto
            avariado, ou entrega de produto divergente do pedido, solicite a
            troca em até 24 horas após o recebimento. Para solicitar a troca,
            entre em contato com a nossa Central de Atendimento ao Cliente pelo
            chat. 1.2.2. Arrependimento ou insatisfação até 7 (sete) dias
            corridos após o recebimento Para efetuar a devolução de produtos
            adquiridos no site da Acervo, vendidos e entregues pela própria
            Acervo. Entre em contato com a nossa Central de Atendimento ao
            Cliente pelo chat. Após a chegada do produto em nossos estoques, se
            o mesmo atender as especificações de nossa política. A devolução
            do(s) valor(es) pago(s), o reembolso será feito na mesma forma de
            pagamento da compra. Em caso de pagamento em boleto bancário ou
            débito será solicitado número da conta para depósito. Para compras
            feitas por meio de cartão de crédito, o reembolso ocorrerá em até 02
            (duas) faturas subsequentes, a partir da data de solicitação de
            estorno entregue pela Acervo junto à administradora do cartão de
            crédito, sendo o estorno de responsabilidade da respectiva
            administradora. Toda solicitação de troca ou devolução, de produtos
            vendidos e entregues pela própria Acervo, devem ser efetivada em
            nosso site dentro dos prazos estabelecidos, não sendo aceitas
            solicitações fora dos prazos estipulados. Para efetuar a devolução
            de produtos adquiridos no site da Acervo, vendidos e entregues por
            um lojista parceiro, você deve entrar em contato com o Serviço de
            Atendimento ao Cliente da Acervo que fará a mediação do contato com
            o lojista parceiro. 1.2.3. Produtos com defeito O procedimento de
            troca/ devolução segue o disposto no Código de Defesa do Consumidor.
            Nos casos de defeito de produtos das áreas de Eletrônicos, Beleza e
            Saúde, Informática, Telefonia&Celulares, Cine&Foto, MP3/MP4/IPOD,
            Games, Softwares, Revistas, Brinquedos e Papelaria, o cliente poderá
            comunicar sua solicitação de troca ou devolução diretamente ao
            Serviço de Atendimento ao Cliente da Acervo, no prazo de até 7
            (sete) dias corridos, a contar da data do recebimento do produto.
            Após esse prazo, qualquer comunicação deverá ser direcionada
            diretamente ao fabricante ou à Assistência Técnica, os quais farão o
            devido atendimento. Nos casos de defeito de produtos das áreas de
            Livros, CDs, DVDs e Blu-Rays vendidos e entregues pela própria
            Acervo, o cliente deverá comunicar sua solicitação de troca ou
            devolução ao Serviço de Atendimento ao Cliente em até 90 (noventa)
            dias corridos, a contar da data do recebimento do produto. Nos casos
            de defeito de produtos das áreas de Livros, CDs, DVDs e Blu-Rays
            vendidos e entregues por lojistas parceiros, o cliente deverá
            comunicar sua solicitação de troca ou devolução ao Serviço de
            Atendimento ao Cliente em até 7 (sete) dias corridos, a contar da
            data do recebimento do produto. Após o término desse prazo, mas
            dentro do período de garantia do fabricante, entre em contato com a
            Assistência Técnica do fabricante, para o devido reparo ou
            substituição. O cliente somente poderá efetuar a troca do produto
            mediante a apresentação da respectiva nota fiscal - DANFE O produto
            com defeito deverá ser encaminhado em sua embalagem original,
            acompanhado dos manuais de instruções, acessórios e,
            obrigatoriamente, acompanhado da Nota Fiscal. Caso não possua esse
            documento, não será possível o aceite da solicitação de trocas.
            Todos os produtos devolvidos com defeito passam por uma avaliação
            técnica. Nos casos em que for detectada má utilização do aparelho ou
            item, ou não for constatado o defeito mencionado, com devidos laudos
            técnico, ou em caso de reclamações efetuadas fora do prazo
            estabelecido, o produto será devolvido ao cliente sem prévio aviso e
            sem eventual conserto. Caso o produto com defeito constatado através
            do laudo técnico não seja reparado no prazo de 30 (trinta) dias
            corridos, ou após 3 (três) intervenções técnicas, comprovadas por
            laudo, pelo mesmo defeito o cliente terá a restituição dos valores
            pagos ; Para efetuar a troca ou devolução de produtos adquiridos no
            site da Acervo, vendidos e entregues por um lojista parceiro, você
            deve entrar em contato com o Serviço de Atendimento ao Cliente da
            Acervo que fará a mediação do contato com o lojista parceiro.
          </p>
        </li>
      </ul> */}

      <Footer />
    </>
  );
}

export default FAQPage;
