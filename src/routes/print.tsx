import { renderToString, renderToFile } from "@react-pdf/renderer";
import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import React from "react";
import { ImageDocument } from "../documents/ImageDocument";

const router = express.Router();

router.post(
  "/api/print",
  asyncHandler(async (req: Request, res: Response) => {
    try {
      const { source } = req.body as { source: any };

      // const string = await renderToString(<ImageDocument />);
      // res.send(string);
      await renderToFile(<ImageDocument source={source} />, `${__dirname}/my-doc.pdf`);
    } catch (error) {
      res.status(400).send(new Error("PDF Error Generation"));
    }
  })
);

export { router as printRouter };
