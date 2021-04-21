import { renderToStream, renderToFile, renderToString } from "@react-pdf/renderer";
import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import React from "react";
import { ImageDocument } from "../documents/ImageDocument";

const router = express.Router();

async function convertDocumentToBuffer(document): Promise<Buffer> {
  const stream = await renderToStream(document);
  return new Promise((resolve, reject) => {
    let buffers: Uint8Array[] = [];
    stream.on("data", (data) => {
      buffers.push(data);
    });
    stream.on("end", () => {
      resolve(Buffer.concat(buffers));
    });
    stream.on("error", reject);
  });
}

router.get(
  "/api/print",
  asyncHandler(async (req: Request, res: Response) => {
    try {
      const { source } = req.body as { source: any };

      const document = await convertDocumentToBuffer(<ImageDocument />);
      res.send(document);
    } catch (error) {
      res.status(400).send(new Error("PDF Error Generation"));
    }
  })
);

export { router as printRouter };
