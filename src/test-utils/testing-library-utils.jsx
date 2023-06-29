import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };

// alternative
// const renderComponent() {
//   return (
//     render(
//       <MyContext.Provider value={{ mockState, mockFnc}}>
//         <Component>
//       </MyContext.Provider>
//     )
//   )
// }

// multiple context providers
// const AllTheProviders = ({children}: {children: React.ReactNode}) => {
//   return (
//     <ThemeProvider theme="light">
//       <TranslationProvider messages={defaultStrings}>
//         {children}
//       </TranslationProvider>
//     </ThemeProvider>
//   )
// }
// const customRender = (
//   ui: ReactElement,
//   options?: Omit<RenderOptions, 'wrapper'>,
// ) => render(ui, {wrapper: AllTheProviders, ...options})
