

export default function Table(data) {
    console.log(Object.values(data)[0])

    return(
        <>
            <table className="stratTable">
                <thead>
                    <tr>
                        <td>Strategy</td>
                        <td>TVL</td>
                        <td>Volatility</td>
                        <td>Collateral</td>
                        <td>PNL</td>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(data)[0].map((row, index) => {
                        let pnlStyle;
                        if (row[4] > 0) {
                            pnlStyle = {
                                color: 'green'
                            }

                        } else {
                            pnlStyle = {
                                color: 'red'
                            }

                        }
                        let volStyle;
                        if (row[2] == 'Low') {

                            volStyle = {
                                background: '#7879F1'
                            }

                        } else if (row[2] == 'Medium'){

                            volStyle = {
                                background: '#9b51e0'
                            }

                        } else {

                            volStyle = {
                                background: '#6148c2'
                            }

                        }
                        return (
                            <>
                                <tr key={index}>
                                    <td>{row[0]}</td>
                                    <td>{'$' + row[1]}</td>
                                    <td>
                                        {/* volatility div */}
                                        <div className="outerVol">
                                            <div className="innerVol" style={volStyle}>
                                                {row[2]}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{row[3]}</td>
                                    <td style = {pnlStyle}>{'$' + row[4]}</td>
                                </tr>
                            </>
                        )
                    }
                    )}
                </tbody>
            </table>
        </>
    )
}