import Container, { Service } from "typedi";
import "reflect-metadata";

@Service()
class ExampleInjectedService {
  printMessage() {
   console.log('I am alive!');
  }
}

@Service()
class ExampleService {
    injectedService: ExampleInjectedService
  constructor(
    // because we annotated ExampleInjectedService with the @Service()
    // decorator TypeDI will automatically inject an instance of
    // ExampleInjectedService here when the ExampleService class is requested
    // from TypeDI.
    injectedService: ExampleInjectedService
  ) {
      this.injectedService = injectedService
  }
}

const serviceInstance = Container.get(ExampleService);
// we request an instance of ExampleService from TypeDI

serviceInstance.injectedService.printMessage();