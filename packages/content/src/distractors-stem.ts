import type { Distractors } from "@jyotir/core";

/**
 * Distractor rationales for the STEM flagship first-topics (JEE Main/Adv
 * Physics, SSC Quant, GATE Maths) — the topics a new user lands on in the
 * taste session for those exams. Merged into the main overlay in index.ts.
 * Correctness here is computational, not interpretive.
 */
export const stemDistractors: Record<string, Distractors> = {
  // ─── JEE Main · Physics · Kinematics (1D) ────────────────────────────────
  "jee-physics-kinematics-1d-q01": {
    A: "Using s = ½at², ½·2·5² = 25 m; 20 m comes from an incorrect multiplication.",
    C: "50 m forgets the ½ in s = ½at² — that doubles the true 25 m.",
    D: "10 m is a·t = 2·5, which is the final velocity, not the distance."
  },
  "jee-physics-kinematics-1d-q02": {
    A: "10 m/s uses t = 1 s; after 3 s, v = gt = 10·3 = 30 m/s.",
    C: "20 m/s uses t = 2 s; the full 3 s gives 30 m/s.",
    D: "45 m/s is actually ½gt² (a distance), not the velocity gt = 30 m/s."
  },
  "jee-physics-kinematics-1d-q03": {
    A: "Acceleration is the SLOPE of a v–t graph, not the area under it.",
    C: "Jerk is the rate of change of acceleration — unrelated to this area.",
    D: "Average speed needs dividing by time; the raw area is the displacement itself."
  },
  "jee-physics-kinematics-1d-q04": {
    B: "10 m/s² is far too large; 0 = 20² − 2a·100 gives a = 2 m/s².",
    C: "1 m/s² would need 200 m to stop; solving gives 2 m/s².",
    D: "4 m/s² would stop the car in 50 m, not the given 100 m."
  },
  "jee-physics-kinematics-1d-q05": {
    B: "an is the velocity at time n, not the distance in the n-th second.",
    C: "½an² is the total distance in n seconds, not just the n-th second.",
    D: "a(n − 1) is not the standard n-th-second distance formula."
  },
  "jee-physics-kinematics-1d-q06": {
    B: "10 m halves the result; H = u²/2g = 400/20 = 20 m.",
    C: "30 m overestimates; the correct maximum height is u²/2g = 20 m.",
    D: "40 m drops the factor of 2; H = u²/2g = 20 m, not u²/g."
  },
  "jee-physics-kinematics-1d-q07": {
    B: "Speeding up needs velocity and acceleration in the SAME direction; here they oppose.",
    C: "At rest means v = 0, but here the velocity is negative (nonzero).",
    D: "Constant speed needs zero acceleration; here the acceleration is positive."
  },
  "jee-physics-kinematics-1d-q08": {
    A: "The gap stays constant only if they fell together; the head-start ball is always faster.",
    B: "The gap cannot shrink — the leading ball keeps gaining speed.",
    C: "The separation never reverses; it grows steadily as both accelerate."
  },
  "jee-physics-kinematics-1d-q09": {
    A: "Acceleration is the slope of a v–t graph, not the area under it.",
    C: "Jerk is d(acceleration)/dt, not the area under a v–t graph.",
    D: "Force cannot be read off a v–t graph at all."
  },
  "jee-physics-kinematics-1d-q10": {
    A: "The first equation of motion is v = u + at.",
    C: "The second equation of motion is s = ut + ½at².",
    D: "The continuity equation belongs to fluid mechanics, not kinematics."
  },
  "jee-physics-kinematics-1d-q11": {
    B: "Acceleration is the slope of a v–t graph, not of a position–time graph.",
    C: "Distance is read on the axis, not obtained from the slope.",
    D: "Force cannot be obtained from a position–time slope."
  },
  "jee-physics-kinematics-1d-q12": {
    B: "g is the acceleration itself; the first-second fall is ½g·1² = g/2.",
    C: "2g is far too large; the first-second distance is g/2.",
    D: "g² has the wrong units for a distance; the answer is g/2."
  },

  // ─── JEE Advanced · Physics · Rotational Dynamics ────────────────────────
  "jee-adv-phy-rotational-dynamics-q01": {
    B: "(2/3)MR² is a hollow (thin-shell) sphere, not a solid one.",
    C: "MR² is a ring/hoop about its axis, not a solid sphere.",
    D: "½MR² is a solid disc or cylinder, not a sphere."
  },
  "jee-adv-phy-rotational-dynamics-q02": {
    A: "The ring has the largest I/MR² (= 1), so it is the slowest, not the first.",
    B: "The disc (½) beats the ring but still loses to the solid sphere (2/5).",
    D: "Rolling times differ by shape through I/MR²; they do not tie."
  },
  "jee-adv-phy-rotational-dynamics-q03": {
    A: "½ is not the split; a solid cylinder's rotational KE is 1/3 of the total.",
    C: "2/5 is a solid sphere's I coefficient, not the cylinder's energy fraction.",
    D: "2/7 is the solid sphere's rotational fraction, not the cylinder's."
  },
  "jee-adv-phy-rotational-dynamics-q04": {
    A: "Angular momentum is conserved, not increased — no external torque acts.",
    C: "No external torque acts on her; that is exactly why L is conserved.",
    D: "Her kinetic energy actually increases (she does work pulling in); L is what's conserved."
  },
  "jee-adv-phy-rotational-dynamics-q05": {
    A: "The parallel-axis theorem ADDS Md², it never subtracts it.",
    C: "There is no ½ factor; the theorem is I_cm + Md².",
    D: "This inverts the relation; I about the new axis is I_cm + Md²."
  },
  "jee-adv-phy-rotational-dynamics-q06": {
    A: "Rolling-without-slipping friction is static, not kinetic, so it dissipates no energy.",
    C: "It is not zero — static friction supplies the torque that sustains rolling.",
    D: "On level ground with no drive there's no up-plane friction; the point is it's static and does no work."
  },
  "jee-adv-phy-rotational-dynamics-q07": {
    B: "F = ma is the LINEAR law; its rotational analogue is τ = Iα.",
    C: "L = Iω is angular momentum (analogous to p = mv), not the second law.",
    D: "p = mv is linear momentum, not the rotational form of the second law."
  },
  "jee-adv-phy-rotational-dynamics-q08": {
    B: "There is no ½; the radius of gyration is defined by I = Mk².",
    C: "k has units of length, not mass×length; I = Mk² defines it.",
    D: "Dimensionally wrong — it is k SQUARED: I = Mk²."
  },
  "jee-adv-phy-rotational-dynamics-q09": {
    B: "The hollow cylinder has the larger I/MR² (≈ 1), so it is slower.",
    C: "Different I/MR² values mean different accelerations; they do not tie.",
    D: "Both cylinders roll; the solid one simply reaches the bottom first."
  },
  "jee-adv-phy-rotational-dynamics-q10": {
    B: "ML²/3 is about an axis through one END of the rod, not the centre.",
    C: "ML²/2 is not a rod result; the centre value is ML²/12.",
    D: "ML² is far too large for a thin rod about its centre."
  },
  "jee-adv-phy-rotational-dynamics-q11": {
    B: "Linear a = F/m uses mass; angular α uses the moment of inertia.",
    C: "Radius alone does not set α; the moment of inertia does.",
    D: "Angular velocity is the result of integrating α, not what you divide torque by."
  },
  "jee-adv-phy-rotational-dynamics-q12": {
    B: "The largest I/MR² gives the SMALLEST acceleration, not the largest.",
    C: "Mass cancels out — the acceleration is mass-independent.",
    D: "Radius cancels within I/MR², so it does not set the acceleration."
  },
  "jee-adv-phy-rotational-dynamics-q13": {
    B: "(2/3)MR² is a hollow spherical shell, not a solid sphere.",
    C: "MR² is a ring about its axis, not a solid sphere.",
    D: "½MR² is a disc or cylinder, not a sphere."
  },
  "jee-adv-phy-rotational-dynamics-q14": {
    B: "5/7 is the TRANSLATIONAL fraction; the rotational share is 2/7.",
    C: "½ is not correct for a sphere; its rotational fraction is 2/7.",
    D: "1/3 is the solid cylinder's rotational fraction, not the sphere's."
  },
  "jee-adv-phy-rotational-dynamics-q15": {
    B: "A hollow sphere has I/MR² = 2/3 > 2/5, so it is slower.",
    C: "A ring has I/MR² = 1 — the slowest of these shapes.",
    D: "A hollow cylinder has I/MR² = 1, tied slowest, not fastest."
  },
  "jee-adv-phy-rotational-dynamics-q16": {
    B: "The added term is Md² (separation of the axes), not MR².",
    C: "No ½ factor appears in the parallel-axis theorem.",
    D: "The full Md² is added, not half of it."
  },

  // ─── SSC CGL · Quant · Percentages & Profit-Loss ─────────────────────────
  "ssc-cgl-quant-percentages-profit-loss-q01": {
    A: "Equal +20% then −20% don't cancel; the net is −(20²/100) = −4%.",
    B: "The net is a LOSS of 4%, not a 4% gain.",
    C: "The successive-change formula gives −4%, not −2%."
  },
  "ssc-cgl-quant-percentages-profit-loss-q02": {
    A: "30% would need ₹120 profit; here it is ₹100 on ₹400 = 25%.",
    B: "20% is profit on the selling price; on the ₹400 cost it is 25%.",
    D: "40% overstates; ₹100 profit on ₹400 cost is 25%."
  },
  "ssc-cgl-quant-percentages-profit-loss-q03": {
    A: "80 is about 33%; 35% of 240 is 84.",
    C: "74 is too low; 0.35 × 240 = 84.",
    D: "96 is 40% of 240, not 35%."
  },
  "ssc-cgl-quant-percentages-profit-loss-q04": {
    A: "Selling at equal ± percentages on the same price always yields a net LOSS.",
    B: "It is a 1% LOSS, not a profit — the result is −(x²/100).",
    D: "The loss is x²/100 = 1%, not 2%."
  },
  "ssc-cgl-quant-percentages-profit-loss-q05": {
    A: "₹640 is a 20% discount; 15% off ₹800 is ₹680.",
    B: "₹700 is not 15% off; 0.85 × 800 = ₹680.",
    D: "₹720 is a 10% discount; 15% off gives ₹680."
  },
  "ssc-cgl-quant-percentages-profit-loss-q06": {
    A: "50% of 150 is 75; 60 is 40% of 150.",
    B: "25% of 150 is 37.5; 60/150 = 40%.",
    C: "45% of 150 is 67.5; the answer is 40%."
  },
  "ssc-cgl-quant-percentages-profit-loss-q07": {
    A: "₹58 doesn't fit a 10% loss; 54 / 0.9 = ₹60.",
    B: "₹62 would give a bigger loss; the cost price is 54 / 0.90 = ₹60.",
    D: "₹64 overshoots; the cost price is ₹60."
  },
  "ssc-cgl-quant-percentages-profit-loss-q08": {
    A: "180 × 1.25 = 225, not 250; the original is 200.",
    B: "210 × 1.25 = 262.5; solving 1.25x = 250 gives 200.",
    D: "225 comes from a different rate; 250 / 1.25 = 200."
  },
  "ssc-cgl-quant-percentages-profit-loss-q09": {
    A: "Cutting 25% overshoots; you only need 25/125 = 20%.",
    C: "15% won't restore the price; the required reduction is 20%.",
    D: "30% cuts too far; a 20% reduction restores it exactly."
  },
  "ssc-cgl-quant-percentages-profit-loss-q10": {
    B: "₹520 is a 4% profit; 20% of 500 gives ₹600.",
    C: "₹580 is a 16% profit; a 20% profit is ₹600.",
    D: "₹620 is a 24% profit; the answer is ₹600."
  },
  "ssc-cgl-quant-percentages-profit-loss-q11": {
    A: "80 is 32% of 250; 40% is 100.",
    C: "120 is 48% of 250; 40% of 250 = 100.",
    D: "90 is 36% of 250; the answer is 100."
  },
  "ssc-cgl-quant-percentages-profit-loss-q12": {
    B: "8% would be a ₹32 loss; ₹40 on ₹400 is 10%.",
    C: "12% overstates; the loss is ₹40/₹400 = 10%.",
    D: "5% is only ₹20; here the loss is ₹40 = 10%."
  },
  "ssc-cgl-quant-percentages-profit-loss-q13": {
    B: "16.7% is profit on the selling price; on the 500 cost it is 20%.",
    C: "25% would need 125 profit; here 100/500 = 20%.",
    D: "10% is only 50 profit; the profit is 100 = 20%."
  },
  "ssc-cgl-quant-percentages-profit-loss-q14": {
    B: "20% is the increase on the NEW price; on 200 it is 25%.",
    C: "50% would reach 300; 250 is a 25% rise.",
    D: "10% reaches 220; the rise to 250 is 25%."
  },
  "ssc-cgl-quant-percentages-profit-loss-q15": {
    B: "490 is a 2% discount; 10% off 500 is 450.",
    C: "400 is a 20% discount; 10% off gives 450.",
    D: "550 ADDS 10%; a discount subtracts, giving 450."
  },
  "ssc-cgl-quant-percentages-profit-loss-q16": {
    B: "230 is an 8% loss; a 20% loss gives 200.",
    C: "300 is a gain, not a loss; a 20% loss is 200.",
    D: "210 is a 16% loss; 20% off 250 is 200."
  },

  // ─── GATE · Engineering Maths · Linear Algebra ───────────────────────────
  "gate-engineering-mathematics-linear-algebra-q01": {
    A: "det(A) = 0 means the matrix is SINGULAR (non-invertible) — the opposite.",
    B: "The trace has no bearing on whether a matrix is invertible.",
    C: "Symmetry is not required for invertibility."
  },
  "gate-engineering-mathematics-linear-algebra-q02": {
    A: "The PRODUCT of the eigenvalues equals the determinant, not their sum.",
    C: "Rank counts nonzero eigenvalues (when diagonalisable), not their sum.",
    D: "The norm is unrelated to the sum of the eigenvalues."
  },
  "gate-engineering-mathematics-linear-algebra-q03": {
    A: "A⁻¹ has the RECIPROCAL eigenvalues, so 1/2 and 1/3, not 2 and 3.",
    B: "Inversion takes reciprocals, not negatives.",
    D: "4 and 9 are the eigenvalues of A², not of A⁻¹."
  },
  "gate-engineering-mathematics-linear-algebra-q04": {
    A: "A real triangular matrix has real diagonal eigenvalues, not always complex ones.",
    C: "The eigenvalues are the DIAGONAL entries, not the off-diagonal ones.",
    D: "They are the diagonal values, which are generally nonzero."
  },
  "gate-engineering-mathematics-linear-algebra-q05": {
    A: "Symmetry does not force a zero determinant.",
    B: "Real symmetric matrices have REAL eigenvalues, never non-real ones.",
    D: "The eigenvalues need not be equal — only real."
  },
  "gate-engineering-mathematics-linear-algebra-q06": {
    B: "rank < n gives infinitely many or no solutions, not a unique one.",
    C: "rank(A) ≠ rank(A|b) means the system is inconsistent — NO solution.",
    D: "rank 0 is the zero matrix; a unique solution needs full rank n."
  },
  "gate-engineering-mathematics-linear-algebra-q07": {
    B: "The theorem is about the characteristic polynomial, not the determinant.",
    C: "There is no 'trace equation' a matrix satisfies.",
    D: "It concerns the characteristic equation, not the inverse."
  },
  "gate-engineering-mathematics-linear-algebra-q08": {
    A: "Determinants MULTIPLY, not add: 5 · 2 = 10.",
    B: "Neither factor is singular, so det(AB) is not 0; it is 10.",
    C: "25 = 5²; det(AB) = det(A)·det(B) = 10."
  },
  "gate-engineering-mathematics-linear-algebra-q09": {
    B: "The identity is invertible, so its determinant cannot be 0.",
    C: "det(Iₙ) = 1 regardless of the size n.",
    D: "It is still 1; the size n does not change it."
  },
  "gate-engineering-mathematics-linear-algebra-q10": {
    B: "det = 1 is invertible; singular means the determinant is 0.",
    C: "Any nonzero determinant, including a positive one, is invertible.",
    D: "A nonzero negative determinant is still invertible; singular is exactly det = 0."
  },
  "gate-engineering-mathematics-linear-algebra-q11": {
    B: "They are the diagonal entries, which are generally nonzero.",
    C: "Row sums are not the eigenvalues of a triangular matrix.",
    D: "Column sums are not the eigenvalues either."
  },
  "gate-engineering-mathematics-linear-algebra-q12": {
    B: "Rank counts independent rows/columns, not the total number of entries.",
    C: "Zero rows reduce the rank; rank counts the nonzero independent ones.",
    D: "It is independent rows OR columns (they are equal), not columns alone."
  },
  "gate-engineering-mathematics-linear-algebra-q13": {
    B: "A zero determinant is singular (non-invertible).",
    C: "Any nonzero value works — positive or negative.",
    D: "The determinant need not be an integer; it just must be nonzero."
  },
  "gate-engineering-mathematics-linear-algebra-q14": {
    B: "Row sums are not the eigenvalues of a triangular matrix.",
    C: "Column sums are not the eigenvalues either.",
    D: "The determinant is their PRODUCT, not the eigenvalues themselves."
  },
  "gate-engineering-mathematics-linear-algebra-q15": {
    B: "Rank is not the total entry count.",
    C: "Rank counts the nonzero independent rows, not the zero rows.",
    D: "Diagonal entries are not the rank of a matrix."
  },
  "gate-engineering-mathematics-linear-algebra-q16": {
    B: "The determinant is the PRODUCT of the eigenvalues; the sum is the trace.",
    C: "Rank is not the sum of the eigenvalues.",
    D: "The norm is unrelated to the eigenvalue sum."
  }
};
