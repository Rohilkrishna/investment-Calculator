import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ input }) {
    const resultData = calculateInvestmentResults(input);
    console.log(resultData);
    const initialInvesntment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    return (<table id="result">
        <thead>
            <tr>
                <th>Year </th>
                <th>Investment Value </th>
                <th>Interest (Year) </th>
                <th>Total Interest </th>
                <th>Invested Capital </th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(yearData => {
                const yearIterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvesntment;
                const totalAmountInvested = yearData.valueEndOfYear - yearIterest;

                return < tr key={yearData.year} >
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(yearIterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table >);

}