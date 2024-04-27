## Cambios al trabajar con archivos .tsx

Se puede considerar los cambios de los siguientes

1. **Tipado Estático**: Se agregarían tipos estáticos a los props, estado y otros valores en los componentes

2. **Interfaces con tsx**: Se utilizarían interfaces en el tsx de forma de los props lo que ayuda a mantener un código más claro

## Como por ejemplo 

```tsx
interface Product {
    title: string;
    description: string;
    price: number;
}
