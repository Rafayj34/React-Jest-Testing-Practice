import { render,screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';


describe('should render Hellow with the name when name is provided', () => {
    it('should render Hello Rafay when name is Rafay', () => {
        render(<Greet name="Rafay" />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/rafay/i)
    });
    
    it('should render login button when name is not provided', () => {
        render(<Greet />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i)
    });
})