import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';

const Result = ({ billValue }) => {
    const solarData = [
        {
            minBillAmount: 200,
            kwp: 3510,
            solarKWHPerMonth: 368.55,
            solarGenRm: 263.49,
            systemCost: "RM18,990.00",
            paybackYear: 6.01,
            panelNo: 6,
            areaM2: 12,
            inverterType: "SG5.0RT",
        },
        {
            minBillAmount: 338,
            kwp: 5850,
            solarKWHPerMonth: 614.25,
            solarGenRm: 439.15,
            systemCost: "RM22,990.00",
            paybackYear: 4.36,
            panelNo: 10,
            areaM2: 20,
            inverterType: "SG5.0RT",
        },
        {
            minBillAmount: 480,
            kwp: 8190,
            solarKWHPerMonth: 859.95,
            solarGenRm: 614.82,
            systemCost: "RM28,990.00",
            paybackYear: 3.93,
            panelNo: 14,
            areaM2: 28,
            inverterType: "SG6.0RT",
        },
        {
            minBillAmount: 580,
            kwp: 10530,
            solarKWHPerMonth: 1105.65,
            solarGenRm: 790.48,
            systemCost: "RM34,990.00",
            paybackYear: 3.69,
            panelNo: 18,
            areaM2: 36,
            inverterType: "SG8.0RT",
        },
        {
            minBillAmount: 750,
            kwp: 13455,
            solarKWHPerMonth: 1412.78,
            solarGenRm: 1196.06,
            systemCost: "RM42,990.00",
            paybackYear: 2.99,
            panelNo: 23,
            areaM2: 46,
            inverterType: "SG10RT",
        },
        {
            minBillAmount: 1000,
            kwp: 15795,
            solarKWHPerMonth: 1658.48,
            solarGenRm: 1344.55,
            systemCost: "RM47,990.00",
            paybackYear: 2.98,
            panelNo: 27,
            areaM2: 54,
            inverterType: "SG12RT",
        },
    ];

    let selectedSystem;

    if (billValue > 1000) {
        selectedSystem = solarData.find((data) => data.minBillAmount === 1000);
    } else {
        selectedSystem = solarData.find((data) => billValue <= data.minBillAmount);
    }

    if (!selectedSystem) {
        return <div>No solar system found for the given bill amount.</div>;
    }

    const solarKWHPerMonth = (selectedSystem.kwp / 1000 * 105).toFixed(2);

    return (
        <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
            <Typography variant="h4" gutterBottom>
                Recommended Solar System Details
            </Typography>
            <Box display="flex" justifyContent="space-between">
                <Box width="48%"
                    border="2px solid black"
                    padding="16px"

                >
                    <Typography variant="h5" gutterBottom>
                        Solar System Description
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                <strong>System Size (Wp):</strong> {selectedSystem.kwp}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Solar KWH/Month:</strong> {solarKWHPerMonth}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Solar Gen RM/Month:</strong> {selectedSystem.solarGenRm}
                            </Typography>
                            <Typography variant="body1">
                                <strong>System Cost (Rm):</strong> {selectedSystem.systemCost}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                <strong>Payback Year:</strong> {selectedSystem.paybackYear}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Panel No:</strong> {selectedSystem.panelNo}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Area m<sup>2</sup>:</strong> {selectedSystem.areaM2}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Inverter Type:</strong> {selectedSystem.inverterType}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box width="48%"
                    border="2px solid black"
                    padding="16px">
                    <Typography variant="h5" gutterBottom>
                        Environmental Savings
                    </Typography>
                    <Typography variant="body1">
                        <strong>Carbon Dioxide (CO<sup>2</sup>) Avoidance:</strong>{' '}
                        {(selectedSystem.kwp / 1000 * 20).toFixed(2)} tonne CO<sup>2</sup>
                    </Typography>
                    <Typography variant="body1">
                        <strong>Distance travel avoidance by car (petrol):</strong>{' '}
                        {(selectedSystem.kwp / 1000 * 0.1).toFixed(2)} million km
                    </Typography>
                    <Typography variant="body1">
                        <strong>No. of tree seedlings grown for 10 years to absorb the CO<sup>2</sup>:</strong>{' '}
                        {(selectedSystem.kwp / 1000 * 43942).toFixed(2)} trees
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default Result;