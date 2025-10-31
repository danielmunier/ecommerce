import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    turbopack: {},
      /* config options here */
};

export default withPayload(nextConfig);
