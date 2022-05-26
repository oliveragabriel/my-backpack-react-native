import React from "react";
import { ContainerVazio } from "../ContainerVazio";
import { ContainerProximaViagemInicio } from "../ContainerProximaViagem";


export const ContainerViagem = ({navigation, nextTrip, flagTravel}) => {

  const handleNextTravelContainer = () => {
    //console.log(nextTrip, "nexttrip");
  
    if (flagTravel) {
      return (
        <ContainerProximaViagemInicio 
          title="Próxima Viagem"
          name="a definir"
          departure_date={nextTrip.departure_date}
          country={nextTrip.title}
          day={nextTrip.days}
          activity={nextTrip.activitys}
          onPress={() => navigation.navigate('Viagem Detalhe')}
        />
      )
    }
    return (
      <ContainerVazio
        title="Próxima Viagem"
        onPress={() => navigation.navigate('Editar Viagem')}>
      </ContainerVazio>
    )
  };

  return (
    <>
    {handleNextTravelContainer()}
    </>
  )

}

