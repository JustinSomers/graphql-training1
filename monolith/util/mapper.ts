export default class Mapper<T, U> {
  map: (entity: T) => U;
}
