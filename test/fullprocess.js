import * as snarkjs from "../main.js";
import { getCurveFromName } from "../src/curves.js";
import assert from "assert";
import path from "path";
import {utils} from "ffjavascript";

import bfj from "bfj";
const {stringifyBigInts} = utils;

describe("Full process", function ()  {
    this.timeout(1000000000);

    let curve;
    const ptau_0 = {type: "mem"};
    const ptau_1 = {type: "mem"};
    const ptau_2 = {type: "mem"};
    const ptau_beacon = {type: "mem"};
    const ptau_final = {type: "mem"};
    const ptau_challenge2 = {type: "mem"};
    const ptau_response2 = {type: "mem"};
    const zkey_0 = {type: "mem"};
    const zkey_1 = {type: "mem"};
    const zkey_2 = {type: "mem"};
    const zkey_final = {type: "mem"};
    const zkey_plonk = {type: "mem"};
    const bellman_1 = {type: "mem"};
    const bellman_2 = {type: "mem"};
    let vKey;
    const wtns = {type: "mem"};
    let proof;
    let publicSignals;
    let publicSignalsWithAlias;

    before( async () => {
        curve = await getCurveFromName("bn128");
        // curve.Fr.s = 10;
    });
    after( async () => {
        await curve.terminate();
        // console.log(process._getActiveHandles());
        // console.log(process._getActiveRequests());
    });

 // it ("powersoftau new", async () => {
 //     await snarkjs.powersOfTau.newAccumulator(curve, 11, ptau_0);
 // });

 // it ("powersoftau contribute ", async () => {
 //     await snarkjs.powersOfTau.contribute(ptau_0, ptau_1, "C1", "Entropy1");
 // });

 // it ("powersoftau export challenge", async () => {
 //     await snarkjs.powersOfTau.exportChallenge(ptau_1, ptau_challenge2);
 // });

 // it ("powersoftau challenge contribute", async () => {
 //     await snarkjs.powersOfTau.challengeContribute(curve, ptau_challenge2, ptau_response2, "Entropy2");
 // });

 // it ("powersoftau import response", async () => {
 //     await snarkjs.powersOfTau.importResponse(ptau_1, ptau_response2, ptau_2, "C2", true);
 // });

 //it ("powersoftau beacon", async () => {
 //    await snarkjs.powersOfTau.beacon(ptau_2, ptau_beacon, "B3", "0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20", 10);
 //});

 //it ("powersoftau prepare phase2", async () => {
 //    await snarkjs.powersOfTau.preparePhase2(ptau_beacon, ptau_final);
 //});

 // it ("powersoftau verify", async () => {
 //     const res = await snarkjs.powersOfTau.verify(ptau_final);
 //     assert(res);
 // });

//  it ("groth16 setup", async () => {
//      await snarkjs.zKey.newZKey(path.join("test", "groth16", "circuit.r1cs"), ptau_final, zkey_0);
//  });

 // it ("zkey contribute ", async () => {
 //     await snarkjs.zKey.contribute(zkey_0, zkey_1, "p2_C1", "pa_Entropy1");
 // });

 // it ("zkey export bellman", async () => {
 //     await snarkjs.zKey.exportBellman(zkey_1, bellman_1);
 // });

 // it ("zkey bellman contribute", async () => {
 //     await snarkjs.zKey.bellmanContribute(curve, bellman_1, bellman_2, "pa_Entropy2");
 // });

 // it ("zkey import bellman", async () => {
 //     await snarkjs.zKey.importBellman(zkey_1, bellman_2, zkey_2, "C2");
 // });

 // it ("zkey beacon", async () => {
 //     await snarkjs.zKey.beacon(zkey_2, zkey_final, "B3", "0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20", 10);
 // });

//  it ("zkey verify r1cs", async () => {
//      const res = await snarkjs.zKey.verifyFromR1cs(path.join("test", "groth16", "circuit.r1cs"), ptau_final, zkey_final);
//      assert(res);
//  });

 // it ("zkey verify init", async () => {
 //     const res = await snarkjs.zKey.verifyFromInit(zkey_0, ptau_final, zkey_final);
 //     assert(res);
 // });

 // it ("zkey export verificationkey", async () => {
 //     vKey = await snarkjs.zKey.exportVerificationKey(zkey_final);
 // });

//  it ("witness calculate", async () => {
//      await snarkjs.wtns.calculate({a: 11, b:2}, path.join("test", "groth16", "circuit.wasm"), wtns);
//  });

//  it ("checks witness complies with r1cs", async () => {
//      await snarkjs.wtns.check(path.join("test", "groth16", "circuit.r1cs"), wtns);
//  });

  //it ("groth16 proof", async () => {
  //    const res = await snarkjs.groth16.prove(zkey_final, wtns);
  //    proof = res.proof;
  //    publicSignals = res.publicSignals;
  //    publicSignalsWithAlias = [...res.publicSignals];
  //    publicSignalsWithAlias[1] = BigInt(res.publicSignals[1]) + 21888242871839275222246405745257275088548364400416034343698204186575808495617n;
  //});

//  it ("groth16 verify", async () => {
//      const res = await snarkjs.groth16.verify(vKey, publicSignals, proof);
//      assert(res == true);

//      const res2 = await snarkjs.groth16.verify(vKey, publicSignalsWithAlias, proof);
//      assert(res2 == false);
//  });

//  it ("plonk setup", async () => {
//       const root = "/home/fnieddu/research/circom/circuits/plonk";
//      await snarkjs.plonk.setup(
//       path.join(root, "multiplier2.r1cs"),
//       path.join(root, "pot12_final.ptau"),
//       zkey_plonk);
//  });

// it ("zkey export verificationkey", async () => {
//     vKey = await snarkjs.zKey.exportVerificationKey(zkey_plonk);
// });

   it ("plonk proof", async () => {
        const root = "/home/fnieddu/repos/collaborative-circom/test_vectors/Plonk/bn254/multiplierAdd2/";
       //const res = await snarkjs.plonk.prove(zkey_plonk, wtns);
       const res = await snarkjs.plonk.prove(
        path.join(root, "multiplier2.zkey"),
        path.join(root, "multiplier2_wtns.wtns"),
);
       proof = res.proof;
       publicSignals = res.publicSignals;
  // await bfj.write("LookAtMyNiceProof.json", stringifyBigInts(proof), {space: 1});
  // await bfj.write("LookAtMyPubInts.json", stringifyBigInts(publicSignals), {space: 1});
   });


   it ("zkey export verificationkey", async () => {
        const root = "/home/fnieddu/repos/collaborative-circom/test_vectors/Plonk/bn254/multiplierAdd2/";
    vKey = await snarkjs.zKey.exportVerificationKey(path.join(root, "multiplier2.zkey"));
});
  it ("plonk verify", async () => {
      const res = await snarkjs.plonk.verify(vKey, publicSignals, proof);
      assert(res == true);
  });


});
