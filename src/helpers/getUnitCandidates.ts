import { NumberMonster, numberMonsters } from './numberMonsters';

type Cons = {
  car: NumberMonster;
  cdr: Cons[];
};

export const getUnitCandidates = (targetId: number): NumberMonster[][] => {
  const target = numberMonsters.find(({ id }) => id === targetId);
  if (target === undefined) {
    return [];
  }

  const uniqueNumbers: typeof numberMonsters = numberMonsters.reduce(
    (previousValue, currentValue) => {
      if (previousValue.some(({ number, rank }) => number === currentValue.number && rank === currentValue.rank)) {
        return previousValue;
      }
      return [...previousValue, currentValue];
    },
    [],
  );

  const firstCars = uniqueNumbers.filter(({ number }) => number <= target.number);
  if (firstCars.length < 4) {
    return [];
  }

  const results: Cons[] = firstCars
    .map(firstCar => {
      const secondCars = uniqueNumbers.filter(
        ({ number, rank }) =>
          (
            number < firstCar.number ||
            number === firstCar.number && rank < firstCar.rank
          )
          && number + firstCar.number <= target.number
          && rank !== firstCar.rank,
      );

      return {
        car: firstCar,
        cdr: secondCars
          .map(secondCar => {
            const thirdCars = uniqueNumbers.filter(
              ({ number, rank }) =>
                (
                  number < secondCar.number ||
                  number === secondCar.number && rank < secondCar.rank
                )
                && number + firstCar.number + secondCar.number <= target.number
                && rank !== firstCar.rank
                && rank !== secondCar.rank,
            );

            return {
              car: secondCar,
              cdr: thirdCars
                .map(thirdCar => {
                  const forthCars = uniqueNumbers.filter(
                    ({ number, rank }) =>
                      (
                        number < thirdCar.number ||
                        number === thirdCar.number && rank < thirdCar.rank
                      )
                      && number + firstCar.number + secondCar.number + thirdCar.number === target.number
                      && rank !== firstCar.rank
                      && rank !== secondCar.rank
                      && rank !== thirdCar.rank,
                  );

                  return {
                    car: thirdCar,
                    cdr: forthCars.map(forthCar => ({
                      car: forthCar,
                      cdr: [],
                    })),
                  };
                })
                .filter(({ cdr }) => cdr.length > 0),
            };
          })
          .filter(({ cdr }) => cdr.length > 0),
      };
    })
    .filter(({ cdr }) => cdr.length > 0);

  return results.flatMap(({ car, cdr }) =>
    cdr.flatMap(({ car: carInCdr, cdr: cdrInCdr }) =>
      cdrInCdr.flatMap(({ car: carInCdrInCdr, cdr: cdrInCdrInCdr }) =>
        cdrInCdrInCdr.map(({ car: carInCdrInCdrInCdr }) =>
          [
            carInCdrInCdrInCdr,
            carInCdrInCdr,
            carInCdr,
            car,
          ],
        ),
      ),
    ),
  );
};
