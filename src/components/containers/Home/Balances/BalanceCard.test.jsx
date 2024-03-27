import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BalanceCard from "./BalanceCard";

describe('BalanceCard component', () => { 
    it('renders the card for balance user', () => {

        const currency = 'USD'
        const flag = '/Flags-us.svg'
        const balance = 100

        render(<BalanceCard currency={currency} flag={flag} balance={balance} />)

        expect(screen.queryByTestId('balanceCard')).toBeInTheDocument()
        expect(screen.getByText(`Saldo ${currency}`)).toBeInTheDocument()
        expect(screen.getByText(`$${balance}`)).toBeInTheDocument()
    })
 })