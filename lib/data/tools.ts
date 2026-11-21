// Every tool page on the site, built from the keyword research (US volume / KD from Ahrefs, Nov 2026).
import { fmt } from './formats';

export type Tool = {
  slug: string;
  kind: 'mesh' | 'image' | 'svg' | 'dds-encode' | 'dds-decode' | 'viewer';
  from?: string;
  to?: string;
  keyword: string;
  volume: number;      // combined US monthly searches for the main variants
  kd: number;
  title: string;       // <title>
  h1: string;
  lead: string;        // intro paragraph under H1
  description: string; // meta description
  notes?: string[];    // pair-specific paragraphs
  mode?: 'relief' | 'lithophane' | 'stamp';
  related?: string[];
};

// Pair-specific knowledge for the highest-demand conversions.
const NOTES: Record<string, string[]> = {
  '3mf-stl': [
    'Most 3MF files you meet are slicer projects from Bambu Studio, OrcaSlicer, PrusaSlicer or MakerWorld. Each object on the plate is kept; merge them into one STL or download one STL per object.',
    'Print settings, painted supports, colour painting and plate layout live only in the 3MF project. STL keeps the shape, so re-apply those settings in your slicer after importing.',
  ],
  'stl-3mf': [
    '3MF stores units, so a model converted here is tagged as millimetres and opens at the right size in Bambu Studio, PrusaSlicer, OrcaSlicer and Cura.',
    'A 3MF file is a compressed ZIP, so it is usually smaller than the same binary STL.',
  ],
  'glb-stl': [
    'GLB is the usual download from AI 3D generators (Meshy, Tripo, Rodin and others) and from web viewers. Converting to STL keeps the shape and drops colours and textures, which slicers cannot use anyway.',
    'glTF uses metres and Y-up. We rotate the model so it stands upright in your slicer; if it looks tiny, choose “Metres → mm” in Scale.',
    'AI-generated meshes are often open or self-intersecting. Check the model in your slicer and use its repair option before printing.',
  ],
  'step-stl': [
    'STEP stores exact CAD surfaces. To make an STL, curved faces are split into triangles (tessellation). We use a fine setting so holes and fillets stay smooth.',
    'Assemblies keep every part. Download one STL for the whole assembly or one per part.',
  ],
  'stp-stl': [
    '.stp and .step are the same format, so this works exactly like STEP to STL: exact CAD surfaces are tessellated into a fine triangle mesh.',
  ],
  'obj-stl': [
    'OBJ files from Blender, ZBrush or 3D scanners often come with textures. STL keeps only the geometry, which is what a slicer needs.',
    'OBJ is usually Y-up. We rotate the model to Z-up so it lies correctly on the build plate.',
  ],
  'stl-obj': [
    'Use OBJ to bring a print model into Blender, Maya or a game engine. STL has no units, so check the scale after importing (Blender treats 1 unit as 1 metre).',
  ],
  'fbx-obj': [
    'FBX is common for game assets and Mixamo characters. OBJ keeps the mesh and UVs; skeletons and animation are not part of OBJ, so the model is exported in its current pose.',
  ],
  'fbx-stl': [
    'Rigged characters are exported in the pose stored in the file. Thin parts such as hair cards or flat clothing may need thickening before they will print.',
  ],
  'glb-obj': [
    'Useful when a tool accepts OBJ but not glTF. Geometry and UVs are kept; PBR materials are simplified.',
  ],
  'gcode-stl': [
    'G-code contains printer moves, not the model you sliced. We rebuild a solid from each extruded line using the detected layer height and a 0.45 mm line width, so you get a close approximation for previews and measurements.',
    'If you still have the original STL or 3MF, use that instead: it will be far cleaner.',
  ],
  'zip-stl': [
    'Model sites often deliver STL files inside ZIP archives. We open the archive in your browser and convert the first model inside. If the ZIP holds several models, you will see which one was used.',
  ],
  'ply-stl': [
    'PLY files from 3D scanners can be point clouds. Only PLY files with faces (triangles) can be converted to a printable STL.',
  ],
  'stl-dxf': [
    'The mesh is written as 3DFACE entities, which AutoCAD, LibreCAD and most CAM programs can open. DXF from a mesh is not a 2D drawing; for laser cutting you still need a flat outline.',
  ],
};

const meshPair = (from: string, to: string, keyword: string, volume: number, kd: number, extra: Partial<Tool> = {}): Tool => {
  const F = fmt(from), T = fmt(to);
  const key = `${from}-${to}`;
  return {
    slug: key.replace('-', '-to-'),
    kind: 'mesh', from, to, keyword, volume, kd,
    title: `${F.name} to ${T.name} Converter – Free, Online, No Upload`,
    h1: `${F.name} to ${T.name} converter`,
    lead: `Convert ${F.name} files to ${T.name} in your browser. Preview the model in 3D, check its size, then download. Free, no sign-up, and your file never leaves your device.`,
    description: `Free ${F.name} to ${T.name} converter that runs in your browser. Preview in 3D, fix scale and orientation, download ${T.name} in seconds. No upload, no sign-up.`,
    notes: NOTES[key],
    ...extra,
  };
};

export const TOOLS: Tool[] = [
  // 3D ↔ 3D (ordered by demand)
  meshPair('3mf', 'stl', '3mf to stl', 7900, 1),
  meshPair('glb', 'stl', 'glb to stl', 2800, 0),
  meshPair('stl', '3mf', 'stl to 3mf', 2450, 0),
  meshPair('step', 'stl', 'step to stl', 2900, 1),
  meshPair('glb', 'obj', 'glb to obj', 1700, 0),
  meshPair('obj', 'stl', 'obj to stl', 1850, 0),
  meshPair('stl', 'obj', 'stl to obj', 1450, 0),
  meshPair('fbx', 'obj', 'fbx to obj', 1280, 0),
  meshPair('gcode', 'stl', 'gcode to stl', 950, 0),
  meshPair('fbx', 'stl', 'fbx to stl', 770, 0),
  meshPair('zip', 'stl', 'zip to stl', 800, 0, { title: 'ZIP to STL – Open and Convert Zipped 3D Models Online', h1: 'ZIP to STL converter' }),
  meshPair('stp', 'stl', 'stp to stl', 880, 0),
  meshPair('dae', 'obj', 'dae to obj', 550, 0),
  meshPair('gltf', 'obj', 'gltf to obj', 500, 0),
  meshPair('stl', 'dxf', 'stl to dxf', 390, 0),
  meshPair('obj', 'glb', 'obj to glb', 250, 0),
  meshPair('gltf', 'stl', 'gltf to stl', 300, 0),
  meshPair('fbx', 'glb', 'fbx to glb', 300, 0),
  meshPair('ply', 'stl', 'ply to stl', 430, 0),
  meshPair('3mf', 'obj', '3mf to obj', 200, 0),
  meshPair('dae', 'stl', 'dae to stl', 150, 0),
  meshPair('usdz', 'stl', 'usdz to stl', 100, 0),
  meshPair('ply', 'obj', 'ply to obj', 90, 0),
  meshPair('stp', 'obj', 'stp to obj', 80, 0),
  meshPair('3ds', 'obj', '3ds to obj', 110, 0),
  meshPair('igs', 'stl', 'igs to stl', 50, 0),
  meshPair('stl', 'glb', 'stl to glb', 0, 0),
  meshPair('obj', '3mf', 'obj to 3mf', 0, 0),
  meshPair('glb', '3mf', 'glb to 3mf', 0, 0),
  meshPair('stl', 'usdz', 'stl to usdz', 0, 0),
  meshPair('glb', 'usdz', 'glb to usdz', 0, 0),
  meshPair('step', 'obj', 'step to obj', 0, 0),
  meshPair('step', '3mf', 'step to 3mf', 0, 0),
  meshPair('stl', 'ply', 'stl to ply', 0, 0),

  // Image → 3D
  { slug: 'image-to-stl', kind: 'image', from: 'png', to: 'stl', keyword: 'image to stl', volume: 7500, kd: 40, mode: 'relief',
    title: 'Image to STL Converter – Turn a Picture into a 3D Print',
    h1: 'Image to STL converter',
    lead: 'Turn a PNG or JPG into a 3D-printable STL. Choose a relief, a lithophane or a raised logo, set the size in millimetres and watch the model update live.',
    description: 'Free image to STL converter: turn PNG or JPG pictures into reliefs, lithophanes and logo stamps. Live 3D preview, size in mm, no upload.' },
  { slug: 'png-to-stl', kind: 'image', from: 'png', to: 'stl', keyword: 'png to stl', volume: 4600, kd: 45, mode: 'stamp',
    title: 'PNG to STL Converter – Logos, Reliefs and Lithophanes',
    h1: 'PNG to STL converter',
    lead: 'Convert a PNG into an STL you can print. Logo mode raises the dark shapes; relief mode turns brightness into height; transparent areas stay flat.',
    description: 'Convert PNG to STL online: raise logos, make reliefs or lithophanes, set size and thickness in mm. Free, live 3D preview, files stay on your device.' },
  { slug: 'jpg-to-stl', kind: 'image', from: 'jpg', to: 'stl', keyword: 'jpg to stl', volume: 1900, kd: 9, mode: 'lithophane',
    title: 'JPG to STL Converter – Photo to 3D Print or Lithophane',
    h1: 'JPG to STL converter',
    lead: 'Turn a JPG photo into an STL. Lithophane mode makes a thin panel that shows the photo when lit from behind; relief mode makes a raised picture.',
    description: 'Free JPG to STL converter. Make photo lithophanes and reliefs from JPG images with a live 3D preview. Set size in mm, download STL. No upload.' },
  { slug: 'jpeg-to-stl', kind: 'image', from: 'jpeg', to: 'stl', keyword: 'jpeg to stl', volume: 700, kd: 0, mode: 'relief',
    title: 'JPEG to STL Converter – Free and Online',
    h1: 'JPEG to STL converter',
    lead: 'Convert JPEG images into printable STL reliefs, lithophanes or stamps, right in your browser.',
    description: 'Convert JPEG to STL online for free. Reliefs, lithophanes and logo stamps with a live 3D preview and sizes in millimetres. No upload needed.' },
  { slug: 'lithophane-maker', kind: 'image', from: 'jpg', to: 'stl', keyword: 'lithophane 3d print', volume: 2900, kd: 2, mode: 'lithophane',
    title: 'Lithophane Maker – Photo to Lithophane STL, Free',
    h1: 'Lithophane maker',
    lead: 'Make a lithophane STL from any photo. Dark areas print thicker and block more light, so the picture appears when you hold the print up to a lamp.',
    description: 'Free online lithophane maker: turn a photo into a lithophane STL with adjustable size, thickness and detail. Live preview, no upload, no sign-up.' },
  { slug: 'png-to-obj', kind: 'image', from: 'png', to: 'obj', keyword: 'png to obj', volume: 340, kd: 0, mode: 'relief',
    title: 'PNG to OBJ Converter – Image to 3D Model Online',
    h1: 'PNG to OBJ converter',
    lead: 'Turn a PNG into a 3D OBJ model for Blender or a game engine: brightness becomes height on a solid base.',
    description: 'Convert PNG to OBJ online: turn an image into a 3D relief model with adjustable size and height. Free, live preview, nothing uploaded.' },
  { slug: 'png-to-3mf', kind: 'image', from: 'png', to: '3mf', keyword: 'png to 3mf', volume: 150, kd: 0, mode: 'stamp',
    title: 'PNG to 3MF Converter – Image to Slicer-Ready 3MF',
    h1: 'PNG to 3MF converter',
    lead: 'Create a 3MF from a PNG. 3MF stores millimetres, so the model opens at the exact size you set in Bambu Studio, PrusaSlicer or OrcaSlicer.',
    description: 'Convert PNG to 3MF for Bambu Studio, PrusaSlicer and OrcaSlicer. Raise logos or make reliefs with sizes in mm. Free and private, in your browser.' },
  { slug: 'svg-to-stl', kind: 'svg', from: 'svg', to: 'stl', keyword: 'svg to stl', volume: 2950, kd: 0,
    title: 'SVG to STL Converter – Extrude Vector Art for 3D Printing',
    h1: 'SVG to STL converter',
    lead: 'Extrude an SVG into a solid STL for signs, logos, keychains, cookie cutters and stencils. Set the width and thickness in millimetres.',
    description: 'Free SVG to STL converter: extrude vector logos and shapes into 3D-printable solids. Set width and thickness in mm, preview in 3D, no upload.' },
  { slug: 'svg-to-obj', kind: 'svg', from: 'svg', to: 'obj', keyword: 'svg to obj', volume: 100, kd: 0,
    title: 'SVG to OBJ Converter – Vector to 3D Model',
    h1: 'SVG to OBJ converter',
    lead: 'Extrude SVG shapes into a 3D OBJ model for Blender, games or 3D printing.',
    description: 'Convert SVG to OBJ online: extrude vector shapes into a 3D model with set width and depth. Free, live 3D preview, files stay on your device.' },

  // Textures
  { slug: 'png-to-dds', kind: 'dds-encode', from: 'png', to: 'dds', keyword: 'png to dds', volume: 3950, kd: 0,
    title: 'PNG to DDS Converter – DXT1, DXT5 and Mipmaps, Free',
    h1: 'PNG to DDS converter',
    lead: 'Convert PNG images to DDS textures for games and mods. Choose DXT5 for transparency, DXT1 for the smallest files, or uncompressed RGBA, with optional mipmaps.',
    description: 'Free PNG to DDS converter for game textures and mods. DXT1, DXT5 or uncompressed RGBA with mipmaps. Runs in your browser, no upload.' },
  { slug: 'jpg-to-dds', kind: 'dds-encode', from: 'jpg', to: 'dds', keyword: 'jpg to dds', volume: 0, kd: 0,
    title: 'JPG to DDS Converter – Game Textures Online',
    h1: 'JPG to DDS converter',
    lead: 'Turn JPG images into DDS textures with DXT1 or DXT5 compression and mipmaps.',
    description: 'Convert JPG to DDS online: DXT1, DXT5 or uncompressed textures with mipmaps for games and mods. Free, in your browser, no upload.' },
  { slug: 'dds-to-png', kind: 'dds-decode', from: 'dds', to: 'png', keyword: 'dds to png', volume: 3150, kd: 0,
    title: 'DDS to PNG Converter – Open DDS Textures Online',
    h1: 'DDS to PNG converter',
    lead: 'Convert DDS game textures to PNG and keep transparency. Works with DXT1, DXT3, DXT5 and uncompressed DDS files.',
    description: 'Free DDS to PNG converter: open DXT1, DXT3, DXT5 and uncompressed DDS textures and save them as PNG with transparency. No upload.' },
  { slug: 'dds-to-jpg', kind: 'dds-decode', from: 'dds', to: 'jpg', keyword: 'dds to jpg', volume: 0, kd: 0,
    title: 'DDS to JPG Converter – Free and Online',
    h1: 'DDS to JPG converter',
    lead: 'Convert DDS textures to JPG images in your browser.',
    description: 'Convert DDS to JPG online: decode DXT1, DXT3, DXT5 and uncompressed DDS textures to JPG. Free and private, files never leave your device.' },

  // Viewers
  { slug: '3d-viewer', kind: 'viewer', keyword: '3d model viewer', volume: 5200, kd: 62,
    title: 'Online 3D Model Viewer – STL, 3MF, OBJ, GLB, STEP, FBX',
    h1: 'Online 3D model viewer',
    lead: 'Open 3D files in your browser: STL, 3MF, OBJ, GLB, glTF, FBX, STEP, PLY and more. Rotate, measure size and volume, check the mesh, save a PNG.',
    description: 'Free online 3D viewer for STL, 3MF, OBJ, GLB, FBX, STEP and PLY. Rotate, measure dimensions and volume, wireframe view. Files stay on your device.' },
  ...(['stl', '3mf', 'obj', 'glb', 'step', 'ply', 'fbx', 'gltf'] as const).map((id): Tool => {
    const F = fmt(id);
    const vols: Record<string, [number, number]> = { stl: [0, 0], '3mf': [350, 0], obj: [900, 44], glb: [0, 0], step: [1500, 46], ply: [250, 0], fbx: [0, 0], gltf: [0, 0] };
    return {
      slug: `${id}-viewer`, kind: 'viewer', from: id, keyword: `${id === 'step' ? 'step file' : id} viewer`, volume: vols[id][0], kd: vols[id][1],
      title: `${F.name} Viewer – Open ${F.name} Files Online, Free`,
      h1: `${F.name} viewer`,
      lead: `View ${F.name} files online without installing anything. Rotate and zoom, see dimensions, triangle count and volume, and convert to another format if you need to.`,
      description: `Free online ${F.name} viewer: open .${id} files in your browser, rotate, measure size and volume, view wireframe, convert. No upload, no sign-up.`,
    };
  }),
];

export const tool = (slug: string) => TOOLS.find((t) => t.slug === slug);
export const meshTools = () => TOOLS.filter((t) => t.kind === 'mesh');
