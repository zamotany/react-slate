import { __wbindgen_object_drop_ref } from './stretch_layout.js';
import { __wbindgen_string_new } from './stretch_layout.js';
import { __wbindgen_object_clone_ref } from './stretch_layout.js';
import { __wbindgen_number_new } from './stretch_layout.js';
import { __wbg_call_98582f5ce3d4c1ab } from './stretch_layout.js';
import { __wbg_get_a7395f826d52f42a } from './stretch_layout.js';
import { __wbg_has_27f12e65cef14759 } from './stretch_layout.js';
import { __wbindgen_number_get } from './stretch_layout.js';
import { __wbindgen_string_get } from './stretch_layout.js';
import { __wbindgen_throw } from './stretch_layout.js';


  var scratchBuffer = new ArrayBuffer(8);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function legalimport$wasm2js_scratch_store_i64(low, high) {
    i32ScratchView[0] = low;
    i32ScratchView[1] = high;
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f32() {
    return f32ScratchView[0];
  }
      
  function wasm2js_scratch_store_f32(value) {
    f32ScratchView[0] = value;
  }
      
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
function asmFunc(global, env, buffer) {
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 var __wbindgen_object_drop_ref = env.__wbindgen_object_drop_ref;
 var __wbindgen_string_new = env.__wbindgen_string_new;
 var __wbindgen_object_clone_ref = env.__wbindgen_object_clone_ref;
 var __wbindgen_number_new = env.__wbindgen_number_new;
 var __wbg_call_98582f5ce3d4c1ab = env.__wbg_call_98582f5ce3d4c1ab;
 var __wbg_get_a7395f826d52f42a = env.__wbg_get_a7395f826d52f42a;
 var __wbg_has_27f12e65cef14759 = env.__wbg_has_27f12e65cef14759;
 var __wbindgen_number_get = env.__wbindgen_number_get;
 var __wbindgen_string_get = env.__wbindgen_string_get;
 var __wbindgen_throw = env.__wbindgen_throw;
 var global$0 = 1048576;
 var i64toi32_i32$HIGH_BITS = 0;
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($0, $1, $2, $3, $4, $5) {
  var $6 = 0, $7 = 0, $8 = Math_fround(0), $9 = 0, $10 = 0, $11 = Math_fround(0), $12 = Math_fround(0), $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = Math_fround(0), $19 = 0, $20 = Math_fround(0), $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = Math_fround(0), $26 = 0, $27 = 0, $28 = Math_fround(0), $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = Math_fround(0), $40 = Math_fround(0), $41 = Math_fround(0), $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = Math_fround(0), $49 = 0, $50 = 0, $51 = Math_fround(0), $52 = Math_fround(0), $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = Math_fround(0), $59 = 0, $60 = 0, $61 = Math_fround(0), $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = Math_fround(0), $67 = 0, $68 = 0, $69 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = Math_fround(0), $106 = Math_fround(0), $107 = 0, $108 = 0, $109 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $140 = 0, wasm2js_i32$0 = 0, wasm2js_f32$0 = Math_fround(0);
  $6 = global$0 - 992 | 0;
  global$0 = $6;
  HEAP32[$6 + 264 >> 2] = $2;
  HEAP32[$6 + 260 >> 2] = $1;
  folding_inner0 : {
   label$1 : {
    label$2 : {
     label$3 : {
      $7 = HEAP32[$1 + 8 >> 2];
      if ($7 >>> 0 > $2 >>> 0) {
       HEAP8[(HEAP32[$1 >> 2] + Math_imul($2, 288) | 0) + 284 | 0] = 0;
       $2 = HEAP32[$6 + 260 >> 2];
       $1 = HEAP32[$2 + 8 >> 2];
       $17 = HEAP32[$6 + 264 >> 2];
       if ($1 >>> 0 <= $17 >>> 0) {
        break label$3
       }
       $13 = HEAP32[$2 >> 2];
       $7 = HEAP32[($13 + Math_imul($17, 288) | 0) + 240 >> 2];
       if (($7 | 0) == 2) {
        break label$2
       }
       if ($5 ? !HEAPU8[($13 + Math_imul($17, 288) | 0) + 280 | 0] : 0) {
        break label$2
       }
       $1 = HEAP32[$3 >> 2];
       $10 = ($7 | 0) != 0;
       label$6 : {
        if ($1) {
         break label$6
        }
        $10 = Math_fround(Math_abs(Math_fround(HEAPF32[$3 + 4 >> 2] - HEAPF32[($13 + Math_imul($17, 288) | 0) + 272 >> 2]))) < Math_fround(1.1920928955078125e-07);
       }
       $2 = HEAP32[$3 + 8 >> 2];
       $30 = HEAP32[($13 + Math_imul($17, 288) | 0) + 248 >> 2] != 0;
       label$8 : {
        if ($2) {
         break label$8
        }
        $30 = Math_fround(Math_abs(Math_fround(HEAPF32[$3 + 12 >> 2] - HEAPF32[($13 + Math_imul($17, 288) | 0) + 276 >> 2]))) < Math_fround(1.1920928955078125e-07);
       }
       if ($10 & $30) {
        $2 = ($13 + Math_imul($17, 288) | 0) + 272 | 0;
        $1 = HEAP32[$2 + 4 >> 2];
        HEAP32[$0 + 4 >> 2] = HEAP32[$2 >> 2];
        HEAP32[$0 + 8 >> 2] = $1;
        HEAP32[$0 >> 2] = 0;
        break label$1;
       }
       if (($1 | 0) != ($7 | 0)) {
        break label$2
       }
       if (!$7) {
        if (HEAPF32[($13 + Math_imul($17, 288) | 0) + 244 >> 2] != HEAPF32[$3 + 4 >> 2]) {
         break label$2
        }
       }
       if (($2 | 0) != HEAP32[($13 + Math_imul($17, 288) | 0) + 248 >> 2]) {
        break label$2
       }
       if (!$2) {
        if (HEAPF32[($13 + Math_imul($17, 288) | 0) + 252 >> 2] != HEAPF32[$3 + 12 >> 2]) {
         break label$2
        }
       }
       $1 = HEAP32[($13 + Math_imul($17, 288) | 0) + 256 >> 2];
       if (($1 | 0) != HEAP32[$4 >> 2]) {
        break label$2
       }
       if (!$1) {
        if (HEAPF32[($13 + Math_imul($17, 288) | 0) + 260 >> 2] != HEAPF32[$4 + 4 >> 2]) {
         break label$2
        }
       }
       $1 = HEAP32[($13 + Math_imul($17, 288) | 0) + 264 >> 2];
       if (($1 | 0) != HEAP32[$4 + 8 >> 2]) {
        break label$2
       }
       if (!$1) {
        if (HEAPF32[($13 + Math_imul($17, 288) | 0) + 268 >> 2] != HEAPF32[$4 + 12 >> 2]) {
         break label$2
        }
       }
       $2 = ($13 + Math_imul($17, 288) | 0) + 272 | 0;
       $1 = HEAP32[$2 + 4 >> 2];
       HEAP32[$0 + 4 >> 2] = HEAP32[$2 >> 2];
       HEAP32[$0 + 8 >> 2] = $1;
       HEAP32[$0 >> 2] = 0;
       break label$1;
      }
      core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $2, $7);
      abort();
     }
     core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $17, $1);
     abort();
    }
    $9 = $13 + Math_imul($17, 288) | 0;
    $1 = HEAPU8[$9 + 203 | 0];
    HEAP8[$6 + 268 | 0] = $1;
    $1 = $1 | 2;
    HEAP8[$6 + 269 | 0] = ($1 | 0) == 2;
    HEAP8[$6 + 270 | 0] = ($1 | 0) == 3;
    HEAP8[$6 + 271 | 0] = HEAPU8[$9 + 204 | 0] == 2;
    $7 = $9 + 56 | 0;
    $2 = HEAP32[$7 + 4 >> 2];
    $10 = $6 + 872 | 0;
    $1 = $10;
    HEAP32[$1 >> 2] = HEAP32[$7 >> 2];
    HEAP32[$1 + 4 >> 2] = $2;
    $7 = $9 + 48 | 0;
    $2 = HEAP32[$7 + 4 >> 2];
    $17 = $6 + 864 | 0;
    $1 = $17;
    HEAP32[$1 >> 2] = HEAP32[$7 >> 2];
    HEAP32[$1 + 4 >> 2] = $2;
    $7 = $9 + 40 | 0;
    $2 = HEAP32[$7 + 4 >> 2];
    $13 = $6 + 856 | 0;
    $1 = $13;
    HEAP32[$1 >> 2] = HEAP32[$7 >> 2];
    HEAP32[$1 + 4 >> 2] = $2;
    $1 = HEAP32[$9 + 36 >> 2];
    HEAP32[$6 + 848 >> 2] = HEAP32[$9 + 32 >> 2];
    HEAP32[$6 + 852 >> 2] = $1;
    stretch__geometry__Rect_T___map__h7b4730a6dda3311f($6 + 272 | 0, $6 + 848 | 0, $4);
    label$15 : {
     label$16 : {
      label$17 : {
       label$18 : {
        label$19 : {
         label$20 : {
          label$21 : {
           $2 = HEAP32[$6 + 260 >> 2];
           $1 = HEAP32[$2 + 8 >> 2];
           $7 = HEAP32[$6 + 264 >> 2];
           if ($1 >>> 0 > $7 >>> 0) {
            $7 = HEAP32[$2 >> 2] + Math_imul($7, 288) | 0;
            $2 = $7 + 72 | 0;
            $1 = HEAP32[$2 + 4 >> 2];
            HEAP32[$13 >> 2] = HEAP32[$2 >> 2];
            HEAP32[$13 + 4 >> 2] = $1;
            $2 = $7 + 80 | 0;
            $1 = HEAP32[$2 + 4 >> 2];
            HEAP32[$17 >> 2] = HEAP32[$2 >> 2];
            HEAP32[$17 + 4 >> 2] = $1;
            $2 = $7 + 88 | 0;
            $1 = HEAP32[$2 + 4 >> 2];
            HEAP32[$10 >> 2] = HEAP32[$2 >> 2];
            HEAP32[$10 + 4 >> 2] = $1;
            $1 = HEAP32[$7 + 68 >> 2];
            HEAP32[$6 + 848 >> 2] = HEAP32[$7 + 64 >> 2];
            HEAP32[$6 + 852 >> 2] = $1;
            stretch__geometry__Rect_T___map__h7b4730a6dda3311f($6 + 288 | 0, $6 + 848 | 0, $4);
            $2 = HEAP32[$6 + 260 >> 2];
            $1 = HEAP32[$2 + 8 >> 2];
            $7 = HEAP32[$6 + 264 >> 2];
            if ($1 >>> 0 > $7 >>> 0) {
             $13 = HEAP32[$2 >> 2] + Math_imul($7, 288) | 0;
             $7 = $13 + 104 | 0;
             $2 = HEAP32[$7 + 4 >> 2];
             $1 = $6 + 856 | 0;
             HEAP32[$1 >> 2] = HEAP32[$7 >> 2];
             HEAP32[$1 + 4 >> 2] = $2;
             $7 = $13 + 112 | 0;
             $2 = HEAP32[$7 + 4 >> 2];
             $1 = $6 + 864 | 0;
             HEAP32[$1 >> 2] = HEAP32[$7 >> 2];
             HEAP32[$1 + 4 >> 2] = $2;
             $7 = $13 + 120 | 0;
             $2 = HEAP32[$7 + 4 >> 2];
             $1 = $6 + 872 | 0;
             HEAP32[$1 >> 2] = HEAP32[$7 >> 2];
             HEAP32[$1 + 4 >> 2] = $2;
             $1 = HEAP32[$13 + 100 >> 2];
             HEAP32[$6 + 848 >> 2] = HEAP32[$13 + 96 >> 2];
             HEAP32[$6 + 852 >> 2] = $1;
             stretch__geometry__Rect_T___map__h7b4730a6dda3311f($6 + 304 | 0, $6 + 848 | 0, $4);
             $28 = Math_fround(HEAPF32[$6 + 296 >> 2] + HEAPF32[$6 + 312 >> 2]);
             HEAPF32[$6 + 328 >> 2] = $28;
             $18 = Math_fround(HEAPF32[$6 + 300 >> 2] + HEAPF32[$6 + 316 >> 2]);
             HEAPF32[$6 + 332 >> 2] = $18;
             $20 = Math_fround(HEAPF32[$6 + 292 >> 2] + HEAPF32[$6 + 308 >> 2]);
             HEAPF32[$6 + 324 >> 2] = $20;
             $8 = Math_fround(HEAPF32[$6 + 288 >> 2] + HEAPF32[$6 + 304 >> 2]);
             HEAPF32[$6 + 320 >> 2] = $8;
             $12 = HEAPF32[$3 + 12 >> 2];
             $18 = Math_fround($28 + $18);
             HEAPF32[$6 + 348 >> 2] = $12 - $18;
             $10 = HEAP32[$3 + 8 >> 2];
             HEAP32[$6 + 344 >> 2] = $10;
             $17 = HEAP32[$3 >> 2];
             HEAP32[$6 + 336 >> 2] = $17;
             $28 = HEAPF32[$3 + 4 >> 2];
             $8 = Math_fround($8 + $20);
             HEAPF32[$6 + 340 >> 2] = $28 - $8;
             HEAP32[$6 + 352 >> 2] = 0;
             HEAP32[$6 + 356 >> 2] = 0;
             $7 = HEAP32[$6 + 260 >> 2];
             $1 = HEAP32[$7 + 20 >> 2];
             $13 = HEAP32[$6 + 264 >> 2];
             if ($1 >>> 0 > $13 >>> 0) {
              label$25 : {
               label$26 : {
                label$27 : {
                 label$28 : {
                  label$29 : {
                   label$30 : {
                    label$31 : {
                     label$32 : {
                      label$33 : {
                       label$34 : {
                        label$35 : {
                         label$36 : {
                          label$37 : {
                           label$38 : {
                            label$39 : {
                             if (HEAP32[(HEAP32[$7 + 12 >> 2] + Math_imul($13, 12) | 0) + 8 >> 2]) {
                              HEAPF32[$6 + 372 >> 2] = ($10 ? Math_fround(HEAPF32[$4 + 12 >> 2] - Math_fround(HEAPF32[$6 + 280 >> 2] + HEAPF32[$6 + 284 >> 2])) : $12) - $18;
                              $2 = 0;
                              HEAP32[$6 + 368 >> 2] = HEAP32[$4 + 8 >> 2] != 0 & ($10 | 0) != 0;
                              HEAP32[$6 + 360 >> 2] = HEAP32[$4 >> 2] != 0 & ($17 | 0) != 0;
                              HEAPF32[$6 + 364 >> 2] = ($17 ? Math_fround(HEAPF32[$4 + 4 >> 2] - Math_fround(HEAPF32[$6 + 272 >> 2] + HEAPF32[$6 + 276 >> 2])) : $28) - $8;
                              $1 = HEAP32[$7 + 12 >> 2] + Math_imul($13, 12) | 0;
                              $7 = HEAP32[$1 + 8 >> 2];
                              $1 = HEAP32[$1 >> 2];
                              HEAP32[$6 + 848 >> 2] = $1;
                              HEAP32[$6 + 852 >> 2] = $1 + ($7 << 2);
                              HEAP32[$6 + 860 >> 2] = $6 + 336;
                              HEAP32[$6 + 856 >> 2] = $6 + 260;
                              $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____from_iter__h7b545461b265ed21($6 + 376 | 0, $6 + 848 | 0);
                              $14 = HEAP32[$6 + 384 >> 2];
                              $10 = Math_imul($14, 192);
                              $7 = HEAP32[$6 + 376 >> 2];
                              if ($14) {
                               $59 = HEAP32[$6 + 264 >> 2];
                               $30 = HEAP32[$6 + 260 >> 2];
                               $17 = $30 + 8 | 0;
                               $9 = $10;
                               $1 = $7;
                               while (1) {
                                $13 = $2 & 1;
                                $2 = 1;
                                if (!$13) {
                                 $13 = HEAP32[$17 >> 2];
                                 $2 = HEAP32[$1 >> 2];
                                 if ($13 >>> 0 <= $2 >>> 0) {
                                  break label$20
                                 }
                                 if ($13 >>> 0 <= $59 >>> 0) {
                                  break label$21
                                 }
                                 $13 = HEAP32[$30 >> 2];
                                 $2 = HEAPU8[($13 + Math_imul($2, 288) | 0) + 207 | 0];
                                 if (!$2) {
                                  $2 = HEAPU8[($13 + Math_imul($59, 288) | 0) + 206 | 0] + 1 | 0
                                 }
                                 $2 = ($2 & 255) == 4;
                                }
                                $1 = $1 + 192 | 0;
                                $9 = $9 + -192 | 0;
                                if ($9) {
                                 continue
                                }
                                break;
                               };
                              }
                              $17 = $6 + 332 | 0;
                              $30 = $6 + 328 | 0;
                              $13 = $6 + 320 | 4;
                              $76 = $6 + 316 | 0;
                              $59 = $6 + 312 | 0;
                              $77 = $6 + 304 | 4;
                              $10 = $7 + $10 | 0;
                              HEAP32[$6 + 860 >> 2] = $3;
                              HEAP32[$6 + 876 >> 2] = $6 + 269;
                              HEAP32[$6 + 872 >> 2] = $6 + 360;
                              HEAP32[$6 + 868 >> 2] = $6 + 270;
                              HEAP32[$6 + 864 >> 2] = $6 + 264;
                              HEAP32[$6 + 856 >> 2] = $6 + 268;
                              HEAP32[$6 + 852 >> 2] = $6 + 336;
                              HEAP32[$6 + 848 >> 2] = $6 + 260;
                              $1 = $7;
                              while (1) {
                               if ($10 - $1 >>> 0 <= 576) {
                                break label$39
                               }
                               stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h68fdebc198e03480($6 + 32 | 0, $6 + 848 | 0, $1);
                               $9 = HEAP32[$6 + 32 >> 2];
                               if ($9) {
                                break label$38
                               }
                               stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h68fdebc198e03480($6 + 24 | 0, $6 + 848 | 0, $1 + 192 | 0);
                               $9 = HEAP32[$6 + 24 >> 2];
                               if ($9) {
                                break label$37
                               }
                               stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h68fdebc198e03480($6 + 16 | 0, $6 + 848 | 0, $1 + 384 | 0);
                               $9 = HEAP32[$6 + 16 >> 2];
                               if ($9) {
                                break label$36
                               }
                               stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h68fdebc198e03480($6 + 8 | 0, $6 + 848 | 0, $1 + 576 | 0);
                               $1 = $1 + 768 | 0;
                               $9 = HEAP32[$6 + 8 >> 2];
                               if (!$9) {
                                continue
                               }
                               break;
                              };
                              $1 = HEAP32[$6 + 12 >> 2];
                              break label$15;
                             }
                             if ($10 | $17) {
                              $1 = HEAP32[$7 + 8 >> 2];
                              if ($1 >>> 0 <= $13 >>> 0) {
                               break label$25
                              }
                              $13 = HEAP32[$7 >> 2] + Math_imul($13, 288) | 0;
                              $15 = HEAP32[$13 + 212 >> 2];
                              if (!$15) {
                               break label$35
                              }
                              $16 = $3 + 8 | 0;
                              $7 = $16;
                              $2 = HEAP32[$7 + 4 >> 2];
                              $17 = $6 + 680 | 0;
                              $1 = $17;
                              HEAP32[$1 >> 2] = HEAP32[$7 >> 2];
                              HEAP32[$1 + 4 >> 2] = $2;
                              $1 = HEAP32[$3 + 4 >> 2];
                              HEAP32[$6 + 672 >> 2] = HEAP32[$3 >> 2];
                              HEAP32[$6 + 676 >> 2] = $1;
                              $7 = HEAP32[$13 + 216 >> 2];
                              $2 = HEAP32[$17 + 4 >> 2];
                              $13 = $6 + 856 | 0;
                              $1 = $13;
                              HEAP32[$1 >> 2] = HEAP32[$17 >> 2];
                              HEAP32[$1 + 4 >> 2] = $2;
                              $1 = HEAP32[$6 + 676 >> 2];
                              HEAP32[$6 + 848 >> 2] = HEAP32[$6 + 672 >> 2];
                              HEAP32[$6 + 852 >> 2] = $1;
                              FUNCTION_TABLE[HEAP32[$7 + 12 >> 2]]($6 + 496 | 0, $15, $6 + 848 | 0);
                              $10 = HEAP32[$6 + 504 >> 2];
                              $17 = HEAP32[$6 + 500 >> 2];
                              $1 = HEAP32[$6 + 496 >> 2];
                              if (!$1) {
                               break label$32
                              }
                              if (($1 | 0) != 1) {
                               break label$33
                              }
                              HEAP32[$0 + 4 >> 2] = $17;
                              HEAP32[$0 >> 2] = 1;
                              HEAP32[$0 + 8 >> 2] = $10;
                              break label$1;
                             }
                             HEAPF32[$0 + 4 >> 2] = $28;
                             HEAP32[$0 >> 2] = 0;
                             HEAPF32[$0 + 8 >> 2] = $12;
                             break label$1;
                            }
                            $7 = $7 + Math_imul($14, 192) | 0;
                            while (1) {
                             if (($1 | 0) == ($7 | 0)) {
                              break label$34
                             }
                             stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h68fdebc198e03480($6 + 248 | 0, $6 + 848 | 0, $1);
                             $1 = $1 + 192 | 0;
                             $9 = HEAP32[$6 + 248 >> 2];
                             if (!$9) {
                              continue
                             }
                             break;
                            };
                            $1 = HEAP32[$6 + 252 >> 2];
                            break label$15;
                           }
                           $1 = HEAP32[$6 + 36 >> 2];
                           break label$15;
                          }
                          $1 = HEAP32[$6 + 28 >> 2];
                          break label$15;
                         }
                         $1 = HEAP32[$6 + 20 >> 2];
                         break label$15;
                        }
                        HEAP32[$0 >> 2] = 0;
                        HEAPF32[$0 + 8 >> 2] = $18 + ($10 ? Math_fround(0.0) : $12);
                        HEAPF32[$0 + 4 >> 2] = $8 + ($17 ? Math_fround(0.0) : $28);
                        break label$1;
                       }
                       $7 = HEAP32[$6 + 376 >> 2];
                       $14 = HEAP32[$6 + 384 >> 2];
                       $10 = $7 + Math_imul($14, 192) | 0;
                       HEAP32[$6 + 856 >> 2] = $6 + 360;
                       HEAP32[$6 + 852 >> 2] = $6 + 260;
                       HEAP32[$6 + 848 >> 2] = $6 + 268;
                       $1 = $7;
                       while (1) {
                        if ($10 - $1 >>> 0 <= 576) {
                         break label$31
                        }
                        stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h84a6bf5a915079c7($6 - -64 | 0, $6 + 848 | 0, $1);
                        $9 = HEAP32[$6 + 64 >> 2];
                        if ($9) {
                         break label$30
                        }
                        stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h84a6bf5a915079c7($6 + 56 | 0, $6 + 848 | 0, $1 + 192 | 0);
                        $9 = HEAP32[$6 + 56 >> 2];
                        if ($9) {
                         break label$29
                        }
                        stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h84a6bf5a915079c7($6 + 48 | 0, $6 + 848 | 0, $1 + 384 | 0);
                        $9 = HEAP32[$6 + 48 >> 2];
                        if ($9) {
                         break label$28
                        }
                        stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h84a6bf5a915079c7($6 + 40 | 0, $6 + 848 | 0, $1 + 576 | 0);
                        $1 = $1 + 768 | 0;
                        $9 = HEAP32[$6 + 40 >> 2];
                        if (!$9) {
                         continue
                        }
                        break;
                       };
                       $1 = HEAP32[$6 + 44 >> 2];
                       break label$15;
                      }
                      FUNCTION_TABLE[HEAP32[$10 >> 2]]($17);
                      if (!HEAP32[$10 + 4 >> 2]) {
                       break label$32
                      }
                      dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($17);
                     }
                     $1 = HEAP32[$16 + 4 >> 2];
                     HEAP32[$13 >> 2] = HEAP32[$16 >> 2];
                     HEAP32[$13 + 4 >> 2] = $1;
                     $7 = $4 + 8 | 0;
                     $2 = HEAP32[$7 + 4 >> 2];
                     $15 = $6 + 872 | 0;
                     $1 = $15;
                     HEAP32[$1 >> 2] = HEAP32[$7 >> 2];
                     HEAP32[$1 + 4 >> 2] = $2;
                     $1 = HEAP32[$3 + 4 >> 2];
                     HEAP32[$6 + 848 >> 2] = HEAP32[$3 >> 2];
                     HEAP32[$6 + 852 >> 2] = $1;
                     $1 = HEAP32[$4 + 4 >> 2];
                     HEAP32[$6 + 864 >> 2] = HEAP32[$4 >> 2];
                     HEAP32[$6 + 868 >> 2] = $1;
                     $2 = HEAP32[$6 + 260 >> 2];
                     $1 = HEAP32[$2 + 8 >> 2];
                     $3 = HEAP32[$6 + 264 >> 2];
                     if ($1 >>> 0 <= $3 >>> 0) {
                      break label$26
                     }
                     $1 = HEAP32[$6 + 852 >> 2];
                     $4 = HEAP32[$2 >> 2] + Math_imul($3, 288) | 0;
                     HEAP32[$4 + 240 >> 2] = HEAP32[$6 + 848 >> 2];
                     HEAP32[$4 + 244 >> 2] = $1;
                     $2 = HEAP32[$15 + 4 >> 2];
                     $1 = $4 + 264 | 0;
                     HEAP32[$1 >> 2] = HEAP32[$15 >> 2];
                     HEAP32[$1 + 4 >> 2] = $2;
                     $3 = $6 + 864 | 0;
                     $2 = HEAP32[$3 + 4 >> 2];
                     $1 = $4 + 256 | 0;
                     HEAP32[$1 >> 2] = HEAP32[$3 >> 2];
                     HEAP32[$1 + 4 >> 2] = $2;
                     $3 = $6 + 856 | 0;
                     $2 = HEAP32[$3 + 4 >> 2];
                     $1 = $4 + 248 | 0;
                     HEAP32[$1 >> 2] = HEAP32[$3 >> 2];
                     HEAP32[$1 + 4 >> 2] = $2;
                     HEAP8[$4 + 280 | 0] = $5;
                     HEAP32[$4 + 276 >> 2] = $10;
                     HEAP32[$4 + 272 >> 2] = $17;
                     $2 = $4 + 281 | 0;
                     $1 = HEAPU8[$6 + 672 | 0] | HEAPU8[$6 + 673 | 0] << 8;
                     HEAP8[$2 | 0] = $1;
                     HEAP8[$2 + 1 | 0] = $1 >>> 8;
                     HEAP8[$4 + 283 | 0] = HEAPU8[$6 + 674 | 0];
                     HEAP32[$0 + 8 >> 2] = $10;
                     HEAP32[$0 + 4 >> 2] = $17;
                     HEAP32[$0 >> 2] = 0;
                     break label$1;
                    }
                    $7 = $7 + Math_imul($14, 192) | 0;
                    while (1) {
                     if (($1 | 0) == ($7 | 0)) {
                      break label$27
                     }
                     stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h84a6bf5a915079c7($6 + 240 | 0, $6 + 848 | 0, $1);
                     $1 = $1 + 192 | 0;
                     $9 = HEAP32[$6 + 240 >> 2];
                     if (!$9) {
                      continue
                     }
                     break;
                    };
                    $1 = HEAP32[$6 + 244 >> 2];
                    break label$15;
                   }
                   $1 = HEAP32[$6 + 68 >> 2];
                   break label$15;
                  }
                  $1 = HEAP32[$6 + 60 >> 2];
                  break label$15;
                 }
                 $1 = HEAP32[$6 + 52 >> 2];
                 break label$15;
                }
                HEAP32[$6 + 416 >> 2] = 0;
                HEAP32[$6 + 408 >> 2] = 4;
                HEAP32[$6 + 412 >> 2] = 0;
                $7 = HEAP32[$6 + 260 >> 2];
                $1 = HEAP32[$7 + 8 >> 2];
                $10 = HEAP32[$6 + 264 >> 2];
                if ($1 >>> 0 > $10 >>> 0) {
                 if (!HEAPU8[(HEAP32[$7 >> 2] + Math_imul($10, 288) | 0) + 204 | 0]) {
                  break label$17
                 }
                 $1 = $6 + 436 | 0;
                 HEAP32[$1 >> 2] = 0;
                 HEAP32[$1 + 4 >> 2] = 0;
                 HEAP32[$6 + 428 >> 2] = 0;
                 HEAP32[$6 + 432 >> 2] = 0;
                 $7 = 4;
                 HEAP32[$6 + 424 >> 2] = 4;
                 $9 = HEAP32[$6 + 384 >> 2];
                 $10 = HEAP32[$6 + 380 >> 2];
                 $1 = HEAP32[$6 + 376 >> 2];
                 HEAP32[$6 + 456 >> 2] = $1;
                 HEAP32[$6 + 452 >> 2] = $10;
                 HEAP32[$6 + 448 >> 2] = $1;
                 HEAP32[$6 + 460 >> 2] = Math_imul($9, 192) + $1;
                 if (!$9) {
                  break label$19
                 }
                 $67 = $6 + 424 | 4;
                 $10 = 0;
                 $62 = $6 + 688 | 0;
                 $63 = $6 + 696 | 0;
                 $45 = $6 + 372 | 0;
                 $78 = 4;
                 $9 = 0;
                 while (1) {
                  $22 = $6 + 456 | 0;
                  HEAP32[$22 >> 2] = $1 + 192;
                  $26 = HEAP32[$1 >> 2];
                  $79 = HEAP32[$1 + 4 >> 2];
                  memcpy($6 + 848 | 0, $1 + 8 | 0, 144);
                  $23 = $1 + 168 | 0;
                  $19 = HEAP32[$23 + 4 >> 2];
                  $24 = $6 + 680 | 0;
                  $14 = $24;
                  HEAP32[$14 >> 2] = HEAP32[$23 >> 2];
                  HEAP32[$14 + 4 >> 2] = $19;
                  $19 = $1 + 176 | 0;
                  $14 = HEAP32[$19 + 4 >> 2];
                  HEAP32[$62 >> 2] = HEAP32[$19 >> 2];
                  HEAP32[$62 + 4 >> 2] = $14;
                  $19 = $1 + 184 | 0;
                  $14 = HEAP32[$19 + 4 >> 2];
                  HEAP32[$63 >> 2] = HEAP32[$19 >> 2];
                  HEAP32[$63 + 4 >> 2] = $14;
                  $14 = HEAP32[$1 + 164 >> 2];
                  HEAP32[$6 + 672 >> 2] = HEAP32[$1 + 160 >> 2];
                  HEAP32[$6 + 676 >> 2] = $14;
                  label$51 : {
                   if (($79 | 0) == 2) {
                    break label$51
                   }
                   $20 = HEAPF32[$1 + 156 >> 2];
                   $8 = HEAPF32[$1 + 152 >> 2];
                   memcpy($6 + 496 | 0, $6 + 848 | 0, 144);
                   $1 = HEAP32[$63 + 4 >> 2];
                   $29 = $6 + 488 | 0;
                   HEAP32[$29 >> 2] = HEAP32[$63 >> 2];
                   HEAP32[$29 + 4 >> 2] = $1;
                   $14 = HEAP32[$62 + 4 >> 2];
                   $31 = $6 + 480 | 0;
                   $1 = $31;
                   HEAP32[$1 >> 2] = HEAP32[$62 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $14 = HEAP32[$24 + 4 >> 2];
                   $19 = $6 + 472 | 0;
                   $1 = $19;
                   HEAP32[$1 >> 2] = HEAP32[$24 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $1 = HEAP32[$6 + 676 >> 2];
                   HEAP32[$6 + 464 >> 2] = HEAP32[$6 + 672 >> 2];
                   HEAP32[$6 + 468 >> 2] = $1;
                   memcpy($6 + 672 | 0, $6 + 496 | 0, 144);
                   $14 = HEAP32[$29 + 4 >> 2];
                   $23 = $6 + 664 | 0;
                   $1 = $23;
                   HEAP32[$1 >> 2] = HEAP32[$29 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $14 = HEAP32[$31 + 4 >> 2];
                   $68 = $6 + 656 | 0;
                   $1 = $68;
                   HEAP32[$1 >> 2] = HEAP32[$31 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $14 = HEAP32[$19 + 4 >> 2];
                   $29 = $6 + 648 | 0;
                   $1 = $29;
                   HEAP32[$1 >> 2] = HEAP32[$19 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $1 = HEAP32[$6 + 468 >> 2];
                   HEAP32[$6 + 640 >> 2] = HEAP32[$6 + 464 >> 2];
                   HEAP32[$6 + 644 >> 2] = $1;
                   $18 = $11;
                   $1 = HEAPU8[$6 + 268 | 0] | 2;
                   if (($1 | 0) == 3) {
                    $11 = $20
                   } else {
                    $11 = $8
                   }
                   $11 = Math_fround($18 + $11);
                   label$56 : {
                    label$57 : {
                     $1 = ($1 & 3) == 3;
                     label$54 : {
                      if ($1) {
                       $18 = HEAPF32[$45 >> 2];
                       $19 = HEAP32[$6 + 368 >> 2];
                       break label$54;
                      }
                      $18 = HEAPF32[$6 + 364 >> 2];
                      $19 = HEAP32[$6 + 360 >> 2];
                     }
                     if ($19) {
                      break label$57
                     }
                     if (!($11 > $18)) {
                      break label$57
                     }
                     if (!$9) {
                      break label$57
                     }
                     $11 = $1 ? $20 : $8;
                     $14 = $6 + 864 | 0;
                     HEAP32[$14 >> 2] = HEAP32[$6 + 440 >> 2];
                     $9 = $6 + 432 | 0;
                     $7 = HEAP32[$9 + 4 >> 2];
                     $19 = $6 + 856 | 0;
                     $1 = $19;
                     HEAP32[$1 >> 2] = HEAP32[$9 >> 2];
                     HEAP32[$1 + 4 >> 2] = $7;
                     $1 = HEAP32[$6 + 428 >> 2];
                     HEAP32[$6 + 848 >> 2] = HEAP32[$6 + 424 >> 2];
                     HEAP32[$6 + 852 >> 2] = $1;
                     if (($10 | 0) == HEAP32[$6 + 412 >> 2]) {
                      alloc__raw_vec__RawVec_T_2cA___reserve__h975e5b4298fee389($6 + 408 | 0, $10);
                      $78 = HEAP32[$6 + 408 >> 2];
                      $10 = HEAP32[$6 + 416 >> 2];
                     }
                     $1 = HEAP32[$6 + 852 >> 2];
                     $9 = Math_imul($10, 20) + $78 | 0;
                     HEAP32[$9 >> 2] = HEAP32[$6 + 848 >> 2];
                     HEAP32[$9 + 4 >> 2] = $1;
                     HEAP32[$9 + 16 >> 2] = HEAP32[$14 >> 2];
                     $7 = HEAP32[$19 + 4 >> 2];
                     $1 = $9 + 8 | 0;
                     HEAP32[$1 >> 2] = HEAP32[$19 >> 2];
                     HEAP32[$1 + 4 >> 2] = $7;
                     $10 = $10 + 1 | 0;
                     HEAP32[$6 + 416 >> 2] = $10;
                     $1 = $67 + 8 | 0;
                     HEAP32[$1 >> 2] = 0;
                     HEAP32[$1 + 4 >> 2] = 0;
                     HEAP32[$67 >> 2] = 0;
                     HEAP32[$67 + 4 >> 2] = 0;
                     $7 = 4;
                     HEAP32[$6 + 424 >> 2] = 4;
                     $9 = 0;
                     $24 = 0;
                     break label$56;
                    }
                    $24 = HEAP32[$6 + 428 >> 2];
                   }
                   memcpy($6 + 848 | 0, $6 + 672 | 0, 144);
                   $14 = HEAP32[$23 + 4 >> 2];
                   $31 = $6 + 840 | 0;
                   $1 = $31;
                   HEAP32[$1 >> 2] = HEAP32[$23 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $14 = HEAP32[$68 + 4 >> 2];
                   $23 = $6 + 832 | 0;
                   $1 = $23;
                   HEAP32[$1 >> 2] = HEAP32[$68 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $14 = HEAP32[$29 + 4 >> 2];
                   $19 = $6 + 824 | 0;
                   $1 = $19;
                   HEAP32[$1 >> 2] = HEAP32[$29 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $1 = HEAP32[$6 + 644 >> 2];
                   HEAP32[$6 + 816 >> 2] = HEAP32[$6 + 640 >> 2];
                   HEAP32[$6 + 820 >> 2] = $1;
                   if (($9 | 0) == ($24 | 0)) {
                    alloc__raw_vec__RawVec_T_2cA___reserve__h9214e91843dca51d($6 + 424 | 0, $24);
                    $9 = HEAP32[$6 + 432 >> 2];
                    $7 = HEAP32[$6 + 424 >> 2];
                   }
                   $24 = Math_imul($9, 192) + $7 | 0;
                   HEAP32[$24 + 4 >> 2] = $79;
                   HEAP32[$24 >> 2] = $26;
                   memcpy($24 + 8 | 0, $6 + 848 | 0, 144);
                   HEAPF32[$24 + 156 >> 2] = $20;
                   HEAPF32[$24 + 152 >> 2] = $8;
                   $14 = HEAP32[$19 + 4 >> 2];
                   $1 = $24 + 168 | 0;
                   HEAP32[$1 >> 2] = HEAP32[$19 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $1 = HEAP32[$6 + 820 >> 2];
                   HEAP32[$24 + 160 >> 2] = HEAP32[$6 + 816 >> 2];
                   HEAP32[$24 + 164 >> 2] = $1;
                   $14 = HEAP32[$31 + 4 >> 2];
                   $1 = $24 + 184 | 0;
                   HEAP32[$1 >> 2] = HEAP32[$31 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $14 = HEAP32[$23 + 4 >> 2];
                   $1 = $24 + 176 | 0;
                   HEAP32[$1 >> 2] = HEAP32[$23 >> 2];
                   HEAP32[$1 + 4 >> 2] = $14;
                   $9 = $9 + 1 | 0;
                   HEAP32[$6 + 432 >> 2] = $9;
                   $1 = HEAP32[$22 >> 2];
                   if (($1 | 0) != HEAP32[$6 + 460 >> 2]) {
                    continue
                   }
                  }
                  break;
                 };
                 $7 = $6 + 408 | 0;
                 $1 = HEAP32[$6 + 412 >> 2];
                 break label$18;
                }
                core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $10, $1);
                abort();
               }
               core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $3, $1);
               abort();
              }
              core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $13, $1);
              abort();
             }
             core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $13, $1);
             abort();
            }
            core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $7, $1);
            abort();
           }
           core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $7, $1);
           abort();
          }
          core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $59, $13);
          abort();
         }
         core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $2, $13);
         abort();
        }
        $7 = $6 + 408 | 0;
        $10 = 0;
        $1 = 0;
       }
       $26 = $1;
       $alloc__vec__IntoIter_T__20as_20core__ops__drop__Drop___drop__he7ec7146ce50ca8c($6 + 448 | 0);
       $19 = $6 + 864 | 0;
       HEAP32[$19 >> 2] = HEAP32[$6 + 440 >> 2];
       $14 = $6 + 432 | 0;
       $9 = HEAP32[$14 + 4 >> 2];
       $23 = $6 + 856 | 0;
       $1 = $23;
       HEAP32[$1 >> 2] = HEAP32[$14 >> 2];
       HEAP32[$1 + 4 >> 2] = $9;
       $1 = HEAP32[$6 + 428 >> 2];
       HEAP32[$6 + 848 >> 2] = HEAP32[$6 + 424 >> 2];
       HEAP32[$6 + 852 >> 2] = $1;
       if (($10 | 0) == ($26 | 0)) {
        alloc__raw_vec__RawVec_T_2cA___reserve__h975e5b4298fee389($6 + 408 | 0, $26);
        $10 = HEAP32[$6 + 416 >> 2];
       }
       HEAP32[$6 + 416 >> 2] = $10 + 1;
       $1 = HEAP32[$6 + 852 >> 2];
       $10 = HEAP32[$7 >> 2] + Math_imul($10, 20) | 0;
       HEAP32[$10 >> 2] = HEAP32[$6 + 848 >> 2];
       HEAP32[$10 + 4 >> 2] = $1;
       $7 = HEAP32[$23 + 4 >> 2];
       $1 = $10 + 8 | 0;
       HEAP32[$1 >> 2] = HEAP32[$23 >> 2];
       HEAP32[$1 + 4 >> 2] = $7;
       HEAP32[$10 + 16 >> 2] = HEAP32[$19 >> 2];
       break label$16;
      }
      alloc__raw_vec__RawVec_T_2cA___reserve__h975e5b4298fee389($6 + 408 | 0, 0);
      $1 = $6 + 416 | 0;
      $7 = HEAP32[$1 >> 2];
      HEAP32[$1 >> 2] = $7 + 1;
      $1 = HEAP32[$6 + 380 >> 2];
      $7 = HEAP32[$6 + 408 >> 2] + Math_imul($7, 20) | 0;
      HEAP32[$7 >> 2] = HEAP32[$6 + 376 >> 2];
      HEAP32[$7 + 4 >> 2] = $1;
      HEAP32[$7 + 12 >> 2] = 0;
      HEAP32[$7 + 16 >> 2] = 0;
      HEAP32[$7 + 8 >> 2] = HEAP32[$6 + 384 >> 2];
     }
     $10 = $6 + 400 | 0;
     HEAP32[$10 >> 2] = HEAP32[$6 + 416 >> 2];
     $1 = HEAP32[$6 + 412 >> 2];
     HEAP32[$6 + 392 >> 2] = HEAP32[$6 + 408 >> 2];
     HEAP32[$6 + 396 >> 2] = $1;
     $7 = HEAP32[$6 + 392 >> 2];
     $14 = HEAP32[$10 >> 2];
     $10 = $7 + Math_imul($14, 20) | 0;
     HEAP32[$6 + 864 >> 2] = $6 + 360;
     HEAP32[$6 + 860 >> 2] = $6 + 260;
     HEAP32[$6 + 856 >> 2] = $6 + 269;
     HEAP32[$6 + 852 >> 2] = $6 + 336;
     HEAP32[$6 + 848 >> 2] = $6 + 268;
     $1 = $7;
     label$62 : {
      label$63 : {
       label$64 : {
        label$65 : {
         label$66 : {
          label$67 : {
           label$68 : {
            while (1) {
             if ($10 - $1 >>> 0 <= 60) {
              break label$68
             }
             stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h93a1b54aa58790c3($6 + 96 | 0, $6 + 848 | 0, $1);
             $9 = HEAP32[$6 + 96 >> 2];
             if ($9) {
              break label$67
             }
             stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h93a1b54aa58790c3($6 + 88 | 0, $6 + 848 | 0, $1 + 20 | 0);
             $9 = HEAP32[$6 + 88 >> 2];
             if ($9) {
              break label$66
             }
             stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h93a1b54aa58790c3($6 + 80 | 0, $6 + 848 | 0, $1 + 40 | 0);
             $9 = HEAP32[$6 + 80 >> 2];
             if ($9) {
              break label$65
             }
             stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h93a1b54aa58790c3($6 + 72 | 0, $6 + 848 | 0, $1 + 60 | 0);
             $1 = $1 + 80 | 0;
             $9 = HEAP32[$6 + 72 >> 2];
             if (!$9) {
              continue
             }
             break;
            };
            $1 = HEAP32[$6 + 76 >> 2];
            break label$64;
           }
           $7 = $7 + Math_imul($14, 20) | 0;
           while (1) {
            if (($1 | 0) == ($7 | 0)) {
             break label$63
            }
            stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h93a1b54aa58790c3($6 + 232 | 0, $6 + 848 | 0, $1);
            $1 = $1 + 20 | 0;
            $9 = HEAP32[$6 + 232 >> 2];
            if (!$9) {
             continue
            }
            break;
           };
           $1 = HEAP32[$6 + 236 >> 2];
           break label$64;
          }
          $1 = HEAP32[$6 + 100 >> 2];
          break label$64;
         }
         $1 = HEAP32[$6 + 92 >> 2];
         break label$64;
        }
        $1 = HEAP32[$6 + 84 >> 2];
       }
       HEAP32[$0 + 4 >> 2] = $9;
       HEAP32[$0 >> 2] = 1;
       HEAP32[$0 + 8 >> 2] = $1;
       break label$62;
      }
      $19 = HEAPU8[$6 + 268 | 0];
      label$71 : {
       if (($19 | 2) == 3) {
        $29 = HEAP32[$3 + 8 >> 2];
        $20 = HEAPF32[$3 + 12 >> 2];
        break label$71;
       }
       $29 = HEAP32[$3 >> 2];
       $20 = HEAPF32[$3 + 4 >> 2];
      }
      $7 = HEAP32[$6 + 400 >> 2];
      label$73 : {
       if ($7) {
        $1 = HEAP32[$6 + 392 >> 2];
        $10 = $1 + Math_imul($7, 20) | 0;
        $11 = Math_fround(-3402823466385288598117041.0e14);
        while (1) {
         $7 = HEAP32[$1 + 8 >> 2];
         $9 = HEAP32[$1 >> 2];
         HEAP32[$6 + 856 >> 2] = $6 + 268;
         HEAP32[$6 + 848 >> 2] = $9;
         HEAP32[$6 + 852 >> 2] = $9 + Math_imul($7, 192);
         $8 = $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__hb860eedaa429039d($6 + 848 | 0);
         $11 = $11 != $11 ? $8 : $11 < $8 ? $8 : $11;
         $1 = $1 + 20 | 0;
         if (($10 | 0) != ($1 | 0)) {
          continue
         }
         break;
        };
        $14 = HEAPU8[$6 + 268 | 0];
        break label$73;
       }
       $11 = Math_fround(-3402823466385288598117041.0e14);
       $14 = $19;
      }
      $10 = (($14 | 2) & 3) == 3;
      label$76 : {
       if ($10) {
        $7 = $30;
        $1 = $17;
        break label$76;
       }
       $7 = $6 + 320 | 0;
       $1 = $13;
      }
      $8 = Math_fround(HEAPF32[$7 >> 2] + HEAPF32[$1 >> 2]);
      label$78 : {
       if ($10) {
        $9 = HEAP32[$6 + 368 >> 2];
        $18 = HEAPF32[$6 + 372 >> 2];
        break label$78;
       }
       $9 = HEAP32[$6 + 360 >> 2];
       $18 = HEAPF32[$6 + 364 >> 2];
      }
      $8 = Math_fround($11 + $8);
      if (!$9) {
       $8 = $8 < $18 ? (HEAPU32[$6 + 400 >> 2] > 1 ? $18 : $8) : $8
      }
      $11 = $29 ? $8 : $20;
      label$81 : {
       if ((($19 | 2) & 3) == 3) {
        HEAPF32[$6 + 356 >> 2] = $11;
        $11 = HEAPF32[$6 + 352 >> 2];
        break label$81;
       }
       HEAPF32[$6 + 352 >> 2] = $11;
      }
      $1 = (($14 | 2) & 3) == 3;
      if ($1) {
       $11 = HEAPF32[$6 + 356 >> 2]
      }
      label$84 : {
       if ($1) {
        $9 = $30;
        $1 = $17;
        break label$84;
       }
       $9 = $6 + 320 | 0;
       $1 = $13;
      }
      $20 = Math_fround($11 - Math_fround(HEAPF32[$9 >> 2] + HEAPF32[$1 >> 2]));
      label$86 : {
       if ((($14 | 2) & 3) == 3) {
        $28 = $20;
        $20 = Math_fround(0.0);
        break label$86;
       }
       $28 = Math_fround(0.0);
      }
      $7 = HEAP32[$6 + 392 >> 2];
      $14 = HEAP32[$6 + 400 >> 2];
      $10 = $7 + Math_imul($14, 20) | 0;
      HEAP32[$6 + 864 >> 2] = $6 + 360;
      HEAP32[$6 + 860 >> 2] = $6 + 352;
      HEAP32[$6 + 856 >> 2] = $6 + 269;
      HEAP32[$6 + 852 >> 2] = $6 + 260;
      HEAP32[$6 + 848 >> 2] = $6 + 268;
      $1 = $7;
      label$88 : {
       label$89 : {
        label$90 : {
         label$91 : {
          label$92 : {
           label$93 : {
            while (1) {
             if ($10 - $1 >>> 0 <= 60) {
              break label$93
             }
             stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h601d2dea1571a4fc($6 + 128 | 0, $6 + 848 | 0, $1);
             $9 = HEAP32[$6 + 128 >> 2];
             if ($9) {
              break label$92
             }
             stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h601d2dea1571a4fc($6 + 120 | 0, $6 + 848 | 0, $1 + 20 | 0);
             $9 = HEAP32[$6 + 120 >> 2];
             if ($9) {
              break label$91
             }
             stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h601d2dea1571a4fc($6 + 112 | 0, $6 + 848 | 0, $1 + 40 | 0);
             $9 = HEAP32[$6 + 112 >> 2];
             if ($9) {
              break label$90
             }
             stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h601d2dea1571a4fc($6 + 104 | 0, $6 + 848 | 0, $1 + 60 | 0);
             $1 = $1 + 80 | 0;
             $9 = HEAP32[$6 + 104 >> 2];
             if (!$9) {
              continue
             }
             break;
            };
            $1 = HEAP32[$6 + 108 >> 2];
            break label$89;
           }
           $7 = $7 + Math_imul($14, 20) | 0;
           while (1) {
            if (($1 | 0) == ($7 | 0)) {
             break label$88
            }
            stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h601d2dea1571a4fc($6 + 224 | 0, $6 + 848 | 0, $1);
            $1 = $1 + 20 | 0;
            $9 = HEAP32[$6 + 224 >> 2];
            if (!$9) {
             continue
            }
            break;
           };
           $1 = HEAP32[$6 + 228 >> 2];
           break label$89;
          }
          $1 = HEAP32[$6 + 132 >> 2];
          break label$89;
         }
         $1 = HEAP32[$6 + 124 >> 2];
         break label$89;
        }
        $1 = HEAP32[$6 + 116 >> 2];
       }
       HEAP32[$0 + 4 >> 2] = $9;
       HEAP32[$0 >> 2] = 1;
       HEAP32[$0 + 8 >> 2] = $1;
       break label$62;
      }
      label$96 : {
       label$97 : {
        label$98 : {
         label$99 : {
          label$100 : {
           label$101 : {
            label$102 : {
             label$103 : {
              label$104 : {
               label$105 : {
                if (!$2) {
                 break label$105
                }
                $9 = HEAP32[$6 + 400 >> 2];
                $7 = HEAP32[$6 + 392 >> 2];
                HEAP32[$6 + 860 >> 2] = $3;
                $10 = $7 + Math_imul($9, 20) | 0;
                HEAP32[$6 + 864 >> 2] = $6 + 264;
                HEAP32[$6 + 856 >> 2] = $6 + 352;
                HEAP32[$6 + 852 >> 2] = $6 + 269;
                HEAP32[$6 + 848 >> 2] = $6 + 260;
                $1 = $7;
                label$106 : {
                 while (1) {
                  if ($10 - $1 >>> 0 <= 60) {
                   break label$106
                  }
                  stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__ha11e2b1466222b90($6 + 160 | 0, $6 + 848 | 0, $1);
                  $2 = HEAP32[$6 + 160 >> 2];
                  if ($2) {
                   break label$104
                  }
                  stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__ha11e2b1466222b90($6 + 152 | 0, $6 + 848 | 0, $1 + 20 | 0);
                  $2 = HEAP32[$6 + 152 >> 2];
                  if ($2) {
                   break label$103
                  }
                  stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__ha11e2b1466222b90($6 + 144 | 0, $6 + 848 | 0, $1 + 40 | 0);
                  $2 = HEAP32[$6 + 144 >> 2];
                  if ($2) {
                   break label$102
                  }
                  stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__ha11e2b1466222b90($6 + 136 | 0, $6 + 848 | 0, $1 + 60 | 0);
                  $1 = $1 + 80 | 0;
                  $2 = HEAP32[$6 + 136 >> 2];
                  if (!$2) {
                   continue
                  }
                  break;
                 };
                 $1 = HEAP32[$6 + 140 >> 2];
                 break label$101;
                }
                $7 = $7 + Math_imul($9, 20) | 0;
                while (1) {
                 if (($1 | 0) == ($7 | 0)) {
                  break label$105
                 }
                 stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__ha11e2b1466222b90($6 + 216 | 0, $6 + 848 | 0, $1);
                 $1 = $1 + 20 | 0;
                 $2 = HEAP32[$6 + 216 >> 2];
                 if (!$2) {
                  continue
                 }
                 break;
                };
                $1 = HEAP32[$6 + 220 >> 2];
                break label$101;
               }
               $9 = HEAP32[$6 + 400 >> 2];
               if (!$9) {
                break label$99
               }
               if (($9 | 0) == 1) {
                $11 = HEAPF32[$3 + 12 >> 2];
                $8 = HEAPF32[$3 + 4 >> 2];
                $1 = HEAP32[$3 >> 2];
                $7 = HEAP32[$3 + 8 >> 2];
                $10 = $7;
                $2 = HEAPU8[$6 + 268 | 0];
                if (($2 | 2) == 3) {
                 $10 = $1
                }
                if (!$10) {
                 break label$100
                }
               }
               $80 = 20;
               $46 = HEAP32[$6 + 392 >> 2];
               $107 = $46 + Math_imul($9, 20) | 0;
               $108 = $6 + 864 | 0;
               $109 = $6 + 860 | 0;
               $110 = $6 + 856 | 0;
               $69 = 192;
               $111 = 176;
               $112 = -192;
               break label$97;
              }
              $1 = HEAP32[$6 + 164 >> 2];
              break label$101;
             }
             $1 = HEAP32[$6 + 156 >> 2];
             break label$101;
            }
            $1 = HEAP32[$6 + 148 >> 2];
           }
           HEAP32[$0 + 4 >> 2] = $2;
           HEAP32[$0 >> 2] = 1;
           HEAP32[$0 + 8 >> 2] = $1;
           break label$62;
          }
          $10 = (($2 | 2) & 3) == 3;
          if ($10) {
           $7 = $1;
           $11 = $8;
          }
          $2 = $17;
          $9 = HEAP32[$6 + 392 >> 2];
          if ($10) {
           $2 = $13;
           $1 = $6 + 320 | 0;
          } else {
           $1 = $30
          }
          HEAPF32[$9 + 12 >> 2] = $7 ? Math_fround(0.0) : Math_fround($11 - Math_fround(HEAPF32[$1 >> 2] + HEAPF32[$2 >> 2]));
          break label$98;
         }
         $1 = 0;
         break label$96;
        }
        $1 = 0;
        break label$96;
       }
       $1 = 1;
      }
      while (1) {
       label$113 : {
        label$115 : {
         label$116 : {
          label$117 : {
           label$118 : {
            label$119 : {
             label$120 : {
              label$121 : {
               label$122 : {
                label$123 : {
                 label$124 : {
                  label$125 : {
                   label$126 : {
                    label$127 : {
                     label$128 : {
                      if (!$1) {
                       $64 = HEAP32[$6 + 260 >> 2];
                       $1 = HEAP32[$64 + 8 >> 2];
                       $60 = HEAP32[$6 + 264 >> 2];
                       if ($1 >>> 0 > $60 >>> 0) {
                        label$132 : {
                         if (HEAPU8[(HEAP32[$64 >> 2] + Math_imul($60, 288) | 0) + 208 | 0] != 3) {
                          break label$132
                         }
                         $10 = HEAP32[$3 >> 2];
                         $7 = HEAP32[$3 + 8 >> 2];
                         $1 = $7;
                         $9 = HEAPU8[$6 + 268 | 0];
                         if (($9 | 2) == 3) {
                          $1 = $10
                         }
                         if ($1) {
                          break label$132
                         }
                         $18 = HEAPF32[$3 + 12 >> 2];
                         $8 = HEAPF32[$3 + 4 >> 2];
                         $21 = HEAP32[$6 + 392 >> 2];
                         $34 = HEAP32[$6 + 400 >> 2];
                         label$134 : {
                          if ($34) {
                           $2 = Math_imul($34, 20);
                           $1 = $21 + 12 | 0;
                           $11 = Math_fround(0.0);
                           while (1) {
                            $11 = Math_fround($11 + HEAPF32[$1 >> 2]);
                            $1 = $1 + 20 | 0;
                            $2 = $2 + -20 | 0;
                            if ($2) {
                             continue
                            }
                            break;
                           };
                           break label$134;
                          }
                          $11 = Math_fround(0.0);
                         }
                         $2 = $17;
                         $12 = $11;
                         $1 = (($9 | 2) & 3) == 3;
                         if ($1) {
                          $7 = $10
                         } else {
                          $8 = $18
                         }
                         if ($1) {
                          $2 = $13;
                          $1 = $6 + 320 | 0;
                         } else {
                          $1 = $30
                         }
                         $8 = $7 ? Math_fround(0.0) : Math_fround($8 - Math_fround(HEAPF32[$1 >> 2] + HEAPF32[$2 >> 2]));
                         if (!($12 < $8)) {
                          break label$132
                         }
                         if (!$34) {
                          break label$132
                         }
                         $8 = Math_fround(Math_fround($8 - $11) / Math_fround($34 >>> 0));
                         $2 = Math_imul($34, 20);
                         $1 = $21 + 12 | 0;
                         while (1) {
                          HEAPF32[$1 >> 2] = $8 + HEAPF32[$1 >> 2];
                          $1 = $1 + 20 | 0;
                          $2 = $2 + -20 | 0;
                          if ($2) {
                           continue
                          }
                          break;
                         };
                        }
                        $21 = HEAP32[$6 + 392 >> 2];
                        $1 = HEAP32[$6 + 400 >> 2];
                        if ($1) {
                         $81 = 20;
                         $82 = Math_imul($1, 20) + $21 | 0;
                         $47 = 192;
                         $113 = $64 + 8 | 0;
                         $83 = 288;
                         $114 = 7;
                         $115 = 5;
                         $32 = 2;
                         $35 = 3;
                         $84 = 32;
                         $70 = 1;
                         $85 = 40;
                         $86 = 144;
                         $87 = 1051144;
                         $88 = 1051128;
                         $116 = 28;
                         $117 = 24;
                         $89 = 48;
                         $118 = 44;
                         $119 = 36;
                         $120 = 152;
                         $121 = 56;
                         $122 = 148;
                         $53 = 160;
                         $90 = 164;
                         $123 = 168;
                         $124 = 172;
                         $125 = 4;
                         $34 = $21;
                         $54 = 1;
                         break label$128;
                        }
                        $55 = 0;
                        $15 = $21;
                        break label$119;
                       }
                       core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $60, $1);
                       abort();
                      }
                      label$141 : {
                       label$142 : {
                        switch ($54 | 0) {
                        case 0:
                         $11 = Math_fround(0.0);
                         $7 = HEAP32[$46 + 8 >> 2];
                         if ($7) {
                          $2 = Math_imul($7, $69);
                          $1 = HEAP32[$46 >> 2] + $111 | 0;
                          while (1) {
                           $8 = HEAPF32[$1 >> 2];
                           $11 = $11 != $11 ? $8 : $11 < $8 ? $8 : $11;
                           $1 = $1 + $69 | 0;
                           $2 = $2 + $112 | 0;
                           if ($2) {
                            continue
                           }
                           break;
                          };
                         }
                         HEAPF32[$6 + 672 >> 2] = $11;
                         HEAP32[($6 + 848 | 0) + $80 >> 2] = $6 + 672;
                         HEAP32[$108 >> 2] = $6 + 268;
                         HEAP32[$109 >> 2] = $6 + 264;
                         HEAP32[$110 >> 2] = $6 + 260;
                         $1 = HEAP32[$46 >> 2];
                         HEAP32[$6 + 848 >> 2] = $1;
                         HEAP32[$6 + 852 >> 2] = $1 + Math_imul($7, $69);
                         (wasm2js_i32$0 = $46, wasm2js_f32$0 = $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__h6431a241e07b125a($6 + 848 | 0)), HEAPF32[wasm2js_i32$0 + 12 >> 2] = wasm2js_f32$0;
                         $46 = $46 + $80 | 0;
                         if (($46 | 0) != ($107 | 0)) {
                          break label$126
                         }
                         $1 = 0;
                         continue;
                        case 1:
                         $1 = HEAP32[$34 + 8 >> 2];
                         if ($1) {
                          $8 = HEAPF32[$34 + 12 >> 2];
                          $9 = Math_imul($1, $47);
                          $2 = 0;
                          $23 = HEAP32[$34 >> 2];
                          $10 = $23;
                          while (1) {
                           $7 = HEAP32[$113 >> 2];
                           $22 = $2 + $23 | 0;
                           $1 = HEAP32[$22 >> 2];
                           if ($7 >>> 0 <= $1 >>> 0) {
                            break label$123
                           }
                           if ($7 >>> 0 <= $60 >>> 0) {
                            break label$124
                           }
                           $19 = HEAPU8[$6 + 268 | 0];
                           label$149 : {
                            label$150 : {
                             $7 = HEAP32[$64 >> 2];
                             $26 = $7 + Math_imul($1, $83) | 0;
                             $1 = HEAPU8[$26 + 207 | 0];
                             if (($115 | 0) != ($1 & $114)) {
                              if ($1) {
                               break label$150
                              }
                              if (HEAPU8[($7 + Math_imul($60, $83) | 0) + 206 | 0] < $125 >>> 0) {
                               break label$150
                              }
                             }
                             $14 = (($19 | $32) & $35) == ($35 | 0);
                             $1 = $26 + $89 | 0;
                             label$152 : {
                              if (!$14) {
                               break label$152
                              }
                              $1 = $26 + $84 | 0;
                             }
                             if (HEAP32[$1 >> 2] == ($70 | 0)) {
                              break label$150
                             }
                             if (HEAP32[($14 ? $26 + $85 | 0 : $26 + $121 | 0) >> 2] == ($70 | 0)) {
                              break label$150
                             }
                             if (HEAP32[($14 ? $26 + $86 | 0 : $26 + $120 | 0) >> 2] != ($70 | 0)) {
                              break label$150
                             }
                             $1 = (($19 ^ $32) & $35) << $32;
                             $18 = Math_fround($8 - Math_fround(HEAPF32[$23 + ((HEAP32[$1 + $88 >> 2] << $32) + $2 | 0) >> 2] + HEAPF32[$23 + ((HEAP32[$1 + $87 >> 2] << $32) + $2 | 0) >> 2]));
                             $12 = $18;
                             label$158 : {
                              if (!$14) {
                               $7 = HEAP32[$22 + $116 >> 2];
                               $11 = HEAPF32[$22 + $84 >> 2];
                               break label$158;
                              }
                              $7 = HEAP32[$22 + $81 >> 2];
                              $11 = HEAPF32[$22 + $117 >> 2];
                             }
                             $18 = $7 ? $12 : $18 != $18 ? $11 : $18 < $11 ? $11 : $18;
                             $36 = $18;
                             $48 = $18;
                             $12 = $18;
                             label$160 : {
                              if (!$14) {
                               $7 = HEAP32[$22 + $118 >> 2];
                               $11 = HEAPF32[$22 + $89 >> 2];
                               break label$160;
                              }
                              $7 = HEAP32[$22 + $119 >> 2];
                              $11 = HEAPF32[$22 + $85 >> 2];
                             }
                             $11 = $7 ? $36 : $11 != $11 ? $48 : $18 < $11 ? $12 : $11;
                             break label$149;
                            }
                            $11 = HEAPF32[$22 + $122 >> 2];
                            if (($35 | 0) != (($19 | $32) & $35)) {
                             break label$149
                            }
                            $11 = HEAPF32[$22 + $86 >> 2];
                           }
                           $1 = (($19 | $32) & $35) == ($35 | 0);
                           label$163 : {
                            label$164 : {
                             if (!$1) {
                              HEAPF32[$22 + $90 >> 2] = $11;
                              if ($1) {
                               break label$164
                              }
                              break label$163;
                             }
                             HEAPF32[$22 + $53 >> 2] = $11;
                             $11 = HEAPF32[$22 + $90 >> 2];
                             if (!$1) {
                              break label$163
                             }
                            }
                            $11 = HEAPF32[$22 + $53 >> 2];
                           }
                           $1 = $1 ? $10 + $123 | 0 : $22 + $124 | 0;
                           $10 = $10 + $47 | 0;
                           $7 = $1;
                           $1 = (($19 ^ $32) & $35) << $32;
                           HEAPF32[$7 >> 2] = $11 + Math_fround(HEAPF32[$23 + ((HEAP32[$1 + $88 >> 2] << $32) + $2 | 0) >> 2] + HEAPF32[$23 + ((HEAP32[$1 + $87 >> 2] << $32) + $2 | 0) >> 2]);
                           $2 = $2 + $47 | 0;
                           if (($9 | 0) != ($2 | 0)) {
                            continue
                           }
                           break;
                          };
                         }
                         $34 = $34 + $81 | 0;
                         if (($34 | 0) != ($82 | 0)) {
                          break label$127
                         }
                         $71 = 8;
                         $91 = $6 + 856 | 0;
                         $33 = 192;
                         $92 = 20;
                         $126 = 2;
                         $16 = 3;
                         $37 = 1;
                         $127 = $6 + 864 | 0;
                         $128 = $6 + 860 | 0;
                         $129 = 180;
                         $61 = Math_fround(.5);
                         $72 = -1;
                         $44 = 288;
                         $130 = 4;
                         $56 = -192;
                         $93 = 48;
                         $94 = 56;
                         $95 = 255;
                         $131 = 92;
                         $132 = 84;
                         $133 = 96;
                         $134 = 88;
                         $96 = 40;
                         $97 = 32;
                         $54 = 2;
                         break label$141;
                        case 2:
                         break label$142;
                        default:
                         break label$122;
                        };
                       }
                       $1 = HEAP32[$21 + 8 >> 2];
                       $2 = HEAP32[$21 >> 2];
                       HEAP32[$91 >> 2] = $6 + 268;
                       HEAP32[$6 + 848 >> 2] = $2;
                       HEAP32[$6 + 852 >> 2] = $2 + Math_imul($1, $33);
                       $8 = $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__hb860eedaa429039d($6 + 848 | 0);
                       $1 = $6;
                       $19 = HEAPU8[$6 + 268 | 0];
                       $14 = $19 | $126;
                       if (($16 | 0) == ($14 | 0)) {
                        $11 = $28
                       } else {
                        $11 = $20
                       }
                       $38 = Math_fround($11 - $8);
                       HEAPF32[$1 + 496 >> 2] = $38;
                       $24 = HEAP32[$21 + $71 >> 2];
                       if (!$24) {
                        break label$121
                       }
                       $22 = HEAP32[$6 + 260 >> 2];
                       $31 = HEAP32[$22 + 8 >> 2];
                       $10 = 0;
                       $9 = Math_imul($24, $33);
                       $7 = $9;
                       $29 = HEAP32[$21 >> 2];
                       $1 = $29;
                       while (1) {
                        $45 = HEAP32[$1 >> 2];
                        if ($31 >>> 0 <= $45 >>> 0) {
                         break label$125
                        }
                        $26 = HEAP32[$22 >> 2];
                        $23 = ($14 & $16) == ($16 | 0);
                        $2 = ($26 + Math_imul($44, $45) | 0) + $97 | 0;
                        label$170 : {
                         if (!$23) {
                          break label$170
                         }
                         $2 = ($26 + Math_imul($44, $45) | 0) + $93 | 0;
                        }
                        $2 = $10 + (HEAP32[$2 >> 2] == ($37 | 0)) | 0;
                        $1 = $1 + $33 | 0;
                        if ($23) {
                         $10 = ($26 + Math_imul($44, $45) | 0) + $94 | 0
                        } else {
                         $10 = ($26 + Math_imul($44, $45) | 0) + $96 | 0
                        }
                        $10 = $2 + (HEAP32[$10 >> 2] == ($37 | 0)) | 0;
                        $7 = $7 + $56 | 0;
                        if ($7) {
                         continue
                        }
                        break;
                       };
                       if ($38 > Math_fround(0.0) ^ $37) {
                        break label$121
                       }
                       if (($10 | 0) <= 0) {
                        break label$121
                       }
                       $1 = HEAP32[$29 >> 2];
                       if ($31 >>> 0 > $1 >>> 0) {
                        $8 = Math_fround($38 / Math_fround($10 | 0));
                        $2 = HEAPU8[$6 + 269 | 0];
                        $7 = $9 + $56 | 0;
                        while (1) {
                         $10 = HEAP32[$22 >> 2];
                         $9 = $37;
                         if ($23) {
                          $19 = ($10 + Math_imul($1, $44) | 0) + $93 | 0
                         } else {
                          $19 = ($10 + Math_imul($1, $44) | 0) + $97 | 0
                         }
                         if (($9 | 0) == HEAP32[$19 >> 2]) {
                          HEAPF32[($2 & $95 ? $132 : $131) + $29 >> 2] = $8
                         }
                         $9 = $37;
                         if ($23) {
                          $1 = ($10 + Math_imul($1, $44) | 0) + $94 | 0
                         } else {
                          $1 = ($10 + Math_imul($1, $44) | 0) + $96 | 0
                         }
                         if (($9 | 0) == HEAP32[$1 >> 2]) {
                          HEAPF32[($2 & $95 ? $134 : $133) + $29 >> 2] = $8
                         }
                         if (!$7) {
                          break label$120
                         }
                         $7 = $7 + $56 | 0;
                         $31 = HEAP32[$22 + $71 >> 2];
                         $29 = $29 + $33 | 0;
                         $1 = HEAP32[$29 >> 2];
                         if ($31 >>> 0 > $1 >>> 0) {
                          continue
                         }
                         break;
                        };
                       }
                       core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $1, $31);
                       abort();
                      }
                      $1 = 1;
                      continue;
                     }
                     $1 = 1;
                     continue;
                    }
                    $54 = 1;
                    $1 = 1;
                    continue;
                   }
                   $54 = 0;
                   $1 = 1;
                   continue;
                  }
                  core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $45, $31);
                  abort();
                 }
                 core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $60, $7);
                 abort();
                }
                core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $1, $7);
                abort();
               }
               label$182 : {
                label$183 : {
                 label$184 : {
                  $7 = HEAP32[$49 + 8 >> 2];
                  label$185 : {
                   if (!$7) {
                    break label$185
                   }
                   $14 = HEAP32[$49 >> 2];
                   $1 = $14 + $98 | 0;
                   $11 = Math_fround(0.0);
                   $10 = Math_imul($7, $73);
                   $2 = $10;
                   while (1) {
                    $8 = HEAPF32[$1 >> 2];
                    $11 = $11 != $11 ? $8 : $11 < $8 ? $8 : $11;
                    $1 = $1 + $73 | 0;
                    $2 = $2 + $135 | 0;
                    if ($2) {
                     continue
                    }
                    break;
                   };
                   if (!$7) {
                    break label$185
                   }
                   $18 = HEAPF32[$49 + 12 >> 2];
                   $1 = 0;
                   $7 = HEAPU8[$6 + 268 | 0];
                   while (1) {
                    $23 = $1 + $14 | 0;
                    $9 = (($7 | $99) & $74) == ($74 | 0);
                    $8 = HEAPF32[$23 + $136 >> 2];
                    label$188 : {
                     if (!$9) {
                      break label$188
                     }
                     $8 = HEAPF32[$23 + $137 >> 2];
                    }
                    $2 = HEAP32[$6 + 260 >> 2];
                    $19 = HEAP32[$2 + 8 >> 2];
                    $22 = HEAP32[$23 >> 2];
                    if ($19 >>> 0 <= $22 >>> 0) {
                     break label$184
                    }
                    $26 = HEAP32[$2 >> 2];
                    $12 = Math_fround($18 - $8);
                    $29 = $14;
                    label$192 : {
                     label$193 : {
                      label$194 : {
                       label$195 : {
                        label$196 : {
                         label$197 : {
                          label$198 : {
                           label$199 : {
                            label$200 : {
                             label$201 : {
                              label$202 : {
                               label$203 : {
                                if ($9) {
                                 $2 = ($26 + Math_imul($22, $42) | 0) + $100 | 0
                                } else {
                                 $2 = ($26 + Math_imul($22, $42) | 0) + $101 | 0
                                }
                                if (HEAP32[$2 >> 2] != ($57 | 0)) {
                                 break label$203
                                }
                                if ($9) {
                                 $2 = ($26 + Math_imul($22, $42) | 0) + $102 | 0
                                } else {
                                 $2 = ($26 + Math_imul($22, $42) | 0) + $103 | 0
                                }
                                if (HEAP32[$2 >> 2] != ($57 | 0)) {
                                 break label$203
                                }
                                if (!HEAPU8[$6 + 269 | 0]) {
                                 break label$202
                                }
                                $12 = Math_fround($12 * $25);
                                HEAPF32[$23 + $138 >> 2] = $12;
                                $2 = 24;
                                break label$192;
                               }
                               $2 = HEAPU8[$6 + 269 | 0] ? $139 : $140;
                               $31 = $57;
                               if ($9) {
                                $24 = ($26 + Math_imul($22, $42) | 0) + $100 | 0
                               } else {
                                $24 = ($26 + Math_imul($22, $42) | 0) + $101 | 0
                               }
                               if (($31 | 0) == HEAP32[$24 >> 2]) {
                                break label$192
                               }
                               $2 = HEAPU8[$6 + 269 | 0] ? $27 : $43;
                               $31 = $57;
                               if ($9) {
                                $9 = ($26 + Math_imul($22, $42) | 0) + $102 | 0
                               } else {
                                $9 = ($26 + Math_imul($22, $42) | 0) + $103 | 0
                               }
                               if (($31 | 0) == HEAP32[$9 >> 2]) {
                                break label$192
                               }
                               $9 = HEAP32[$6 + 264 >> 2];
                               if ($19 >>> 0 <= $9 >>> 0) {
                                break label$183
                               }
                               $2 = HEAPU8[($26 + Math_imul($22, $42) | 0) + 207 | 0];
                               if (!$2) {
                                break label$201
                               }
                               $2 = $2 + $104 | 0;
                               if ($2 >>> 0 > $50 >>> 0) {
                                break label$195
                               }
                               switch ($2 - 1 | 0) {
                               case 1:
                                break label$196;
                               case 2:
                                break label$197;
                               case 3:
                                break label$199;
                               case 0:
                                break label$200;
                               default:
                                break label$198;
                               };
                              }
                              $12 = Math_fround($12 * $25);
                              HEAPF32[$23 + $65 >> 2] = $12;
                              $2 = 22;
                              break label$192;
                             }
                             $2 = HEAPU8[($26 + Math_imul($9, $42) | 0) + 206 | 0] + $104 | 0;
                             if ($2 >>> 0 > $74 >>> 0) {
                              break label$198
                             }
                             switch ($2 - 1 | 0) {
                             case 0:
                              break label$196;
                             case 1:
                              break label$197;
                             case 2:
                              break label$199;
                             default:
                              break label$200;
                             };
                            }
                            $12 = HEAPU8[$6 + 271 | 0] ? Math_fround(0.0) : $12;
                            break label$193;
                           }
                           $12 = HEAPU8[$6 + 271 | 0] ? $12 : Math_fround(0.0);
                           break label$193;
                          }
                          $12 = HEAPU8[$6 + 271 | 0] ? $12 : Math_fround(0.0);
                          break label$193;
                         }
                         if (!HEAPU8[$6 + 269 | 0]) {
                          break label$194
                         }
                         $12 = Math_fround($11 - HEAPF32[$23 + $98 >> 2]);
                         break label$193;
                        }
                        $12 = Math_fround($12 * $25);
                        break label$193;
                       }
                       $12 = Math_fround(0.0);
                       break label$193;
                      }
                      $12 = HEAPU8[$6 + 271 | 0] ? $12 : Math_fround(0.0);
                     }
                     $2 = 46;
                    }
                    HEAPF32[$29 + (($2 << $99) + $1 | 0) >> 2] = $12;
                    $1 = $1 + $73 | 0;
                    if (($10 | 0) != ($1 | 0)) {
                     continue
                    }
                    break;
                   };
                  }
                  $49 = $49 + $75 | 0;
                  if (($49 | 0) != ($21 | 0)) {
                   break label$182
                  }
                  break label$119;
                 }
                 core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $22, $19);
                 abort();
                }
                core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $9, $19);
                abort();
               }
               $54 = 3;
               $1 = 1;
               continue;
              }
              HEAP32[$6 + 672 >> 2] = $24;
              $1 = ($19 | $37) == ($16 | 0);
              HEAP8[$6 + 816 | 0] = $1;
              $9 = Math_imul($24, $33);
              $2 = HEAP32[$21 >> 2];
              if ($1) {
               HEAP32[($6 + 848 | 0) + $92 >> 2] = 0;
               HEAP32[$127 >> 2] = $6 + 672;
               HEAP32[$128 >> 2] = $6 + 496;
               HEAP32[$91 >> 2] = $6 + 816;
               HEAP32[$6 + 852 >> 2] = $6 + 264;
               HEAP32[$6 + 848 >> 2] = $6 + 260;
               $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___fold__h6d7294a172877643($2, $2 + $9 | 0, $6 + 848 | 0);
               break label$120;
              }
              if (!$24) {
               break label$120
              }
              $1 = $2 + $129 | 0;
              $48 = Math_fround($38 * $61);
              $66 = Math_fround($38 / Math_fround($24 + $72 >>> 0));
              $12 = Math_fround($38 / Math_fround($24 >>> 0));
              $18 = Math_fround($12 * $61);
              $8 = Math_fround($38 / Math_fround($24 + $37 >>> 0));
              $2 = 0;
              $14 = HEAP32[$6 + 260 >> 2];
              while (1) {
               $7 = HEAP32[$14 + $71 >> 2];
               $10 = HEAP32[$6 + 264 >> 2];
               if ($7 >>> 0 <= $10 >>> 0) {
                break label$118
               }
               $7 = HEAPU8[(HEAP32[$14 >> 2] + Math_imul($10, $44) | 0) + 209 | 0] + $72 | 0;
               label$214 : {
                if ($7 >>> 0 <= $130 >>> 0) {
                 $11 = $8;
                 label$216 : {
                  switch ($7 - 1 | 0) {
                  default:
                   $11 = $2 ? Math_fround(0.0) : $38;
                   break label$214;
                  case 2:
                   $11 = $2 ? $12 : $18;
                   break label$214;
                  case 0:
                   $11 = $2 ? Math_fround(0.0) : $48;
                   break label$214;
                  case 3:
                   break label$214;
                  case 1:
                   break label$216;
                  };
                 }
                 $11 = $2 ? $66 : Math_fround(0.0);
                 break label$214;
                }
                $11 = Math_fround(0.0);
               }
               HEAPF32[$1 >> 2] = $11;
               $1 = $1 + $33 | 0;
               $2 = $2 + $72 | 0;
               $9 = $9 + $56 | 0;
               if ($9) {
                continue
               }
               break;
              };
             }
             $21 = $21 + $92 | 0;
             if (($82 | 0) != ($21 | 0)) {
              break label$116
             }
             $75 = 20;
             $15 = HEAP32[$6 + 392 >> 2];
             $55 = HEAP32[$6 + 400 >> 2];
             $21 = $15 + Math_imul($55, 20) | 0;
             if ($55) {
              $73 = 192;
              $98 = 176;
              $135 = -192;
              $99 = 2;
              $74 = 3;
              $136 = 172;
              $137 = 168;
              $42 = 288;
              $100 = 32;
              $57 = 1;
              $102 = 40;
              $25 = Math_fround(.5);
              $65 = 84;
              $138 = 92;
              $103 = 56;
              $140 = 21;
              $139 = 23;
              $43 = 22;
              $27 = 24;
              $104 = -1;
              $50 = 4;
              $101 = 48;
              $49 = $15;
              $54 = 3;
              break label$115;
             }
             $55 = 0;
            }
            $11 = Math_fround(0.0);
            $16 = ($15 | 0) == ($21 | 0);
            if (!$16) {
             $1 = $15;
             while (1) {
              $11 = Math_fround($11 + HEAPF32[$1 + 12 >> 2]);
              $1 = $1 + 20 | 0;
              if (($21 | 0) != ($1 | 0)) {
               continue
              }
              break;
             };
            }
            $7 = HEAPU8[$6 + 268 | 0];
            $1 = $7 | 2;
            if (($1 | 0) != 3) {
             break label$117
            }
            $12 = HEAPF32[$3 + 4 >> 2];
            $10 = HEAP32[$3 >> 2];
            break label$113;
           }
           core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $10, $7);
           abort();
          }
          $12 = HEAPF32[$3 + 12 >> 2];
          $10 = HEAP32[$3 + 8 >> 2];
          break label$113;
         }
         $54 = 2;
         $1 = 1;
         continue;
        }
        $1 = 1;
        continue;
       }
       break;
      };
      $2 = $17;
      $8 = $11;
      if (($1 & 3) == 3) {
       $2 = $13;
       $1 = $6 + 320 | 0;
      } else {
       $1 = $30
      }
      $12 = $10 ? Math_fround($8 + Math_fround(HEAPF32[$1 >> 2] + HEAPF32[$2 >> 2])) : $12;
      label$224 : {
       if ((($7 | 2) & 3) == 3) {
        HEAPF32[$6 + 352 >> 2] = $12;
        $12 = HEAPF32[$6 + 356 >> 2];
        break label$224;
       }
       HEAPF32[$6 + 356 >> 2] = $12;
      }
      $2 = $17;
      $1 = (($7 | 2) & 3) == 3;
      if ($1) {
       $8 = HEAPF32[$6 + 352 >> 2]
      } else {
       $8 = $12
      }
      if ($1) {
       $2 = $13;
       $1 = $6 + 320 | 0;
      } else {
       $1 = $30
      }
      $18 = Math_fround($8 - Math_fround(HEAPF32[$1 >> 2] + HEAPF32[$2 >> 2]));
      label$228 : {
       label$229 : {
        if ((($7 | 2) & 3) == 3) {
         if (!$5) {
          break label$229
         }
         break label$228;
        }
        $28 = $18;
        $18 = $20;
        if ($5) {
         break label$228
        }
       }
       $13 = HEAP32[$6 + 352 >> 2];
       $5 = $3 + 8 | 0;
       $2 = HEAP32[$5 + 4 >> 2];
       $15 = $6 + 856 | 0;
       $1 = $15;
       HEAP32[$1 >> 2] = HEAP32[$5 >> 2];
       HEAP32[$1 + 4 >> 2] = $2;
       $5 = $4 + 8 | 0;
       $2 = HEAP32[$5 + 4 >> 2];
       $7 = $6 + 872 | 0;
       $1 = $7;
       HEAP32[$1 >> 2] = HEAP32[$5 >> 2];
       HEAP32[$1 + 4 >> 2] = $2;
       $1 = HEAP32[$3 + 4 >> 2];
       HEAP32[$6 + 848 >> 2] = HEAP32[$3 >> 2];
       HEAP32[$6 + 852 >> 2] = $1;
       $1 = HEAP32[$4 + 4 >> 2];
       HEAP32[$6 + 864 >> 2] = HEAP32[$4 >> 2];
       HEAP32[$6 + 868 >> 2] = $1;
       $2 = HEAP32[$6 + 260 >> 2];
       $1 = HEAP32[$2 + 8 >> 2];
       $3 = HEAP32[$6 + 264 >> 2];
       if ($1 >>> 0 > $3 >>> 0) {
        $1 = HEAP32[$6 + 852 >> 2];
        $4 = HEAP32[$2 >> 2] + Math_imul($3, 288) | 0;
        HEAP32[$4 + 240 >> 2] = HEAP32[$6 + 848 >> 2];
        HEAP32[$4 + 244 >> 2] = $1;
        $2 = HEAP32[$7 + 4 >> 2];
        $1 = $4 + 264 | 0;
        HEAP32[$1 >> 2] = HEAP32[$7 >> 2];
        HEAP32[$1 + 4 >> 2] = $2;
        $3 = $6 + 864 | 0;
        $2 = HEAP32[$3 + 4 >> 2];
        $1 = $4 + 256 | 0;
        HEAP32[$1 >> 2] = HEAP32[$3 >> 2];
        HEAP32[$1 + 4 >> 2] = $2;
        $2 = HEAP32[$15 + 4 >> 2];
        $1 = $4 + 248 | 0;
        HEAP32[$1 >> 2] = HEAP32[$15 >> 2];
        HEAP32[$1 + 4 >> 2] = $2;
        HEAP8[$4 + 280 | 0] = 0;
        HEAPF32[$4 + 276 >> 2] = $12;
        HEAP32[$4 + 272 >> 2] = $13;
        $2 = $4 + 281 | 0;
        $1 = HEAPU8[$6 + 672 | 0] | HEAPU8[$6 + 673 | 0] << 8;
        HEAP8[$2 | 0] = $1;
        HEAP8[$2 + 1 | 0] = $1 >>> 8;
        HEAP8[$4 + 283 | 0] = HEAPU8[$6 + 674 | 0];
        HEAPF32[$0 + 8 >> 2] = $12;
        HEAP32[$0 + 4 >> 2] = $13;
        HEAP32[$0 >> 2] = 0;
        break label$62;
       }
       core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $3, $1);
       abort();
      }
      $12 = Math_fround(((($7 | 2) & 3) == 3 ? $18 : $28) - $11);
      HEAPF32[$6 + 424 >> 2] = $12;
      HEAP32[$6 + 464 >> 2] = $55;
      label$234 : {
       label$235 : {
        label$236 : {
         label$237 : {
          label$238 : {
           label$239 : {
            if (HEAPU8[$6 + 271 | 0]) {
             HEAP32[$6 + 868 >> 2] = 0;
             HEAP32[$6 + 864 >> 2] = $6 + 464;
             HEAP32[$6 + 860 >> 2] = $6 + 424;
             HEAP32[$6 + 856 >> 2] = $6 + 271;
             HEAP32[$6 + 852 >> 2] = $6 + 264;
             HEAP32[$6 + 848 >> 2] = $6 + 260;
             $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___fold__hb6f361fea9c2bb5f($15, $21, $6 + 848 | 0);
             $7 = HEAPU8[$6 + 268 | 0];
             break label$239;
            }
            if ($16) {
             break label$239
            }
            $28 = Math_fround($12 * Math_fround(.5));
            $18 = Math_fround($12 / Math_fround($55 + -1 >>> 0));
            $20 = Math_fround($12 / Math_fround($55 >>> 0));
            $8 = Math_fround($20 * Math_fround(.5));
            $2 = 0;
            $10 = HEAP32[$6 + 260 >> 2];
            $16 = $10 + 8 | 0;
            while (1) {
             $1 = HEAP32[$16 >> 2];
             $5 = HEAP32[$6 + 264 >> 2];
             if ($1 >>> 0 <= $5 >>> 0) {
              break label$238
             }
             $1 = $15;
             $15 = $1 + 20 | 0;
             $11 = Math_fround(0.0);
             $5 = HEAPU8[(HEAP32[$10 >> 2] + Math_imul($5, 288) | 0) + 208 | 0] + -1 | 0;
             label$242 : {
              if ($5 >>> 0 > 4) {
               break label$242
              }
              label$243 : {
               switch ($5 - 1 | 0) {
               default:
                $11 = $2 ? Math_fround(0.0) : $12;
                break label$242;
               case 3:
                $11 = $2 ? $20 : $8;
                break label$242;
               case 0:
                $11 = $2 ? Math_fround(0.0) : $28;
                break label$242;
               case 1:
                break label$242;
               case 2:
                break label$243;
               };
              }
              $11 = $2 ? $18 : Math_fround(0.0);
             }
             HEAPF32[$1 + 16 >> 2] = $11;
             $2 = $2 + -1 | 0;
             if (($15 | 0) != ($21 | 0)) {
              continue
             }
             break;
            };
           }
           HEAP32[$6 + 680 >> 2] = 0;
           HEAP32[$6 + 672 >> 2] = 4;
           HEAP32[$6 + 676 >> 2] = 0;
           HEAP32[$6 + 816 >> 2] = HEAP32[((($7 | 2) & 3) == 3 ? $6 + 320 | 0 : $30) >> 2];
           label$248 : {
            if (HEAPU8[$6 + 271 | 0]) {
             $1 = HEAP32[$6 + 392 >> 2];
             HEAP32[$6 + 496 >> 2] = $1;
             HEAP32[$6 + 500 >> 2] = $1 + Math_imul(HEAP32[$6 + 400 >> 2], 20);
             HEAP32[$6 + 880 >> 2] = $6 + 672;
             HEAP32[$6 + 876 >> 2] = $6 + 270;
             HEAP32[$6 + 872 >> 2] = $6 + 269;
             HEAP32[$6 + 868 >> 2] = $6 + 264;
             HEAP32[$6 + 864 >> 2] = $6 + 816;
             HEAP32[$6 + 860 >> 2] = $6 + 352;
             HEAP32[$6 + 856 >> 2] = $6 + 260;
             HEAP32[$6 + 852 >> 2] = $6 + 268;
             HEAP32[$6 + 848 >> 2] = $6 + 320;
             $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___try_fold__h3910027a1d12e1fd($6 + 208 | 0, $6 + 496 | 0, $6 + 848 | 0);
             $2 = HEAP32[$6 + 208 >> 2];
             if (!$2) {
              break label$248
             }
             $1 = HEAP32[$6 + 212 >> 2];
             break label$234;
            }
            $5 = HEAP32[$6 + 392 >> 2];
            $15 = HEAP32[$6 + 400 >> 2];
            $7 = $5 + Math_imul($15, 20) | 0;
            HEAP32[$6 + 880 >> 2] = $6 + 672;
            HEAP32[$6 + 876 >> 2] = $6 + 270;
            HEAP32[$6 + 872 >> 2] = $6 + 269;
            HEAP32[$6 + 868 >> 2] = $6 + 264;
            HEAP32[$6 + 864 >> 2] = $6 + 816;
            HEAP32[$6 + 860 >> 2] = $6 + 352;
            HEAP32[$6 + 856 >> 2] = $6 + 260;
            HEAP32[$6 + 852 >> 2] = $6 + 268;
            HEAP32[$6 + 848 >> 2] = $6 + 320;
            $1 = $5;
            label$250 : {
             while (1) {
              if ($7 - $1 >>> 0 <= 60) {
               break label$250
              }
              stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__hb96275d0dca88567($6 + 192 | 0, $6 + 848 | 0, $1);
              $2 = HEAP32[$6 + 192 >> 2];
              if ($2) {
               break label$235
              }
              stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__hb96275d0dca88567($6 + 184 | 0, $6 + 848 | 0, $1 + 20 | 0);
              $2 = HEAP32[$6 + 184 >> 2];
              if ($2) {
               break label$236
              }
              stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__hb96275d0dca88567($6 + 176 | 0, $6 + 848 | 0, $1 + 40 | 0);
              $2 = HEAP32[$6 + 176 >> 2];
              if ($2) {
               break label$237
              }
              stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__hb96275d0dca88567($6 + 168 | 0, $6 + 848 | 0, $1 + 60 | 0);
              $1 = $1 + 80 | 0;
              $2 = HEAP32[$6 + 168 >> 2];
              if (!$2) {
               continue
              }
              break;
             };
             $1 = HEAP32[$6 + 172 >> 2];
             break label$234;
            }
            $5 = $5 + Math_imul($15, 20) | 0;
            while (1) {
             if (($1 | 0) == ($5 | 0)) {
              break label$248
             }
             stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__hb96275d0dca88567($6 + 200 | 0, $6 + 848 | 0, $1);
             $1 = $1 + 20 | 0;
             $2 = HEAP32[$6 + 200 >> 2];
             if (!$2) {
              continue
             }
             break;
            };
            $1 = HEAP32[$6 + 204 >> 2];
            break label$234;
           }
           $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__hf813763ce0f151ff($6 + 672 | 0);
           if (HEAP32[$6 + 676 >> 2]) {
            dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$6 + 672 >> 2])
           }
           $2 = HEAP32[$6 + 260 >> 2];
           $5 = HEAP32[$2 + 20 >> 2];
           $1 = HEAP32[$6 + 264 >> 2];
           if ($5 >>> 0 > $1 >>> 0) {
            $2 = HEAP32[$2 + 12 >> 2] + Math_imul($1, 12) | 0;
            $1 = HEAP32[$2 + 8 >> 2];
            $2 = HEAP32[$2 >> 2];
            HEAP32[$6 + 856 >> 2] = 0;
            HEAP32[$6 + 848 >> 2] = $2;
            HEAP32[$6 + 852 >> 2] = $2 + ($1 << 2);
            HEAP32[$6 + 860 >> 2] = $6 + 260;
            $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____from_iter__h332771a412e39cee($6 + 640 | 0, $6 + 848 | 0);
            $5 = HEAP32[$6 + 648 >> 2];
            $2 = HEAP32[$6 + 644 >> 2];
            $1 = HEAP32[$6 + 640 >> 2];
            HEAP32[$6 + 504 >> 2] = $1;
            HEAP32[$6 + 500 >> 2] = $2;
            HEAP32[$6 + 496 >> 2] = $1;
            HEAP32[$6 + 508 >> 2] = ($5 << 3) + $1;
            label$255 : {
             label$256 : {
              label$257 : {
               if ($5) {
                while (1) {
                 $65 = $6 + 504 | 0;
                 HEAP32[$65 >> 2] = $1 + 8;
                 label$260 : {
                  label$261 : {
                   label$262 : {
                    $33 = HEAP32[$6 + 260 >> 2];
                    $2 = HEAP32[$33 + 8 >> 2];
                    $50 = HEAP32[$1 + 4 >> 2];
                    if ($2 >>> 0 > $50 >>> 0) {
                     $75 = HEAP32[$1 >> 2];
                     $39 = HEAPF32[$6 + 352 >> 2];
                     $34 = Math_imul($50, 288);
                     $16 = $34 + HEAP32[$33 >> 2] | 0;
                     $49 = HEAPU8[$16 + 207 | 0];
                     $5 = HEAP32[$16 + 32 >> 2];
                     $12 = HEAPF32[$16 + 4 >> 2];
                     $28 = HEAPF32[$16 + 188 >> 2];
                     $2 = HEAP32[$16 + 184 >> 2];
                     $18 = HEAPF32[$16 + 172 >> 2];
                     $9 = HEAP32[$16 + 168 >> 2];
                     $40 = HEAPF32[$16 + 156 >> 2];
                     $25 = HEAPF32[$16 + 148 >> 2];
                     $36 = HEAPF32[$16 + 60 >> 2];
                     $11 = HEAPF32[$16 + 52 >> 2];
                     $20 = HEAPF32[$16 + 44 >> 2];
                     $58 = HEAPF32[$16 + 36 >> 2];
                     $8 = HEAPF32[$16 + 28 >> 2];
                     $51 = HEAPF32[$16 + 20 >> 2];
                     $52 = HEAPF32[$16 + 12 >> 2];
                     $1 = HEAP32[$16 >> 2];
                     label$265 : {
                      label$266 : {
                       if (($1 | 0) != 3) {
                        $56 = 1;
                        if (($1 | 0) == 2) {
                         break label$266
                        }
                        break label$265;
                       }
                       $12 = Math_fround($39 * $12);
                      }
                      $56 = 0;
                     }
                     label$268 : {
                      label$269 : {
                       if (($5 | 0) != 3) {
                        $57 = 1;
                        if (($5 | 0) == 2) {
                         break label$269
                        }
                        break label$268;
                       }
                       $58 = Math_fround($39 * $58);
                      }
                      $57 = 0;
                     }
                     $1 = 1;
                     $32 = 1;
                     if (!$56) {
                      $32 = 0;
                      $61 = $57 ? $12 : Math_fround($12 + $58);
                     }
                     $7 = HEAP32[$16 + 40 >> 2];
                     $5 = HEAP32[$16 + 8 >> 2];
                     label$272 : {
                      label$273 : {
                       if (($5 | 0) != 3) {
                        if (($5 | 0) == 2) {
                         break label$273
                        }
                        break label$272;
                       }
                       $52 = Math_fround($39 * $52);
                      }
                      $1 = 0;
                     }
                     label$275 : {
                      label$276 : {
                       if (($7 | 0) != 3) {
                        $21 = 1;
                        if (($7 | 0) == 2) {
                         break label$276
                        }
                        break label$275;
                       }
                       $20 = Math_fround($39 * $20);
                      }
                      $21 = 0;
                     }
                     $7 = 1;
                     $47 = 1;
                     if (!$1) {
                      $47 = 0;
                      $58 = $21 ? $52 : Math_fround($52 + $20);
                     }
                     $41 = HEAPF32[$6 + 356 >> 2];
                     $5 = HEAP32[$16 + 48 >> 2];
                     $1 = HEAP32[$16 + 16 >> 2];
                     label$279 : {
                      label$280 : {
                       if (($1 | 0) != 3) {
                        if (($1 | 0) == 2) {
                         break label$280
                        }
                        break label$279;
                       }
                       $51 = Math_fround($41 * $51);
                      }
                      $7 = 0;
                     }
                     label$282 : {
                      label$283 : {
                       if (($5 | 0) != 3) {
                        $21 = 1;
                        if (($5 | 0) == 2) {
                         break label$283
                        }
                        break label$282;
                       }
                       $11 = Math_fround($41 * $11);
                      }
                      $21 = 0;
                     }
                     $1 = 1;
                     $35 = 1;
                     if (!$7) {
                      $35 = 0;
                      $52 = $21 ? $51 : Math_fround($51 + $11);
                     }
                     $15 = HEAP32[$16 + 56 >> 2];
                     $5 = HEAP32[$16 + 24 >> 2];
                     label$286 : {
                      label$287 : {
                       if (($5 | 0) != 3) {
                        if (($5 | 0) == 2) {
                         break label$287
                        }
                        break label$286;
                       }
                       $8 = Math_fround($41 * $8);
                      }
                      $1 = 0;
                     }
                     label$289 : {
                      label$290 : {
                       if (($15 | 0) != 3) {
                        $7 = 1;
                        if (($15 | 0) == 2) {
                         break label$290
                        }
                        break label$289;
                       }
                       $36 = Math_fround($41 * $36);
                      }
                      $7 = 0;
                     }
                     $37 = 1;
                     $53 = 1;
                     if (!$1) {
                      $51 = $7 ? $8 : Math_fround($8 + $36);
                      $53 = 0;
                     }
                     $7 = HEAP32[$16 + 160 >> 2];
                     $38 = HEAPF32[$16 + 164 >> 2];
                     $43 = HEAPU8[$6 + 269 | 0];
                     $1 = HEAP32[$16 + 144 >> 2];
                     label$293 : {
                      label$294 : {
                       if (($1 | 0) != 3) {
                        if (($1 | 0) == 2) {
                         break label$294
                        }
                        break label$293;
                       }
                       $25 = Math_fround($39 * $25);
                      }
                      $37 = 0;
                     }
                     label$296 : {
                      if (($7 | 0) != 3) {
                       $1 = 1;
                       if (($7 | 0) != 2) {
                        break label$296
                       }
                       $12 = $38;
                       $1 = 0;
                       break label$296;
                      }
                      $12 = Math_fround($39 * $38);
                      $1 = 0;
                     }
                     $21 = 1;
                     $29 = 1;
                     if (!$37) {
                      $29 = 0;
                      $8 = $1 ? $25 : $25 != $25 ? $12 : $25 < $12 ? $12 : $25;
                     }
                     $48 = HEAPF32[$16 + 180 >> 2];
                     $5 = HEAP32[$16 + 176 >> 2];
                     label$299 : {
                      if (($5 | 0) != 3) {
                       if (($5 | 0) != 2) {
                        break label$299
                       }
                       $21 = 0;
                       $25 = $48;
                       break label$299;
                      }
                      $25 = Math_fround($39 * $48);
                      $21 = 0;
                     }
                     $1 = 0;
                     if (!$29) {
                      $12 = $21 ? $8 : $25 != $25 ? $8 : $8 < $25 ? $8 : $25;
                      $1 = 1;
                     }
                     $15 = HEAP32[$16 + 152 >> 2];
                     label$302 : {
                      label$303 : {
                       if (($15 | 0) != 3) {
                        $21 = 1;
                        if (($15 | 0) == 2) {
                         break label$303
                        }
                        break label$302;
                       }
                       $40 = Math_fround($41 * $40);
                      }
                      $21 = 0;
                     }
                     $25 = Math_fround($39 - $61);
                     label$305 : {
                      if (($9 | 0) != 3) {
                       $15 = 1;
                       if (($9 | 0) != 2) {
                        break label$305
                       }
                       $36 = $18;
                       $15 = 0;
                       break label$305;
                      }
                      $36 = Math_fround($41 * $18);
                      $15 = 0;
                     }
                     $8 = Math_fround($25 - $58);
                     $16 = 1;
                     $37 = 1;
                     if (!$21) {
                      $37 = 0;
                      $25 = $15 ? $40 : $40 != $40 ? $36 : $40 < $36 ? $36 : $40;
                     }
                     $15 = $32 | $47;
                     $66 = $15 ? $66 : $8;
                     $10 = !$15 | $1;
                     label$308 : {
                      if (($2 | 0) != 3) {
                       if (($2 | 0) != 2) {
                        break label$308
                       }
                       $16 = 0;
                       $8 = $28;
                       break label$308;
                      }
                      $8 = Math_fround($41 * $28);
                      $16 = 0;
                     }
                     $20 = $1 ? $12 : $66;
                     $1 = 0;
                     if (!$37) {
                      $12 = $16 ? $25 : $8 != $8 ? $25 : $25 < $8 ? $25 : $8;
                      $1 = 1;
                     }
                     $15 = $35 | $53;
                     $105 = $15 ? $105 : Math_fround(Math_fround($41 - $52) - $51);
                     HEAPF32[$6 + 684 >> 2] = $1 ? $12 : $105;
                     HEAP32[$6 + 680 >> 2] = (!$15 | $1) ^ 1;
                     HEAPF32[$6 + 676 >> 2] = $20;
                     HEAP32[$6 + 672 >> 2] = $10 ^ 1;
                     HEAPF32[$6 + 860 >> 2] = $41;
                     HEAP32[$6 + 856 >> 2] = 0;
                     HEAPF32[$6 + 852 >> 2] = $39;
                     HEAP32[$6 + 848 >> 2] = 0;
                     stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($6 + 816 | 0, $33, $50, $6 + 672 | 0, $6 + 848 | 0, 1);
                     $1 = $6 + 824 | 0;
                     $39 = HEAPF32[$1 >> 2];
                     $21 = HEAP32[$1 >> 2];
                     $41 = HEAPF32[$6 + 820 >> 2];
                     $15 = HEAP32[$6 + 820 >> 2];
                     $1 = HEAP32[$6 + 816 >> 2];
                     if (($1 | 0) != 1) {
                      label$312 : {
                       if (!$1) {
                        break label$312
                       }
                       FUNCTION_TABLE[HEAP32[$21 >> 2]]($15);
                       if (!HEAP32[$21 + 4 >> 2]) {
                        break label$312
                       }
                       dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($15);
                      }
                      $40 = HEAPF32[$6 + 356 >> 2];
                      $106 = HEAPF32[$6 + 352 >> 2];
                      $36 = $106;
                      $1 = HEAPU8[$6 + 268 | 0] | 2;
                      if (($1 | 0) == 3) {
                       $36 = $40
                      }
                      $12 = $41;
                      $27 = ($1 & 3) == 3;
                      if ($27) {
                       $12 = $39
                      }
                      $16 = $7;
                      $8 = $38;
                      if ($27) {
                       $16 = $9;
                       $8 = $18;
                      }
                      $20 = HEAPF32[$6 + 348 >> 2];
                      $10 = HEAP32[$6 + 344 >> 2];
                      $25 = HEAPF32[$6 + 340 >> 2];
                      $11 = $25;
                      $1 = HEAP32[$6 + 336 >> 2];
                      $33 = $1;
                      if ($27) {
                       $33 = $10;
                       $11 = $20;
                      }
                      label$317 : {
                       label$318 : {
                        if (($16 | 0) != 3) {
                         if (($16 | 0) != 2) {
                          break label$317
                         }
                         $8 = $12 != $12 ? $8 : $12 < $8 ? $8 : $12;
                         break label$318;
                        }
                        $8 = Math_fround($8 * $11);
                        $8 = $12 != $12 ? $8 : $12 < $8 ? $8 : $12;
                        if ($33) {
                         break label$317
                        }
                       }
                       $12 = $8;
                      }
                      $16 = $5;
                      $8 = $48;
                      if ($27) {
                       $16 = $2;
                       $8 = $28;
                      }
                      $11 = $25;
                      $33 = $1;
                      if ($27) {
                       $33 = $10;
                       $11 = $20;
                      }
                      label$322 : {
                       label$323 : {
                        if (($16 | 0) != 3) {
                         if (($16 | 0) != 2) {
                          break label$322
                         }
                         $8 = $8 != $8 ? $12 : $12 < $8 ? $12 : $8;
                         break label$323;
                        }
                        $8 = Math_fround($8 * $11);
                        $8 = $8 != $8 ? $12 : $12 < $8 ? $12 : $8;
                        if ($33) {
                         break label$322
                        }
                       }
                       $12 = $8;
                      }
                      $40 = $27 ? $106 : $40;
                      $11 = $27 ? $41 : $39;
                      if ($27) {
                       $9 = $7;
                       $18 = $38;
                      }
                      $8 = $20;
                      $7 = $10;
                      if ($27) {
                       $7 = $1;
                       $8 = $25;
                      }
                      label$329 : {
                       label$330 : {
                        if (($9 | 0) != 3) {
                         if (($9 | 0) != 2) {
                          break label$329
                         }
                         $18 = $11 != $11 ? $18 : $11 < $18 ? $18 : $11;
                         break label$330;
                        }
                        $8 = Math_fround($18 * $8);
                        $18 = $11 != $11 ? $8 : $11 < $8 ? $8 : $11;
                        if ($7) {
                         break label$329
                        }
                       }
                       $11 = $18;
                      }
                      if ($27) {
                       $28 = $48;
                       $2 = $5;
                      }
                      if ($27) {
                       $10 = $1;
                       $20 = $25;
                      }
                      $1 = $43 ? $32 : $35;
                      label$334 : {
                       label$335 : {
                        if (($2 | 0) != 3) {
                         if (($2 | 0) != 2) {
                          break label$334
                         }
                         $20 = $28 != $28 ? $11 : $11 < $28 ? $11 : $28;
                         break label$335;
                        }
                        $8 = Math_fround($28 * $20);
                        $20 = $8 != $8 ? $11 : $11 < $8 ? $11 : $8;
                        if ($10) {
                         break label$334
                        }
                       }
                       $11 = $20;
                      }
                      label$337 : {
                       label$338 : {
                        label$339 : {
                         label$340 : {
                          label$341 : {
                           if ($1) {
                            $8 = Math_fround($36 - $12);
                            if (!($43 ? $47 : $53)) {
                             break label$341
                            }
                            $2 = HEAP32[$6 + 260 >> 2];
                            $5 = HEAP32[$2 + 8 >> 2];
                            $1 = HEAP32[$6 + 264 >> 2];
                            if ($5 >>> 0 <= $1 >>> 0) {
                             break folding_inner0
                            }
                            $1 = HEAPU8[(HEAP32[$2 >> 2] + Math_imul($1, 288) | 0) + 209 | 0];
                            if (!$1) {
                             break label$340
                            }
                            if (($1 | 0) == 1) {
                             break label$339
                            }
                            if (($1 | 0) == 3) {
                             break label$340
                            }
                            $20 = Math_fround($8 * Math_fround(.5));
                            break label$260;
                           }
                           $8 = $43 ? $61 : $52;
                           if (!$27) {
                            break label$338
                           }
                           $2 = $59;
                           break label$261;
                          }
                          $20 = Math_fround(Math_fround($8 - ($43 ? $58 : $51)) - HEAPF32[($27 ? $76 : $77) >> 2]);
                          break label$260;
                         }
                         if (!$27) {
                          break label$337
                         }
                         $2 = $30;
                         break label$262;
                        }
                        $20 = Math_fround($8 - HEAPF32[($27 ? $17 : $13) >> 2]);
                        break label$260;
                       }
                       $2 = $6 + 304 | 0;
                       break label$261;
                      }
                      $2 = $6 + 320 | 0;
                      break label$262;
                     }
                     HEAP32[$0 + 4 >> 2] = $15;
                     HEAP32[$0 >> 2] = 1;
                     HEAP32[$0 + 8 >> 2] = $21;
                     $alloc__vec__IntoIter_T__20as_20core__ops__drop__Drop___drop__h33a9bff91200e1a0($6 + 496 | 0);
                     break label$62;
                    }
                    core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $50, $2);
                    abort();
                   }
                   $20 = HEAPF32[$2 >> 2];
                   break label$260;
                  }
                  $20 = Math_fround($8 + HEAPF32[$2 >> 2]);
                 }
                 label$345 : {
                  label$346 : {
                   label$348 : {
                    label$349 : {
                     label$350 : {
                      label$351 : {
                       label$352 : {
                        label$353 : {
                         label$354 : {
                          label$355 : {
                           if ($43 ? $35 : $32) {
                            $8 = Math_fround($40 - $11);
                            if (!($43 ? $53 : $47)) {
                             break label$355
                            }
                            $7 = HEAP32[$6 + 260 >> 2];
                            $5 = HEAP32[$7 + 8 >> 2];
                            $1 = HEAP32[$6 + 264 >> 2];
                            if ($5 >>> 0 <= $1 >>> 0) {
                             break folding_inner0
                            }
                            $2 = $49 + -1 | 0;
                            if ($2 >>> 0 > 4) {
                             break label$354
                            }
                            switch ($2 - 1 | 0) {
                            case 1:
                            case 2:
                             break label$346;
                            case 3:
                             break label$352;
                            case 0:
                             break label$353;
                            default:
                             break label$351;
                            };
                           }
                           $8 = Math_fround(($43 ? $52 : $61) + HEAPF32[($27 ? $6 + 304 | 0 : $59) >> 2]);
                           break label$345;
                          }
                          $8 = Math_fround(Math_fround($8 - ($43 ? $51 : $58)) - HEAPF32[($27 ? $77 : $76) >> 2]);
                          break label$345;
                         }
                         $1 = HEAPU8[(HEAP32[$7 >> 2] + Math_imul($1, 288) | 0) + 206 | 0] + -1 | 0;
                         if ($1 >>> 0 > 3) {
                          break label$351
                         }
                         switch ($1 - 1 | 0) {
                         case 0:
                         case 1:
                          break label$346;
                         case 2:
                          break label$352;
                         default:
                          break label$353;
                         };
                        }
                        if (!HEAPU8[$6 + 271 | 0]) {
                         break label$348
                        }
                        $8 = HEAPF32[($27 ? $6 + 320 | 0 : $30) >> 2];
                        break label$345;
                       }
                       if (!HEAPU8[$6 + 271 | 0]) {
                        break label$350
                       }
                       $8 = Math_fround($8 - HEAPF32[($27 ? $13 : $17) >> 2]);
                       break label$345;
                      }
                      if (!HEAPU8[$6 + 271 | 0]) {
                       break label$349
                      }
                      $8 = Math_fround($8 - HEAPF32[($27 ? $13 : $17) >> 2]);
                      break label$345;
                     }
                     $8 = HEAPF32[($27 ? $6 + 320 | 0 : $30) >> 2];
                     break label$345;
                    }
                    $8 = HEAPF32[($27 ? $6 + 320 | 0 : $30) >> 2];
                    break label$345;
                   }
                   $8 = Math_fround($8 - HEAPF32[($27 ? $13 : $17) >> 2]);
                   break label$345;
                  }
                  $8 = Math_fround($8 * Math_fround(.5));
                 }
                 $2 = HEAP32[$6 + 260 >> 2];
                 $1 = HEAP32[$2 + 8 >> 2];
                 if ($1 >>> 0 <= $50 >>> 0) {
                  break label$257
                 }
                 $1 = $34 + HEAP32[$2 >> 2] | 0;
                 HEAP32[$1 + 220 >> 2] = $75;
                 HEAPF32[$1 + 236 >> 2] = HEAPU8[$6 + 270 | 0] ? $20 : $8;
                 HEAPF32[$1 + 232 >> 2] = HEAPU8[$6 + 269 | 0] ? $20 : $8;
                 HEAP32[$1 + 228 >> 2] = $21;
                 HEAP32[$1 + 224 >> 2] = $15;
                 $1 = HEAP32[$65 >> 2];
                 if (($1 | 0) != HEAP32[$6 + 508 >> 2]) {
                  continue
                 }
                 break;
                }
               }
               $alloc__vec__IntoIter_T__20as_20core__ops__drop__Drop___drop__h33a9bff91200e1a0($6 + 496 | 0);
               $1 = HEAP32[$6 + 260 >> 2];
               $5 = HEAP32[$1 + 20 >> 2];
               $2 = HEAP32[$6 + 264 >> 2];
               if ($5 >>> 0 <= $2 >>> 0) {
                break label$256
               }
               $7 = HEAP32[$1 + 12 >> 2] + Math_imul($2, 12) | 0;
               $15 = HEAP32[$7 + 8 >> 2];
               if ($15) {
                label$366 : {
                 $5 = HEAP32[$1 + 8 >> 2];
                 $7 = HEAP32[$7 >> 2];
                 $2 = HEAP32[$7 >> 2];
                 if ($5 >>> 0 > $2 >>> 0) {
                  $7 = $7 + 4 | 0;
                  $9 = ($15 << 2) + -4 | 0;
                  $15 = 0;
                  while (1) {
                   if (HEAPU8[(HEAP32[$1 >> 2] + Math_imul($2, 288) | 0) + 200 | 0] == 1) {
                    stretch__algo___impl_20stretch__forest__Forest___compute_internal__hidden_layout__h830f8cd711dd543e($1, $1 + 12 | 0, $2, $15)
                   }
                   $1 = HEAP32[$6 + 260 >> 2];
                   if (!$9) {
                    break label$366
                   }
                   $9 = $9 + -4 | 0;
                   $15 = $15 + 1 | 0;
                   $2 = HEAP32[$7 >> 2];
                   $7 = $7 + 4 | 0;
                   $5 = HEAP32[$1 + 8 >> 2];
                   if ($5 >>> 0 > $2 >>> 0) {
                    continue
                   }
                   break;
                  };
                 }
                 core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $2, $5);
                 abort();
                }
                $2 = HEAP32[$6 + 264 >> 2];
               }
               $10 = HEAP32[$6 + 356 >> 2];
               $16 = HEAP32[$6 + 352 >> 2];
               $15 = $3 + 8 | 0;
               $7 = HEAP32[$15 + 4 >> 2];
               $17 = $6 + 856 | 0;
               HEAP32[$17 >> 2] = HEAP32[$15 >> 2];
               HEAP32[$17 + 4 >> 2] = $7;
               $15 = $4 + 8 | 0;
               $7 = HEAP32[$15 + 4 >> 2];
               $13 = $6 + 872 | 0;
               HEAP32[$13 >> 2] = HEAP32[$15 >> 2];
               HEAP32[$13 + 4 >> 2] = $7;
               $5 = HEAP32[$3 + 4 >> 2];
               HEAP32[$6 + 848 >> 2] = HEAP32[$3 >> 2];
               HEAP32[$6 + 852 >> 2] = $5;
               $3 = HEAP32[$4 + 4 >> 2];
               HEAP32[$6 + 864 >> 2] = HEAP32[$4 >> 2];
               HEAP32[$6 + 868 >> 2] = $3;
               $3 = HEAP32[$1 + 8 >> 2];
               if ($3 >>> 0 <= $2 >>> 0) {
                break label$255
               }
               $4 = HEAP32[$1 >> 2] + Math_imul($2, 288) | 0;
               $1 = HEAP32[$6 + 852 >> 2];
               HEAP32[$4 + 240 >> 2] = HEAP32[$6 + 848 >> 2];
               HEAP32[$4 + 244 >> 2] = $1;
               $2 = HEAP32[$13 + 4 >> 2];
               $1 = $4 + 264 | 0;
               HEAP32[$1 >> 2] = HEAP32[$13 >> 2];
               HEAP32[$1 + 4 >> 2] = $2;
               $3 = $6 + 864 | 0;
               $2 = HEAP32[$3 + 4 >> 2];
               $1 = $4 + 256 | 0;
               HEAP32[$1 >> 2] = HEAP32[$3 >> 2];
               HEAP32[$1 + 4 >> 2] = $2;
               $2 = HEAP32[$17 + 4 >> 2];
               $1 = $4 + 248 | 0;
               HEAP32[$1 >> 2] = HEAP32[$17 >> 2];
               HEAP32[$1 + 4 >> 2] = $2;
               HEAP8[$4 + 280 | 0] = 1;
               HEAP32[$4 + 276 >> 2] = $10;
               HEAP32[$4 + 272 >> 2] = $16;
               $2 = $4 + 281 | 0;
               $1 = HEAPU8[$6 + 672 | 0] | HEAPU8[$6 + 673 | 0] << 8;
               HEAP8[$2 | 0] = $1;
               HEAP8[$2 + 1 | 0] = $1 >>> 8;
               HEAP8[$4 + 283 | 0] = HEAPU8[$6 + 674 | 0];
               HEAP32[$0 + 8 >> 2] = $10;
               HEAP32[$0 + 4 >> 2] = $16;
               HEAP32[$0 >> 2] = 0;
               $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__h7c20999486fb1b77($6 + 392 | 0);
               if (!HEAP32[$6 + 396 >> 2]) {
                break label$1
               }
               dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$6 + 392 >> 2]);
               break label$1;
              }
              core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $50, $1);
              abort();
             }
             core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $2, $5);
             abort();
            }
            core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $2, $3);
            abort();
           }
           break folding_inner0;
          }
          core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $5, $1);
          abort();
         }
         $1 = HEAP32[$6 + 180 >> 2];
         break label$234;
        }
        $1 = HEAP32[$6 + 188 >> 2];
        break label$234;
       }
       $1 = HEAP32[$6 + 196 >> 2];
      }
      HEAP32[$0 + 4 >> 2] = $2;
      HEAP32[$0 >> 2] = 1;
      HEAP32[$0 + 8 >> 2] = $1;
      $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__hf813763ce0f151ff($6 + 672 | 0);
      if (!HEAP32[$6 + 676 >> 2]) {
       break label$62
      }
      dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$6 + 672 >> 2]);
     }
     $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__h7c20999486fb1b77($6 + 392 | 0);
     if (!HEAP32[$6 + 396 >> 2]) {
      break label$1
     }
     dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$6 + 392 >> 2]);
     break label$1;
    }
    HEAP32[$0 + 4 >> 2] = $9;
    HEAP32[$0 >> 2] = 1;
    HEAP32[$0 + 8 >> 2] = $1;
    if (!HEAP32[$6 + 380 >> 2]) {
     break label$1
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$6 + 376 >> 2]);
   }
   global$0 = $6 + 992 | 0;
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $1, $5);
  abort();
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__malloc__haa66310b00a7bd6b($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  folding_inner0 : {
   label$1 : {
    label$2 : {
     label$3 : {
      label$4 : {
       label$5 : {
        label$6 : {
         label$7 : {
          label$8 : {
           label$9 : {
            label$10 : {
             label$11 : {
              label$12 : {
               label$13 : {
                label$14 : {
                 label$15 : {
                  label$16 : {
                   label$17 : {
                    label$18 : {
                     label$19 : {
                      label$20 : {
                       label$21 : {
                        label$22 : {
                         label$23 : {
                          label$24 : {
                           label$25 : {
                            label$26 : {
                             label$27 : {
                              label$28 : {
                               label$29 : {
                                label$30 : {
                                 label$31 : {
                                  label$32 : {
                                   label$33 : {
                                    label$34 : {
                                     label$35 : {
                                      label$36 : {
                                       if ($0 >>> 0 < 245) {
                                        $2 = HEAP32[266559];
                                        $5 = $0 >>> 0 < 11 ? 16 : $0 + 11 & -8;
                                        $1 = $5 >>> 3;
                                        $3 = $1 & 31;
                                        $0 = $2 >>> $3;
                                        if (!($0 & 3)) {
                                         break label$36
                                        }
                                        $1 = $1 + (($0 ^ -1) & 1) | 0;
                                        $6 = ($1 << 3) + 1066236 | 0;
                                        $0 = HEAP32[$6 + 16 >> 2];
                                        $3 = $0 + 8 | 0;
                                        $4 = HEAP32[$0 + 8 >> 2];
                                        $6 = $6 + 8 | 0;
                                        if (($4 | 0) == ($6 | 0)) {
                                         break label$35
                                        }
                                        HEAP32[$4 + 12 >> 2] = $6;
                                        HEAP32[$6 + 8 >> 2] = $4;
                                        break label$34;
                                       }
                                       if ($0 >>> 0 >= 4294901709) {
                                        break label$1
                                       }
                                       $0 = $0 + 11 | 0;
                                       $5 = $0 & -8;
                                       $8 = HEAP32[266560];
                                       if (!$8) {
                                        break label$27
                                       }
                                       $3 = 0 - $5 | 0;
                                       $0 = $0 >>> 8;
                                       $7 = 0;
                                       label$38 : {
                                        if (!$0) {
                                         break label$38
                                        }
                                        $7 = 31;
                                        if ($5 >>> 0 > 16777215) {
                                         break label$38
                                        }
                                        $0 = Math_clz32($0);
                                        $7 = $5 >>> (38 - $0 & 31) & 1 | 31 - $0 << 1;
                                       }
                                       $0 = HEAP32[($7 << 2) + 1066508 >> 2];
                                       if (!$0) {
                                        break label$30
                                       }
                                       $1 = $5 << (($7 | 0) == 31 ? 0 : 25 - ($7 >>> 1) & 31);
                                       while (1) {
                                        $6 = HEAP32[$0 + 4 >> 2] & -8;
                                        label$40 : {
                                         if ($6 >>> 0 < $5 >>> 0) {
                                          break label$40
                                         }
                                         $6 = $6 - $5 | 0;
                                         if ($6 >>> 0 >= $3 >>> 0) {
                                          break label$40
                                         }
                                         $2 = $0;
                                         $3 = $6;
                                         if (!$3) {
                                          break label$32
                                         }
                                        }
                                        $6 = HEAP32[$0 + 20 >> 2];
                                        $0 = HEAP32[(($1 >>> 29 & 4) + $0 | 0) + 16 >> 2];
                                        $4 = $6 ? (($6 | 0) != ($0 | 0) ? $6 : $4) : $4;
                                        $1 = $1 << 1;
                                        if ($0) {
                                         continue
                                        }
                                        break;
                                       };
                                       if (!$4) {
                                        break label$31
                                       }
                                       $0 = $4;
                                       break label$29;
                                      }
                                      if ($5 >>> 0 <= HEAPU32[266659]) {
                                       break label$27
                                      }
                                      if (!$0) {
                                       break label$33
                                      }
                                      $1 = 2 << $3;
                                      $0 = (0 - $1 | $1) & $0 << $3;
                                      $0 = 0 - $0 & $0;
                                      $3 = 31 - Math_clz32($0 ^ $0 + -1) | 0;
                                      __inlined_func$__wasm_ctz_i32 : {
                                       if ($0) {
                                        break __inlined_func$__wasm_ctz_i32
                                       }
                                       $3 = 32;
                                      }
                                      $4 = ($3 << 3) + 1066236 | 0;
                                      $0 = HEAP32[$4 + 16 >> 2];
                                      $1 = HEAP32[$0 + 8 >> 2];
                                      $4 = $4 + 8 | 0;
                                      if (($1 | 0) == ($4 | 0)) {
                                       break label$25
                                      }
                                      HEAP32[$1 + 12 >> 2] = $4;
                                      HEAP32[$4 + 8 >> 2] = $1;
                                      break label$24;
                                     }
                                     (wasm2js_i32$0 = 1066236, wasm2js_i32$1 = __wasm_rotl_i32($1) & $2), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
                                    }
                                    $2 = $1 << 3;
                                    HEAP32[$0 + 4 >> 2] = $2 | 3;
                                    $0 = $0 + $2 | 0;
                                    HEAP32[$0 + 4 >> 2] = HEAP32[$0 + 4 >> 2] | 1;
                                    break label$1;
                                   }
                                   $0 = HEAP32[266560];
                                   if (!$0) {
                                    break label$27
                                   }
                                   $0 = $0 & 0 - $0;
                                   $2 = 31 - Math_clz32($0 ^ $0 + -1) | 0;
                                   __inlined_func$__wasm_ctz_i320 : {
                                    if ($0) {
                                     break __inlined_func$__wasm_ctz_i320
                                    }
                                    $2 = 32;
                                   }
                                   $2 = HEAP32[($2 << 2) + 1066508 >> 2];
                                   $4 = (HEAP32[$2 + 4 >> 2] & -8) - $5 | 0;
                                   $1 = $2;
                                   $0 = HEAP32[$1 + 16 >> 2];
                                   if (!$0) {
                                    break label$12
                                   }
                                   $3 = 1;
                                   break label$11;
                                  }
                                  $3 = 0;
                                  break label$29;
                                 }
                                 if ($2) {
                                  break label$28
                                 }
                                }
                                $2 = 0;
                                $0 = 2 << ($7 & 31);
                                $0 = $8 & (0 - $0 | $0);
                                if (!$0) {
                                 break label$27
                                }
                                $0 = $0 & 0 - $0;
                                $1 = 31 - Math_clz32($0 ^ $0 + -1) | 0;
                                __inlined_func$__wasm_ctz_i321 : {
                                 if ($0) {
                                  break __inlined_func$__wasm_ctz_i321
                                 }
                                 $1 = 32;
                                }
                                $0 = HEAP32[($1 << 2) + 1066508 >> 2];
                                if (!$0) {
                                 break label$27
                                }
                               }
                               while (1) {
                                $6 = $2;
                                $2 = HEAP32[$0 + 4 >> 2] & -8;
                                $1 = $2 - $5 | 0;
                                $4 = $1 >>> 0 < $3 >>> 0 & $2 >>> 0 >= $5 >>> 0;
                                $2 = $4 ? $0 : $6;
                                $3 = $4 ? $1 : $3;
                                $1 = HEAP32[$0 + 16 >> 2];
                                if ($1) {
                                 $0 = $1
                                } else {
                                 $0 = HEAP32[$0 + 20 >> 2]
                                }
                                if ($0) {
                                 continue
                                }
                                break;
                               };
                               if (!$2) {
                                break label$27
                               }
                              }
                              $0 = HEAP32[266659];
                              if ($0 >>> 0 < $5 >>> 0) {
                               break label$26
                              }
                              if ($3 >>> 0 < $0 - $5 >>> 0) {
                               break label$26
                              }
                             }
                             label$43 : {
                              label$44 : {
                               label$45 : {
                                $2 = HEAP32[266659];
                                if ($2 >>> 0 < $5 >>> 0) {
                                 $0 = HEAP32[266660];
                                 if ($0 >>> 0 <= $5 >>> 0) {
                                  break label$45
                                 }
                                 break folding_inner0;
                                }
                                $0 = HEAP32[266661];
                                $3 = $2 - $5 | 0;
                                if ($3 >>> 0 > 15) {
                                 break label$44
                                }
                                HEAP32[266661] = 0;
                                HEAP32[266659] = 0;
                                HEAP32[$0 + 4 >> 2] = $2 | 3;
                                $2 = $0 + $2 | 0;
                                $5 = $2 + 4 | 0;
                                $3 = HEAP32[$2 + 4 >> 2] | 1;
                                break label$43;
                               }
                               $3 = 0;
                               $0 = $5 + 65583 | 0;
                               $2 = __wasm_memory_grow($0 >>> 16);
                               if (($2 | 0) == -1) {
                                break label$1
                               }
                               $2 = $2 << 16;
                               if (!$2) {
                                break label$1
                               }
                               $6 = $0 & -65536;
                               $0 = $6 + HEAP32[266663] | 0;
                               HEAP32[266663] = $0;
                               $1 = HEAP32[266664];
                               HEAP32[266664] = $0 >>> 0 < $1 >>> 0 ? $1 : $0;
                               $4 = HEAP32[266662];
                               if (!$4) {
                                break label$19
                               }
                               $0 = 1066660;
                               while (1) {
                                $1 = HEAP32[$0 >> 2];
                                $7 = HEAP32[$0 + 4 >> 2];
                                if (($2 | 0) == ($1 + $7 | 0)) {
                                 break label$18
                                }
                                $0 = HEAP32[$0 + 8 >> 2];
                                if ($0) {
                                 continue
                                }
                                break;
                               };
                               break label$10;
                              }
                              HEAP32[266659] = $3;
                              $1 = $0 + $5 | 0;
                              HEAP32[266661] = $1;
                              HEAP32[$1 + 4 >> 2] = $3 | 1;
                              HEAP32[$0 + $2 >> 2] = $3;
                              $3 = $5 | 3;
                              $5 = $0 + 4 | 0;
                             }
                             HEAP32[$5 >> 2] = $3;
                             return $0 + 8 | 0;
                            }
                            dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__h173f6e2d56218081($2);
                            if ($3 >>> 0 >= 16) {
                             break label$23
                            }
                            $0 = $3 + $5 | 0;
                            HEAP32[$2 + 4 >> 2] = $0 | 3;
                            $0 = $0 + $2 | 0;
                            HEAP32[$0 + 4 >> 2] = HEAP32[$0 + 4 >> 2] | 1;
                            break label$13;
                           }
                           (wasm2js_i32$0 = 1066236, wasm2js_i32$1 = __wasm_rotl_i32($3) & $2), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
                          }
                          $4 = $0 + 8 | 0;
                          HEAP32[$0 + 4 >> 2] = $5 | 3;
                          $6 = $0 + $5 | 0;
                          $2 = $3 << 3;
                          $3 = $2 - $5 | 0;
                          HEAP32[$6 + 4 >> 2] = $3 | 1;
                          HEAP32[$0 + $2 >> 2] = $3;
                          $0 = HEAP32[266659];
                          if (!$0) {
                           break label$20
                          }
                          $1 = $0 >>> 3;
                          $0 = ($1 << 3) + 1066244 | 0;
                          $2 = HEAP32[266661];
                          $5 = HEAP32[266559];
                          $1 = 1 << ($1 & 31);
                          if (!($5 & $1)) {
                           break label$22
                          }
                          $1 = HEAP32[$0 + 8 >> 2];
                          break label$21;
                         }
                         HEAP32[$2 + 4 >> 2] = $5 | 3;
                         $0 = $2 + $5 | 0;
                         HEAP32[$0 + 4 >> 2] = $3 | 1;
                         HEAP32[$0 + $3 >> 2] = $3;
                         if ($3 >>> 0 >= 256) {
                          break label$17
                         }
                         $1 = $3 >>> 3;
                         $3 = ($1 << 3) + 1066244 | 0;
                         $4 = HEAP32[266559];
                         $1 = 1 << ($1 & 31);
                         if (!($4 & $1)) {
                          break label$15
                         }
                         $1 = HEAP32[$3 + 8 >> 2];
                         break label$14;
                        }
                        HEAP32[266559] = $1 | $5;
                        $1 = $0;
                       }
                       HEAP32[$0 + 8 >> 2] = $2;
                       HEAP32[$1 + 12 >> 2] = $2;
                       HEAP32[$2 + 12 >> 2] = $0;
                       HEAP32[$2 + 8 >> 2] = $1;
                      }
                      HEAP32[266661] = $6;
                      HEAP32[266659] = $3;
                      return $4;
                     }
                     $0 = HEAP32[266670];
                     if (!($0 >>> 0 <= $2 >>> 0 ? !!$0 : 0)) {
                      HEAP32[266670] = $2
                     }
                     HEAP32[266671] = 4095;
                     HEAP32[266665] = $2;
                     $0 = 0;
                     HEAP32[266668] = 0;
                     HEAP32[266666] = $6;
                     while (1) {
                      $1 = $0 + 1066236 | 0;
                      $4 = $1 + 8 | 0;
                      HEAP32[$1 + 16 >> 2] = $4;
                      HEAP32[$1 + 20 >> 2] = $4;
                      $0 = $0 + 8 | 0;
                      if (($0 | 0) != 256) {
                       continue
                      }
                      break;
                     };
                     $0 = $6 + -40 | 0;
                     HEAP32[266660] = $0;
                     HEAP32[266662] = $2;
                     HEAP32[$2 + 4 >> 2] = $0 | 1;
                     HEAP32[($0 + $2 | 0) + 4 >> 2] = 40;
                     HEAP32[266669] = 2097152;
                     break label$9;
                    }
                    if (!HEAP32[$0 + 12 >> 2]) {
                     break label$16
                    }
                    break label$10;
                   }
                   dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h2b5800089452f7a4($0, $3);
                   break label$13;
                  }
                  if ($2 >>> 0 <= $4 >>> 0) {
                   break label$10
                  }
                  if ($1 >>> 0 > $4 >>> 0) {
                   break label$10
                  }
                  HEAP32[$0 + 4 >> 2] = $6 + $7;
                  $0 = HEAP32[266662];
                  $2 = $0 + 15 & -8;
                  $1 = $2 + -8 | 0;
                  HEAP32[266662] = $1;
                  $4 = $6 + HEAP32[266660] | 0;
                  $2 = $4 + (($0 + 8 | 0) - $2 | 0) | 0;
                  HEAP32[266660] = $2;
                  HEAP32[$1 + 4 >> 2] = $2 | 1;
                  HEAP32[($0 + $4 | 0) + 4 >> 2] = 40;
                  HEAP32[266669] = 2097152;
                  break label$9;
                 }
                 HEAP32[266559] = $1 | $4;
                 $1 = $3;
                }
                HEAP32[$3 + 8 >> 2] = $0;
                HEAP32[$1 + 12 >> 2] = $0;
                HEAP32[$0 + 12 >> 2] = $3;
                HEAP32[$0 + 8 >> 2] = $1;
               }
               return $2 + 8 | 0;
              }
              $3 = 0;
             }
             while (1) {
              label$52 : {
               label$53 : {
                if ($3) {
                 $3 = (HEAP32[$0 + 4 >> 2] & -8) - $5 | 0;
                 $2 = $3 >>> 0 < $4 >>> 0;
                 $4 = $2 ? $3 : $4;
                 $1 = $2 ? $0 : $1;
                 $2 = $0;
                 $0 = HEAP32[$0 + 16 >> 2];
                 if ($0) {
                  break label$53
                 }
                 $3 = 0;
                 continue;
                }
                $0 = HEAP32[$2 + 20 >> 2];
                if ($0) {
                 break label$52
                }
                dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__h173f6e2d56218081($1);
                label$56 : {
                 if ($4 >>> 0 < 16) {
                  $0 = $5 + $4 | 0;
                  HEAP32[$1 + 4 >> 2] = $0 | 3;
                  $0 = $0 + $1 | 0;
                  HEAP32[$0 + 4 >> 2] = HEAP32[$0 + 4 >> 2] | 1;
                  break label$56;
                 }
                 HEAP32[$1 + 4 >> 2] = $5 | 3;
                 $3 = $1 + $5 | 0;
                 HEAP32[$3 + 4 >> 2] = $4 | 1;
                 HEAP32[$3 + $4 >> 2] = $4;
                 $2 = HEAP32[266659];
                 if ($2) {
                  $0 = HEAP32[266661];
                  $6 = $2 >>> 3;
                  $2 = ($6 << 3) + 1066244 | 0;
                  $5 = HEAP32[266559];
                  $6 = 1 << ($6 & 31);
                  $7 = HEAP32[$2 + 8 >> 2];
                  label$59 : {
                   if ($5 & $6) {
                    break label$59
                   }
                   HEAP32[266559] = $5 | $6;
                   $7 = $2;
                  }
                  $6 = $7;
                  HEAP32[$2 + 8 >> 2] = $0;
                  HEAP32[$6 + 12 >> 2] = $0;
                  HEAP32[$0 + 12 >> 2] = $2;
                  HEAP32[$0 + 8 >> 2] = $6;
                 }
                 HEAP32[266661] = $3;
                 HEAP32[266659] = $4;
                }
                return $1 + 8 | 0;
               }
               $3 = 1;
               continue;
              }
              $3 = 1;
              continue;
             };
            }
            $0 = HEAP32[266670];
            HEAP32[266670] = $0 >>> 0 < $2 >>> 0 ? $0 : $2;
            $1 = $2 + $6 | 0;
            $0 = 1066660;
            label$61 : {
             label$62 : {
              label$63 : {
               label$64 : {
                while (1) {
                 if (($1 | 0) != HEAP32[$0 >> 2]) {
                  $0 = HEAP32[$0 + 8 >> 2];
                  if ($0) {
                   continue
                  }
                  break label$64;
                 }
                 break;
                };
                if (!HEAP32[$0 + 12 >> 2]) {
                 break label$63
                }
               }
               $0 = 1066660;
               while (1) {
                label$67 : {
                 $1 = HEAP32[$0 >> 2];
                 if ($1 >>> 0 <= $4 >>> 0) {
                  $7 = $1 + HEAP32[$0 + 4 >> 2] | 0;
                  if ($7 >>> 0 > $4 >>> 0) {
                   break label$67
                  }
                 }
                 $0 = HEAP32[$0 + 8 >> 2];
                 continue;
                }
                break;
               };
               $0 = $6 + -40 | 0;
               HEAP32[266660] = $0;
               HEAP32[266662] = $2;
               HEAP32[$2 + 4 >> 2] = $0 | 1;
               HEAP32[($0 + $2 | 0) + 4 >> 2] = 40;
               HEAP32[266669] = 2097152;
               $0 = ($7 + -32 & -8) + -8 | 0;
               $1 = $0 >>> 0 < $4 + 16 >>> 0 ? $4 : $0;
               HEAP32[$1 + 4 >> 2] = 27;
               $0 = HEAP32[266665];
               $8 = HEAP32[266666];
               $10 = HEAP32[266668];
               $9 = $1 + 16 | 0;
               HEAP32[$9 >> 2] = HEAP32[266667];
               HEAP32[$9 + 4 >> 2] = $10;
               HEAP32[$1 + 8 >> 2] = $0;
               HEAP32[$1 + 12 >> 2] = $8;
               HEAP32[266668] = 0;
               HEAP32[266666] = $6;
               HEAP32[266665] = $2;
               HEAP32[266667] = $1 + 8;
               $0 = $1 + 28 | 0;
               while (1) {
                HEAP32[$0 >> 2] = 7;
                $0 = $0 + 4 | 0;
                if ($7 >>> 0 > $0 >>> 0) {
                 continue
                }
                break;
               };
               if (($1 | 0) == ($4 | 0)) {
                break label$9
               }
               HEAP32[$1 + 4 >> 2] = HEAP32[$1 + 4 >> 2] & -2;
               $0 = $1 - $4 | 0;
               HEAP32[$4 + 4 >> 2] = $0 | 1;
               HEAP32[$1 >> 2] = $0;
               if ($0 >>> 0 < 256) {
                $2 = $0 >>> 3;
                $0 = ($2 << 3) + 1066244 | 0;
                $1 = HEAP32[266559];
                $2 = 1 << ($2 & 31);
                if (!($1 & $2)) {
                 break label$62
                }
                $2 = HEAP32[$0 + 8 >> 2];
                break label$61;
               }
               dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h2b5800089452f7a4($4, $0);
               break label$9;
              }
              HEAP32[$0 >> 2] = $2;
              HEAP32[$0 + 4 >> 2] = $6 + HEAP32[$0 + 4 >> 2];
              HEAP32[$2 + 4 >> 2] = $5 | 3;
              $0 = $2 + $5 | 0;
              $5 = ($1 - $2 | 0) - $5 | 0;
              if (HEAP32[266662] == ($1 | 0)) {
               break label$8
              }
              if (HEAP32[266661] == ($1 | 0)) {
               break label$7
              }
              $3 = HEAP32[$1 + 4 >> 2];
              if (($3 & 3) != 1) {
               break label$3
              }
              $4 = $3 & -8;
              if ($4 >>> 0 >= 256) {
               break label$6
              }
              $6 = HEAP32[$1 + 12 >> 2];
              $7 = HEAP32[$1 + 8 >> 2];
              if (($6 | 0) == ($7 | 0)) {
               break label$5
              }
              HEAP32[$7 + 12 >> 2] = $6;
              HEAP32[$6 + 8 >> 2] = $7;
              break label$4;
             }
             HEAP32[266559] = $1 | $2;
             $2 = $0;
            }
            HEAP32[$0 + 8 >> 2] = $4;
            HEAP32[$2 + 12 >> 2] = $4;
            HEAP32[$4 + 12 >> 2] = $0;
            HEAP32[$4 + 8 >> 2] = $2;
           }
           $0 = HEAP32[266660];
           if ($0 >>> 0 <= $5 >>> 0) {
            break label$1
           }
           break folding_inner0;
          }
          HEAP32[266662] = $0;
          $3 = HEAP32[266660] + $5 | 0;
          HEAP32[266660] = $3;
          HEAP32[$0 + 4 >> 2] = $3 | 1;
          break label$2;
         }
         HEAP32[266661] = $0;
         $3 = HEAP32[266659] + $5 | 0;
         HEAP32[266659] = $3;
         HEAP32[$0 + 4 >> 2] = $3 | 1;
         HEAP32[$0 + $3 >> 2] = $3;
         break label$2;
        }
        dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__h173f6e2d56218081($1);
        break label$4;
       }
       (wasm2js_i32$0 = 1066236, wasm2js_i32$1 = HEAP32[266559] & __wasm_rotl_i32($3 >>> 3)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
      }
      $5 = $5 + $4 | 0;
      $1 = $1 + $4 | 0;
     }
     HEAP32[$1 + 4 >> 2] = HEAP32[$1 + 4 >> 2] & -2;
     HEAP32[$0 + 4 >> 2] = $5 | 1;
     HEAP32[$0 + $5 >> 2] = $5;
     label$72 : {
      label$73 : {
       if ($5 >>> 0 < 256) {
        $1 = $5 >>> 3;
        $3 = ($1 << 3) + 1066244 | 0;
        $4 = HEAP32[266559];
        $1 = 1 << ($1 & 31);
        if (!($4 & $1)) {
         break label$73
        }
        $1 = HEAP32[$3 + 8 >> 2];
        break label$72;
       }
       dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h2b5800089452f7a4($0, $5);
       break label$2;
      }
      HEAP32[266559] = $1 | $4;
      $1 = $3;
     }
     HEAP32[$3 + 8 >> 2] = $0;
     HEAP32[$1 + 12 >> 2] = $0;
     HEAP32[$0 + 12 >> 2] = $3;
     HEAP32[$0 + 8 >> 2] = $1;
    }
    return $2 + 8 | 0;
   }
   return $3;
  }
  $2 = $0 - $5 | 0;
  HEAP32[266660] = $2;
  $0 = HEAP32[266662];
  $3 = $0 + $5 | 0;
  HEAP32[266662] = $3;
  HEAP32[$3 + 4 >> 2] = $2 | 1;
  HEAP32[$0 + 4 >> 2] = $5 | 3;
  return $0 + 8 | 0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h93a1b54aa58790c3($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = Math_fround(0), $10 = Math_fround(0), $11 = 0, $12 = Math_fround(0), $13 = 0, $14 = 0, $15 = 0, $16 = Math_fround(0), $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = Math_fround(0), $23 = Math_fround(0), $24 = 0, $25 = 0;
  $3 = global$0 - 128 | 0;
  global$0 = $3;
  $4 = HEAP32[$2 + 8 >> 2];
  $7 = HEAP32[$2 >> 2];
  HEAP32[$3 + 104 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$3 + 96 >> 2] = $7;
  HEAP32[$3 + 100 >> 2] = $7 + Math_imul($4, 192);
  $12 = $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__h84bf3a74ef0c96ac($3 + 96 | 0);
  $4 = HEAP32[$1 + 4 >> 2];
  $5 = HEAP32[$1 >> 2];
  label$1 : {
   if ((HEAPU8[$5 | 0] | 2) == 3) {
    $9 = HEAPF32[$4 + 12 >> 2];
    $7 = HEAP32[$4 + 8 >> 2];
    break label$1;
   }
   $9 = HEAPF32[$4 + 4 >> 2];
   $7 = HEAP32[$4 >> 2];
  }
  $7 = $12 < ($7 ? Math_fround(0.0) : $9);
  HEAP8[$3 + 46 | 0] = $7;
  HEAP8[$3 + 47 | 0] = $7 ^ 1;
  $6 = HEAP32[$2 + 8 >> 2];
  $7 = HEAP32[$2 >> 2];
  $8 = HEAP32[$1 + 12 >> 2];
  $15 = HEAP32[$1 + 8 >> 2];
  HEAP32[$3 + 112 >> 2] = HEAP32[$1 + 16 >> 2];
  HEAP32[$3 + 104 >> 2] = $15;
  HEAP32[$3 + 108 >> 2] = $8;
  HEAP32[$3 + 100 >> 2] = $5;
  HEAP32[$3 + 96 >> 2] = $4;
  $8 = $7 + Math_imul($6, 192) | 0;
  HEAP32[$3 + 120 >> 2] = $3 + 47;
  HEAP32[$3 + 116 >> 2] = $3 + 46;
  $4 = $7;
  label$3 : {
   label$4 : {
    label$5 : {
     label$6 : {
      label$7 : {
       label$8 : {
        while (1) {
         if ($8 - $4 >>> 0 <= 576) {
          break label$8
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbfffed49b1cc5153($3 + 24 | 0, $3 + 96 | 0, $4);
         $5 = HEAP32[$3 + 24 >> 2];
         if ($5) {
          break label$7
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbfffed49b1cc5153($3 + 16 | 0, $3 + 96 | 0, $4 + 192 | 0);
         $5 = HEAP32[$3 + 16 >> 2];
         if ($5) {
          break label$6
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbfffed49b1cc5153($3 + 8 | 0, $3 + 96 | 0, $4 + 384 | 0);
         $5 = HEAP32[$3 + 8 >> 2];
         if ($5) {
          break label$5
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbfffed49b1cc5153($3, $3 + 96 | 0, $4 + 576 | 0);
         $4 = $4 + 768 | 0;
         $5 = HEAP32[$3 >> 2];
         if (!$5) {
          continue
         }
         break;
        };
        $4 = HEAP32[$3 + 4 >> 2];
        break label$3;
       }
       $7 = $7 + Math_imul($6, 192) | 0;
       while (1) {
        if (($4 | 0) == ($7 | 0)) {
         break label$4
        }
        stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbfffed49b1cc5153($3 + 32 | 0, $3 + 96 | 0, $4);
        $4 = $4 + 192 | 0;
        $5 = HEAP32[$3 + 32 >> 2];
        if (!$5) {
         continue
        }
        break;
       };
       $4 = HEAP32[$3 + 36 >> 2];
       break label$3;
      }
      $4 = HEAP32[$3 + 28 >> 2];
      break label$3;
     }
     $4 = HEAP32[$3 + 20 >> 2];
     break label$3;
    }
    $4 = HEAP32[$3 + 12 >> 2];
    break label$3;
   }
   $6 = $2 + 8 | 0;
   $4 = HEAP32[$6 >> 2];
   $7 = HEAP32[$2 >> 2];
   HEAP32[$3 + 104 >> 2] = HEAP32[$1 >> 2];
   HEAP32[$3 + 96 >> 2] = $7;
   HEAP32[$3 + 100 >> 2] = $7 + Math_imul($4, 192);
   $12 = $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__h510d770044873e28($3 + 96 | 0);
   $7 = 4;
   $4 = HEAP32[$1 + 4 >> 2];
   label$11 : {
    if ((HEAPU8[HEAP32[$1 >> 2]] | 2) == 3) {
     $9 = HEAPF32[$4 + 12 >> 2];
     $4 = HEAP32[$4 + 8 >> 2];
     break label$11;
    }
    $9 = HEAPF32[$4 + 4 >> 2];
    $4 = HEAP32[$4 >> 2];
   }
   HEAP32[$3 + 56 >> 2] = 0;
   HEAP32[$3 + 48 >> 2] = 4;
   HEAP32[$3 + 52 >> 2] = 0;
   HEAP32[$3 + 72 >> 2] = 0;
   HEAP32[$3 + 64 >> 2] = 4;
   HEAP32[$3 + 68 >> 2] = 0;
   $15 = 4;
   $6 = HEAP32[$6 >> 2];
   label$13 : {
    if (!$6) {
     break label$13
    }
    $23 = $4 ? Math_fround(0.0) : Math_fround($9 - $12);
    $4 = HEAP32[$2 >> 2];
    $14 = $4 + Math_imul($6, 192) | 0;
    $20 = $3 + 72 | 0;
    $25 = $3 + 112 | 0;
    $24 = $3 + 108 | 0;
    $21 = $1 + 4 | 0;
    label$14 : {
     while (1) {
      $8 = 0;
      $15 = 4;
      $7 = 4;
      $5 = 0;
      while (1) {
       $6 = $4 + 192 | 0;
       label$17 : {
        if (HEAPU8[$4 + 188 | 0]) {
         if (($5 | 0) == HEAP32[$3 + 52 >> 2]) {
          alloc__raw_vec__RawVec_T_2cA___reserve__h52463841ac7c0460($3 + 48 | 0, $5);
          $15 = HEAP32[$3 + 48 >> 2];
          $5 = HEAP32[$3 + 56 >> 2];
         }
         HEAP32[($5 << 2) + $15 >> 2] = $4;
         $5 = $5 + 1 | 0;
         HEAP32[$3 + 56 >> 2] = $5;
         break label$17;
        }
        if (($8 | 0) == HEAP32[$3 + 68 >> 2]) {
         alloc__raw_vec__RawVec_T_2cA___reserve__h52463841ac7c0460($3 - -64 | 0, $8);
         $8 = HEAP32[$20 >> 2];
         $7 = HEAP32[$3 + 64 >> 2];
        }
        HEAP32[($8 << 2) + $7 >> 2] = $4;
        $8 = $8 + 1 | 0;
        HEAP32[$20 >> 2] = $8;
       }
       $4 = $6;
       if (($14 | 0) != ($4 | 0)) {
        continue
       }
       break;
      };
      if (!$8) {
       break label$13
      }
      $4 = HEAP32[$1 >> 2];
      HEAP8[$25 | 0] = 0;
      $6 = $8 << 2;
      HEAP32[$24 >> 2] = $7 + $6;
      $14 = $3 + 104 | 0;
      HEAP32[$14 >> 2] = $7;
      HEAP32[$3 + 96 >> 2] = $15;
      HEAP32[$3 + 100 >> 2] = ($5 << 2) + $15;
      $9 = Math_fround(0.0);
      $22 = $core__iter__adapters__chain__Chain_A_2cB__20as_20core__iter__traits__iterator__Iterator___fold__h55b928ef9b835e95($3 + 96 | 0, $4);
      $12 = Math_fround(0.0);
      label$33 : {
       label$21 : {
        label$22 : {
         label$23 : {
          label$24 : {
           label$25 : {
            if ($6) {
             $4 = HEAP32[HEAP32[$1 + 12 >> 2] >> 2];
             $5 = HEAP32[$4 + 8 >> 2];
             $13 = HEAP32[$4 >> 2];
             $4 = $7;
             while (1) {
              $11 = HEAP32[HEAP32[$4 >> 2] >> 2];
              if ($5 >>> 0 <= $11 >>> 0) {
               break label$25
              }
              $4 = $4 + 4 | 0;
              $11 = $13 + Math_imul($11, 288) | 0;
              $9 = Math_fround($9 + HEAPF32[$11 + 132 >> 2]);
              $12 = Math_fround($12 + HEAPF32[$11 + 128 >> 2]);
              $6 = $6 + -4 | 0;
              if ($6) {
               continue
              }
              break;
             };
            }
            label$28 : {
             label$29 : {
              label$30 : {
               label$31 : {
                if (!($12 < Math_fround(1.0))) {
                 break label$31
                }
                if (!HEAPU8[$3 + 46 | 0]) {
                 break label$31
                }
                $16 = Math_fround($23 * $12);
                $4 = HEAP32[$21 >> 2];
                if ((HEAPU8[HEAP32[$1 >> 2]] | 2) != 3) {
                 break label$30
                }
                $5 = HEAP32[$4 + 8 >> 2];
                $10 = HEAPF32[$4 + 12 >> 2];
                break label$22;
               }
               label$32 : {
                if (!($9 < Math_fround(1.0))) {
                 break label$32
                }
                if (!HEAPU8[$3 + 47 | 0]) {
                 break label$32
                }
                $16 = Math_fround($23 * $9);
                $4 = HEAP32[$21 >> 2];
                if ((HEAPU8[HEAP32[$1 >> 2]] | 2) != 3) {
                 break label$28
                }
                $5 = HEAP32[$4 + 8 >> 2];
                $10 = HEAPF32[$4 + 12 >> 2];
                break label$23;
               }
               $4 = HEAP32[$21 >> 2];
               if ((HEAPU8[HEAP32[$1 >> 2]] | 2) != 3) {
                break label$29
               }
               $5 = HEAP32[$4 + 8 >> 2];
               $10 = HEAPF32[$4 + 12 >> 2];
               break label$24;
              }
              $10 = HEAPF32[$4 + 4 >> 2];
              $5 = HEAP32[$4 >> 2];
              break label$22;
             }
             $10 = HEAPF32[$4 + 4 >> 2];
             $5 = HEAP32[$4 >> 2];
             break label$24;
            }
            $10 = HEAPF32[$4 + 4 >> 2];
            $5 = HEAP32[$4 >> 2];
            break label$23;
           }
           core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $11, $5);
           abort();
          }
          $10 = $5 ? Math_fround(0.0) : Math_fround($10 - $22);
          break label$21;
         }
         $10 = Math_fround($10 - $22);
         $10 = $5 ? $16 : $16 != $16 ? $10 : $16 < $10 ? $10 : $16;
         break label$21;
        }
        $10 = Math_fround($10 - $22);
        $10 = $5 ? $16 : $10 != $10 ? $16 : $16 < $10 ? $16 : $10;
       }
       if ((core__f32___impl_20f32___classify__h2cc2893972a149fc($10) & 255) != 4) {
        break label$33
       }
       label$34 : {
        label$35 : {
         label$36 : {
          label$37 : {
           label$38 : {
            if (!($12 > Math_fround(0.0))) {
             break label$38
            }
            if (!HEAPU8[$3 + 46 | 0]) {
             break label$38
            }
            $6 = $8 << 2;
            if (!$6) {
             break label$33
            }
            $13 = HEAP32[$1 + 12 >> 2];
            $17 = HEAP32[$1 >> 2];
            $4 = $7;
            break label$37;
           }
           if (!($9 > Math_fround(0.0))) {
            break label$33
           }
           if (!HEAPU8[$3 + 47 | 0]) {
            break label$33
           }
           $4 = $1 + 12 | 0;
           HEAP32[$14 >> 2] = HEAP32[$4 >> 2];
           HEAP32[$3 + 96 >> 2] = $7;
           $6 = $8 << 2;
           HEAP32[$3 + 100 >> 2] = $7 + $6;
           $9 = $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__ha784d13dacaebb46($3 + 96 | 0);
           if (!($9 > Math_fround(0.0))) {
            break label$33
           }
           if (!$6) {
            break label$33
           }
           $13 = HEAP32[$4 >> 2];
           $17 = HEAP32[$1 >> 2];
           $5 = $7;
           break label$36;
          }
          while (1) {
           $18 = HEAP32[$13 >> 2];
           $19 = HEAP32[$18 + 8 >> 2];
           $5 = HEAP32[$4 >> 2];
           $11 = HEAP32[$5 >> 2];
           if ($19 >>> 0 <= $11 >>> 0) {
            break label$35
           }
           $4 = $4 + 4 | 0;
           HEAPF32[((HEAPU8[$17 | 0] | 2) != 3 ? $5 + 160 | 0 : $5 + 164 | 0) >> 2] = HEAPF32[$5 + 132 >> 2] + Math_fround($10 * Math_fround(HEAPF32[(HEAP32[$18 >> 2] + Math_imul($11, 288) | 0) + 128 >> 2] / $12));
           $6 = $6 + -4 | 0;
           if ($6) {
            continue
           }
           break;
          };
          break label$33;
         }
         while (1) {
          $18 = HEAP32[$13 >> 2];
          $19 = HEAP32[$18 + 8 >> 2];
          $4 = HEAP32[$5 >> 2];
          $11 = HEAP32[$4 >> 2];
          if ($19 >>> 0 <= $11 >>> 0) {
           break label$34
          }
          $5 = $5 + 4 | 0;
          HEAPF32[((HEAPU8[$17 | 0] | 2) != 3 ? $4 + 160 | 0 : $4 + 164 | 0) >> 2] = HEAPF32[$4 + 132 >> 2] + Math_fround($10 * Math_fround(Math_fround(HEAPF32[$4 + 136 >> 2] * HEAPF32[(HEAP32[$18 >> 2] + Math_imul($11, 288) | 0) + 132 >> 2]) / $9));
          $6 = $6 + -4 | 0;
          if ($6) {
           continue
          }
          break;
         };
         break label$33;
        }
        core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $11, $19);
        abort();
       }
       core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $11, $19);
       abort();
      }
      HEAP32[$24 >> 2] = HEAP32[$1 >> 2];
      HEAP32[$14 >> 2] = HEAP32[$1 + 16 >> 2];
      $4 = $1 + 8 | 0;
      $6 = HEAP32[$4 + 4 >> 2];
      HEAP32[$3 + 96 >> 2] = HEAP32[$4 >> 2];
      HEAP32[$3 + 100 >> 2] = $6;
      $14 = $8 << 2;
      $11 = $14 + $7 | 0;
      $12 = Math_fround(0.0);
      label$45 : {
       label$46 : {
        if ($8 >>> 0 >= 4) {
         $6 = $7;
         while (1) {
          stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbd5b7feabac41337($3 + 80 | 0, $3 + 96 | 0, $12, $6);
          $8 = $3 + 88 | 0;
          $4 = HEAP32[$8 >> 2];
          $5 = HEAP32[$3 + 84 >> 2];
          $13 = HEAP32[$3 + 80 >> 2];
          if (($13 | 0) == 1) {
           break label$45
          }
          $9 = HEAPF32[$3 + 84 >> 2];
          $17 = $6 + 4 | 0;
          label$49 : {
           if (!$13) {
            break label$49
           }
           FUNCTION_TABLE[HEAP32[$4 >> 2]]($5);
           if (!HEAP32[$4 + 4 >> 2]) {
            break label$49
           }
           dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($5);
          }
          stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbd5b7feabac41337($3 + 80 | 0, $3 + 96 | 0, $9, $17);
          $4 = HEAP32[$8 >> 2];
          $5 = HEAP32[$3 + 84 >> 2];
          $13 = HEAP32[$3 + 80 >> 2];
          if (($13 | 0) == 1) {
           break label$45
          }
          $9 = HEAPF32[$3 + 84 >> 2];
          $17 = $6 + 8 | 0;
          label$50 : {
           if (!$13) {
            break label$50
           }
           FUNCTION_TABLE[HEAP32[$4 >> 2]]($5);
           if (!HEAP32[$4 + 4 >> 2]) {
            break label$50
           }
           dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($5);
          }
          stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbd5b7feabac41337($3 + 80 | 0, $3 + 96 | 0, $9, $17);
          $4 = HEAP32[$8 >> 2];
          $5 = HEAP32[$3 + 84 >> 2];
          $13 = HEAP32[$3 + 80 >> 2];
          if (($13 | 0) == 1) {
           break label$45
          }
          $9 = HEAPF32[$3 + 84 >> 2];
          $17 = $6 + 12 | 0;
          label$51 : {
           if (!$13) {
            break label$51
           }
           FUNCTION_TABLE[HEAP32[$4 >> 2]]($5);
           if (!HEAP32[$4 + 4 >> 2]) {
            break label$51
           }
           dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($5);
          }
          stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbd5b7feabac41337($3 + 80 | 0, $3 + 96 | 0, $9, $17);
          $4 = HEAP32[$8 >> 2];
          $12 = HEAPF32[$3 + 84 >> 2];
          $5 = HEAP32[$3 + 84 >> 2];
          $8 = HEAP32[$3 + 80 >> 2];
          if (($8 | 0) == 1) {
           break label$45
          }
          $6 = $6 + 16 | 0;
          label$52 : {
           if (!$8) {
            break label$52
           }
           FUNCTION_TABLE[HEAP32[$4 >> 2]]($5);
           if (!HEAP32[$4 + 4 >> 2]) {
            break label$52
           }
           dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($5);
          }
          if ($11 - $6 >>> 0 > 12) {
           continue
          }
          break;
         };
         break label$46;
        }
        $5 = 0;
        $6 = $7;
       }
       if (($6 | 0) != ($11 | 0)) {
        while (1) {
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbd5b7feabac41337($3 + 80 | 0, $3 + 96 | 0, $12, $6);
         $4 = HEAP32[$3 + 88 >> 2];
         $12 = HEAPF32[$3 + 84 >> 2];
         $5 = HEAP32[$3 + 84 >> 2];
         $8 = HEAP32[$3 + 80 >> 2];
         if (($8 | 0) == 1) {
          break label$45
         }
         $6 = $6 + 4 | 0;
         label$55 : {
          if (!$8) {
           break label$55
          }
          FUNCTION_TABLE[HEAP32[$4 >> 2]]($5);
          if (!HEAP32[$4 + 4 >> 2]) {
           break label$55
          }
          dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($5);
         }
         if (($6 | 0) != ($11 | 0)) {
          continue
         }
         break;
        }
       }
       if ($14) {
        $9 = (wasm2js_scratch_store_i32(0, $5), wasm2js_scratch_load_f32());
        $4 = $7;
        while (1) {
         $6 = HEAP32[$4 >> 2];
         label$58 : {
          if (!!($9 > Math_fround(0.0))) {
           HEAP8[$6 + 188 | 0] = HEAPF32[$6 + 140 >> 2] > Math_fround(0.0);
           break label$58;
          }
          if (!!($9 < Math_fround(0.0))) {
           HEAP8[$6 + 188 | 0] = HEAPF32[$6 + 140 >> 2] < Math_fround(0.0);
           break label$58;
          }
          HEAP8[$6 + 188 | 0] = 1;
         }
         $4 = $4 + 4 | 0;
         $14 = $14 + -4 | 0;
         if ($14) {
          continue
         }
         break;
        };
       }
       if (HEAP32[$3 + 68 >> 2]) {
        dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($7)
       }
       if (HEAP32[$3 + 52 >> 2]) {
        dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($15)
       }
       HEAP32[$3 + 56 >> 2] = 0;
       HEAP32[$3 + 48 >> 2] = 4;
       HEAP32[$3 + 52 >> 2] = 0;
       HEAP32[$20 >> 2] = 0;
       HEAP32[$3 + 64 >> 2] = 4;
       HEAP32[$3 + 68 >> 2] = 0;
       $4 = HEAP32[$2 >> 2];
       $7 = HEAP32[$2 + 8 >> 2];
       $14 = $4 + Math_imul($7, 192) | 0;
       if ($7) {
        continue
       }
       break label$14;
      }
      break;
     };
     if (HEAP32[$3 + 68 >> 2]) {
      dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($7)
     }
     if (!HEAP32[$3 + 52 >> 2]) {
      break label$3
     }
     dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($15);
     break label$3;
    }
    $7 = 4;
    $15 = 4;
   }
   if (HEAP32[$3 + 68 >> 2]) {
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($7)
   }
   $4 = HEAP32[$3 + 52 >> 2];
   if ($4) {
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($15)
   }
   $5 = 0;
  }
  HEAP32[$0 + 4 >> 2] = $4;
  HEAP32[$0 >> 2] = $5;
  global$0 = $3 + 128 | 0;
 }
 
 function stretch_layout__parse_style__h7b31828c5d69ff51($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = Math_fround(0), $15 = 0, $16 = Math_fround(0), $17 = 0, $18 = Math_fround(0), $19 = 0, $20 = Math_fround(0), $21 = 0, $22 = Math_fround(0), $23 = 0, $24 = Math_fround(0), $25 = 0, $26 = Math_fround(0), $27 = 0, $28 = Math_fround(0), $29 = 0, $30 = Math_fround(0), $31 = 0, $32 = Math_fround(0), $33 = 0, $34 = Math_fround(0), $35 = 0, $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = 0, $40 = Math_fround(0), $41 = 0, $42 = Math_fround(0), $43 = 0, $44 = Math_fround(0), $45 = Math_fround(0), $46 = 0, $47 = Math_fround(0), $48 = 0, $49 = 0, $50 = Math_fround(0), $51 = 0, $52 = Math_fround(0), $53 = 0, $54 = Math_fround(0), $55 = 0, $56 = Math_fround(0), $57 = 0, $58 = Math_fround(0), $59 = 0, $60 = Math_fround(0), $61 = 0, $62 = Math_fround(0), $63 = Math_fround(0);
  $2 = global$0 - 288 | 0;
  global$0 = $2;
  stretch_layout__get_i32__hece4b5caa75e8ca8($2 + 280 | 0, $1, 1048756, 7);
  $12 = HEAP32[$2 + 280 >> 2] ? HEAP32[$2 + 284 >> 2] == 1 : 0;
  stretch_layout__get_i32__hece4b5caa75e8ca8($2 + 272 | 0, $1, 1048763, 12);
  $13 = HEAP32[$2 + 272 >> 2] ? HEAP32[$2 + 276 >> 2] == 1 : 0;
  stretch_layout__get_i32__hece4b5caa75e8ca8($2 + 264 | 0, $1, 1048775, 9);
  label$5 : {
   label$6 : {
    if (HEAP32[$2 + 264 >> 2]) {
     $11 = 2;
     $3 = HEAP32[$2 + 268 >> 2];
     $3 = ($3 | 0) == 2 ? 2 : ($3 | 0) == 1;
     if (($3 | 0) == 1) {
      break label$6
     }
     if (($3 | 0) == 2) {
      break label$5
     }
     $11 = 0;
     break label$5;
    }
    break label$5;
   }
   $11 = 1;
  }
  stretch_layout__get_i32__hece4b5caa75e8ca8($2 + 256 | 0, $1, 1048784, 13);
  label$8 : {
   if (HEAP32[$2 + 256 >> 2]) {
    $3 = HEAP32[$2 + 260 >> 2] + -1 | 0;
    $8 = 0;
    if ($3 >>> 0 >= 3) {
     break label$8
    }
    $8 = $3 + 1 | 0;
    break label$8;
   }
   $8 = 0;
  }
  stretch_layout__get_i32__hece4b5caa75e8ca8($2 + 248 | 0, $1, 1048797, 8);
  label$10 : {
   label$11 : {
    if (HEAP32[$2 + 248 >> 2]) {
     $3 = 2;
     $5 = HEAP32[$2 + 252 >> 2];
     $5 = ($5 | 0) == 2 ? 2 : ($5 | 0) == 1;
     if (($5 | 0) == 1) {
      break label$11
     }
     if (($5 | 0) == 2) {
      break label$10
     }
     $3 = 0;
     break label$10;
    }
    $3 = 0;
    break label$10;
   }
   $3 = 1;
  }
  stretch_layout__get_i32__hece4b5caa75e8ca8($2 + 240 | 0, $1, 1048805, 8);
  label$13 : {
   label$14 : {
    if (HEAP32[$2 + 240 >> 2]) {
     $5 = 2;
     $4 = HEAP32[$2 + 244 >> 2];
     $4 = ($4 | 0) == 2 ? 2 : ($4 | 0) == 1;
     if (($4 | 0) == 1) {
      break label$14
     }
     if (($4 | 0) == 2) {
      break label$13
     }
     $5 = 0;
     break label$13;
    }
    $5 = 0;
    break label$13;
   }
   $5 = 1;
  }
  stretch_layout__get_i32__hece4b5caa75e8ca8($2 + 232 | 0, $1, 1048813, 10);
  label$16 : {
   if (HEAP32[$2 + 232 >> 2]) {
    $4 = HEAP32[$2 + 236 >> 2];
    $4 = $4 >>> 0 < 4 ? $4 : 4;
    break label$16;
   }
   $4 = 4;
  }
  stretch_layout__get_i32__hece4b5caa75e8ca8($2 + 224 | 0, $1, 1048823, 9);
  label$18 : {
   if (HEAP32[$2 + 224 >> 2]) {
    $9 = HEAP32[$2 + 228 >> 2] + -1 | 0;
    $6 = 0;
    if ($9 >>> 0 >= 5) {
     break label$18
    }
    $6 = $9 + 1 | 0;
    break label$18;
   }
   $6 = 0;
  }
  $9 = $6;
  stretch_layout__get_i32__hece4b5caa75e8ca8($2 + 216 | 0, $1, 1048832, 12);
  label$20 : {
   if (HEAP32[$2 + 216 >> 2]) {
    $6 = HEAP32[$2 + 220 >> 2];
    $6 = $6 >>> 0 < 6 ? $6 : 3;
    break label$20;
   }
   $6 = 3;
  }
  stretch_layout__get_i32__hece4b5caa75e8ca8($2 + 208 | 0, $1, 1048844, 14);
  label$22 : {
   if (HEAP32[$2 + 208 >> 2]) {
    $10 = HEAP32[$2 + 212 >> 2] + -1 | 0;
    $7 = 0;
    if ($10 >>> 0 >= 5) {
     break label$22
    }
    $7 = $10 + 1 | 0;
    break label$22;
   }
   $7 = 0;
  }
  $10 = $7;
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 200 | 0, $1, 1048858, 5);
  $7 = HEAP32[$2 + 200 >> 2];
  $14 = HEAPF32[$2 + 204 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 192 | 0, $1, 1048863, 3);
  $15 = HEAP32[$2 + 192 >> 2];
  $16 = HEAPF32[$2 + 196 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 184 | 0, $1, 1048866, 3);
  $17 = HEAP32[$2 + 184 >> 2];
  $18 = HEAPF32[$2 + 188 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 176 | 0, $1, 1048869, 6);
  $19 = HEAP32[$2 + 176 >> 2];
  $20 = HEAPF32[$2 + 180 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 168 | 0, $1, 1048875, 11);
  $21 = HEAP32[$2 + 168 >> 2];
  $22 = HEAPF32[$2 + 172 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 160 | 0, $1, 1048886, 9);
  $23 = HEAP32[$2 + 160 >> 2];
  $24 = HEAPF32[$2 + 164 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 152 | 0, $1, 1048895, 9);
  $25 = HEAP32[$2 + 152 >> 2];
  $26 = HEAPF32[$2 + 156 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 144 | 0, $1, 1048904, 12);
  $27 = HEAP32[$2 + 144 >> 2];
  $28 = HEAPF32[$2 + 148 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 136 | 0, $1, 1048916, 12);
  $29 = HEAP32[$2 + 136 >> 2];
  $30 = HEAPF32[$2 + 140 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 128 | 0, $1, 1048928, 10);
  $31 = HEAP32[$2 + 128 >> 2];
  $32 = HEAPF32[$2 + 132 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 120 | 0, $1, 1048938, 10);
  $33 = HEAP32[$2 + 120 >> 2];
  $34 = HEAPF32[$2 + 124 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 112 | 0, $1, 1048948, 13);
  $35 = HEAP32[$2 + 112 >> 2];
  $36 = HEAPF32[$2 + 116 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 104 | 0, $1, 1048961, 11);
  $37 = HEAP32[$2 + 104 >> 2];
  $38 = HEAPF32[$2 + 108 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 96 | 0, $1, 1048972, 9);
  $39 = HEAP32[$2 + 96 >> 2];
  $40 = HEAPF32[$2 + 100 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 88 | 0, $1, 1048981, 9);
  $41 = HEAP32[$2 + 88 >> 2];
  $42 = HEAPF32[$2 + 92 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 80 | 0, $1, 1048990, 12);
  $43 = HEAP32[$2 + 80 >> 2];
  $44 = HEAPF32[$2 + 84 >> 2];
  stretch_layout__get_f32__ha7adebcd40baf7fe($2 + 72 | 0, $1, 1049002, 8);
  $45 = HEAPF32[$2 + 76 >> 2];
  $46 = HEAP32[$2 + 72 >> 2];
  stretch_layout__get_f32__ha7adebcd40baf7fe($2 - -64 | 0, $1, 1049010, 10);
  $47 = HEAPF32[$2 + 68 >> 2];
  $48 = HEAP32[$2 + 64 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 56 | 0, $1, 1049020, 9);
  $49 = HEAP32[$2 + 56 >> 2];
  $50 = HEAPF32[$2 + 60 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 48 | 0, $1, 1049029, 5);
  $51 = HEAP32[$2 + 48 >> 2];
  $52 = HEAPF32[$2 + 52 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 40 | 0, $1, 1049034, 6);
  $53 = HEAP32[$2 + 40 >> 2];
  $54 = HEAPF32[$2 + 44 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 32 | 0, $1, 1049040, 8);
  $55 = HEAP32[$2 + 32 >> 2];
  $56 = HEAPF32[$2 + 36 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 24 | 0, $1, 1049048, 9);
  $57 = HEAP32[$2 + 24 >> 2];
  $58 = HEAPF32[$2 + 28 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 16 | 0, $1, 1049057, 8);
  $59 = HEAP32[$2 + 16 >> 2];
  $60 = HEAPF32[$2 + 20 >> 2];
  stretch_layout__get_dimension__h96f4ff66d8555efd($2 + 8 | 0, $1, 1049065, 9);
  $61 = HEAP32[$2 + 8 >> 2];
  $62 = HEAPF32[$2 + 12 >> 2];
  stretch_layout__get_f32__ha7adebcd40baf7fe($2, $1, 1049074, 11);
  $1 = HEAP32[$2 >> 2];
  $63 = HEAPF32[$2 + 4 >> 2];
  HEAP8[$0 + 209 | 0] = $10;
  HEAP8[$0 + 208 | 0] = $6;
  HEAP8[$0 + 207 | 0] = $9;
  HEAP8[$0 + 206 | 0] = $4;
  HEAP8[$0 + 205 | 0] = $5;
  HEAP8[$0 + 204 | 0] = $3;
  HEAP8[$0 + 203 | 0] = $8;
  HEAP8[$0 + 202 | 0] = $11;
  HEAP8[$0 + 201 | 0] = $13;
  HEAP8[$0 + 200 | 0] = $12;
  HEAPF32[$0 + 196 >> 2] = $63;
  HEAPF32[$0 + 188 >> 2] = $62;
  HEAP32[$0 + 184 >> 2] = $61;
  HEAPF32[$0 + 180 >> 2] = $60;
  HEAP32[$0 + 176 >> 2] = $59;
  HEAPF32[$0 + 172 >> 2] = $58;
  HEAP32[$0 + 168 >> 2] = $57;
  HEAPF32[$0 + 164 >> 2] = $56;
  HEAP32[$0 + 160 >> 2] = $55;
  HEAPF32[$0 + 156 >> 2] = $54;
  HEAP32[$0 + 152 >> 2] = $53;
  HEAPF32[$0 + 148 >> 2] = $52;
  HEAP32[$0 + 144 >> 2] = $51;
  HEAPF32[$0 + 140 >> 2] = $50;
  HEAP32[$0 + 136 >> 2] = $49;
  HEAPF32[$0 + 132 >> 2] = $48 ? $47 : Math_fround(1.0);
  HEAPF32[$0 + 128 >> 2] = $46 ? $45 : Math_fround(0.0);
  HEAPF32[$0 + 124 >> 2] = $44;
  HEAP32[$0 + 120 >> 2] = $43;
  HEAPF32[$0 + 116 >> 2] = $42;
  HEAP32[$0 + 112 >> 2] = $41;
  HEAPF32[$0 + 108 >> 2] = $40;
  HEAP32[$0 + 104 >> 2] = $39;
  HEAPF32[$0 + 100 >> 2] = $38;
  HEAP32[$0 + 96 >> 2] = $37;
  HEAPF32[$0 + 92 >> 2] = $36;
  HEAP32[$0 + 88 >> 2] = $35;
  HEAPF32[$0 + 84 >> 2] = $34;
  HEAP32[$0 + 80 >> 2] = $33;
  HEAPF32[$0 + 76 >> 2] = $32;
  HEAP32[$0 + 72 >> 2] = $31;
  HEAPF32[$0 + 68 >> 2] = $30;
  HEAP32[$0 + 64 >> 2] = $29;
  HEAPF32[$0 + 60 >> 2] = $28;
  HEAP32[$0 + 56 >> 2] = $27;
  HEAPF32[$0 + 52 >> 2] = $26;
  HEAP32[$0 + 48 >> 2] = $25;
  HEAPF32[$0 + 44 >> 2] = $24;
  HEAP32[$0 + 40 >> 2] = $23;
  HEAPF32[$0 + 36 >> 2] = $22;
  HEAP32[$0 + 32 >> 2] = $21;
  HEAPF32[$0 + 28 >> 2] = $20;
  HEAP32[$0 + 24 >> 2] = $19;
  HEAPF32[$0 + 20 >> 2] = $18;
  HEAP32[$0 + 16 >> 2] = $17;
  HEAPF32[$0 + 12 >> 2] = $16;
  HEAP32[$0 + 8 >> 2] = $15;
  HEAPF32[$0 + 4 >> 2] = $14;
  HEAP32[$0 >> 2] = $7;
  HEAP32[$0 + 192 >> 2] = !$1;
  global$0 = $2 + 288 | 0;
 }
 
 function stretch__forest__Forest__compute_layout__h227d65179681f355($0, $1, $2, $3) {
  var $4 = 0, $5 = Math_fround(0), $6 = Math_fround(0), $7 = 0, $8 = Math_fround(0), $9 = 0, $10 = Math_fround(0), $11 = Math_fround(0), $12 = 0, $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0;
  $4 = global$0 - 48 | 0;
  global$0 = $4;
  label$1 : {
   $7 = HEAP32[$1 + 8 >> 2];
   if ($7 >>> 0 > $2 >>> 0) {
    $10 = HEAPF32[$3 + 12 >> 2];
    $9 = HEAP32[$3 + 8 >> 2];
    $11 = HEAPF32[$3 + 4 >> 2];
    $12 = HEAP32[$3 >> 2];
    $3 = HEAP32[$1 >> 2] + Math_imul($2, 288) | 0;
    $18 = HEAP32[$3 + 168 >> 2];
    $19 = HEAP32[$3 + 176 >> 2];
    $7 = HEAP32[$3 + 144 >> 2];
    $14 = HEAPF32[$3 + 188 >> 2];
    $20 = HEAP32[$3 + 184 >> 2];
    $15 = HEAPF32[$3 + 180 >> 2];
    $16 = HEAPF32[$3 + 172 >> 2];
    $17 = HEAPF32[$3 + 164 >> 2];
    $6 = HEAPF32[$3 + 156 >> 2];
    $13 = HEAP32[$3 + 152 >> 2];
    $5 = HEAPF32[$3 + 148 >> 2];
    $22 = $0;
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             $21 = HEAP32[$3 + 160 >> 2];
             if (($21 & -2) == 2) {
              break label$11
             }
             if (($18 & -2) == 2) {
              break label$11
             }
             if (($19 & -2) == 2) {
              break label$11
             }
             if (($20 & -2) == 2) {
              break label$11
             }
             if (($7 | 0) == 3) {
              break label$10
             }
             if (($7 | 0) != 2) {
              break label$9
             }
             $3 = 0;
             break label$8;
            }
            label$12 : {
             label$13 : {
              if (($7 | 0) != 3) {
               if (($7 | 0) != 2) {
                break label$13
               }
               $3 = 0;
               break label$12;
              }
              $5 = Math_fround($11 * $5);
              $3 = ($12 | 0) != 0;
              break label$12;
             }
             $3 = 1;
            }
            label$15 : {
             label$16 : {
              if (($13 | 0) != 3) {
               if (($13 | 0) != 2) {
                break label$16
               }
               $7 = 0;
               break label$15;
              }
              $6 = Math_fround($10 * $6);
              $7 = ($9 | 0) != 0;
              break label$15;
             }
             $7 = 1;
            }
            HEAPF32[$4 + 28 >> 2] = $6;
            HEAP32[$4 + 24 >> 2] = $7;
            HEAPF32[$4 + 20 >> 2] = $5;
            HEAP32[$4 + 16 >> 2] = $3;
            HEAPF32[$4 + 44 >> 2] = $10;
            HEAP32[$4 + 40 >> 2] = $9;
            HEAPF32[$4 + 36 >> 2] = $11;
            HEAP32[$4 + 32 >> 2] = $12;
            stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($4, $1, $2, $4 + 16 | 0, $4 + 32 | 0, 0);
            $3 = $4 + 8 | 0;
            $8 = HEAPF32[$3 >> 2];
            $7 = HEAP32[$3 >> 2];
            $6 = HEAPF32[$4 + 4 >> 2];
            $3 = HEAP32[$4 + 4 >> 2];
            $13 = HEAP32[$4 >> 2];
            if (($13 | 0) == 1) {
             break label$7
            }
            label$18 : {
             if (!$13) {
              break label$18
             }
             FUNCTION_TABLE[HEAP32[$7 >> 2]]($3);
             if (!HEAP32[$7 + 4 >> 2]) {
              break label$18
             }
             dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($3);
            }
            label$19 : {
             label$20 : {
              if (($21 | 0) != 3) {
               if (($21 | 0) != 2) {
                break label$19
               }
               $5 = $6 != $6 ? $17 : $6 < $17 ? $17 : $6;
               break label$20;
              }
              $5 = Math_fround($11 * $17);
              $5 = $6 != $6 ? $5 : $6 < $5 ? $5 : $6;
              if ($12) {
               break label$19
              }
             }
             $6 = $5;
            }
            label$22 : {
             label$23 : {
              if (($19 | 0) != 3) {
               if (($19 | 0) != 2) {
                break label$22
               }
               $5 = $15 != $15 ? $6 : $6 < $15 ? $6 : $15;
               break label$23;
              }
              $5 = Math_fround($11 * $15);
              $5 = $5 != $5 ? $6 : $6 < $5 ? $6 : $5;
              if ($12) {
               break label$22
              }
             }
             $6 = $5;
            }
            $5 = $8;
            label$25 : {
             label$26 : {
              if (($18 | 0) != 3) {
               if (($18 | 0) != 2) {
                break label$25
               }
               $8 = $5 != $5 ? $16 : $5 < $16 ? $16 : $5;
               break label$26;
              }
              $8 = Math_fround($10 * $16);
              $8 = $5 != $5 ? $8 : $5 < $8 ? $8 : $5;
              if ($9) {
               break label$25
              }
             }
             $5 = $8;
            }
            label$28 : {
             label$29 : {
              if (($20 | 0) != 3) {
               if (($20 | 0) != 2) {
                break label$28
               }
               $8 = $14 != $14 ? $5 : $5 < $14 ? $5 : $14;
               break label$29;
              }
              $8 = Math_fround($10 * $14);
              $8 = $8 != $8 ? $5 : $5 < $8 ? $5 : $8;
              if ($9) {
               break label$28
              }
             }
             $5 = $8;
            }
            HEAPF32[$4 + 28 >> 2] = $5;
            HEAP32[$4 + 24 >> 2] = 0;
            HEAPF32[$4 + 20 >> 2] = $6;
            HEAP32[$4 + 16 >> 2] = 0;
            HEAPF32[$4 + 44 >> 2] = $10;
            HEAP32[$4 + 40 >> 2] = $9;
            HEAPF32[$4 + 36 >> 2] = $11;
            HEAP32[$4 + 32 >> 2] = $12;
            stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($4, $1, $2, $4 + 16 | 0, $4 + 32 | 0, 1);
            $3 = $4 + 8 | 0;
            $6 = HEAPF32[$3 >> 2];
            $7 = HEAP32[$3 >> 2];
            $5 = HEAPF32[$4 + 4 >> 2];
            $3 = HEAP32[$4 + 4 >> 2];
            $9 = HEAP32[$4 >> 2];
            if (($9 | 0) == 1) {
             break label$7
            }
            if (!$9) {
             break label$5
            }
            FUNCTION_TABLE[HEAP32[$7 >> 2]]($3);
            if (!HEAP32[$7 + 4 >> 2]) {
             break label$5
            }
            dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($3);
            break label$5;
           }
           $5 = Math_fround($11 * $5);
           $3 = ($12 | 0) != 0;
           break label$8;
          }
          $3 = 1;
         }
         label$31 : {
          label$32 : {
           if (($13 | 0) != 3) {
            if (($13 | 0) != 2) {
             break label$32
            }
            $7 = 0;
            break label$31;
           }
           $6 = Math_fround($10 * $6);
           $7 = ($9 | 0) != 0;
           break label$31;
          }
          $7 = 1;
         }
         HEAPF32[$4 + 28 >> 2] = $6;
         HEAP32[$4 + 24 >> 2] = $7;
         HEAPF32[$4 + 20 >> 2] = $5;
         HEAP32[$4 + 16 >> 2] = $3;
         HEAPF32[$4 + 44 >> 2] = $10;
         HEAP32[$4 + 40 >> 2] = $9;
         HEAPF32[$4 + 36 >> 2] = $11;
         HEAP32[$4 + 32 >> 2] = $12;
         stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($4, $1, $2, $4 + 16 | 0, $4 + 32 | 0, 1);
         $3 = $4 + 8 | 0;
         $6 = HEAPF32[$3 >> 2];
         $7 = HEAP32[$3 >> 2];
         $5 = HEAPF32[$4 + 4 >> 2];
         $3 = HEAP32[$4 + 4 >> 2];
         $9 = HEAP32[$4 >> 2];
         if (($9 | 0) != 1) {
          break label$6
         }
        }
        if (!$3) {
         break label$4
        }
        HEAP32[$0 + 4 >> 2] = $3;
        HEAP32[$0 + 8 >> 2] = $7;
        $0 = 1;
        break label$3;
       }
       if (!$9) {
        break label$5
       }
       FUNCTION_TABLE[HEAP32[$7 >> 2]]($3);
       if (!HEAP32[$7 + 4 >> 2]) {
        break label$5
       }
       dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($3);
      }
      $0 = HEAP32[$1 + 8 >> 2];
      if ($0 >>> 0 <= $2 >>> 0) {
       break label$1
      }
      $0 = HEAP32[$1 >> 2] + Math_imul($2, 288) | 0;
      HEAP32[$0 + 220 >> 2] = 0;
      $3 = $0 + 232 | 0;
      HEAP32[$3 >> 2] = 0;
      HEAP32[$3 + 4 >> 2] = 0;
      HEAPF32[$0 + 228 >> 2] = $6;
      HEAPF32[$0 + 224 >> 2] = $5;
      stretch__algo___impl_20stretch__forest__Forest___round_layout__he1e66d70fec8b5f8($1, $1 + 12 | 0, $2, Math_fround(0.0), Math_fround(0.0));
     }
     $0 = 2;
    }
    HEAP32[$22 >> 2] = $0;
    global$0 = $4 + 48 | 0;
    return;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $2, $7);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $2, $0);
  abort();
 }
 
 function $str_20as_20core__fmt__Debug___fmt__hc8f3c3cee2cdcf2f($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
  $6 = global$0 - 32 | 0;
  global$0 = $6;
  $15 = 1;
  label$1 : {
   if (FUNCTION_TABLE[HEAP32[HEAP32[$1 + 28 >> 2] + 16 >> 2]](HEAP32[$1 + 24 >> 2], 34)) {
    break label$1
   }
   $10 = $0 + 25 | 0;
   $16 = $1 + 24 | 0;
   $17 = $1 + 28 | 0;
   $5 = $0;
   label$2 : {
    label$4 : {
     label$5 : {
      while (1) {
       $18 = $5;
       $2 = $5 + 1 | 0;
       label$7 : {
        label$8 : {
         label$9 : {
          $3 = HEAP8[$5 | 0];
          label$10 : {
           if (($3 | 0) > -1) {
            $3 = $3 & 255;
            break label$10;
           }
           label$12 : {
            if (($2 | 0) != ($10 | 0)) {
             $7 = HEAPU8[$2 | 0] & 63;
             $5 = $18 + 2 | 0;
             $2 = $5;
             break label$12;
            }
            $7 = 0;
            $5 = $10;
           }
           $13 = $3 & 31;
           label$14 : {
            label$15 : {
             $3 = $3 & 255;
             if ($3 >>> 0 > 223) {
              if (($5 | 0) == ($10 | 0)) {
               break label$15
              }
              $11 = HEAPU8[$5 | 0] & 63;
              $2 = $5 + 1 | 0;
              $5 = $2;
              break label$14;
             }
             $3 = $13 << 6 | $7;
             break label$10;
            }
            $11 = 0;
            $5 = $10;
           }
           $14 = $5;
           $7 = $7 << 6 | $11;
           if ($3 >>> 0 >= 240) {
            if (($10 | 0) == ($14 | 0)) {
             break label$9
            }
            $5 = $14 + 1 | 0;
            $2 = HEAPU8[$14 | 0] & 63;
            break label$8;
           }
           $3 = $7 | $13 << 12;
          }
          $5 = $2;
          break label$7;
         }
         $5 = $2;
         $2 = 0;
        }
        $3 = $2 | ($13 << 18 & 1835008 | $7 << 6);
        if (($3 | 0) == 1114112) {
         break label$5
        }
       }
       $2 = 2;
       label$18 : {
        label$19 : {
         label$20 : {
          label$21 : {
           label$22 : {
            label$23 : {
             label$25 : {
              label$26 : {
               $11 = $3 + -9 | 0;
               if ($11 >>> 0 <= 30) {
                $7 = 116;
                label$29 : {
                 switch ($11 - 1 | 0) {
                 case 24:
                 case 29:
                  break label$21;
                 case 3:
                  break label$25;
                 case 1:
                 case 2:
                 case 4:
                 case 5:
                 case 6:
                 case 7:
                 case 8:
                 case 9:
                 case 10:
                 case 11:
                 case 12:
                 case 13:
                 case 14:
                 case 15:
                 case 16:
                 case 17:
                 case 18:
                 case 19:
                 case 20:
                 case 21:
                 case 22:
                 case 23:
                 case 25:
                 case 26:
                 case 27:
                 case 28:
                  break label$26;
                 case 0:
                  break label$29;
                 default:
                  break label$20;
                 };
                }
                $7 = 110;
                break label$20;
               }
               if (($3 | 0) != 92) {
                break label$26
               }
               break label$21;
              }
              if (!core__unicode__bool_trie__BoolTrie__lookup__h31c9aa57385fbd21($3)) {
               break label$23
              }
              break label$22;
             }
             $7 = 114;
             break label$20;
            }
            if ($3 >>> 0 < 65536) {
             if (!core__unicode__printable__check__h1e7c010e493ddb3e($3, 1061328, 40, 1061408, 303, 1061711, 316)) {
              break label$22
             }
             break label$19;
            }
            if ($3 >>> 0 < 131072) {
             if (!core__unicode__printable__check__h1e7c010e493ddb3e($3, 1062027, 33, 1062093, 158, 1062251, 381)) {
              break label$22
             }
             break label$19;
            }
            if ($3 >>> 0 > 917999) {
             break label$22
            }
            if ($3 + -195102 >>> 0 < 722658) {
             break label$22
            }
            if ($3 + -191457 >>> 0 < 3103) {
             break label$22
            }
            if ($3 + -183970 >>> 0 < 14) {
             break label$22
            }
            if (($3 & 2097150) == 178206) {
             break label$22
            }
            if ($3 + -173783 >>> 0 < 41) {
             break label$22
            }
            if ($3 + -177973 >>> 0 > 10) {
             break label$19
            }
           }
           $12 = Math_clz32($3 | 1) >>> 2 ^ 7;
           $8 = 5;
           $2 = 3;
          }
          $7 = $3;
         }
         HEAP32[$6 + 4 >> 2] = 25;
         HEAP32[$6 >> 2] = $0;
         HEAP32[$6 + 8 >> 2] = $4;
         HEAP32[$6 + 12 >> 2] = $9;
         if ($9 >>> 0 < $4 >>> 0) {
          break label$4
         }
         label$32 : {
          if (!$4) {
           break label$32
          }
          if (($4 | 0) == 25) {
           break label$32
          }
          if ($4 >>> 0 >= 25) {
           break label$4
          }
          if (HEAP8[$0 + $4 | 0] <= -65) {
           break label$4
          }
         }
         label$33 : {
          if (!$9) {
           break label$33
          }
          if (($9 | 0) == 25) {
           break label$33
          }
          if ($9 >>> 0 >= 25) {
           break label$4
          }
          if (HEAP8[$0 + $9 | 0] <= -65) {
           break label$4
          }
         }
         if (FUNCTION_TABLE[HEAP32[HEAP32[$17 >> 2] + 12 >> 2]](HEAP32[$16 >> 2], $0 + $4 | 0, $9 - $4 | 0)) {
          break label$18
         }
         while (1) {
          label$34 : {
           label$36 : {
            label$37 : {
             label$38 : {
              label$39 : {
               label$40 : {
                label$41 : {
                 if (($2 | 0) != 1) {
                  $4 = 92;
                  if (($2 | 0) != 2) {
                   if (($2 | 0) != 3) {
                    break label$34
                   }
                   $2 = ($8 & 255) + -1 | 0;
                   if ($2 >>> 0 > 4) {
                    break label$34
                   }
                   label$44 : {
                    switch ($2 - 1 | 0) {
                    case 0:
                     break label$38;
                    case 2:
                     break label$39;
                    case 1:
                     break label$40;
                    case 3:
                     break label$41;
                    default:
                     break label$44;
                    };
                   }
                   $8 = $8 & -256;
                   $4 = 125;
                   $2 = 3;
                   break label$36;
                  }
                  $2 = 1;
                  break label$36;
                 }
                 $4 = $7;
                 $2 = 0;
                 break label$36;
                }
                $8 = $8 & -256 | 4;
                break label$37;
               }
               $8 = $8 & -256 | 2;
               $4 = 123;
               $2 = 3;
               break label$36;
              }
              $8 = $8 & -256 | 3;
              $4 = 117;
              $2 = 3;
              break label$36;
             }
             $2 = $7 >>> ($12 << 2 & 28) & 15;
             $4 = $2 >>> 0 < 10 ? $2 | 48 : $2 + 87 | 0;
             if ($12) {
              $12 = $12 + -1 | 0;
              break label$37;
             }
             $8 = $8 & -256 | 1;
            }
            $2 = 3;
           }
           if (!FUNCTION_TABLE[HEAP32[HEAP32[$17 >> 2] + 16 >> 2]](HEAP32[$16 >> 2], $4)) {
            continue
           }
           break label$18;
          }
          break;
         };
         $2 = 1;
         label$46 : {
          if ($3 >>> 0 < 128) {
           break label$46
          }
          $2 = 2;
          if ($3 >>> 0 < 2048) {
           break label$46
          }
          $2 = $3 >>> 0 < 65536 ? 3 : 4;
         }
         $4 = $2 + $9 | 0;
        }
        $9 = ($9 - $18 | 0) + $5 | 0;
        if (($5 | 0) != ($10 | 0)) {
         continue
        }
        break label$5;
       }
       break;
      };
      break label$1;
     }
     if (!$4) {
      break label$2
     }
     if (($4 | 0) == 25) {
      break label$2
     }
     if (HEAP8[$0 + $4 | 0] > -65 ? $4 >>> 0 < 25 : 0) {
      break label$2
     }
     core__str__slice_error_fail__h65b601301310b052($0, 25, $4, 25);
     abort();
    }
    HEAP32[$6 + 24 >> 2] = $6 + 12;
    HEAP32[$6 + 20 >> 2] = $6 + 8;
    HEAP32[$6 + 16 >> 2] = $6;
    $1 = $6 + 16 | 0;
    $0 = HEAP32[$1 >> 2];
    core__str__slice_error_fail__h65b601301310b052(HEAP32[$0 >> 2], HEAP32[$0 + 4 >> 2], HEAP32[HEAP32[$1 + 4 >> 2] >> 2], HEAP32[HEAP32[$1 + 8 >> 2] >> 2]);
    abort();
   }
   $5 = $1 + 24 | 0;
   $2 = $0 + $4 | 0;
   $0 = $1 + 28 | 0;
   if (FUNCTION_TABLE[HEAP32[HEAP32[$0 >> 2] + 12 >> 2]](HEAP32[$5 >> 2], $2, 25 - $4 | 0)) {
    break label$1
   }
   $15 = FUNCTION_TABLE[HEAP32[HEAP32[$0 >> 2] + 16 >> 2]](HEAP32[$5 >> 2], 34) | 0;
  }
  global$0 = $6 + 32 | 0;
  return $15;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = Math_fround(0), $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = Math_fround(0), $15 = 0, $16 = 0, $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0);
  $7 = global$0 - 48 | 0;
  global$0 = $7;
  $3 = HEAP32[$2 >> 2];
  $4 = HEAP32[HEAP32[$1 >> 2] >> 2];
  HEAP32[$7 + 28 >> 2] = HEAP32[$2 + 164 >> 2];
  HEAP32[$7 + 24 >> 2] = 0;
  HEAP32[$7 + 16 >> 2] = 0;
  HEAP32[$7 + 20 >> 2] = HEAP32[$2 + 160 >> 2];
  $8 = HEAP32[$1 + 4 >> 2];
  HEAP32[$7 + 44 >> 2] = HEAP32[$8 + 4 >> 2];
  HEAP32[$7 + 40 >> 2] = 0;
  HEAP32[$7 + 32 >> 2] = 0;
  HEAP32[$7 + 36 >> 2] = HEAP32[$8 >> 2];
  stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($7, $4, $3, $7 + 16 | 0, $7 + 32 | 0, 1);
  $3 = $7 + 8 | 0;
  $17 = HEAPF32[$3 >> 2];
  $12 = HEAP32[$3 >> 2];
  $18 = HEAPF32[$7 + 4 >> 2];
  $10 = HEAP32[$7 + 4 >> 2];
  $3 = HEAP32[$7 >> 2];
  if (($3 | 0) != 1) {
   label$2 : {
    if (!$3) {
     break label$2
    }
    FUNCTION_TABLE[HEAP32[$12 >> 2]]($10);
    if (!HEAP32[$12 + 4 >> 2]) {
     break label$2
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($10);
   }
   $13 = $2 + 84 | 0;
   $9 = HEAPF32[$2 + 180 >> 2];
   $14 = HEAPF32[HEAP32[$1 + 8 >> 2] >> 2];
   $3 = $2 + 52 | 0;
   $4 = HEAPU8[HEAP32[$1 + 12 >> 2]];
   $6 = $2 + 92 | 0;
   label$3 : {
    if (($4 | 2) == 3) {
     break label$3
    }
    $6 = $13;
   }
   $19 = HEAPF32[$6 >> 2];
   label$5 : {
    if ((($4 | 2) & 3) == 3) {
     $8 = $2 + 68 | 0;
     $5 = $2 + 72 | 0;
     break label$5;
    }
    $8 = $3;
    $5 = $2 + 56 | 0;
   }
   $8 = HEAP32[$8 >> 2];
   $20 = HEAPF32[$5 >> 2];
   label$7 : {
    if ((($4 | 2) & 3) == 3) {
     $5 = $2 + 76 | 0;
     $6 = $2 + 80 | 0;
     break label$7;
    }
    $5 = $2 + 60 | 0;
    $6 = $2 - -64 | 0;
   }
   $5 = HEAP32[$5 >> 2];
   $21 = HEAPF32[$6 >> 2];
   $22 = HEAPF32[$2 + 184 >> 2];
   $23 = HEAPF32[HEAP32[$1 + 16 >> 2] >> 2];
   $24 = HEAPF32[HEAP32[$1 + 20 >> 2] >> 2];
   $25 = HEAPF32[((($4 | 2) & 3) == 3 ? $13 : $2 + 92 | 0) >> 2];
   if ((($4 | 2) & 3) == 3) {
    $6 = $2 + 56 | 0
   } else {
    $3 = $2 + 68 | 0;
    $6 = $2 + 72 | 0;
   }
   $16 = HEAP32[$3 >> 2];
   $26 = HEAPF32[$6 >> 2];
   label$13 : {
    if ((($4 | 2) & 3) == 3) {
     $3 = $2 - -64 | 0;
     $6 = $2 + 60 | 0;
     break label$13;
    }
    $3 = $2 + 80 | 0;
    $6 = $2 + 76 | 0;
   }
   label$15 : {
    label$16 : {
     $15 = HEAP32[HEAP32[$1 >> 2] >> 2];
     $11 = HEAP32[$15 + 20 >> 2];
     $4 = HEAP32[HEAP32[$1 + 24 >> 2] >> 2];
     if ($11 >>> 0 > $4 >>> 0) {
      $9 = Math_fround(Math_fround(Math_fround($14 + $9) + $19) + Math_fround(($8 ? Math_fround(0.0) : $20) - ($5 ? Math_fround(0.0) : $21)));
      $14 = Math_fround(Math_fround(Math_fround(Math_fround($23 + $22) + $24) + $25) + Math_fround(($16 ? Math_fround(0.0) : $26) - (HEAP32[$6 >> 2] ? Math_fround(0.0) : HEAPF32[$3 >> 2])));
      $3 = HEAP32[$15 + 12 >> 2] + Math_imul($4, 12) | 0;
      $4 = HEAP32[$3 >> 2];
      $8 = HEAP32[$3 + 8 >> 2] << 2;
      $16 = $4 + $8 | 0;
      $6 = HEAP32[$2 >> 2];
      $3 = 0;
      $5 = $4;
      label$18 : {
       label$19 : {
        label$20 : {
         while (1) {
          if ($16 - $5 >>> 0 > 12) {
           $5 = HEAP32[$4 >> 2];
           $3 = (($5 | 0) != ($6 | 0)) + $3 | 0;
           if (($5 | 0) == ($6 | 0)) {
            break label$20
           }
           $5 = HEAP32[$4 + 4 >> 2];
           $3 = (($5 | 0) != ($6 | 0)) + $3 | 0;
           if (($5 | 0) == ($6 | 0)) {
            break label$20
           }
           $5 = HEAP32[$4 + 8 >> 2];
           $3 = (($5 | 0) != ($6 | 0)) + $3 | 0;
           if (($5 | 0) == ($6 | 0)) {
            break label$20
           }
           $8 = $8 + -16 | 0;
           $11 = HEAP32[$4 + 12 >> 2];
           $3 = (($11 | 0) != ($6 | 0)) + $3 | 0;
           $5 = $4 + 16 | 0;
           $4 = $5;
           if (($6 | 0) != ($11 | 0)) {
            continue
           }
           break label$20;
          }
          break;
         };
         $3 = 1 - $3 | 0;
         while (1) {
          if (!$8) {
           break label$19
          }
          $3 = $3 + -1 | 0;
          $8 = $8 + -4 | 0;
          $5 = HEAP32[$4 >> 2];
          $4 = $4 + 4 | 0;
          $5 = ($5 | 0) == ($6 | 0);
          if (!$5) {
           continue
          }
          break;
         };
         $3 = ($5 + 1 & 1) - $3 | 0;
        }
        $4 = HEAP32[$15 + 8 >> 2];
        if ($4 >>> 0 <= $6 >>> 0) {
         break label$16
        }
        $8 = HEAPU8[HEAP32[$1 + 28 >> 2]];
        $5 = HEAPU8[HEAP32[$1 + 32 >> 2]];
        $4 = HEAP32[$15 >> 2] + Math_imul($6, 288) | 0;
        HEAP32[$4 + 220 >> 2] = $3;
        HEAPF32[$4 + 236 >> 2] = $5 ? $9 : $14;
        HEAPF32[$4 + 232 >> 2] = $8 ? $9 : $14;
        HEAP32[$4 + 228 >> 2] = $12;
        HEAP32[$4 + 224 >> 2] = $10;
        $9 = HEAPF32[$2 + 180 >> 2];
        $3 = HEAPU8[HEAP32[$1 + 12 >> 2]];
        if (($3 | 2) != 3) {
         break label$18
        }
        $4 = $2 + 96 | 0;
        $13 = $2 + 92 | 0;
        break label$15;
       }
       core__panicking__panic__h2d0bc53a963fb996(1050988);
       abort();
      }
      $4 = $2 + 88 | 0;
      break label$15;
     }
     core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $4, $11);
     abort();
    }
    core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $6, $4);
    abort();
   }
   $1 = HEAP32[$1 + 8 >> 2];
   HEAPF32[$1 >> 2] = Math_fround(Math_fround($9 + Math_fround(HEAPF32[$13 >> 2] + HEAPF32[$4 >> 2])) + ((($3 | 2) & 3) == 3 ? $17 : $18)) + HEAPF32[$1 >> 2];
   $10 = 0;
  }
  HEAP32[$0 + 4 >> 2] = $12;
  HEAP32[$0 >> 2] = $10;
  global$0 = $7 + 48 | 0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = Math_fround(0), $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = Math_fround(0), $15 = 0, $16 = 0, $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0);
  $7 = global$0 - 48 | 0;
  global$0 = $7;
  $3 = HEAP32[$2 >> 2];
  $4 = HEAP32[HEAP32[$1 >> 2] >> 2];
  HEAP32[$7 + 28 >> 2] = HEAP32[$2 + 164 >> 2];
  HEAP32[$7 + 24 >> 2] = 0;
  HEAP32[$7 + 16 >> 2] = 0;
  HEAP32[$7 + 20 >> 2] = HEAP32[$2 + 160 >> 2];
  $8 = HEAP32[$1 + 4 >> 2];
  HEAP32[$7 + 44 >> 2] = HEAP32[$8 + 4 >> 2];
  HEAP32[$7 + 40 >> 2] = 0;
  HEAP32[$7 + 32 >> 2] = 0;
  HEAP32[$7 + 36 >> 2] = HEAP32[$8 >> 2];
  stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($7, $4, $3, $7 + 16 | 0, $7 + 32 | 0, 1);
  $3 = $7 + 8 | 0;
  $17 = HEAPF32[$3 >> 2];
  $12 = HEAP32[$3 >> 2];
  $18 = HEAPF32[$7 + 4 >> 2];
  $10 = HEAP32[$7 + 4 >> 2];
  $3 = HEAP32[$7 >> 2];
  if (($3 | 0) != 1) {
   label$2 : {
    if (!$3) {
     break label$2
    }
    FUNCTION_TABLE[HEAP32[$12 >> 2]]($10);
    if (!HEAP32[$12 + 4 >> 2]) {
     break label$2
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($10);
   }
   $13 = $2 + 84 | 0;
   $9 = HEAPF32[$2 + 180 >> 2];
   $14 = HEAPF32[HEAP32[$1 + 8 >> 2] >> 2];
   $3 = $2 + 52 | 0;
   $4 = HEAPU8[HEAP32[$1 + 12 >> 2]];
   $6 = $2 + 92 | 0;
   label$3 : {
    if (($4 | 2) == 3) {
     break label$3
    }
    $6 = $13;
   }
   $19 = HEAPF32[$6 >> 2];
   label$5 : {
    if ((($4 | 2) & 3) == 3) {
     $8 = $2 + 68 | 0;
     $5 = $2 + 72 | 0;
     break label$5;
    }
    $8 = $3;
    $5 = $2 + 56 | 0;
   }
   $8 = HEAP32[$8 >> 2];
   $20 = HEAPF32[$5 >> 2];
   label$7 : {
    if ((($4 | 2) & 3) == 3) {
     $5 = $2 + 76 | 0;
     $6 = $2 + 80 | 0;
     break label$7;
    }
    $5 = $2 + 60 | 0;
    $6 = $2 - -64 | 0;
   }
   $5 = HEAP32[$5 >> 2];
   $21 = HEAPF32[$6 >> 2];
   $22 = HEAPF32[$2 + 184 >> 2];
   $23 = HEAPF32[HEAP32[$1 + 16 >> 2] >> 2];
   $24 = HEAPF32[HEAP32[$1 + 20 >> 2] >> 2];
   $25 = HEAPF32[((($4 | 2) & 3) == 3 ? $13 : $2 + 92 | 0) >> 2];
   if ((($4 | 2) & 3) == 3) {
    $6 = $2 + 56 | 0
   } else {
    $3 = $2 + 68 | 0;
    $6 = $2 + 72 | 0;
   }
   $16 = HEAP32[$3 >> 2];
   $26 = HEAPF32[$6 >> 2];
   label$13 : {
    if ((($4 | 2) & 3) == 3) {
     $3 = $2 - -64 | 0;
     $6 = $2 + 60 | 0;
     break label$13;
    }
    $3 = $2 + 80 | 0;
    $6 = $2 + 76 | 0;
   }
   label$15 : {
    label$16 : {
     $15 = HEAP32[HEAP32[$1 >> 2] >> 2];
     $11 = HEAP32[$15 + 20 >> 2];
     $4 = HEAP32[HEAP32[$1 + 24 >> 2] >> 2];
     if ($11 >>> 0 > $4 >>> 0) {
      $9 = Math_fround(Math_fround(Math_fround($14 + $9) + $19) + Math_fround(($8 ? Math_fround(0.0) : $20) - ($5 ? Math_fround(0.0) : $21)));
      $14 = Math_fround(Math_fround(Math_fround(Math_fround($23 + $22) + $24) + $25) + Math_fround(($16 ? Math_fround(0.0) : $26) - (HEAP32[$6 >> 2] ? Math_fround(0.0) : HEAPF32[$3 >> 2])));
      $3 = HEAP32[$15 + 12 >> 2] + Math_imul($4, 12) | 0;
      $4 = HEAP32[$3 >> 2];
      $8 = HEAP32[$3 + 8 >> 2] << 2;
      $16 = $4 + $8 | 0;
      $6 = HEAP32[$2 >> 2];
      $3 = 0;
      $5 = $4;
      label$18 : {
       label$19 : {
        label$20 : {
         while (1) {
          if ($16 - $5 >>> 0 > 12) {
           $5 = HEAP32[$4 >> 2];
           $3 = (($5 | 0) != ($6 | 0)) + $3 | 0;
           if (($5 | 0) == ($6 | 0)) {
            break label$20
           }
           $5 = HEAP32[$4 + 4 >> 2];
           $3 = (($5 | 0) != ($6 | 0)) + $3 | 0;
           if (($5 | 0) == ($6 | 0)) {
            break label$20
           }
           $5 = HEAP32[$4 + 8 >> 2];
           $3 = (($5 | 0) != ($6 | 0)) + $3 | 0;
           if (($5 | 0) == ($6 | 0)) {
            break label$20
           }
           $8 = $8 + -16 | 0;
           $11 = HEAP32[$4 + 12 >> 2];
           $3 = (($11 | 0) != ($6 | 0)) + $3 | 0;
           $5 = $4 + 16 | 0;
           $4 = $5;
           if (($6 | 0) != ($11 | 0)) {
            continue
           }
           break label$20;
          }
          break;
         };
         $3 = 1 - $3 | 0;
         while (1) {
          if (!$8) {
           break label$19
          }
          $3 = $3 + -1 | 0;
          $8 = $8 + -4 | 0;
          $5 = HEAP32[$4 >> 2];
          $4 = $4 + 4 | 0;
          $5 = ($5 | 0) == ($6 | 0);
          if (!$5) {
           continue
          }
          break;
         };
         $3 = ($5 + 1 & 1) - $3 | 0;
        }
        $4 = HEAP32[$15 + 8 >> 2];
        if ($4 >>> 0 <= $6 >>> 0) {
         break label$16
        }
        $8 = HEAPU8[HEAP32[$1 + 28 >> 2]];
        $5 = HEAPU8[HEAP32[$1 + 32 >> 2]];
        $4 = HEAP32[$15 >> 2] + Math_imul($6, 288) | 0;
        HEAP32[$4 + 220 >> 2] = $3;
        HEAPF32[$4 + 236 >> 2] = $5 ? $9 : $14;
        HEAPF32[$4 + 232 >> 2] = $8 ? $9 : $14;
        HEAP32[$4 + 228 >> 2] = $12;
        HEAP32[$4 + 224 >> 2] = $10;
        $9 = HEAPF32[$2 + 180 >> 2];
        $3 = HEAPU8[HEAP32[$1 + 12 >> 2]];
        if (($3 | 2) != 3) {
         break label$18
        }
        $4 = $2 + 96 | 0;
        $13 = $2 + 92 | 0;
        break label$15;
       }
       core__panicking__panic__h2d0bc53a963fb996(1051456);
       abort();
      }
      $4 = $2 + 88 | 0;
      break label$15;
     }
     core__panicking__panic_bounds_check__h0537ade040df571e(1051560, $4, $11);
     abort();
    }
    core__panicking__panic_bounds_check__h0537ade040df571e(1051576, $6, $4);
    abort();
   }
   $1 = HEAP32[$1 + 8 >> 2];
   HEAPF32[$1 >> 2] = Math_fround(Math_fround($9 + Math_fround(HEAPF32[$13 >> 2] + HEAPF32[$4 >> 2])) + ((($3 | 2) & 3) == 3 ? $17 : $18)) + HEAPF32[$1 >> 2];
   $10 = 0;
  }
  HEAP32[$0 + 4 >> 2] = $12;
  HEAP32[$0 >> 2] = $10;
  global$0 = $7 + 48 | 0;
 }
 
 function core__fmt__write__h85435378f7fd6609($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  $3 = global$0 + -64 | 0;
  global$0 = $3;
  HEAP32[$3 + 36 >> 2] = $1;
  $7 = HEAP32[$2 + 20 >> 2];
  HEAP32[$3 + 52 >> 2] = $7;
  HEAP8[$3 + 56 | 0] = 3;
  $6 = HEAP32[$2 + 16 >> 2];
  HEAP32[$3 + 44 >> 2] = $6 + ($7 << 3);
  HEAP32[$3 + 8 >> 2] = 0;
  HEAP32[$3 + 12 >> 2] = 32;
  HEAP32[$3 + 32 >> 2] = $0;
  HEAP32[$3 + 24 >> 2] = 0;
  HEAP32[$3 + 16 >> 2] = 0;
  HEAP32[$3 + 48 >> 2] = $6;
  HEAP32[$3 + 40 >> 2] = $6;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          $5 = HEAP32[$2 + 8 >> 2];
          if ($5) {
           $9 = HEAP32[$2 >> 2];
           $10 = HEAP32[$2 + 4 >> 2];
           $2 = HEAP32[$2 + 12 >> 2];
           $11 = $2 >>> 0 > $10 >>> 0 ? $10 : $2;
           if (!$11) {
            break label$8
           }
           if (FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, HEAP32[$9 >> 2], HEAP32[$9 + 4 >> 2])) {
            break label$7
           }
           $6 = $9 + 12 | 0;
           $12 = $3 + 56 | 0;
           $1 = $3 + 52 | 0;
           $7 = $3 + 48 | 0;
           $8 = 1;
           while (1) {
            HEAP8[$12 | 0] = HEAPU8[$5 + 32 | 0];
            HEAP32[$3 + 12 >> 2] = HEAP32[$5 + 8 >> 2];
            HEAP32[$3 + 8 >> 2] = HEAP32[$5 + 12 >> 2];
            $2 = 0;
            label$11 : {
             label$12 : {
              label$13 : {
               $0 = HEAP32[$5 + 24 >> 2];
               if (($0 | 0) != 1) {
                if (($0 | 0) == 3) {
                 break label$11
                }
                if (($0 | 0) != 2) {
                 break label$13
                }
                $0 = $3 + 40 | 0;
                $4 = HEAP32[$0 >> 2];
                if (($4 | 0) == HEAP32[$3 + 44 >> 2]) {
                 break label$11
                }
                HEAP32[$0 >> 2] = $4 + 8;
                if (HEAP32[$4 + 4 >> 2] != 79) {
                 break label$11
                }
                $0 = HEAP32[HEAP32[$4 >> 2] >> 2];
                break label$12;
               }
               $4 = HEAP32[$5 + 28 >> 2];
               $0 = HEAP32[$1 >> 2];
               if ($4 >>> 0 >= $0 >>> 0) {
                break label$2
               }
               $4 = HEAP32[$7 >> 2] + ($4 << 3) | 0;
               if (HEAP32[$4 + 4 >> 2] != 79) {
                break label$11
               }
               $0 = HEAP32[HEAP32[$4 >> 2] >> 2];
               break label$12;
              }
              $0 = HEAP32[$5 + 28 >> 2];
             }
             $2 = 1;
            }
            HEAP32[$3 + 20 >> 2] = $0;
            HEAP32[$3 + 16 >> 2] = $2;
            $2 = 0;
            label$16 : {
             label$17 : {
              label$18 : {
               $0 = HEAP32[$5 + 16 >> 2];
               if (($0 | 0) != 1) {
                if (($0 | 0) == 3) {
                 break label$16
                }
                if (($0 | 0) != 2) {
                 break label$18
                }
                $0 = $3 + 40 | 0;
                $4 = HEAP32[$0 >> 2];
                if (($4 | 0) == HEAP32[$3 + 44 >> 2]) {
                 break label$16
                }
                HEAP32[$0 >> 2] = $4 + 8;
                if (HEAP32[$4 + 4 >> 2] != 79) {
                 break label$16
                }
                $0 = HEAP32[HEAP32[$4 >> 2] >> 2];
                break label$17;
               }
               $4 = HEAP32[$5 + 20 >> 2];
               $0 = HEAP32[$1 >> 2];
               if ($4 >>> 0 >= $0 >>> 0) {
                break label$1
               }
               $4 = HEAP32[$7 >> 2] + ($4 << 3) | 0;
               if (HEAP32[$4 + 4 >> 2] != 79) {
                break label$16
               }
               $0 = HEAP32[HEAP32[$4 >> 2] >> 2];
               break label$17;
              }
              $0 = HEAP32[$5 + 20 >> 2];
             }
             $2 = 1;
            }
            HEAP32[$3 + 28 >> 2] = $0;
            HEAP32[$3 + 24 >> 2] = $2;
            label$21 : {
             if (HEAP32[$5 >> 2] == 1) {
              $0 = HEAP32[$5 + 4 >> 2];
              $2 = HEAP32[$1 >> 2];
              if ($0 >>> 0 >= $2 >>> 0) {
               break label$4
              }
              $2 = HEAP32[$7 >> 2] + ($0 << 3) | 0;
              break label$21;
             }
             $0 = $3 + 40 | 0;
             $2 = HEAP32[$0 >> 2];
             if (($2 | 0) == HEAP32[$3 + 44 >> 2]) {
              break label$3
             }
             HEAP32[$0 >> 2] = $2 + 8;
            }
            if (FUNCTION_TABLE[HEAP32[$2 + 4 >> 2]](HEAP32[$2 >> 2], $3 + 8 | 0)) {
             break label$7
            }
            if ($8 >>> 0 >= $11 >>> 0) {
             break label$8
            }
            $0 = $6 + -4 | 0;
            $2 = HEAP32[$6 >> 2];
            $6 = $6 + 8 | 0;
            $5 = $5 + 36 | 0;
            $8 = $8 + 1 | 0;
            if (!FUNCTION_TABLE[HEAP32[HEAP32[$3 + 36 >> 2] + 12 >> 2]](HEAP32[$3 + 32 >> 2], HEAP32[$0 >> 2], $2)) {
             continue
            }
            break;
           };
           break label$7;
          }
          $9 = HEAP32[$2 >> 2];
          $10 = HEAP32[$2 + 4 >> 2];
          $2 = $7 >>> 0 > $10 >>> 0 ? $10 : $7;
          if (!$2) {
           break label$8
          }
          if (FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, HEAP32[$9 >> 2], HEAP32[$9 + 4 >> 2])) {
           break label$7
          }
          $5 = $9 + 12 | 0;
          $0 = $3 + 32 | 0;
          $1 = $3 + 36 | 0;
          $8 = 1;
          while (1) {
           if (FUNCTION_TABLE[HEAP32[$6 + 4 >> 2]](HEAP32[$6 >> 2], $3 + 8 | 0)) {
            break label$7
           }
           if ($8 >>> 0 >= $2 >>> 0) {
            break label$8
           }
           $7 = $5 + -4 | 0;
           $4 = HEAP32[$5 >> 2];
           $5 = $5 + 8 | 0;
           $6 = $6 + 8 | 0;
           $8 = $8 + 1 | 0;
           if (!FUNCTION_TABLE[HEAP32[HEAP32[$1 >> 2] + 12 >> 2]](HEAP32[$0 >> 2], HEAP32[$7 >> 2], $4)) {
            continue
           }
           break;
          };
          break label$7;
         }
         if ($10 >>> 0 <= $8 >>> 0) {
          break label$6
         }
         $0 = ($8 << 3) + $9 | 0;
         if (!FUNCTION_TABLE[HEAP32[HEAP32[$3 + 36 >> 2] + 12 >> 2]](HEAP32[$3 + 32 >> 2], HEAP32[$0 >> 2], HEAP32[$0 + 4 >> 2])) {
          break label$6
         }
        }
        $5 = 1;
        break label$5;
       }
       $5 = 0;
      }
      global$0 = $3 - -64 | 0;
      return $5;
     }
     core__panicking__panic_bounds_check__h0537ade040df571e(1061176, $0, $2);
     abort();
    }
    core__panicking__panic__h2d0bc53a963fb996(1060364);
    abort();
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1061192, $4, $0);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1061192, $4, $0);
  abort();
 }
 
 function stretch__node__Stretch__add_node__hd4b6e5bc2be15460($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
  $6 = global$0 - 112 | 0;
  global$0 = $6;
  $4 = $1 + 8 | 0;
  $5 = HEAP32[$4 + 4 >> 2];
  $3 = $6 + 56 | 0;
  HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
  HEAP32[$3 + 4 >> 2] = $5;
  $3 = HEAP32[$1 + 4 >> 2];
  HEAP32[$6 + 48 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$6 + 52 >> 2] = $3;
  std__collections__hash__map__HashMap_K_2cV_2cS___insert__h07c01ff281a3cbf7($0, $6 + 48 | 0, $2);
  $5 = HEAP32[$4 + 4 >> 2];
  $3 = $6 + 16 | 0;
  HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
  HEAP32[$3 + 4 >> 2] = $5;
  $3 = HEAP32[$1 + 4 >> 2];
  HEAP32[$6 + 8 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$6 + 12 >> 2] = $3;
  $3 = $0 + 48 | 0;
  $12 = HEAP32[$3 + 4 >> 2];
  $7 = $6 + 88 | 0;
  $1 = $7;
  $5 = HEAP32[$3 >> 2];
  HEAP32[$1 >> 2] = $5 ^ 2037671283;
  HEAP32[$1 + 4 >> 2] = $12 ^ 1952801890;
  $9 = $6 + 80 | 0;
  $1 = $9;
  HEAP32[$1 >> 2] = $5 ^ 1852075885;
  HEAP32[$1 + 4 >> 2] = $12 ^ 1685025377;
  $4 = HEAP32[$0 + 44 >> 2];
  $8 = $6 + 72 | 0;
  $1 = $8;
  $3 = HEAP32[$0 + 40 >> 2];
  HEAP32[$1 >> 2] = $3 ^ 1852142177;
  HEAP32[$1 + 4 >> 2] = $4 ^ 1819895653;
  HEAP32[$6 + 104 >> 2] = 0;
  HEAP32[$6 + 108 >> 2] = 0;
  HEAP32[$6 + 96 >> 2] = 0;
  HEAP32[$6 + 100 >> 2] = 0;
  HEAP32[$6 + 56 >> 2] = $5;
  HEAP32[$6 + 60 >> 2] = $12;
  HEAP32[$6 + 48 >> 2] = $3;
  HEAP32[$6 + 52 >> 2] = $4;
  HEAP32[$6 + 64 >> 2] = $3 ^ 1886610805;
  HEAP32[$6 + 68 >> 2] = $4 ^ 1936682341;
  HEAP32[$6 + 32 >> 2] = $2;
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($6 + 48 | 0, $6 + 32 | 0);
  $13 = HEAP32[$6 + 100 >> 2] | HEAP32[$6 + 104 >> 2] << 24;
  $3 = $13 ^ HEAP32[$7 + 4 >> 2];
  $1 = $3;
  $11 = HEAP32[$6 + 96 >> 2];
  $7 = $11 ^ HEAP32[$7 >> 2];
  $5 = __wasm_rotl_i64($7, $1, 16);
  $4 = i64toi32_i32$HIGH_BITS;
  $1 = HEAP32[$8 + 4 >> 2] + $1 | 0;
  $3 = HEAP32[$8 >> 2];
  $7 = $7 + $3 | 0;
  if ($7 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $16 = $5 ^ $7;
  $5 = $1;
  $8 = $4 ^ $1;
  $10 = $8;
  $14 = HEAP32[$9 + 4 >> 2];
  $1 = $14 + HEAP32[$6 + 68 >> 2] | 0;
  $9 = HEAP32[$9 >> 2];
  $3 = HEAP32[$6 + 64 >> 2];
  $17 = $9 + $3 | 0;
  if ($17 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $4 = __wasm_rotl_i64($17, $1, 32);
  $15 = $4 + $16 | 0;
  $3 = i64toi32_i32$HIGH_BITS + $8 | 0;
  $12 = $15 >>> 0 < $4 >>> 0 ? $3 + 1 | 0 : $3;
  $8 = $13 ^ $12;
  $3 = __wasm_rotl_i64($9, $14, 13) ^ $17;
  $4 = $1 ^ i64toi32_i32$HIGH_BITS;
  $1 = $5 + $4 | 0;
  $5 = $3 + $7 | 0;
  if ($5 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $4 = __wasm_rotl_i64($3, $4, 17) ^ $5;
  $3 = $1;
  $7 = $1 ^ i64toi32_i32$HIGH_BITS;
  $1 = $8 + $7 | 0;
  $8 = $4 + ($11 ^ $15) | 0;
  if ($8 >>> 0 < $4 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $14 = __wasm_rotl_i64($4, $7, 13) ^ $8;
  $4 = $1;
  $1 = $1 ^ i64toi32_i32$HIGH_BITS;
  $9 = $1;
  $13 = __wasm_rotl_i64($16, $10, 21) ^ $15;
  $11 = $12 ^ i64toi32_i32$HIGH_BITS;
  $5 = __wasm_rotl_i64($5, $3, 32) ^ 255;
  $3 = $5 + $13 | 0;
  $1 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $10 = $3 >>> 0 < $5 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $9 + $10 | 0;
  $7 = $3 + $14 | 0;
  if ($7 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $14 = __wasm_rotl_i64($14, $9, 17) ^ $7;
  $5 = $1;
  $1 = $1 ^ i64toi32_i32$HIGH_BITS;
  $12 = __wasm_rotl_i64($14, $1, 13);
  $9 = i64toi32_i32$HIGH_BITS;
  $13 = __wasm_rotl_i64($13, $11, 16) ^ $3;
  $11 = $10 ^ i64toi32_i32$HIGH_BITS;
  $4 = __wasm_rotl_i64($8, $4, 32);
  $3 = $4 + $13 | 0;
  $8 = $1;
  $1 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $10 = $3 >>> 0 < $4 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $8 + $10 | 0;
  $8 = $3 + $14 | 0;
  if ($8 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $14 = $8 ^ $12;
  $4 = $1;
  $1 = $1 ^ $9;
  $9 = __wasm_rotl_i64($14, $1, 17);
  $12 = i64toi32_i32$HIGH_BITS;
  $13 = __wasm_rotl_i64($13, $11, 21) ^ $3;
  $11 = $10 ^ i64toi32_i32$HIGH_BITS;
  $5 = __wasm_rotl_i64($7, $5, 32);
  $3 = $5 + $13 | 0;
  $7 = $1;
  $1 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $10 = $3 >>> 0 < $5 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $7 + $10 | 0;
  $7 = $3 + $14 | 0;
  if ($7 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $9 = $7 ^ $9;
  $5 = $1;
  $1 = $1 ^ $12;
  $14 = __wasm_rotl_i64($9, $1, 13);
  $12 = i64toi32_i32$HIGH_BITS;
  $11 = __wasm_rotl_i64($13, $11, 16) ^ $3;
  $10 = $10 ^ i64toi32_i32$HIGH_BITS;
  $4 = __wasm_rotl_i64($8, $4, 32);
  $3 = $4 + $11 | 0;
  $8 = $1;
  $1 = i64toi32_i32$HIGH_BITS + $10 | 0;
  $4 = $3 >>> 0 < $4 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $8 + $4 | 0;
  $9 = $3 + $9 | 0;
  if ($9 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $1 = $1 ^ $12;
  $8 = $1;
  $10 = __wasm_rotl_i64($11, $10, 21) ^ $3;
  $12 = $4 ^ i64toi32_i32$HIGH_BITS;
  $5 = __wasm_rotl_i64($7, $5, 32);
  $3 = $5 + $10 | 0;
  $1 = i64toi32_i32$HIGH_BITS + $12 | 0;
  $4 = $3 >>> 0 < $5 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $8 + $4 | 0;
  $7 = $9 ^ $14;
  $5 = $3 + $7 | 0;
  if ($5 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $5 = __wasm_rotl_i64(__wasm_rotl_i64($10, $12, 16) ^ $3, $4 ^ i64toi32_i32$HIGH_BITS, 21) ^ $5;
  $3 = i64toi32_i32$HIGH_BITS ^ $1;
  $5 = $1 ^ (__wasm_rotl_i64($7, $8, 17) ^ $5);
  $10 = (($3 ^ i64toi32_i32$HIGH_BITS) & 33554431) << 7 | $5 >>> 25;
  $1 = $10 & 127;
  $1 = $1 << 8 | $1;
  $14 = $1 << 16 | $1;
  $12 = $0 + 40 | 0;
  $17 = HEAP32[$0 - -64 >> 2];
  $15 = HEAP32[$0 + 60 >> 2];
  $13 = 0;
  $9 = $0 + 56 | 0;
  $16 = HEAP32[$9 >> 2];
  $7 = $5 & $16;
  $4 = $7;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      while (1) {
       $1 = $4 + $15 | 0;
       $11 = HEAPU8[$1 | 0] | HEAPU8[$1 + 1 | 0] << 8 | (HEAPU8[$1 + 2 | 0] << 16 | HEAPU8[$1 + 3 | 0] << 24);
       $1 = $11 ^ $14;
       $1 = ($1 ^ -1) & $1 + -16843009 & -2139062144;
       $13 = $13 + 4 | 0;
       $3 = $13 + $4 & $16;
       while (1) {
        if ($1) {
         if ($1) {
          $8 = 31 - Math_clz32($1 + -1 ^ $1) | 0
         } else {
          $8 = 32
         }
         $1 = $1 + -1 & $1;
         $8 = ($8 >>> 3) + $4 & $16;
         if (($2 | 0) != HEAP32[Math_imul($8, 20) + $17 >> 2]) {
          continue
         }
         break label$4;
        }
        break;
       };
       $4 = $3;
       if (!($11 << 1 & $11 & -2139062144)) {
        continue
       }
       break;
      };
      HEAP32[$6 + 28 >> 2] = $12;
      $4 = $6 + 16 | 0;
      $3 = HEAP32[$4 + 4 >> 2];
      $8 = $6 + 40 | 0;
      $1 = $8;
      HEAP32[$1 >> 2] = HEAP32[$4 >> 2];
      HEAP32[$1 + 4 >> 2] = $3;
      $1 = HEAP32[$6 + 12 >> 2];
      HEAP32[$6 + 32 >> 2] = HEAP32[$6 + 8 >> 2];
      HEAP32[$6 + 36 >> 2] = $1;
      if (!HEAP32[$0 + 68 >> 2]) {
       break label$3
      }
      break label$2;
     }
     $1 = HEAP32[$6 + 12 >> 2];
     $3 = Math_imul($8, 20) + $17 | 0;
     HEAP32[$3 + 4 >> 2] = HEAP32[$6 + 8 >> 2];
     HEAP32[$3 + 8 >> 2] = $1;
     $2 = $6 + 16 | 0;
     $1 = HEAP32[$2 + 4 >> 2];
     $0 = $3 + 12 | 0;
     HEAP32[$0 >> 2] = HEAP32[$2 >> 2];
     HEAP32[$0 + 4 >> 2] = $1;
     break label$1;
    }
    hashbrown__raw__RawTable_T___reserve_rehash__he92b1e7507f00a16($9, $6 + 28 | 0);
    $16 = HEAP32[$0 + 56 >> 2];
    $7 = $5 & $16;
    $15 = HEAP32[$0 + 60 >> 2];
   }
   $3 = HEAP32[$8 + 4 >> 2];
   $1 = $6 + 56 | 0;
   HEAP32[$1 >> 2] = HEAP32[$8 >> 2];
   HEAP32[$1 + 4 >> 2] = $3;
   $1 = HEAP32[$6 + 36 >> 2];
   HEAP32[$6 + 48 >> 2] = HEAP32[$6 + 32 >> 2];
   HEAP32[$6 + 52 >> 2] = $1;
   $1 = 4;
   while (1) {
    $5 = $7;
    $7 = $5 + $1 & $16;
    $1 = $1 + 4 | 0;
    $3 = $5 + $15 | 0;
    $3 = (HEAPU8[$3 | 0] | HEAPU8[$3 + 1 | 0] << 8 | (HEAPU8[$3 + 2 | 0] << 16 | HEAPU8[$3 + 3 | 0] << 24)) & -2139062144;
    if (!$3) {
     continue
    }
    break;
   };
   $4 = $15;
   if ($3) {
    $1 = 31 - Math_clz32($3 + -1 ^ $3) | 0
   } else {
    $1 = 32
   }
   $1 = $5 + ($1 >>> 3) & $16;
   $4 = HEAP8[$4 + $1 | 0];
   if (($4 | 0) >= 0) {
    $4 = $15;
    $1 = HEAP32[$15 >> 2] & -2139062144;
    $5 = 31 - Math_clz32($1 ^ $1 + -1) | 0;
    __inlined_func$__wasm_ctz_i321 : {
     if ($1) {
      break __inlined_func$__wasm_ctz_i321
     }
     $5 = 32;
    }
    $1 = $5 >>> 3;
    $4 = HEAPU8[$4 + $1 | 0];
   }
   $3 = $0 + 68 | 0;
   HEAP32[$3 >> 2] = HEAP32[$3 >> 2] - ($4 & 1);
   $5 = HEAP32[$0 - -64 >> 2];
   $3 = $10 & 127;
   HEAP8[$1 + $15 | 0] = $3;
   HEAP8[(($1 + -4 & $16) + $15 | 0) + 4 | 0] = $3;
   $7 = $5 + Math_imul($1, 20) | 0;
   $5 = $7 + 12 | 0;
   $3 = $6 + 56 | 0;
   $1 = HEAP32[$3 + 4 >> 2];
   HEAP32[$5 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$5 + 4 >> 2] = $1;
   $1 = HEAP32[$6 + 52 >> 2];
   HEAP32[$7 + 4 >> 2] = HEAP32[$6 + 48 >> 2];
   HEAP32[$7 + 8 >> 2] = $1;
   HEAP32[$7 >> 2] = $2;
   $0 = $0 + 72 | 0;
   HEAP32[$0 >> 2] = HEAP32[$0 >> 2] + 1;
  }
  global$0 = $6 + 112 | 0;
 }
 
 function core__num__dec2flt__convert__h66adbcaef35cbf62($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = Math_fround(0), $11 = 0;
  $5 = global$0 - 192 | 0;
  global$0 = $5;
  $4 = HEAP32[$1 + 8 >> 2];
  $6 = HEAP32[$1 + 12 >> 2];
  $11 = $4 + $6 | 0;
  $3 = $4;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if ($6 >>> 0 >= 4) {
       while (1) {
        $3 = $2 + $4 | 0;
        if (HEAPU8[$3 | 0] != 48) {
         break label$1
        }
        if (HEAPU8[$3 + 1 | 0] != 48) {
         break label$4
        }
        if (HEAPU8[$3 + 2 | 0] != 48) {
         break label$3
        }
        if (HEAPU8[$3 + 3 | 0] != 48) {
         break label$2
        }
        $2 = $2 + 4 | 0;
        if ($11 - ($3 + 4 | 0) >>> 0 > 3) {
         continue
        }
        break;
       };
       $3 = $2 + $4 | 0;
      }
      if (($3 | 0) == ($11 | 0)) {
       break label$1
      }
      while (1) {
       if (HEAPU8[$3 | 0] != 48) {
        break label$1
       }
       $2 = $2 + 1 | 0;
       $3 = $3 + 1 | 0;
       if (($11 | 0) != ($3 | 0)) {
        continue
       }
       break;
      };
      break label$1;
     }
     $2 = $2 + 1 | 0;
     break label$1;
    }
    $2 = $2 + 2 | 0;
    break label$1;
   }
   $2 = $2 + 3 | 0;
  }
  label$8 : {
   label$9 : {
    label$10 : {
     label$11 : {
      if ($6 >>> 0 >= $2 >>> 0) {
       $3 = $6 - $2 | 0;
       HEAP32[$1 + 12 >> 2] = $3;
       $6 = $2 + $4 | 0;
       HEAP32[$1 + 8 >> 2] = $6;
       $4 = $1 + 20 | 0;
       $7 = HEAP32[$4 >> 2];
       $8 = HEAP32[$1 + 16 >> 2];
       HEAP8[$5 + 36 | 0] = 0;
       HEAP32[$5 + 32 >> 2] = 1049874;
       HEAP32[$5 + 28 >> 2] = $7 + $8;
       HEAP32[$5 + 24 >> 2] = $8;
       $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___try_fold__hdc43748b75452749($5 + 16 | 0, $5 + 24 | 0, $5 + 36 | 0);
       $2 = HEAP32[$5 + 20 >> 2];
       $9 = $7 - $2 | 0;
       if ($7 >>> 0 < $2 >>> 0) {
        break label$11
       }
       HEAP32[$4 >> 2] = $9;
       label$13 : {
        label$14 : {
         label$16 : {
          label$17 : {
           label$18 : {
            label$19 : {
             label$20 : {
              label$21 : {
               label$22 : {
                label$23 : {
                 label$24 : {
                  if ($3) {
                   if (!$9) {
                    break label$24
                   }
                   $7 = HEAP32[$1 >> 2];
                   $2 = HEAP32[$1 + 4 >> 2];
                   break label$16;
                  }
                  $4 = $9 + $8 | 0;
                  $2 = 0;
                  if ($9 >>> 0 < 4) {
                   break label$23
                  }
                  while (1) {
                   $3 = $2 + $8 | 0;
                   if (HEAPU8[$3 | 0] != 48) {
                    break label$18
                   }
                   if (HEAPU8[$3 + 1 | 0] != 48) {
                    break label$21
                   }
                   if (HEAPU8[$3 + 2 | 0] != 48) {
                    break label$20
                   }
                   if (HEAPU8[$3 + 3 | 0] != 48) {
                    break label$19
                   }
                   $2 = $2 + 4 | 0;
                   if ($4 - ($3 + 4 | 0) >>> 0 > 3) {
                    continue
                   }
                   break;
                  };
                  $3 = $2 + $8 | 0;
                  break label$22;
                 }
                 HEAP8[$5 + 36 | 0] = 0;
                 HEAP32[$5 + 32 >> 2] = 1049874;
                 HEAP32[$5 + 24 >> 2] = $6;
                 HEAP32[$5 + 28 >> 2] = $11;
                 $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___try_fold__hdc43748b75452749($5 + 8 | 0, $5 + 24 | 0, $5 + 36 | 0);
                 $2 = $1 + 12 | 0;
                 $4 = HEAP32[$2 >> 2];
                 $6 = HEAP32[$5 + 12 >> 2];
                 $3 = $4 - $6 | 0;
                 if ($4 >>> 0 < $6 >>> 0) {
                  break label$9
                 }
                 HEAP32[$2 >> 2] = $3;
                 $2 = HEAP32[$1 + 4 >> 2];
                 $7 = $6 + HEAP32[$1 >> 2] | 0;
                 if ($7 >>> 0 < $6 >>> 0) {
                  $2 = $2 + 1 | 0
                 }
                 HEAP32[$1 >> 2] = $7;
                 HEAP32[$1 + 4 >> 2] = $2;
                 if ($3) {
                  break label$16
                 }
                 break label$17;
                }
                $3 = $8;
               }
               if (($3 | 0) == ($4 | 0)) {
                break label$18
               }
               while (1) {
                if (HEAPU8[$3 | 0] != 48) {
                 break label$18
                }
                $2 = $2 + 1 | 0;
                $3 = $3 + 1 | 0;
                if (($4 | 0) != ($3 | 0)) {
                 continue
                }
                break;
               };
               break label$18;
              }
              $2 = $2 + 1 | 0;
              break label$18;
             }
             $2 = $2 + 2 | 0;
             break label$18;
            }
            $2 = $2 + 3 | 0;
           }
           if ($9 >>> 0 < $2 >>> 0) {
            break label$10
           }
           HEAP32[$1 + 20 >> 2] = $9 - $2;
           HEAP32[$1 + 16 >> 2] = $2 + $8;
           $4 = HEAP32[$1 >> 2];
           $3 = HEAP32[$1 + 4 >> 2] - ($4 >>> 0 < $2 >>> 0) | 0;
           $7 = $4 - $2 | 0;
           HEAP32[$1 >> 2] = $7;
           $2 = $3;
           HEAP32[$1 + 4 >> 2] = $2;
          }
          $3 = 0;
          if (!HEAP32[$1 + 20 >> 2]) {
           break label$14
          }
         }
         $10 = Math_fround(infinity);
         $4 = $2;
         $6 = $3 + $7 | 0;
         if ($6 >>> 0 < $3 >>> 0) {
          $4 = $4 + 1 | 0
         }
         if (($4 | 0) > 0) {
          $8 = 1
         } else {
          if (($4 | 0) >= 0) {
           $8 = $6 >>> 0 <= 40 ? 0 : 1
          } else {
           $8 = 0
          }
         }
         if ($8) {
          break label$14
         }
         $10 = Math_fround(0.0);
         if (($4 | 0) < -1) {
          $4 = 1
         } else {
          if (($4 | 0) <= -1) {
           $4 = $6 >>> 0 >= 4294967248 ? 0 : 1
          } else {
           $4 = 0
          }
         }
         if ($4) {
          break label$14
         }
         $8 = $2;
         $4 = HEAP32[$1 + 20 >> 2];
         $2 = $4;
         $6 = $8 - ($7 >>> 0 < $2 >>> 0) | 0;
         $7 = $7 - $2 | 0;
         core__num__dec2flt__algorithm__fast_path__h475be7bf8e084dd6($5, HEAP32[$1 + 8 >> 2], $3, HEAP32[$1 + 16 >> 2], $2, $7, $6);
         if (HEAP32[$5 >> 2] != 1) {
          break label$13
         }
         $10 = HEAPF32[$5 + 4 >> 2];
         HEAP8[$0 | 0] = 0;
         HEAPF32[$0 + 4 >> 2] = $10;
         break label$8;
        }
        HEAP8[$0 | 0] = 0;
        HEAPF32[$0 + 4 >> 2] = $10;
        break label$8;
       }
       $4 = core__num__dec2flt__bound_intermediate_digits__h2886e07128e9448a($1, $7, $6);
       $2 = i64toi32_i32$HIGH_BITS;
       $3 = $2;
       if (!(!$2 & $4 >>> 0 <= 375 | $2 >>> 0 < 0)) {
        HEAP8[$0 | 0] = 1;
        HEAP8[$0 + 1 | 0] = 1;
        break label$8;
       }
       core__num__dec2flt__num__digits_to_big__hef6bb2d3b095a9ae($5 + 24 | 0, HEAP32[$1 + 8 >> 2], HEAP32[$1 + 12 >> 2], HEAP32[$1 + 16 >> 2], HEAP32[$1 + 20 >> 2]);
       label$29 : {
        label$30 : {
         if (($7 + 305 & 65535) >>> 0 > 610) {
          break label$30
         }
         if (!$3 & $4 >>> 0 >= 36 | $3 >>> 0 > 0) {
          break label$30
         }
         $10 = core__num__dec2flt__algorithm__bellerophon__h0c5b0e70784f3385($5 + 24 | 0, $7);
         break label$29;
        }
        $10 = core__num__dec2flt__algorithm__algorithm_m__h98d3ac2557e797f4($5 + 24 | 0, $7);
       }
       HEAP8[$0 | 0] = 0;
       HEAPF32[$0 + 4 >> 2] = $10;
       break label$8;
      }
      core__slice__slice_index_order_fail__ha75fa70416d3bc2f($2, $6);
      abort();
     }
     core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($9, $7);
     abort();
    }
    core__slice__slice_index_order_fail__ha75fa70416d3bc2f($2, $9);
    abort();
   }
   core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($3, $4);
   abort();
  }
  global$0 = $5 + 192 | 0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbfffed49b1cc5153($0, $1, $2) {
  var $3 = Math_fround(0), $4 = 0, $5 = Math_fround(0), $6 = Math_fround(0), $7 = 0, $8 = 0, $9 = 0, $10 = Math_fround(0), $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
  $8 = global$0 - 48 | 0;
  global$0 = $8;
  $4 = HEAP32[$1 >> 2];
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         $15 = HEAPU8[HEAP32[$1 + 4 >> 2]];
         label$8 : {
          if (($15 | 2) == 3) {
           if (!HEAP32[$4 + 8 >> 2]) {
            break label$8
           }
           break label$7;
          }
          if (HEAP32[$4 >> 2]) {
           break label$7
          }
         }
         $12 = $2 + 160 | 0;
         break label$6;
        }
        $12 = $2 + 160 | 0;
        if (!HEAPU8[HEAP32[$1 + 8 >> 2]]) {
         break label$6
        }
        $9 = HEAP32[$2 >> 2];
        $14 = HEAP32[HEAP32[$1 + 12 >> 2] >> 2];
        if (HEAP32[$2 + 4 >> 2]) {
         $4 = 1
        } else {
         $6 = HEAPF32[$2 + 24 >> 2];
         $10 = HEAPF32[$2 + 8 >> 2];
         $3 = $10;
         $3 = $3 != $3 ? $6 : $3 < $6 ? $6 : $3;
         $10 = HEAP32[$2 + 20 >> 2] ? $10 : $3;
         $6 = $10;
         $3 = HEAPF32[$2 + 40 >> 2];
         $3 = $3 != $3 ? $6 : $6 < $3 ? $6 : $3;
         $3 = HEAP32[$2 + 36 >> 2] ? $6 : $3;
         $4 = 0;
        }
        label$12 : {
         if (HEAP32[$2 + 12 >> 2]) {
          $13 = $2 + 48 | 0;
          $16 = $2 + 44 | 0;
          $7 = 1;
          break label$12;
         }
         $6 = HEAPF32[$2 + 32 >> 2];
         $10 = HEAPF32[$2 + 16 >> 2];
         $5 = $10;
         $5 = $5 != $5 ? $6 : $5 < $6 ? $6 : $5;
         $10 = HEAP32[$2 + 28 >> 2] ? $10 : $5;
         $6 = $10;
         $13 = $2 + 48 | 0;
         $5 = HEAPF32[$13 >> 2];
         $5 = $5 != $5 ? $6 : $6 < $5 ? $6 : $5;
         $16 = $2 + 44 | 0;
         $5 = HEAP32[$16 >> 2] ? $6 : $5;
         $7 = 0;
        }
        HEAPF32[$8 + 28 >> 2] = $5;
        HEAP32[$8 + 24 >> 2] = $7;
        HEAPF32[$8 + 20 >> 2] = $3;
        HEAP32[$8 + 16 >> 2] = $4;
        $4 = HEAP32[$1 + 16 >> 2];
        $7 = $4 + 8 | 0;
        $11 = HEAP32[$7 + 4 >> 2];
        $17 = $8 + 40 | 0;
        HEAP32[$17 >> 2] = HEAP32[$7 >> 2];
        HEAP32[$17 + 4 >> 2] = $11;
        $7 = HEAP32[$4 + 4 >> 2];
        HEAP32[$8 + 32 >> 2] = HEAP32[$4 >> 2];
        HEAP32[$8 + 36 >> 2] = $7;
        stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($8, $14, $9, $8 + 16 | 0, $8 + 32 | 0, 0);
        $4 = $8 + 8 | 0;
        $3 = HEAPF32[$4 >> 2];
        $9 = HEAP32[$4 >> 2];
        $5 = HEAPF32[$8 + 4 >> 2];
        $4 = HEAP32[$8 + 4 >> 2];
        $14 = HEAP32[$8 >> 2];
        if (($14 | 0) == 1) {
         break label$1
        }
        $7 = HEAPU8[HEAP32[$1 + 4 >> 2]];
        $11 = $7 | 2;
        if (($11 | 0) != 3) {
         break label$5
        }
        break label$3;
       }
       $4 = (($15 | 2) & 3) == 3;
       label$14 : {
        if ($4) {
         $3 = HEAPF32[$2 + 148 >> 2];
         if (!$4) {
          break label$14
         }
         break label$4;
        }
        $3 = HEAPF32[$2 + 144 >> 2];
        if ($4) {
         break label$4
        }
       }
       HEAPF32[$2 + 160 >> 2] = $3;
       break label$2;
      }
      $3 = $5;
      break label$3;
     }
     HEAPF32[$2 + 164 >> 2] = $3;
     break label$2;
    }
    label$16 : {
     if (($11 & 3) == 3) {
      $5 = HEAPF32[$2 + 32 >> 2];
      $11 = HEAP32[$2 + 28 >> 2];
      break label$16;
     }
     $5 = HEAPF32[$2 + 24 >> 2];
     $11 = HEAP32[$2 + 20 >> 2];
    }
    $3 = $11 ? $3 : $3 != $3 ? $5 : $3 < $5 ? $5 : $3;
    label$18 : {
     if ((($7 | 2) & 3) == 3) {
      $5 = HEAPF32[$13 >> 2];
      $13 = HEAP32[$16 >> 2];
      break label$18;
     }
     $5 = HEAPF32[$2 + 40 >> 2];
     $13 = HEAP32[$2 + 36 >> 2];
    }
    HEAPF32[((($15 | 2) & 3) == 3 ? $2 + 164 | 0 : $12) >> 2] = $13 ? $3 : $5 != $5 ? $3 : $3 < $5 ? $3 : $5;
    if (!$14) {
     break label$2
    }
    FUNCTION_TABLE[HEAP32[$9 >> 2]]($4);
    if (!HEAP32[$9 + 4 >> 2]) {
     break label$2
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($4);
   }
   $9 = HEAPU8[HEAP32[$1 + 4 >> 2]];
   $4 = $9 | 2;
   $10 = HEAPF32[$2 + 164 >> 2];
   label$22 : {
    if (($4 | 0) == 3) {
     break label$22
    }
    $10 = HEAPF32[$12 >> 2];
   }
   label$24 : {
    if (($4 & 3) == 3) {
     $4 = $2 + 96 | 0;
     $7 = $2 + 92 | 0;
     break label$24;
    }
    $4 = $2 + 88 | 0;
    $7 = $2 + 84 | 0;
   }
   $3 = Math_fround($10 + Math_fround(HEAPF32[$7 >> 2] + HEAPF32[$4 >> 2]));
   HEAPF32[((($9 | 2) & 3) == 3 ? $2 + 172 | 0 : $2 + 168 | 0) >> 2] = $3;
   label$28 : {
    label$29 : {
     label$30 : {
      label$31 : {
       label$32 : {
        $9 = HEAP32[HEAP32[$1 + 12 >> 2] >> 2];
        $12 = HEAP32[$9 + 8 >> 2];
        $4 = HEAP32[$2 >> 2];
        if ($12 >>> 0 > $4 >>> 0) {
         $9 = HEAP32[$9 >> 2] + Math_imul($4, 288) | 0;
         if (HEAPF32[$9 + 132 >> 2] == Math_fround(0.0) ? HEAPF32[$9 + 128 >> 2] == Math_fround(0.0) : 0) {
          break label$29
         }
         if (!HEAPU8[HEAP32[$1 + 20 >> 2]]) {
          break label$30
         }
         $3 = HEAPF32[$2 + 132 >> 2];
         if ((HEAPU8[HEAP32[$1 + 4 >> 2]] | 2) != 3) {
          break label$32
         }
         $5 = HEAPF32[$2 + 148 >> 2];
         break label$31;
        }
        core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $4, $12);
        abort();
       }
       $5 = HEAPF32[$2 + 144 >> 2];
      }
      if ($3 > $5) {
       break label$29
      }
     }
     $4 = 0;
     $7 = $4;
     if (!HEAPU8[HEAP32[$1 + 24 >> 2]]) {
      break label$28
     }
     if (!(HEAPF32[$2 + 132 >> 2] < ((HEAPU8[HEAP32[$1 + 4 >> 2]] | 2) == 3 ? HEAPF32[$2 + 148 >> 2] : HEAPF32[$2 + 144 >> 2]))) {
      break label$1
     }
    }
    HEAP8[$2 + 188 | 0] = 1;
    $7 = 0;
   }
   $4 = $7;
  }
  HEAP32[$0 + 4 >> 2] = $9;
  HEAP32[$0 >> 2] = $4;
  global$0 = $8 + 48 | 0;
 }
 
 function std__collections__hash__map__HashMap_K_2cV_2cS___insert__h07c01ff281a3cbf7($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0;
  $6 = global$0 - 80 | 0;
  global$0 = $6;
  $17 = HEAP32[$1 + 12 >> 2];
  $18 = HEAP32[$1 + 8 >> 2];
  $19 = HEAP32[$1 + 4 >> 2];
  $20 = HEAP32[$1 >> 2];
  $12 = HEAP32[$0 + 12 >> 2];
  $5 = $6 + 48 | 0;
  $1 = $5;
  $4 = HEAP32[$0 + 8 >> 2];
  HEAP32[$1 >> 2] = $4 ^ 2037671283;
  HEAP32[$1 + 4 >> 2] = $12 ^ 1952801890;
  $9 = $6 + 40 | 0;
  $1 = $9;
  HEAP32[$1 >> 2] = $4 ^ 1852075885;
  HEAP32[$1 + 4 >> 2] = $12 ^ 1685025377;
  $7 = HEAP32[$0 + 4 >> 2];
  $8 = $6 + 32 | 0;
  $1 = $8;
  $3 = HEAP32[$0 >> 2];
  HEAP32[$1 >> 2] = $3 ^ 1852142177;
  HEAP32[$1 + 4 >> 2] = $7 ^ 1819895653;
  HEAP32[$6 + 64 >> 2] = 0;
  HEAP32[$6 + 68 >> 2] = 0;
  HEAP32[$6 + 56 >> 2] = 0;
  HEAP32[$6 + 60 >> 2] = 0;
  HEAP32[$6 + 16 >> 2] = $4;
  HEAP32[$6 + 20 >> 2] = $12;
  HEAP32[$6 + 8 >> 2] = $3;
  HEAP32[$6 + 12 >> 2] = $7;
  HEAP32[$6 + 24 >> 2] = $3 ^ 1886610805;
  HEAP32[$6 + 28 >> 2] = $7 ^ 1936682341;
  HEAP32[$6 + 76 >> 2] = $20;
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($6 + 8 | 0, $6 + 76 | 0);
  HEAP32[$6 + 76 >> 2] = $19;
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($6 + 8 | 0, $6 + 76 | 0);
  HEAP32[$6 + 76 >> 2] = $18;
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($6 + 8 | 0, $6 + 76 | 0);
  HEAP32[$6 + 76 >> 2] = $17;
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($6 + 8 | 0, $6 + 76 | 0);
  $11 = HEAP32[$6 + 60 >> 2] | HEAP32[$6 + 64 >> 2] << 24;
  $3 = $11 ^ HEAP32[$5 + 4 >> 2];
  $1 = $3;
  $10 = HEAP32[$6 + 56 >> 2];
  $5 = $10 ^ HEAP32[$5 >> 2];
  $4 = __wasm_rotl_i64($5, $1, 16);
  $7 = i64toi32_i32$HIGH_BITS;
  $1 = HEAP32[$8 + 4 >> 2] + $1 | 0;
  $3 = HEAP32[$8 >> 2];
  $5 = $5 + $3 | 0;
  if ($5 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $16 = $4 ^ $5;
  $4 = $1;
  $8 = $7 ^ $1;
  $13 = $8;
  $14 = HEAP32[$9 + 4 >> 2];
  $1 = $14 + HEAP32[$6 + 28 >> 2] | 0;
  $9 = HEAP32[$9 >> 2];
  $3 = HEAP32[$6 + 24 >> 2];
  $15 = $9 + $3 | 0;
  if ($15 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $7 = __wasm_rotl_i64($15, $1, 32);
  $21 = $7 + $16 | 0;
  $3 = i64toi32_i32$HIGH_BITS + $8 | 0;
  $12 = $21 >>> 0 < $7 >>> 0 ? $3 + 1 | 0 : $3;
  $8 = $11 ^ $12;
  $3 = __wasm_rotl_i64($9, $14, 13) ^ $15;
  $7 = $1 ^ i64toi32_i32$HIGH_BITS;
  $1 = $4 + $7 | 0;
  $4 = $3 + $5 | 0;
  if ($4 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $7 = __wasm_rotl_i64($3, $7, 17) ^ $4;
  $3 = $1;
  $5 = $1 ^ i64toi32_i32$HIGH_BITS;
  $1 = $8 + $5 | 0;
  $8 = $7 + ($10 ^ $21) | 0;
  if ($8 >>> 0 < $7 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $14 = __wasm_rotl_i64($7, $5, 13) ^ $8;
  $7 = $1;
  $1 = $1 ^ i64toi32_i32$HIGH_BITS;
  $9 = $1;
  $11 = __wasm_rotl_i64($16, $13, 21) ^ $21;
  $10 = $12 ^ i64toi32_i32$HIGH_BITS;
  $4 = __wasm_rotl_i64($4, $3, 32) ^ 255;
  $3 = $4 + $11 | 0;
  $1 = i64toi32_i32$HIGH_BITS + $10 | 0;
  $13 = $3 >>> 0 < $4 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $9 + $13 | 0;
  $5 = $3 + $14 | 0;
  if ($5 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $14 = __wasm_rotl_i64($14, $9, 17) ^ $5;
  $4 = $1;
  $1 = $1 ^ i64toi32_i32$HIGH_BITS;
  $12 = __wasm_rotl_i64($14, $1, 13);
  $9 = i64toi32_i32$HIGH_BITS;
  $11 = __wasm_rotl_i64($11, $10, 16) ^ $3;
  $10 = $13 ^ i64toi32_i32$HIGH_BITS;
  $7 = __wasm_rotl_i64($8, $7, 32);
  $3 = $7 + $11 | 0;
  $8 = $1;
  $1 = i64toi32_i32$HIGH_BITS + $10 | 0;
  $13 = $3 >>> 0 < $7 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $8 + $13 | 0;
  $8 = $3 + $14 | 0;
  if ($8 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $14 = $12 ^ $8;
  $7 = $1;
  $1 = $1 ^ $9;
  $9 = __wasm_rotl_i64($14, $1, 17);
  $12 = i64toi32_i32$HIGH_BITS;
  $11 = __wasm_rotl_i64($11, $10, 21) ^ $3;
  $10 = $13 ^ i64toi32_i32$HIGH_BITS;
  $4 = __wasm_rotl_i64($5, $4, 32);
  $3 = $4 + $11 | 0;
  $5 = $1;
  $1 = i64toi32_i32$HIGH_BITS + $10 | 0;
  $13 = $3 >>> 0 < $4 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $5 + $13 | 0;
  $5 = $3 + $14 | 0;
  if ($5 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $9 = $5 ^ $9;
  $4 = $1;
  $1 = $1 ^ $12;
  $14 = __wasm_rotl_i64($9, $1, 13);
  $12 = i64toi32_i32$HIGH_BITS;
  $10 = __wasm_rotl_i64($11, $10, 16) ^ $3;
  $13 = $13 ^ i64toi32_i32$HIGH_BITS;
  $7 = __wasm_rotl_i64($8, $7, 32);
  $3 = $7 + $10 | 0;
  $8 = $1;
  $1 = i64toi32_i32$HIGH_BITS + $13 | 0;
  $7 = $3 >>> 0 < $7 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $8 + $7 | 0;
  $9 = $3 + $9 | 0;
  if ($9 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $1 = $1 ^ $12;
  $8 = $1;
  $13 = __wasm_rotl_i64($10, $13, 21) ^ $3;
  $12 = $7 ^ i64toi32_i32$HIGH_BITS;
  $4 = __wasm_rotl_i64($5, $4, 32);
  $3 = $4 + $13 | 0;
  $1 = i64toi32_i32$HIGH_BITS + $12 | 0;
  $7 = $3 >>> 0 < $4 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $8 + $7 | 0;
  $5 = $9 ^ $14;
  $4 = $3 + $5 | 0;
  if ($4 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $3 = __wasm_rotl_i64(__wasm_rotl_i64($13, $12, 16) ^ $3, $7 ^ i64toi32_i32$HIGH_BITS, 21) ^ $4;
  $4 = i64toi32_i32$HIGH_BITS ^ $1;
  $3 = $1 ^ (__wasm_rotl_i64($5, $8, 17) ^ $3);
  $9 = (($4 ^ i64toi32_i32$HIGH_BITS) & 33554431) << 7 | $3 >>> 25;
  $1 = $9 & 127;
  $1 = $1 << 8 | $1;
  $8 = $1 << 16 | $1;
  $7 = $0 + 16 | 0;
  $13 = HEAP32[$0 + 24 >> 2];
  $16 = HEAP32[$0 + 20 >> 2];
  $14 = 0;
  $15 = HEAP32[$0 + 16 >> 2];
  $5 = $3 & $15;
  $1 = $5;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      while (1) {
       $4 = $1 + $16 | 0;
       $12 = HEAPU8[$4 | 0] | HEAPU8[$4 + 1 | 0] << 8 | (HEAPU8[$4 + 2 | 0] << 16 | HEAPU8[$4 + 3 | 0] << 24);
       $4 = $12 ^ $8;
       $11 = ($4 ^ -1) & $4 + -16843009 & -2139062144;
       if ($11) {
        while (1) {
         $10 = $13;
         if ($11) {
          $4 = 31 - Math_clz32($11 + -1 ^ $11) | 0
         } else {
          $4 = 32
         }
         $4 = ($4 >>> 3) + $1 & $15;
         $10 = $10 + Math_imul($4, 20) | 0;
         label$8 : {
          if (HEAP32[$10 >> 2] != ($20 | 0)) {
           break label$8
          }
          if (HEAP32[$10 + 4 >> 2] != ($19 | 0)) {
           break label$8
          }
          if (HEAP32[$10 + 8 >> 2] != ($18 | 0)) {
           break label$8
          }
          if (HEAP32[$10 + 12 >> 2] == ($17 | 0)) {
           break label$4
          }
         }
         $11 = $11 + -1 & $11;
         if ($11) {
          continue
         }
         break;
        }
       }
       $14 = $14 + 4 | 0;
       $1 = $14 + $1 & $15;
       if (!($12 << 1 & $12 & -2139062144)) {
        continue
       }
       break;
      };
      HEAP32[$6 + 8 >> 2] = $0;
      if (!HEAP32[$0 + 28 >> 2]) {
       break label$3
      }
      break label$2;
     }
     HEAP32[($13 + Math_imul($4, 20) | 0) + 16 >> 2] = $2;
     break label$1;
    }
    hashbrown__raw__RawTable_T___reserve_rehash__h244ef51122edaa64($7, $6 + 8 | 0);
    $15 = HEAP32[$0 + 16 >> 2];
    $5 = $3 & $15;
    $16 = HEAP32[$0 + 20 >> 2];
   }
   $1 = 4;
   while (1) {
    $4 = $5;
    $5 = $4 + $1 & $15;
    $1 = $1 + 4 | 0;
    $3 = $4 + $16 | 0;
    $3 = (HEAPU8[$3 | 0] | HEAPU8[$3 + 1 | 0] << 8 | (HEAPU8[$3 + 2 | 0] << 16 | HEAPU8[$3 + 3 | 0] << 24)) & -2139062144;
    if (!$3) {
     continue
    }
    break;
   };
   $5 = $16;
   if ($3) {
    $1 = 31 - Math_clz32($3 + -1 ^ $3) | 0
   } else {
    $1 = 32
   }
   $1 = $4 + ($1 >>> 3) & $15;
   $5 = HEAP8[$5 + $1 | 0];
   if (($5 | 0) >= 0) {
    $4 = $16;
    $1 = HEAP32[$16 >> 2] & -2139062144;
    $5 = 31 - Math_clz32($1 ^ $1 + -1) | 0;
    __inlined_func$__wasm_ctz_i321 : {
     if ($1) {
      break __inlined_func$__wasm_ctz_i321
     }
     $5 = 32;
    }
    $1 = $5 >>> 3;
    $5 = HEAPU8[$4 + $1 | 0];
   }
   $3 = $0 + 28 | 0;
   HEAP32[$3 >> 2] = HEAP32[$3 >> 2] - ($5 & 1);
   $4 = HEAP32[$0 + 24 >> 2];
   $3 = $9 & 127;
   HEAP8[$1 + $16 | 0] = $3;
   HEAP8[(($1 + -4 & $15) + $16 | 0) + 4 | 0] = $3;
   $1 = $4 + Math_imul($1, 20) | 0;
   HEAP32[$1 + 16 >> 2] = $2;
   HEAP32[$1 + 12 >> 2] = $17;
   HEAP32[$1 + 8 >> 2] = $18;
   HEAP32[$1 + 4 >> 2] = $19;
   HEAP32[$1 >> 2] = $20;
   $0 = $0 + 32 | 0;
   HEAP32[$0 >> 2] = HEAP32[$0 >> 2] + 1;
  }
  global$0 = $6 + 80 | 0;
 }
 
 function core__str__slice_error_fail__h65b601301310b052($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  $4 = global$0 - 112 | 0;
  global$0 = $4;
  HEAP32[$4 + 12 >> 2] = $3;
  HEAP32[$4 + 8 >> 2] = $2;
  $8 = 1;
  $6 = $1;
  label$1 : {
   if ($1 >>> 0 < 257) {
    break label$1
   }
   $7 = 0 - $1 | 0;
   $5 = 256;
   while (1) {
    if (!(HEAP8[$0 + $5 | 0] > -65 ? $5 >>> 0 < $1 >>> 0 : 0)) {
     $6 = $5 + -1 | 0;
     $8 = 0;
     if (($5 | 0) == 1) {
      break label$1
     }
     $9 = $5 + $7 | 0;
     $5 = $6;
     if (($9 | 0) != 1) {
      continue
     }
     break label$1;
    }
    break;
   };
   $8 = 0;
   $6 = $5;
  }
  HEAP32[$4 + 20 >> 2] = $6;
  HEAP32[$4 + 16 >> 2] = $0;
  HEAP32[$4 + 28 >> 2] = $8 ? 0 : 5;
  HEAP32[$4 + 24 >> 2] = $8 ? 1053460 : 1060602;
  label$5 : {
   label$6 : {
    label$7 : {
     label$8 : {
      label$9 : {
       $5 = $2 >>> 0 > $1 >>> 0;
       if ($5) {
        break label$9
       }
       if ($3 >>> 0 > $1 >>> 0) {
        break label$9
       }
       if ($2 >>> 0 > $3 >>> 0) {
        break label$6
       }
       label$10 : {
        label$11 : {
         if (!$2) {
          break label$11
         }
         if (($1 | 0) == ($2 | 0)) {
          break label$11
         }
         if ($1 >>> 0 <= $2 >>> 0) {
          break label$10
         }
         if (HEAP8[$0 + $2 | 0] < -64) {
          break label$10
         }
        }
        $2 = $3;
       }
       HEAP32[$4 + 32 >> 2] = $2;
       if (!$2) {
        break label$8
       }
       if (($1 | 0) == ($2 | 0)) {
        break label$8
       }
       $3 = $1 + 1 | 0;
       label$12 : {
        while (1) {
         if (!(HEAP8[$0 + $2 | 0] > -65 ? $2 >>> 0 < $1 >>> 0 : 0)) {
          $5 = $2 + -1 | 0;
          if (($2 | 0) == 1) {
           break label$12
          }
          $6 = ($2 | 0) == ($3 | 0);
          $2 = $5;
          if (!$6) {
           continue
          }
          break label$12;
         }
         break;
        };
        $5 = $2;
       }
       if (($1 | 0) != ($5 | 0)) {
        break label$7
       }
       break label$5;
      }
      HEAP32[$4 + 40 >> 2] = $5 ? $2 : $3;
      HEAP32[$4 + 92 >> 2] = 76;
      HEAP32[$4 + 84 >> 2] = 76;
      HEAP32[$4 + 68 >> 2] = 3;
      HEAP32[$4 + 76 >> 2] = 75;
      HEAP32[$4 + 52 >> 2] = 3;
      HEAP32[$4 + 56 >> 2] = 0;
      HEAP32[$4 + 48 >> 2] = 1060640;
      HEAP32[$4 + 88 >> 2] = $4 + 24;
      HEAP32[$4 + 80 >> 2] = $4 + 16;
      HEAP32[$4 + 72 >> 2] = $4 + 40;
      HEAP32[$4 + 64 >> 2] = $4 + 72;
      core__panicking__panic_fmt__h2daf88b2616ca2b2($4 + 48 | 0, 1060664);
      abort();
     }
     $5 = $2;
     if (($2 | 0) == ($1 | 0)) {
      break label$5
     }
    }
    $6 = 1;
    $7 = $0 + $5 | 0;
    $2 = HEAP8[$7 | 0];
    label$16 : {
     if (($2 | 0) > -1) {
      HEAP32[$4 + 36 >> 2] = $2 & 255;
      $2 = $4 + 40 | 0;
      break label$16;
     }
     $8 = 0;
     $3 = $0 + $1 | 0;
     $1 = $3;
     if (($1 | 0) != ($7 + 1 | 0)) {
      $8 = HEAPU8[$7 + 1 | 0] & 63;
      $1 = $7 + 2 | 0;
     }
     $7 = $2 & 31;
     label$19 : {
      label$20 : {
       if (($2 & 255) >>> 0 > 223) {
        $6 = $3;
        if (($1 | 0) != ($3 | 0)) {
         $6 = $1 + 1 | 0;
         $0 = HEAPU8[$1 | 0] & 63;
        } else {
         $0 = 0
        }
        $0 = $0 | $8 << 6;
        if (($2 & 255) >>> 0 < 240) {
         break label$20
        }
        $1 = $7 << 18 & 1835008 | $0 << 6 | (($3 | 0) != ($6 | 0) ? HEAPU8[$6 | 0] & 63 : 0);
        if (($1 | 0) == 1114112) {
         break label$5
        }
        break label$19;
       }
       $1 = $7 << 6 | $8;
       break label$19;
      }
      $1 = $0 | $7 << 12;
     }
     HEAP32[$4 + 36 >> 2] = $1;
     $6 = 1;
     $2 = $4 + 40 | 0;
     if ($1 >>> 0 < 128) {
      break label$16
     }
     $6 = 2;
     if ($1 >>> 0 < 2048) {
      break label$16
     }
     $6 = $1 >>> 0 < 65536 ? 3 : 4;
    }
    HEAP32[$4 + 40 >> 2] = $5;
    HEAP32[$4 + 44 >> 2] = $5 + $6;
    HEAP32[$4 + 108 >> 2] = 76;
    HEAP32[$4 + 100 >> 2] = 76;
    HEAP32[$4 + 92 >> 2] = 77;
    HEAP32[$4 + 84 >> 2] = 78;
    HEAP32[$4 + 68 >> 2] = 5;
    HEAP32[$4 + 88 >> 2] = $2;
    HEAP32[$4 + 76 >> 2] = 75;
    HEAP32[$4 + 52 >> 2] = 5;
    HEAP32[$4 + 56 >> 2] = 0;
    HEAP32[$4 + 48 >> 2] = 1060816;
    HEAP32[$4 + 104 >> 2] = $4 + 24;
    HEAP32[$4 + 96 >> 2] = $4 + 16;
    HEAP32[$4 + 80 >> 2] = $4 + 36;
    HEAP32[$4 + 72 >> 2] = $4 + 32;
    HEAP32[$4 + 64 >> 2] = $4 + 72;
    core__panicking__panic_fmt__h2daf88b2616ca2b2($4 + 48 | 0, 1060856);
    abort();
   }
   HEAP32[$4 + 100 >> 2] = 76;
   HEAP32[$4 + 92 >> 2] = 76;
   HEAP32[$4 + 84 >> 2] = 75;
   HEAP32[$4 + 68 >> 2] = 4;
   HEAP32[$4 + 76 >> 2] = 75;
   HEAP32[$4 + 52 >> 2] = 4;
   HEAP32[$4 + 56 >> 2] = 0;
   HEAP32[$4 + 48 >> 2] = 1060716;
   HEAP32[$4 + 96 >> 2] = $4 + 24;
   HEAP32[$4 + 88 >> 2] = $4 + 16;
   HEAP32[$4 + 80 >> 2] = $4 + 12;
   HEAP32[$4 + 72 >> 2] = $4 + 8;
   HEAP32[$4 + 64 >> 2] = $4 + 72;
   core__panicking__panic_fmt__h2daf88b2616ca2b2($4 + 48 | 0, 1060748);
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1060364);
  abort();
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h68fdebc198e03480($0, $1, $2) {
  var $3 = 0, $4 = Math_fround(0), $5 = Math_fround(0), $6 = Math_fround(0), $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
  $10 = global$0 - 48 | 0;
  global$0 = $10;
  label$1 : {
   $14 = HEAP32[HEAP32[$1 >> 2] >> 2];
   $12 = HEAP32[$14 + 8 >> 2];
   $13 = HEAP32[$2 >> 2];
   if ($12 >>> 0 > $13 >>> 0) {
    $15 = HEAP32[$14 >> 2];
    $3 = $15 + Math_imul($13, 288) | 0;
    $7 = HEAPU8[$3 + 207 | 0];
    $11 = HEAP32[$3 + 192 >> 2];
    $8 = HEAP32[$3 + 136 >> 2];
    $6 = HEAPF32[$3 + 196 >> 2];
    $4 = HEAPF32[$3 + 140 >> 2];
    $3 = HEAP32[$1 + 4 >> 2];
    $16 = HEAPU8[HEAP32[$1 + 8 >> 2]];
    if (($16 | 2) == 3) {
     $9 = HEAP32[$3 + 8 >> 2];
     $5 = HEAPF32[$3 + 12 >> 2];
     break label$1;
    }
    $5 = HEAPF32[$3 + 4 >> 2];
    $9 = HEAP32[$3 >> 2];
    break label$1;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $13, $12);
   abort();
  }
  label$4 : {
   label$5 : {
    label$6 : {
     label$7 : {
      label$8 : {
       $17 = $2;
       if (($8 | 0) != 2) {
        if (!($9 ? 0 : ($8 | 0) == 3)) {
         if ($11) {
          break label$5
         }
         $3 = HEAP32[$1 + 12 >> 2];
         if ((($16 | 2) & 3) != 3) {
          break label$8
         }
         $11 = HEAP32[$3 >> 2];
         $4 = HEAPF32[$3 + 4 >> 2];
         break label$7;
        }
        $4 = Math_fround($4 * $5);
       }
       HEAPF32[$17 + 132 >> 2] = $4;
       break label$6;
      }
      $11 = HEAP32[$3 + 8 >> 2];
      $4 = HEAPF32[$3 + 12 >> 2];
     }
     if (($8 | 0) != 1) {
      break label$5
     }
     if ($11) {
      break label$5
     }
     HEAPF32[$2 + 132 >> 2] = $6 * $4;
    }
    $7 = 0;
    break label$4;
   }
   $8 = $2 + 8 | 0;
   $3 = 0;
   label$12 : {
    label$13 : {
     label$14 : {
      label$15 : {
       label$16 : {
        if (HEAP32[$2 + 4 >> 2]) {
         $9 = HEAP32[HEAP32[$1 + 16 >> 2] >> 2];
         if ($12 >>> 0 <= $9 >>> 0) {
          break label$15
         }
         $11 = 1;
         if (($7 | 0) != 5) {
          if ($7) {
           break label$16
          }
          if (HEAPU8[(Math_imul($9, 288) + $15 | 0) + 206 | 0] < 4) {
           break label$16
          }
         }
         if (!HEAPU8[HEAP32[$1 + 20 >> 2]]) {
          break label$16
         }
         $11 = HEAP32[$1 + 24 >> 2];
         $8 = $11 + 4 | 0;
         $11 = HEAP32[$11 >> 2];
         break label$16;
        }
        $11 = 0;
       }
       $9 = $2 + 16 | 0;
       $4 = HEAPF32[$8 >> 2];
       label$19 : {
        if (!HEAP32[$2 + 12 >> 2]) {
         break label$19
        }
        $8 = HEAP32[HEAP32[$1 + 16 >> 2] >> 2];
        if ($12 >>> 0 <= $8 >>> 0) {
         break label$14
        }
        $3 = 1;
        if (($7 | 0) != 5) {
         if ($7) {
          break label$19
         }
         if (HEAPU8[(Math_imul($8, 288) + $15 | 0) + 206 | 0] < 4) {
          break label$19
         }
        }
        if (!HEAPU8[HEAP32[$1 + 28 >> 2]]) {
         break label$19
        }
        $3 = HEAP32[$1 + 24 >> 2];
        $9 = $3 + 12 | 0;
        $3 = HEAP32[$3 + 8 >> 2];
       }
       $5 = HEAPF32[$9 >> 2];
       label$21 : {
        if ($11) {
         $8 = 1;
         if (!$3) {
          break label$21
         }
         break label$13;
        }
        $6 = HEAPF32[$2 + 24 >> 2];
        $6 = HEAP32[$2 + 20 >> 2] ? $4 : $4 != $4 ? $6 : $4 < $6 ? $6 : $4;
        $4 = HEAPF32[$2 + 40 >> 2];
        $4 = $4 != $4 ? $6 : $6 < $4 ? $6 : $4;
        $4 = HEAP32[$2 + 36 >> 2] ? $6 : $4;
        $8 = 0;
        if ($3) {
         break label$13
        }
       }
       $6 = HEAPF32[$2 + 32 >> 2];
       $6 = HEAP32[$2 + 28 >> 2] ? $5 : $5 != $5 ? $6 : $5 < $6 ? $6 : $5;
       $11 = $2 + 48 | 0;
       $5 = HEAPF32[$11 >> 2];
       $5 = $5 != $5 ? $6 : $6 < $5 ? $6 : $5;
       $12 = $2 + 44 | 0;
       $5 = HEAP32[$12 >> 2] ? $6 : $5;
       $3 = 0;
       break label$12;
      }
      core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $9, $12);
      abort();
     }
     core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $8, $12);
     abort();
    }
    $11 = $2 + 48 | 0;
    $12 = $2 + 44 | 0;
    $3 = 1;
   }
   HEAPF32[$10 + 28 >> 2] = $5;
   HEAP32[$10 + 24 >> 2] = $3;
   HEAPF32[$10 + 20 >> 2] = $4;
   HEAP32[$10 + 16 >> 2] = $8;
   $3 = HEAP32[$1 + 24 >> 2];
   $9 = $3 + 8 | 0;
   $8 = HEAP32[$9 + 4 >> 2];
   $7 = $10 + 40 | 0;
   HEAP32[$7 >> 2] = HEAP32[$9 >> 2];
   HEAP32[$7 + 4 >> 2] = $8;
   $9 = HEAP32[$3 + 4 >> 2];
   HEAP32[$10 + 32 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$10 + 36 >> 2] = $9;
   stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($10, $14, $13, $10 + 16 | 0, $10 + 32 | 0, 0);
   $3 = $10 + 8 | 0;
   $4 = HEAPF32[$3 >> 2];
   $3 = HEAP32[$3 >> 2];
   $9 = HEAP32[$10 + 4 >> 2];
   $8 = HEAP32[$10 >> 2];
   $7 = $9;
   if (($8 | 0) == 1) {
    break label$4
   }
   $5 = HEAPF32[$10 + 4 >> 2];
   $1 = HEAPU8[HEAP32[$1 + 8 >> 2]];
   $7 = $1 | 2;
   if (($7 | 0) != 3) {
    $4 = $5
   }
   label$25 : {
    if (($7 & 3) == 3) {
     $5 = HEAPF32[$2 + 32 >> 2];
     $7 = HEAP32[$2 + 28 >> 2];
     break label$25;
    }
    $5 = HEAPF32[$2 + 24 >> 2];
    $7 = HEAP32[$2 + 20 >> 2];
   }
   $4 = $7 ? $4 : $4 != $4 ? $5 : $4 < $5 ? $5 : $4;
   label$27 : {
    if ((($1 | 2) & 3) == 3) {
     $5 = HEAPF32[$11 >> 2];
     $1 = HEAP32[$12 >> 2];
     break label$27;
    }
    $5 = HEAPF32[$2 + 40 >> 2];
    $1 = HEAP32[$2 + 36 >> 2];
   }
   HEAPF32[$2 + 132 >> 2] = $1 ? $4 : $5 != $5 ? $4 : $4 < $5 ? $4 : $5;
   label$29 : {
    if (!$8) {
     break label$29
    }
    FUNCTION_TABLE[HEAP32[$3 >> 2]]($9);
    if (!HEAP32[$3 + 4 >> 2]) {
     break label$29
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($9);
   }
   $7 = 0;
  }
  $1 = $7;
  HEAP32[$0 + 4 >> 2] = $3;
  HEAP32[$0 >> 2] = $1;
  global$0 = $10 + 48 | 0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h47f1631c47b88853($0, $1, $2) {
  var $3 = Math_fround(0), $4 = 0, $5 = Math_fround(0), $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = Math_fround(0), $14 = Math_fround(0), $15 = Math_fround(0);
  $7 = global$0 - 48 | 0;
  global$0 = $7;
  $9 = HEAPU8[HEAP32[$1 >> 2]];
  $4 = $9 | 2;
  label$1 : {
   if (($4 | 0) == 3) {
    $6 = HEAP32[$2 + 4 >> 2];
    $3 = HEAPF32[$2 + 8 >> 2];
    break label$1;
   }
   $6 = HEAP32[$2 + 12 >> 2];
   $3 = HEAPF32[$2 + 16 >> 2];
  }
  label$3 : {
   label$4 : {
    label$5 : {
     if (($4 & 3) == 3) {
      $4 = HEAP32[$2 + 20 >> 2];
      $5 = HEAPF32[$2 + 24 >> 2];
      if (!$6) {
       break label$5
      }
      break label$4;
     }
     $5 = HEAPF32[$2 + 32 >> 2];
     $4 = HEAP32[$2 + 28 >> 2];
     if ($6) {
      break label$4
     }
    }
    $3 = $4 ? $3 : $3 != $3 ? $5 : $3 < $5 ? $5 : $3;
    $4 = 0;
    break label$3;
   }
   $4 = 1;
  }
  label$7 : {
   label$8 : {
    label$9 : {
     if ((($9 | 2) & 3) == 3) {
      $6 = HEAP32[$2 + 36 >> 2];
      $5 = HEAPF32[$2 + 40 >> 2];
      if (!$4) {
       break label$9
      }
      break label$8;
     }
     $5 = HEAPF32[$2 + 48 >> 2];
     $6 = HEAP32[$2 + 44 >> 2];
     if ($4) {
      break label$8
     }
    }
    $3 = $6 ? $3 : $5 != $5 ? $3 : $3 < $5 ? $3 : $5;
    $4 = 0;
    break label$7;
   }
   $4 = 1;
  }
  $10 = HEAP32[$2 >> 2];
  $11 = HEAP32[HEAP32[$1 + 4 >> 2] >> 2];
  $8 = HEAPU8[HEAP32[$1 + 8 >> 2]];
  label$11 : {
   if ($8) {
    $5 = HEAPF32[$2 + 160 >> 2];
    $6 = 0;
    $12 = 0;
    break label$11;
   }
   $6 = $4;
   $5 = $3;
   $3 = HEAPF32[$2 + 164 >> 2];
   $4 = 0;
   $12 = 1;
  }
  HEAPF32[$7 + 28 >> 2] = $3;
  HEAP32[$7 + 24 >> 2] = $4;
  HEAPF32[$7 + 20 >> 2] = $5;
  HEAP32[$7 + 16 >> 2] = $6;
  label$13 : {
   label$14 : {
    if ($12) {
     $4 = HEAP32[$1 + 12 >> 2];
     $3 = HEAPF32[$4 >> 2];
     $6 = HEAP32[$1 + 16 >> 2];
     $5 = HEAPF32[$6 + 4 >> 2];
     $6 = HEAP32[$6 >> 2];
     break label$14;
    }
    $4 = HEAP32[$1 + 12 >> 2];
    $3 = HEAPF32[$4 >> 2];
    $5 = (($9 | 2) & 3) == 3 ? HEAPF32[$4 + 4 >> 2] : $3;
    if ($8) {
     $4 = HEAP32[$1 + 16 >> 2];
     $3 = HEAPF32[$4 + 12 >> 2];
     $8 = HEAP32[$4 + 8 >> 2];
     $6 = 0;
     break label$13;
    }
    $6 = 0;
   }
   $8 = 0;
   if ((($9 | 2) & 3) != 3) {
    break label$13
   }
   $3 = HEAPF32[$4 + 4 >> 2];
  }
  HEAPF32[$7 + 44 >> 2] = $3;
  HEAP32[$7 + 40 >> 2] = $8;
  HEAPF32[$7 + 36 >> 2] = $5;
  HEAP32[$7 + 32 >> 2] = $6;
  stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($7, $11, $10, $7 + 16 | 0, $7 + 32 | 0, 0);
  $4 = $7 + 8 | 0;
  $5 = HEAPF32[$4 >> 2];
  $6 = HEAP32[$4 >> 2];
  $3 = HEAPF32[$7 + 4 >> 2];
  $4 = HEAP32[$7 + 4 >> 2];
  $10 = HEAP32[$7 >> 2];
  if (($10 | 0) != 1) {
   $11 = $2 + 144 | 0;
   $12 = (($9 | 2) & 3) == 3 ? $11 : $2 + 148 | 0;
   $9 = HEAPU8[HEAP32[$1 >> 2]];
   $8 = $9 | 2;
   if (($8 | 0) != 3) {
    $3 = $5
   }
   $13 = $3;
   label$21 : {
    if (($8 & 3) == 3) {
     $8 = HEAP32[$2 + 20 >> 2];
     $5 = HEAPF32[$2 + 24 >> 2];
     break label$21;
    }
    $8 = HEAP32[$2 + 28 >> 2];
    $5 = HEAPF32[$2 + 32 >> 2];
   }
   $3 = $8 ? $13 : $3 != $3 ? $5 : $3 < $5 ? $5 : $3;
   $13 = $3;
   $14 = $3;
   $15 = $3;
   label$23 : {
    if ((($9 | 2) & 3) == 3) {
     $8 = HEAP32[$2 + 36 >> 2];
     $5 = HEAPF32[$2 + 40 >> 2];
     break label$23;
    }
    $8 = HEAP32[$2 + 44 >> 2];
    $5 = HEAPF32[$2 + 48 >> 2];
   }
   HEAPF32[$12 >> 2] = $8 ? $13 : $5 != $5 ? $14 : $3 < $5 ? $15 : $5;
   label$27 : {
    if (!$10) {
     break label$27
    }
    FUNCTION_TABLE[HEAP32[$6 >> 2]]($4);
    if (!HEAP32[$6 + 4 >> 2]) {
     break label$27
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($4);
   }
   $1 = HEAPU8[HEAP32[$1 >> 2]];
   $4 = $1 | 2;
   $3 = HEAPF32[$11 >> 2];
   label$28 : {
    if (($4 | 0) == 3) {
     break label$28
    }
    $3 = HEAPF32[$2 + 148 >> 2];
   }
   label$30 : {
    if (($4 & 3) == 3) {
     $4 = $2 + 84 | 0;
     $8 = $2 + 88 | 0;
     break label$30;
    }
    $4 = $2 + 92 | 0;
    $8 = $2 + 96 | 0;
   }
   $3 = Math_fround($3 + Math_fround(HEAPF32[$4 >> 2] + HEAPF32[$8 >> 2]));
   label$32 : {
    if ((($1 | 2) & 3) == 3) {
     HEAPF32[$2 + 152 >> 2] = $3;
     break label$32;
    }
    HEAPF32[$2 + 156 >> 2] = $3;
   }
   $4 = 0;
  }
  HEAP32[$0 + 4 >> 2] = $6;
  HEAP32[$0 >> 2] = $4;
  global$0 = $7 + 48 | 0;
 }
 
 function core__fmt__Formatter__pad__h68a31bee2c5b56a5($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
  $3 = HEAP32[$0 + 16 >> 2];
  folding_inner0 : {
   label$1 : {
    label$2 : {
     label$3 : {
      label$4 : {
       label$5 : {
        $11 = HEAP32[$0 + 8 >> 2];
        label$8 : {
         label$9 : {
          if (($11 | 0) == 1) {
           if ($3) {
            break label$9
           }
           break label$8;
          }
          if (!$3) {
           break label$2
          }
         }
         if ($2) {
          $6 = $1 + $2 | 0;
          $7 = HEAP32[$0 + 20 >> 2] ^ -1;
          $3 = $1;
          $10 = $3;
          label$12 : {
           while (1) {
            $4 = $3 + 1 | 0;
            label$14 : {
             label$15 : {
              label$16 : {
               $5 = HEAP8[$3 | 0];
               label$17 : {
                if (($5 | 0) > -1) {
                 $5 = $5 & 255;
                 break label$17;
                }
                label$19 : {
                 if (($4 | 0) != ($6 | 0)) {
                  $8 = HEAPU8[$4 | 0] & 63;
                  $3 = $3 + 2 | 0;
                  $4 = $3;
                  break label$19;
                 }
                 $8 = 0;
                 $3 = $6;
                }
                $12 = $5 & 31;
                label$21 : {
                 label$22 : {
                  $13 = $5 & 255;
                  if ($13 >>> 0 > 223) {
                   if (($3 | 0) == ($6 | 0)) {
                    break label$22
                   }
                   $14 = HEAPU8[$3 | 0] & 63;
                   $4 = $3 + 1 | 0;
                   $5 = $4;
                   break label$21;
                  }
                  $5 = $12 << 6 | $8;
                  break label$17;
                 }
                 $14 = 0;
                 $5 = $6;
                }
                $8 = $8 << 6 | $14;
                if ($13 >>> 0 >= 240) {
                 if (($5 | 0) == ($6 | 0)) {
                  break label$16
                 }
                 $3 = $5 + 1 | 0;
                 $4 = HEAPU8[$5 | 0] & 63;
                 break label$15;
                }
                $5 = $8 | $12 << 12;
               }
               $3 = $4;
               break label$14;
              }
              $3 = $4;
              $4 = 0;
             }
             $5 = $4 | ($12 << 18 & 1835008 | $8 << 6);
             if (($5 | 0) == 1114112) {
              break label$12
             }
            }
            $7 = $7 + 1 | 0;
            if ($7) {
             $9 = ($9 - $10 | 0) + $3 | 0;
             $10 = $3;
             if (($3 | 0) != ($6 | 0)) {
              continue
             }
             break label$12;
            }
            break;
           };
           if (($5 | 0) == 1114112) {
            break label$12
           }
           label$26 : {
            label$27 : {
             if (!$9) {
              break label$27
             }
             if (($2 | 0) == ($9 | 0)) {
              break label$27
             }
             $3 = 0;
             if ($9 >>> 0 >= $2 >>> 0) {
              break label$26
             }
             if (HEAP8[$1 + $9 | 0] < -64) {
              break label$26
             }
            }
            $3 = $1;
           }
           $2 = $3 ? $9 : $2;
           $1 = $3 ? $3 : $1;
          }
          if (!$11) {
           break folding_inner0
          }
          break label$8;
         }
         $2 = 0;
         if (!$11) {
          break folding_inner0
         }
        }
        $4 = 0;
        if ($2) {
         $5 = $2;
         $3 = $1;
         while (1) {
          $4 = ((HEAPU8[$3 | 0] & 192) == 128) + $4 | 0;
          $3 = $3 + 1 | 0;
          $5 = $5 + -1 | 0;
          if ($5) {
           continue
          }
          break;
         };
        }
        $6 = HEAP32[$0 + 12 >> 2];
        if ($2 - $4 >>> 0 >= $6 >>> 0) {
         break folding_inner0
        }
        $7 = 0;
        $4 = 0;
        if ($2) {
         $5 = $2;
         $3 = $1;
         while (1) {
          $4 = ((HEAPU8[$3 | 0] & 192) == 128) + $4 | 0;
          $3 = $3 + 1 | 0;
          $5 = $5 + -1 | 0;
          if ($5) {
           continue
          }
          break;
         };
        }
        $3 = $6 + ($4 - $2 | 0) | 0;
        $4 = HEAPU8[$0 + 48 | 0];
        $4 = ($4 | 0) == 3 ? 0 : $4;
        if (!($4 & 3)) {
         break label$5
        }
        if (($4 | 0) == 2) {
         break label$4
        }
        $7 = $3;
        $3 = 0;
        break label$3;
       }
       break label$3;
      }
      $7 = $3 >>> 1;
      $3 = $3 + 1 >>> 1;
     }
     $10 = $3;
     $3 = -1;
     $4 = $0 + 4 | 0;
     $5 = $0 + 24 | 0;
     $6 = $0 + 28 | 0;
     label$32 : {
      while (1) {
       $3 = $3 + 1 | 0;
       if ($3 >>> 0 >= $7 >>> 0) {
        break label$32
       }
       if (!FUNCTION_TABLE[HEAP32[HEAP32[$6 >> 2] + 16 >> 2]](HEAP32[$5 >> 2], HEAP32[$4 >> 2])) {
        continue
       }
       break;
      };
      return 1;
     }
     $4 = HEAP32[$0 + 4 >> 2];
     $5 = $0 + 24 | 0;
     $0 = $0 + 28 | 0;
     $3 = 1;
     if (FUNCTION_TABLE[HEAP32[HEAP32[$0 >> 2] + 12 >> 2]](HEAP32[$5 >> 2], $1, $2)) {
      break label$1
     }
     $1 = HEAP32[$5 >> 2];
     $3 = -1;
     $0 = HEAP32[$0 >> 2] + 16 | 0;
     label$34 : {
      while (1) {
       $3 = $3 + 1 | 0;
       if ($3 >>> 0 >= $10 >>> 0) {
        break label$34
       }
       if (!FUNCTION_TABLE[HEAP32[$0 >> 2]]($1, $4)) {
        continue
       }
       break;
      };
      return 1;
     }
     return 0;
    }
    $3 = FUNCTION_TABLE[HEAP32[HEAP32[$0 + 28 >> 2] + 12 >> 2]](HEAP32[$0 + 24 >> 2], $1, $2) | 0;
   }
   return $3;
  }
  return FUNCTION_TABLE[HEAP32[HEAP32[$0 + 28 >> 2] + 12 >> 2]](HEAP32[$0 + 24 >> 2], $1, $2) | 0;
 }
 
 function core__ops__function__impls___impl_20core__ops__function__FnOnce_A__20for_20_mut_20F___call_once__h59f68519e42c83e0($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = Math_fround(0), $12 = 0, $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = 0, $21 = 0, $22 = 0, $23 = 0;
  $5 = global$0 - 112 | 0;
  global$0 = $5;
  $14 = HEAPF32[$3 + 148 >> 2];
  $20 = HEAP32[$2 >> 2];
  $12 = HEAP32[$1 >> 2];
  $11 = HEAPF32[$12 + 4 >> 2];
  $13 = HEAP32[$12 >> 2];
  label$1 : {
   label$2 : {
    $2 = HEAP32[$3 + 144 >> 2];
    if (($2 | 0) != 3) {
     if (($2 | 0) != 2) {
      break label$2
     }
     $2 = 0;
     break label$1;
    }
    $14 = Math_fround($14 * $11);
    $2 = $13;
    break label$1;
   }
   $2 = 1;
  }
  $21 = $2;
  $15 = HEAPF32[$12 + 12 >> 2];
  $2 = HEAP32[$12 + 8 >> 2];
  $16 = HEAPF32[$3 + 156 >> 2];
  label$4 : {
   label$5 : {
    $7 = HEAP32[$3 + 152 >> 2];
    if (($7 | 0) != 3) {
     if (($7 | 0) != 2) {
      break label$5
     }
     $7 = 0;
     break label$4;
    }
    $16 = Math_fround($16 * $15);
    $7 = $2;
    break label$4;
   }
   $7 = 1;
  }
  $22 = $7;
  $17 = HEAPF32[$3 + 164 >> 2];
  label$7 : {
   label$8 : {
    $7 = HEAP32[$3 + 160 >> 2];
    if (($7 | 0) != 3) {
     if (($7 | 0) != 2) {
      break label$8
     }
     $7 = 0;
     break label$7;
    }
    $17 = Math_fround($11 * $17);
    $7 = $13;
    break label$7;
   }
   $7 = 1;
  }
  $23 = $7;
  $18 = HEAPF32[$3 + 172 >> 2];
  label$10 : {
   label$11 : {
    $7 = HEAP32[$3 + 168 >> 2];
    if (($7 | 0) != 3) {
     if (($7 | 0) != 2) {
      break label$11
     }
     $7 = 0;
     break label$10;
    }
    $18 = Math_fround($15 * $18);
    $7 = $2;
    break label$10;
   }
   $7 = 1;
  }
  $19 = HEAPF32[$3 + 180 >> 2];
  label$13 : {
   label$14 : {
    $4 = HEAP32[$3 + 176 >> 2];
    if (($4 | 0) != 3) {
     if (($4 | 0) != 2) {
      break label$14
     }
     $13 = 0;
     break label$13;
    }
    $19 = Math_fround($11 * $19);
    break label$13;
   }
   $13 = 1;
  }
  $11 = HEAPF32[$3 + 188 >> 2];
  label$16 : {
   label$17 : {
    $4 = HEAP32[$3 + 184 >> 2];
    if (($4 | 0) != 3) {
     if (($4 | 0) != 2) {
      break label$17
     }
     $2 = 0;
     break label$16;
    }
    $11 = Math_fround($15 * $11);
    break label$16;
   }
   $2 = 1;
  }
  $6 = $3 + 24 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  $8 = $5 + 104 | 0;
  HEAP32[$8 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$8 + 4 >> 2] = $4;
  $6 = $3 + 16 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  $9 = $5 + 96 | 0;
  HEAP32[$9 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$9 + 4 >> 2] = $4;
  $6 = $3 + 8 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  $10 = $5 + 88 | 0;
  HEAP32[$10 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$10 + 4 >> 2] = $4;
  $4 = HEAP32[$3 + 4 >> 2];
  HEAP32[$5 + 80 >> 2] = HEAP32[$3 >> 2];
  HEAP32[$5 + 84 >> 2] = $4;
  stretch__geometry__Rect_T___map__hf8927dbb844aafea($5, $5 + 80 | 0, $12);
  $6 = $3 + 56 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  HEAP32[$8 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$8 + 4 >> 2] = $4;
  $6 = $3 + 48 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  HEAP32[$9 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$9 + 4 >> 2] = $4;
  $6 = $3 + 40 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  HEAP32[$10 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$10 + 4 >> 2] = $4;
  $4 = HEAP32[$3 + 36 >> 2];
  HEAP32[$5 + 80 >> 2] = HEAP32[$3 + 32 >> 2];
  HEAP32[$5 + 84 >> 2] = $4;
  stretch__geometry__Rect_T___map__h7b4730a6dda3311f($5 + 32 | 0, $5 + 80 | 0, HEAP32[$1 >> 2]);
  $6 = $3 + 88 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  HEAP32[$8 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$8 + 4 >> 2] = $4;
  $6 = $3 + 80 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  HEAP32[$9 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$9 + 4 >> 2] = $4;
  $6 = $3 + 72 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  HEAP32[$10 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$10 + 4 >> 2] = $4;
  $4 = HEAP32[$3 + 68 >> 2];
  HEAP32[$5 + 80 >> 2] = HEAP32[$3 + 64 >> 2];
  HEAP32[$5 + 84 >> 2] = $4;
  stretch__geometry__Rect_T___map__h7b4730a6dda3311f($5 + 48 | 0, $5 + 80 | 0, HEAP32[$1 >> 2]);
  $6 = $3 + 120 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  HEAP32[$8 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$8 + 4 >> 2] = $4;
  $6 = $3 + 112 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  HEAP32[$9 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$9 + 4 >> 2] = $4;
  $6 = $3 + 104 | 0;
  $4 = HEAP32[$6 + 4 >> 2];
  HEAP32[$10 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$10 + 4 >> 2] = $4;
  $4 = HEAP32[$3 + 100 >> 2];
  HEAP32[$5 + 80 >> 2] = HEAP32[$3 + 96 >> 2];
  HEAP32[$5 + 84 >> 2] = $4;
  stretch__geometry__Rect_T___map__h7b4730a6dda3311f($5 - -64 | 0, $5 + 80 | 0, HEAP32[$1 >> 2]);
  HEAPF32[$0 + 48 >> 2] = $11;
  HEAP32[$0 + 44 >> 2] = $2;
  HEAPF32[$0 + 40 >> 2] = $19;
  HEAP32[$0 + 36 >> 2] = $13;
  HEAPF32[$0 + 32 >> 2] = $18;
  HEAP32[$0 + 28 >> 2] = $7;
  HEAPF32[$0 + 24 >> 2] = $17;
  HEAP32[$0 + 20 >> 2] = $23;
  HEAPF32[$0 + 16 >> 2] = $16;
  HEAP32[$0 + 12 >> 2] = $22;
  HEAPF32[$0 + 8 >> 2] = $14;
  HEAP32[$0 + 4 >> 2] = $21;
  HEAP32[$0 >> 2] = $20;
  $1 = HEAP32[$5 + 4 >> 2];
  HEAP32[$0 + 52 >> 2] = HEAP32[$5 >> 2];
  HEAP32[$0 + 56 >> 2] = $1;
  $2 = $5 + 8 | 0;
  $1 = HEAP32[$2 + 4 >> 2];
  $3 = $0 + 60 | 0;
  HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $2 = $5 + 16 | 0;
  $1 = HEAP32[$2 + 4 >> 2];
  $3 = $0 + 68 | 0;
  HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $2 = $5 + 24 | 0;
  $1 = HEAP32[$2 + 4 >> 2];
  $3 = $0 + 76 | 0;
  HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $2 = $5 + 40 | 0;
  $1 = HEAP32[$2 + 4 >> 2];
  $3 = $0 + 92 | 0;
  HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $1 = HEAP32[$5 + 36 >> 2];
  HEAP32[$0 + 84 >> 2] = HEAP32[$5 + 32 >> 2];
  HEAP32[$0 + 88 >> 2] = $1;
  $2 = $5 + 56 | 0;
  $1 = HEAP32[$2 + 4 >> 2];
  $3 = $0 + 108 | 0;
  HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $1 = HEAP32[$5 + 52 >> 2];
  HEAP32[$0 + 100 >> 2] = HEAP32[$5 + 48 >> 2];
  HEAP32[$0 + 104 >> 2] = $1;
  $2 = $5 + 72 | 0;
  $1 = HEAP32[$2 + 4 >> 2];
  $3 = $0 + 124 | 0;
  HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $1 = HEAP32[$5 + 68 >> 2];
  HEAP32[$0 + 116 >> 2] = HEAP32[$5 + 64 >> 2];
  HEAP32[$0 + 120 >> 2] = $1;
  memset($0 + 132 | 0, 0, 57);
  global$0 = $5 + 112 | 0;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $1 = $0 + -8 | 0;
  $3 = HEAP32[$0 + -4 >> 2];
  $0 = $3 & -8;
  $2 = $1 + $0 | 0;
  label$1 : {
   label$2 : {
    if ($3 & 1) {
     break label$2
    }
    if (!($3 & 3)) {
     break label$1
    }
    $3 = HEAP32[$1 >> 2];
    $0 = $3 + $0 | 0;
    label$3 : {
     label$4 : {
      $1 = $1 - $3 | 0;
      if (($1 | 0) != HEAP32[266661]) {
       if ($3 >>> 0 >= 256) {
        break label$4
       }
       $4 = HEAP32[$1 + 8 >> 2];
       $5 = HEAP32[$1 + 12 >> 2];
       if (($4 | 0) == ($5 | 0)) {
        break label$3
       }
       HEAP32[$4 + 12 >> 2] = $5;
       HEAP32[$5 + 8 >> 2] = $4;
       break label$2;
      }
      if ((HEAP32[$2 + 4 >> 2] & 3) != 3) {
       break label$2
      }
      HEAP32[266659] = $0;
      $2 = $2 + 4 | 0;
      HEAP32[$2 >> 2] = HEAP32[$2 >> 2] & -2;
      HEAP32[$1 + 4 >> 2] = $0 | 1;
      HEAP32[$0 + $1 >> 2] = $0;
      return;
     }
     dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__h173f6e2d56218081($1);
     break label$2;
    }
    (wasm2js_i32$0 = 1066236, wasm2js_i32$1 = HEAP32[266559] & __wasm_rotl_i32($3 >>> 3)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
   }
   label$6 : {
    label$7 : {
     label$8 : {
      label$9 : {
       label$10 : {
        label$11 : {
         label$12 : {
          label$13 : {
           $3 = HEAP32[$2 + 4 >> 2];
           if (!($3 & 2)) {
            if (($2 | 0) == HEAP32[266662]) {
             break label$13
            }
            if (($2 | 0) == HEAP32[266661]) {
             break label$12
            }
            $4 = $3 & -8;
            $0 = $4 + $0 | 0;
            if ($4 >>> 0 >= 256) {
             break label$11
            }
            $4 = HEAP32[$2 + 12 >> 2];
            $2 = HEAP32[$2 + 8 >> 2];
            if (($4 | 0) == ($2 | 0)) {
             break label$10
            }
            HEAP32[$2 + 12 >> 2] = $4;
            HEAP32[$4 + 8 >> 2] = $2;
            break label$9;
           }
           HEAP32[$2 + 4 >> 2] = $3 & -2;
           HEAP32[$1 + 4 >> 2] = $0 | 1;
           HEAP32[$0 + $1 >> 2] = $0;
           break label$6;
          }
          HEAP32[266662] = $1;
          $0 = HEAP32[266660] + $0 | 0;
          HEAP32[266660] = $0;
          HEAP32[$1 + 4 >> 2] = $0 | 1;
          if (($1 | 0) == HEAP32[266661]) {
           HEAP32[266659] = 0;
           HEAP32[266661] = 0;
          }
          $2 = HEAP32[266669];
          if ($2 >>> 0 >= $0 >>> 0) {
           break label$1
          }
          $0 = HEAP32[266662];
          if (!$0) {
           break label$1
          }
          $3 = HEAP32[266660];
          label$16 : {
           if ($3 >>> 0 < 41) {
            break label$16
           }
           $1 = 1066660;
           while (1) {
            $4 = HEAP32[$1 >> 2];
            if ($4 + HEAP32[$1 + 4 >> 2] >>> 0 > $0 >>> 0 ? $4 >>> 0 <= $0 >>> 0 : 0) {
             break label$16
            }
            $1 = HEAP32[$1 + 8 >> 2];
            if ($1) {
             continue
            }
            break;
           };
          }
          $0 = HEAP32[266667];
          if (!$0) {
           break label$8
          }
          $1 = 0;
          while (1) {
           $1 = $1 + 1 | 0;
           $0 = HEAP32[$0 + 8 >> 2];
           if ($0) {
            continue
           }
           break;
          };
          $0 = $1 >>> 0 > 4095 ? $1 : 4095;
          break label$7;
         }
         HEAP32[266661] = $1;
         $0 = HEAP32[266659] + $0 | 0;
         HEAP32[266659] = $0;
         HEAP32[$1 + 4 >> 2] = $0 | 1;
         HEAP32[$0 + $1 >> 2] = $0;
         return;
        }
        dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__h173f6e2d56218081($2);
        break label$9;
       }
       (wasm2js_i32$0 = 1066236, wasm2js_i32$1 = HEAP32[266559] & __wasm_rotl_i32($3 >>> 3)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
      }
      HEAP32[$1 + 4 >> 2] = $0 | 1;
      HEAP32[$0 + $1 >> 2] = $0;
      if (HEAP32[266661] != ($1 | 0)) {
       break label$6
      }
      HEAP32[266659] = $0;
      break label$1;
     }
     $0 = 4095;
    }
    HEAP32[266671] = $0;
    if ($3 >>> 0 <= $2 >>> 0) {
     break label$1
    }
    HEAP32[266669] = -1;
    return;
   }
   label$20 : {
    label$21 : {
     label$22 : {
      label$23 : {
       if ($0 >>> 0 < 256) {
        $2 = $0 >>> 3;
        $0 = ($2 << 3) + 1066244 | 0;
        $3 = HEAP32[266559];
        $2 = 1 << ($2 & 31);
        if (!($3 & $2)) {
         break label$23
        }
        $2 = HEAP32[$0 + 8 >> 2];
        break label$22;
       }
       dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h2b5800089452f7a4($1, $0);
       $0 = HEAP32[266671] + -1 | 0;
       HEAP32[266671] = $0;
       if ($0) {
        break label$1
       }
       $0 = HEAP32[266667];
       if (!$0) {
        break label$21
       }
       $1 = 0;
       while (1) {
        $1 = $1 + 1 | 0;
        $0 = HEAP32[$0 + 8 >> 2];
        if ($0) {
         continue
        }
        break;
       };
       $0 = $1 >>> 0 > 4095 ? $1 : 4095;
       break label$20;
      }
      HEAP32[266559] = $2 | $3;
      $2 = $0;
     }
     HEAP32[$0 + 8 >> 2] = $1;
     HEAP32[$2 + 12 >> 2] = $1;
     HEAP32[$1 + 12 >> 2] = $0;
     HEAP32[$1 + 8 >> 2] = $2;
     return;
    }
    $0 = 4095;
   }
   HEAP32[266671] = $0;
  }
 }
 
 function hashbrown__raw__RawTable_T___rehash_in_place__h29ab772ddb92169d($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
  $8 = global$0 - 32 | 0;
  global$0 = $8;
  HEAP32[$8 + 4 >> 2] = $1;
  $4 = HEAP32[$0 >> 2] + 1 | 0;
  $1 = 0;
  while (1) {
   label$1 : {
    label$3 : {
     if ($2 & 1) {
      $2 = $1 + 3 | 0;
      $11 = $2 >>> 0 < $1 >>> 0;
      if ($11) {
       break label$1
      }
      $3 = $2 >>> 0 < $4 >>> 0;
      if (!$3) {
       break label$1
      }
      $1 = $3 ? ($11 ? $4 : $1 + 4 | 0) : $4;
      break label$3;
     }
     if ($1 >>> 0 >= $4 >>> 0) {
      break label$1
     }
     $2 = $1;
     $1 = $1 + 1 | 0;
    }
    $2 = HEAP32[$0 + 4 >> 2] + $2 | 0;
    $3 = HEAP32[$2 >> 2];
    HEAP32[$2 >> 2] = (($3 >>> 7 ^ -1) & 16843009) + ($3 | 2139062143);
    $2 = 1;
    continue;
   }
   break;
  };
  $3 = HEAP32[$0 + 4 >> 2];
  $1 = HEAP32[$0 >> 2] + 1 | 0;
  label$5 : {
   if ($1 >>> 0 < 4) {
    memmove($3 + 4 | 0, $3, $1);
    break label$5;
   }
   $2 = $1 + $3 | 0;
   $1 = HEAPU8[$3 | 0] | HEAPU8[$3 + 1 | 0] << 8 | (HEAPU8[$3 + 2 | 0] << 16 | HEAPU8[$3 + 3 | 0] << 24);
   HEAP8[$2 | 0] = $1;
   HEAP8[$2 + 1 | 0] = $1 >>> 8;
   HEAP8[$2 + 2 | 0] = $1 >>> 16;
   HEAP8[$2 + 3 | 0] = $1 >>> 24;
  }
  label$7 : {
   label$8 : {
    label$9 : {
     $16 = HEAP32[$0 >> 2] + 1 | 0;
     if ($16) {
      $14 = $0 + 4 | 0;
      $15 = $0 + 8 | 0;
      $11 = 0;
      break label$9;
     }
     $1 = -1;
     break label$8;
    }
    while (1) {
     $9 = $11;
     $11 = $9 + 1 | 0;
     label$12 : {
      if (HEAPU8[HEAP32[$14 >> 2] + $9 | 0] != 128) {
       break label$12
      }
      label$13 : {
       while (1) {
        $5 = HEAP32[$15 >> 2] + Math_imul($9, 20) | 0;
        $4 = hashbrown__map__HashMap_K_2cV_2cS___insert___7b_7bclosure_7d_7d__h8e0fa770beed92d3($8 + 4 | 0, $5);
        $6 = HEAP32[$14 >> 2];
        $7 = HEAP32[$0 >> 2];
        $1 = 0;
        $2 = $4;
        while (1) {
         $1 = $1 + 4 | 0;
         $10 = $2 & $7;
         $2 = $1 + $10 | 0;
         $3 = $6 + $10 | 0;
         $3 = (HEAPU8[$3 | 0] | HEAPU8[$3 + 1 | 0] << 8 | (HEAPU8[$3 + 2 | 0] << 16 | HEAPU8[$3 + 3 | 0] << 24)) & -2139062144;
         if (!$3) {
          continue
         }
         break;
        };
        $2 = $6;
        $1 = $7;
        if ($3) {
         $3 = 31 - Math_clz32($3 + -1 ^ $3) | 0
        } else {
         $3 = 32
        }
        $1 = $1 & $10 + ($3 >>> 3);
        if (HEAP8[$2 + $1 | 0] >= 0) {
         $1 = HEAP32[$6 >> 2] & -2139062144;
         $2 = 31 - Math_clz32($1 ^ $1 + -1) | 0;
         __inlined_func$__wasm_ctz_i320 : {
          if ($1) {
           break __inlined_func$__wasm_ctz_i320
          }
          $2 = 32;
         }
         $1 = $2 >>> 3;
        }
        $2 = $4 & $7;
        if (($7 & ($1 - $2 ^ $9 - $2)) >>> 0 >= 4) {
         $2 = $1 + $6 | 0;
         $3 = HEAPU8[$2 | 0];
         $10 = $2;
         $2 = $4 >>> 25;
         HEAP8[$10 | 0] = $2;
         HEAP8[($6 + ($7 & $1 + -4) | 0) + 4 | 0] = $2;
         if (($3 | 0) == 255) {
          break label$13
         }
         $3 = HEAP32[$15 >> 2] + Math_imul($1, 20) | 0;
         $6 = HEAP32[$3 >> 2];
         $7 = HEAP32[$3 + 4 >> 2];
         $1 = HEAP32[$5 + 4 >> 2];
         HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
         HEAP32[$3 + 4 >> 2] = $1;
         $1 = $3 + 16 | 0;
         $10 = HEAP32[$1 >> 2];
         $2 = $5 + 16 | 0;
         HEAP32[$1 >> 2] = HEAP32[$2 >> 2];
         $12 = $3 + 8 | 0;
         $4 = HEAP32[$12 >> 2];
         $3 = HEAP32[$12 + 4 >> 2];
         $13 = $5 + 8 | 0;
         $1 = HEAP32[$13 + 4 >> 2];
         HEAP32[$12 >> 2] = HEAP32[$13 >> 2];
         HEAP32[$12 + 4 >> 2] = $1;
         HEAP32[$8 + 24 >> 2] = $10;
         $1 = $8 + 16 | 0;
         HEAP32[$1 >> 2] = $4;
         HEAP32[$1 + 4 >> 2] = $3;
         HEAP32[$5 >> 2] = $6;
         HEAP32[$5 + 4 >> 2] = $7;
         HEAP32[$2 >> 2] = $10;
         HEAP32[$13 >> 2] = $4;
         HEAP32[$13 + 4 >> 2] = $3;
         HEAP32[$8 + 8 >> 2] = $6;
         HEAP32[$8 + 12 >> 2] = $7;
         continue;
        }
        break;
       };
       $1 = $4 >>> 25;
       HEAP8[$6 + $9 | 0] = $1;
       HEAP8[($6 + ($7 & $9 + -4) | 0) + 4 | 0] = $1;
       break label$12;
      }
      $2 = HEAP32[$14 >> 2];
      HEAP8[$2 + $9 | 0] = 255;
      HEAP8[($2 + (HEAP32[$0 >> 2] & $9 + -4) | 0) + 4 | 0] = 255;
      $2 = HEAP32[$15 >> 2] + Math_imul($1, 20) | 0;
      $1 = HEAP32[$5 + 4 >> 2];
      HEAP32[$2 >> 2] = HEAP32[$5 >> 2];
      HEAP32[$2 + 4 >> 2] = $1;
      HEAP32[$2 + 16 >> 2] = HEAP32[$5 + 16 >> 2];
      $3 = $2 + 8 | 0;
      $2 = $5 + 8 | 0;
      $1 = HEAP32[$2 + 4 >> 2];
      HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
      HEAP32[$3 + 4 >> 2] = $1;
     }
     if (($11 | 0) != ($16 | 0)) {
      continue
     }
     break;
    };
    $1 = HEAP32[$0 >> 2];
    if ($1 >>> 0 < 8) {
     break label$7
    }
   }
   $1 = Math_imul($1 + 1 >>> 3, 7);
  }
  HEAP32[$0 + 12 >> 2] = $1 - HEAP32[$0 + 16 >> 2];
  global$0 = $8 + 32 | 0;
 }
 
 function hashbrown__raw__RawTable_T___rehash_in_place__hfbd64bd86085452e($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
  $8 = global$0 - 32 | 0;
  global$0 = $8;
  HEAP32[$8 + 4 >> 2] = $1;
  $4 = HEAP32[$0 >> 2] + 1 | 0;
  $1 = 0;
  while (1) {
   label$1 : {
    label$3 : {
     if ($2 & 1) {
      $2 = $1 + 3 | 0;
      $11 = $2 >>> 0 < $1 >>> 0;
      if ($11) {
       break label$1
      }
      $3 = $2 >>> 0 < $4 >>> 0;
      if (!$3) {
       break label$1
      }
      $1 = $3 ? ($11 ? $4 : $1 + 4 | 0) : $4;
      break label$3;
     }
     if ($1 >>> 0 >= $4 >>> 0) {
      break label$1
     }
     $2 = $1;
     $1 = $1 + 1 | 0;
    }
    $2 = HEAP32[$0 + 4 >> 2] + $2 | 0;
    $3 = HEAP32[$2 >> 2];
    HEAP32[$2 >> 2] = (($3 >>> 7 ^ -1) & 16843009) + ($3 | 2139062143);
    $2 = 1;
    continue;
   }
   break;
  };
  $3 = HEAP32[$0 + 4 >> 2];
  $1 = HEAP32[$0 >> 2] + 1 | 0;
  label$5 : {
   if ($1 >>> 0 < 4) {
    memmove($3 + 4 | 0, $3, $1);
    break label$5;
   }
   $2 = $1 + $3 | 0;
   $1 = HEAPU8[$3 | 0] | HEAPU8[$3 + 1 | 0] << 8 | (HEAPU8[$3 + 2 | 0] << 16 | HEAPU8[$3 + 3 | 0] << 24);
   HEAP8[$2 | 0] = $1;
   HEAP8[$2 + 1 | 0] = $1 >>> 8;
   HEAP8[$2 + 2 | 0] = $1 >>> 16;
   HEAP8[$2 + 3 | 0] = $1 >>> 24;
  }
  label$7 : {
   label$8 : {
    label$9 : {
     $16 = HEAP32[$0 >> 2] + 1 | 0;
     if ($16) {
      $14 = $0 + 4 | 0;
      $15 = $0 + 8 | 0;
      $11 = 0;
      break label$9;
     }
     $1 = -1;
     break label$8;
    }
    while (1) {
     $9 = $11;
     $11 = $9 + 1 | 0;
     label$12 : {
      if (HEAPU8[HEAP32[$14 >> 2] + $9 | 0] != 128) {
       break label$12
      }
      label$13 : {
       while (1) {
        $5 = HEAP32[$15 >> 2] + Math_imul($9, 20) | 0;
        $4 = hashbrown__map__HashMap_K_2cV_2cS___insert___7b_7bclosure_7d_7d__h7ff258d5db5557c5($8 + 4 | 0, $5);
        $6 = HEAP32[$14 >> 2];
        $7 = HEAP32[$0 >> 2];
        $1 = 0;
        $2 = $4;
        while (1) {
         $1 = $1 + 4 | 0;
         $10 = $2 & $7;
         $2 = $1 + $10 | 0;
         $3 = $6 + $10 | 0;
         $3 = (HEAPU8[$3 | 0] | HEAPU8[$3 + 1 | 0] << 8 | (HEAPU8[$3 + 2 | 0] << 16 | HEAPU8[$3 + 3 | 0] << 24)) & -2139062144;
         if (!$3) {
          continue
         }
         break;
        };
        $2 = $6;
        $1 = $7;
        if ($3) {
         $3 = 31 - Math_clz32($3 + -1 ^ $3) | 0
        } else {
         $3 = 32
        }
        $1 = $1 & $10 + ($3 >>> 3);
        if (HEAP8[$2 + $1 | 0] >= 0) {
         $1 = HEAP32[$6 >> 2] & -2139062144;
         $2 = 31 - Math_clz32($1 ^ $1 + -1) | 0;
         __inlined_func$__wasm_ctz_i320 : {
          if ($1) {
           break __inlined_func$__wasm_ctz_i320
          }
          $2 = 32;
         }
         $1 = $2 >>> 3;
        }
        $2 = $4 & $7;
        if (($7 & ($1 - $2 ^ $9 - $2)) >>> 0 >= 4) {
         $2 = $1 + $6 | 0;
         $3 = HEAPU8[$2 | 0];
         $10 = $2;
         $2 = $4 >>> 25;
         HEAP8[$10 | 0] = $2;
         HEAP8[($6 + ($7 & $1 + -4) | 0) + 4 | 0] = $2;
         if (($3 | 0) == 255) {
          break label$13
         }
         $3 = HEAP32[$15 >> 2] + Math_imul($1, 20) | 0;
         $6 = HEAP32[$3 >> 2];
         $7 = HEAP32[$3 + 4 >> 2];
         $1 = HEAP32[$5 + 4 >> 2];
         HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
         HEAP32[$3 + 4 >> 2] = $1;
         $1 = $3 + 16 | 0;
         $10 = HEAP32[$1 >> 2];
         $2 = $5 + 16 | 0;
         HEAP32[$1 >> 2] = HEAP32[$2 >> 2];
         $12 = $3 + 8 | 0;
         $4 = HEAP32[$12 >> 2];
         $3 = HEAP32[$12 + 4 >> 2];
         $13 = $5 + 8 | 0;
         $1 = HEAP32[$13 + 4 >> 2];
         HEAP32[$12 >> 2] = HEAP32[$13 >> 2];
         HEAP32[$12 + 4 >> 2] = $1;
         HEAP32[$8 + 24 >> 2] = $10;
         $1 = $8 + 16 | 0;
         HEAP32[$1 >> 2] = $4;
         HEAP32[$1 + 4 >> 2] = $3;
         HEAP32[$5 >> 2] = $6;
         HEAP32[$5 + 4 >> 2] = $7;
         HEAP32[$2 >> 2] = $10;
         HEAP32[$13 >> 2] = $4;
         HEAP32[$13 + 4 >> 2] = $3;
         HEAP32[$8 + 8 >> 2] = $6;
         HEAP32[$8 + 12 >> 2] = $7;
         continue;
        }
        break;
       };
       $1 = $4 >>> 25;
       HEAP8[$6 + $9 | 0] = $1;
       HEAP8[($6 + ($7 & $9 + -4) | 0) + 4 | 0] = $1;
       break label$12;
      }
      $2 = HEAP32[$14 >> 2];
      HEAP8[$2 + $9 | 0] = 255;
      HEAP8[($2 + (HEAP32[$0 >> 2] & $9 + -4) | 0) + 4 | 0] = 255;
      $2 = HEAP32[$15 >> 2] + Math_imul($1, 20) | 0;
      $1 = HEAP32[$5 + 4 >> 2];
      HEAP32[$2 >> 2] = HEAP32[$5 >> 2];
      HEAP32[$2 + 4 >> 2] = $1;
      HEAP32[$2 + 16 >> 2] = HEAP32[$5 + 16 >> 2];
      $3 = $2 + 8 | 0;
      $2 = $5 + 8 | 0;
      $1 = HEAP32[$2 + 4 >> 2];
      HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
      HEAP32[$3 + 4 >> 2] = $1;
     }
     if (($11 | 0) != ($16 | 0)) {
      continue
     }
     break;
    };
    $1 = HEAP32[$0 >> 2];
    if ($1 >>> 0 < 8) {
     break label$7
    }
   }
   $1 = Math_imul($1 + 1 >>> 3, 7);
  }
  HEAP32[$0 + 12 >> 2] = $1 - HEAP32[$0 + 16 >> 2];
  global$0 = $8 + 32 | 0;
 }
 
 function $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__he17f60e95f07a9cc($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
  $12 = global$0 - 80 | 0;
  global$0 = $12;
  $20 = HEAP32[$1 + 8 >> 2];
  $25 = HEAP32[$1 + 4 >> 2];
  label$1 : {
   $14 = HEAP32[$0 >> 2];
   $23 = HEAP32[$0 + 4 >> 2];
   if (($14 | 0) != ($23 | 0)) {
    $26 = HEAP32[$0 + 8 >> 2];
    $15 = $12 + 56 | 0;
    $16 = HEAP32[$1 >> 2];
    $17 = $12 + 48 | 0;
    $18 = $12 + 40 | 0;
    $19 = $12 + 32 | 0;
    while (1) {
     $13 = HEAP32[$26 >> 2];
     $0 = $15 + 8 | 0;
     HEAP32[$0 >> 2] = 0;
     HEAP32[$0 + 4 >> 2] = 0;
     HEAP32[$15 >> 2] = 0;
     HEAP32[$15 + 4 >> 2] = 0;
     $1 = $13 + 48 | 0;
     $2 = HEAP32[$1 + 4 >> 2];
     $0 = $12 + 16 | 0;
     $1 = HEAP32[$1 >> 2];
     HEAP32[$0 >> 2] = $1;
     HEAP32[$0 + 4 >> 2] = $2;
     HEAP32[$17 >> 2] = $1 ^ 2037671283;
     HEAP32[$17 + 4 >> 2] = $2 ^ 1952801890;
     HEAP32[$18 >> 2] = $1 ^ 1852075885;
     HEAP32[$18 + 4 >> 2] = $2 ^ 1685025377;
     $2 = HEAP32[$13 + 44 >> 2];
     $1 = HEAP32[$13 + 40 >> 2];
     HEAP32[$19 >> 2] = $1 ^ 1852142177;
     HEAP32[$19 + 4 >> 2] = $2 ^ 1819895653;
     $8 = $12 + 24 | 0;
     $0 = $8;
     HEAP32[$0 >> 2] = $1 ^ 1886610805;
     HEAP32[$0 + 4 >> 2] = $2 ^ 1936682341;
     HEAP32[$12 + 8 >> 2] = $1;
     HEAP32[$12 + 12 >> 2] = $2;
     HEAP32[$12 + 76 >> 2] = HEAP32[$14 >> 2];
     $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($12 + 8 | 0, $12 + 76 | 0);
     $11 = HEAP32[$15 + 4 >> 2] | HEAP32[$12 - -64 >> 2] << 24;
     $1 = $11 ^ HEAP32[$17 + 4 >> 2];
     $7 = HEAP32[$15 >> 2];
     $4 = $7 ^ HEAP32[$17 >> 2];
     $2 = __wasm_rotl_i64($4, $1, 16);
     $3 = i64toi32_i32$HIGH_BITS;
     $0 = HEAP32[$19 + 4 >> 2] + $1 | 0;
     $1 = HEAP32[$19 >> 2];
     $4 = $4 + $1 | 0;
     if ($4 >>> 0 < $1 >>> 0) {
      $0 = $0 + 1 | 0
     }
     $24 = $2 ^ $4;
     $2 = $0;
     $5 = $3 ^ $0;
     $6 = $5;
     $9 = HEAP32[$18 + 4 >> 2];
     $0 = $9 + HEAP32[$8 + 4 >> 2] | 0;
     $10 = HEAP32[$18 >> 2];
     $1 = HEAP32[$8 >> 2];
     $21 = $10 + $1 | 0;
     if ($21 >>> 0 < $1 >>> 0) {
      $0 = $0 + 1 | 0
     }
     $3 = __wasm_rotl_i64($21, $0, 32);
     $22 = $3 + $24 | 0;
     $1 = i64toi32_i32$HIGH_BITS + $5 | 0;
     $8 = $22 >>> 0 < $3 >>> 0 ? $1 + 1 | 0 : $1;
     $5 = $11 ^ $8;
     $1 = __wasm_rotl_i64($10, $9, 13) ^ $21;
     $3 = $0 ^ i64toi32_i32$HIGH_BITS;
     $0 = $2 + $3 | 0;
     $2 = $1 + $4 | 0;
     if ($2 >>> 0 < $1 >>> 0) {
      $0 = $0 + 1 | 0
     }
     $3 = __wasm_rotl_i64($1, $3, 17) ^ $2;
     $1 = $0;
     $4 = $1 ^ i64toi32_i32$HIGH_BITS;
     $0 = $5 + $4 | 0;
     $5 = $3 + ($7 ^ $22) | 0;
     if ($5 >>> 0 < $3 >>> 0) {
      $0 = $0 + 1 | 0
     }
     $9 = __wasm_rotl_i64($3, $4, 13) ^ $5;
     $3 = $0;
     $0 = $0 ^ i64toi32_i32$HIGH_BITS;
     $10 = $0;
     $11 = __wasm_rotl_i64($24, $6, 21) ^ $22;
     $7 = $8 ^ i64toi32_i32$HIGH_BITS;
     $2 = __wasm_rotl_i64($2, $1, 32) ^ 255;
     $1 = $2 + $11 | 0;
     $0 = i64toi32_i32$HIGH_BITS + $7 | 0;
     $6 = $1 >>> 0 < $2 >>> 0 ? $0 + 1 | 0 : $0;
     $0 = $10 + $6 | 0;
     $4 = $1 + $9 | 0;
     if ($4 >>> 0 < $1 >>> 0) {
      $0 = $0 + 1 | 0
     }
     $9 = __wasm_rotl_i64($9, $10, 17) ^ $4;
     $2 = $0;
     $0 = $0 ^ i64toi32_i32$HIGH_BITS;
     $8 = __wasm_rotl_i64($9, $0, 13);
     $10 = i64toi32_i32$HIGH_BITS;
     $11 = __wasm_rotl_i64($11, $7, 16) ^ $1;
     $7 = $6 ^ i64toi32_i32$HIGH_BITS;
     $3 = __wasm_rotl_i64($5, $3, 32);
     $1 = $3 + $11 | 0;
     $5 = $0;
     $0 = i64toi32_i32$HIGH_BITS + $7 | 0;
     $6 = $1 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
     $0 = $5 + $6 | 0;
     $5 = $1 + $9 | 0;
     if ($5 >>> 0 < $1 >>> 0) {
      $0 = $0 + 1 | 0
     }
     $9 = $8 ^ $5;
     $3 = $0;
     $0 = $0 ^ $10;
     $10 = __wasm_rotl_i64($9, $0, 17);
     $8 = i64toi32_i32$HIGH_BITS;
     $11 = __wasm_rotl_i64($11, $7, 21) ^ $1;
     $7 = $6 ^ i64toi32_i32$HIGH_BITS;
     $2 = __wasm_rotl_i64($4, $2, 32);
     $1 = $2 + $11 | 0;
     $4 = $0;
     $0 = i64toi32_i32$HIGH_BITS + $7 | 0;
     $6 = $1 >>> 0 < $2 >>> 0 ? $0 + 1 | 0 : $0;
     $0 = $4 + $6 | 0;
     $4 = $1 + $9 | 0;
     if ($4 >>> 0 < $1 >>> 0) {
      $0 = $0 + 1 | 0
     }
     $10 = $4 ^ $10;
     $2 = $0;
     $0 = $0 ^ $8;
     $9 = __wasm_rotl_i64($10, $0, 13);
     $8 = i64toi32_i32$HIGH_BITS;
     $7 = __wasm_rotl_i64($11, $7, 16) ^ $1;
     $6 = $6 ^ i64toi32_i32$HIGH_BITS;
     $3 = __wasm_rotl_i64($5, $3, 32);
     $1 = $3 + $7 | 0;
     $5 = $0;
     $0 = i64toi32_i32$HIGH_BITS + $6 | 0;
     $3 = $1 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
     $0 = $5 + $3 | 0;
     $10 = $1 + $10 | 0;
     if ($10 >>> 0 < $1 >>> 0) {
      $0 = $0 + 1 | 0
     }
     $0 = $0 ^ $8;
     $5 = $0;
     $6 = __wasm_rotl_i64($7, $6, 21) ^ $1;
     $8 = $3 ^ i64toi32_i32$HIGH_BITS;
     $2 = __wasm_rotl_i64($4, $2, 32);
     $1 = $2 + $6 | 0;
     $0 = i64toi32_i32$HIGH_BITS + $8 | 0;
     $3 = $1 >>> 0 < $2 >>> 0 ? $0 + 1 | 0 : $0;
     $0 = $5 + $3 | 0;
     $4 = $9 ^ $10;
     $2 = $1 + $4 | 0;
     if ($2 >>> 0 < $1 >>> 0) {
      $0 = $0 + 1 | 0
     }
     $1 = $0 ^ (__wasm_rotl_i64(__wasm_rotl_i64($6, $8, 16) ^ $1, $3 ^ i64toi32_i32$HIGH_BITS, 21) ^ $2 ^ __wasm_rotl_i64($4, $5, 17));
     $0 = $1 >>> 25;
     $0 = $0 << 8 | $0;
     $8 = $0 << 16 | $0;
     $7 = HEAP32[$13 + 56 >> 2];
     $0 = $1 & $7;
     $4 = $14 + 4 | 0;
     $10 = HEAP32[$13 - -64 >> 2];
     $5 = HEAP32[$13 + 60 >> 2];
     $6 = 0;
     while (1) {
      $1 = $0 + $5 | 0;
      $9 = HEAPU8[$1 | 0] | HEAPU8[$1 + 1 | 0] << 8 | (HEAPU8[$1 + 2 | 0] << 16 | HEAPU8[$1 + 3 | 0] << 24);
      $1 = $9 ^ $8;
      $1 = ($1 ^ -1) & $1 + -16843009 & -2139062144;
      $6 = $6 + 4 | 0;
      $2 = $6 + $0 & $7;
      label$5 : {
       while (1) {
        if ($1) {
         if ($1) {
          $3 = 31 - Math_clz32($1 + -1 ^ $1) | 0
         } else {
          $3 = 32
         }
         $1 = $1 + -1 & $1;
         $11 = Math_imul(($3 >>> 3) + $0 & $7, 20) + $10 | 0;
         if (HEAP32[$14 >> 2] != HEAP32[$11 >> 2]) {
          continue
         }
         break label$5;
        }
        break;
       };
       $0 = $2;
       if (!($9 << 1 & $9 & -2139062144)) {
        continue
       }
       break label$1;
      }
      break;
     };
     $5 = HEAP32[$11 + 4 >> 2];
     $3 = HEAP32[$11 + 8 >> 2];
     $2 = $11 + 12 | 0;
     $1 = HEAP32[$2 + 4 >> 2];
     $0 = $16 + 8 | 0;
     HEAP32[$0 >> 2] = HEAP32[$2 >> 2];
     HEAP32[$0 + 4 >> 2] = $1;
     HEAP32[$16 >> 2] = $5;
     HEAP32[$16 + 4 >> 2] = $3;
     $20 = $20 + 1 | 0;
     $16 = $16 + 16 | 0;
     $14 = $4;
     if (($23 | 0) != ($4 | 0)) {
      continue
     }
     break;
    };
   }
   HEAP32[$25 >> 2] = $20;
   global$0 = $12 + 80 | 0;
   return;
  }
  core__option__expect_failed__h4b77ebe6e62ec3a1(1051369);
  abort();
 }
 
 function stretch__node__Stretch__find_node__hfb9818efa90b275a($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
  $6 = global$0 - 80 | 0;
  global$0 = $6;
  $14 = HEAP32[$1 + 12 >> 2];
  $9 = $6 + 48 | 0;
  $3 = $9;
  $7 = HEAP32[$1 + 8 >> 2];
  HEAP32[$3 >> 2] = $7 ^ 2037671283;
  HEAP32[$3 + 4 >> 2] = $14 ^ 1952801890;
  $11 = $6 + 40 | 0;
  $3 = $11;
  HEAP32[$3 >> 2] = $7 ^ 1852075885;
  HEAP32[$3 + 4 >> 2] = $14 ^ 1685025377;
  $5 = HEAP32[$1 + 4 >> 2];
  $8 = $6 + 32 | 0;
  $3 = $8;
  $4 = HEAP32[$1 >> 2];
  HEAP32[$3 >> 2] = $4 ^ 1852142177;
  HEAP32[$3 + 4 >> 2] = $5 ^ 1819895653;
  HEAP32[$6 + 64 >> 2] = 0;
  HEAP32[$6 + 68 >> 2] = 0;
  HEAP32[$6 + 56 >> 2] = 0;
  HEAP32[$6 + 60 >> 2] = 0;
  HEAP32[$6 + 16 >> 2] = $7;
  HEAP32[$6 + 20 >> 2] = $14;
  HEAP32[$6 + 8 >> 2] = $4;
  HEAP32[$6 + 12 >> 2] = $5;
  HEAP32[$6 + 24 >> 2] = $4 ^ 1886610805;
  HEAP32[$6 + 28 >> 2] = $5 ^ 1936682341;
  HEAP32[$6 + 76 >> 2] = HEAP32[$2 >> 2];
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($6 + 8 | 0, $6 + 76 | 0);
  HEAP32[$6 + 76 >> 2] = HEAP32[$2 + 4 >> 2];
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($6 + 8 | 0, $6 + 76 | 0);
  HEAP32[$6 + 76 >> 2] = HEAP32[$2 + 8 >> 2];
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($6 + 8 | 0, $6 + 76 | 0);
  $19 = HEAP32[$2 + 12 >> 2];
  HEAP32[$6 + 76 >> 2] = $19;
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($6 + 8 | 0, $6 + 76 | 0);
  $12 = HEAP32[$6 + 60 >> 2] | HEAP32[$6 + 64 >> 2] << 24;
  $4 = $12 ^ HEAP32[$9 + 4 >> 2];
  $3 = $4;
  $13 = HEAP32[$6 + 56 >> 2];
  $9 = $13 ^ HEAP32[$9 >> 2];
  $7 = __wasm_rotl_i64($9, $3, 16);
  $5 = i64toi32_i32$HIGH_BITS;
  $3 = HEAP32[$8 + 4 >> 2] + $3 | 0;
  $4 = HEAP32[$8 >> 2];
  $9 = $9 + $4 | 0;
  if ($9 >>> 0 < $4 >>> 0) {
   $3 = $3 + 1 | 0
  }
  $17 = $7 ^ $9;
  $7 = $3;
  $8 = $5 ^ $3;
  $10 = $8;
  $15 = HEAP32[$11 + 4 >> 2];
  $3 = $15 + HEAP32[$6 + 28 >> 2] | 0;
  $11 = HEAP32[$11 >> 2];
  $4 = HEAP32[$6 + 24 >> 2];
  $16 = $11 + $4 | 0;
  if ($16 >>> 0 < $4 >>> 0) {
   $3 = $3 + 1 | 0
  }
  $5 = __wasm_rotl_i64($16, $3, 32);
  $18 = $5 + $17 | 0;
  $4 = i64toi32_i32$HIGH_BITS + $8 | 0;
  $14 = $18 >>> 0 < $5 >>> 0 ? $4 + 1 | 0 : $4;
  $8 = $12 ^ $14;
  $4 = __wasm_rotl_i64($11, $15, 13) ^ $16;
  $5 = $3 ^ i64toi32_i32$HIGH_BITS;
  $3 = $7 + $5 | 0;
  $7 = $4 + $9 | 0;
  if ($7 >>> 0 < $4 >>> 0) {
   $3 = $3 + 1 | 0
  }
  $5 = __wasm_rotl_i64($4, $5, 17) ^ $7;
  $4 = $3;
  $9 = $3 ^ i64toi32_i32$HIGH_BITS;
  $3 = $8 + $9 | 0;
  $8 = $5 + ($13 ^ $18) | 0;
  if ($8 >>> 0 < $5 >>> 0) {
   $3 = $3 + 1 | 0
  }
  $15 = __wasm_rotl_i64($5, $9, 13) ^ $8;
  $5 = $3;
  $3 = $3 ^ i64toi32_i32$HIGH_BITS;
  $11 = $3;
  $12 = __wasm_rotl_i64($17, $10, 21) ^ $18;
  $13 = $14 ^ i64toi32_i32$HIGH_BITS;
  $7 = __wasm_rotl_i64($7, $4, 32) ^ 255;
  $4 = $7 + $12 | 0;
  $3 = i64toi32_i32$HIGH_BITS + $13 | 0;
  $10 = $4 >>> 0 < $7 >>> 0 ? $3 + 1 | 0 : $3;
  $3 = $11 + $10 | 0;
  $9 = $4 + $15 | 0;
  if ($9 >>> 0 < $4 >>> 0) {
   $3 = $3 + 1 | 0
  }
  $15 = __wasm_rotl_i64($15, $11, 17) ^ $9;
  $7 = $3;
  $3 = $3 ^ i64toi32_i32$HIGH_BITS;
  $14 = __wasm_rotl_i64($15, $3, 13);
  $11 = i64toi32_i32$HIGH_BITS;
  $12 = __wasm_rotl_i64($12, $13, 16) ^ $4;
  $13 = $10 ^ i64toi32_i32$HIGH_BITS;
  $5 = __wasm_rotl_i64($8, $5, 32);
  $4 = $5 + $12 | 0;
  $8 = $3;
  $3 = i64toi32_i32$HIGH_BITS + $13 | 0;
  $10 = $4 >>> 0 < $5 >>> 0 ? $3 + 1 | 0 : $3;
  $3 = $8 + $10 | 0;
  $8 = $4 + $15 | 0;
  if ($8 >>> 0 < $4 >>> 0) {
   $3 = $3 + 1 | 0
  }
  $15 = $14 ^ $8;
  $5 = $3;
  $3 = $3 ^ $11;
  $11 = __wasm_rotl_i64($15, $3, 17);
  $14 = i64toi32_i32$HIGH_BITS;
  $12 = __wasm_rotl_i64($12, $13, 21) ^ $4;
  $13 = $10 ^ i64toi32_i32$HIGH_BITS;
  $7 = __wasm_rotl_i64($9, $7, 32);
  $4 = $7 + $12 | 0;
  $16 = $3;
  $3 = i64toi32_i32$HIGH_BITS + $13 | 0;
  $10 = $4 >>> 0 < $7 >>> 0 ? $3 + 1 | 0 : $3;
  $3 = $16 + $10 | 0;
  $9 = $4 + $15 | 0;
  if ($9 >>> 0 < $4 >>> 0) {
   $3 = $3 + 1 | 0
  }
  $11 = $9 ^ $11;
  $7 = $3;
  $3 = $3 ^ $14;
  $15 = __wasm_rotl_i64($11, $3, 13);
  $14 = i64toi32_i32$HIGH_BITS;
  $13 = __wasm_rotl_i64($12, $13, 16) ^ $4;
  $10 = $10 ^ i64toi32_i32$HIGH_BITS;
  $5 = __wasm_rotl_i64($8, $5, 32);
  $4 = $5 + $13 | 0;
  $8 = $3;
  $3 = i64toi32_i32$HIGH_BITS + $10 | 0;
  $5 = $4 >>> 0 < $5 >>> 0 ? $3 + 1 | 0 : $3;
  $3 = $8 + $5 | 0;
  $11 = $4 + $11 | 0;
  if ($11 >>> 0 < $4 >>> 0) {
   $3 = $3 + 1 | 0
  }
  $3 = $3 ^ $14;
  $8 = $3;
  $10 = __wasm_rotl_i64($13, $10, 21) ^ $4;
  $14 = $5 ^ i64toi32_i32$HIGH_BITS;
  $7 = __wasm_rotl_i64($9, $7, 32);
  $4 = $7 + $10 | 0;
  $3 = i64toi32_i32$HIGH_BITS + $14 | 0;
  $5 = $4 >>> 0 < $7 >>> 0 ? $3 + 1 | 0 : $3;
  $3 = $8 + $5 | 0;
  $9 = $11 ^ $15;
  $7 = $4 + $9 | 0;
  if ($7 >>> 0 < $4 >>> 0) {
   $3 = $3 + 1 | 0
  }
  $4 = $3 ^ (__wasm_rotl_i64(__wasm_rotl_i64($10, $14, 16) ^ $4, $5 ^ i64toi32_i32$HIGH_BITS, 21) ^ $7 ^ __wasm_rotl_i64($9, $8, 17));
  $3 = $4 >>> 25;
  $3 = $3 << 8 | $3;
  $5 = $3 << 16 | $3;
  $15 = HEAP32[$1 + 16 >> 2];
  $13 = $15 & $4;
  $14 = HEAP32[$1 + 24 >> 2];
  $9 = HEAP32[$1 + 20 >> 2];
  $7 = HEAP32[$2 + 8 >> 2];
  $4 = HEAP32[$2 + 4 >> 2];
  $3 = HEAP32[$2 >> 2];
  $11 = 0;
  $17 = $0;
  label$1 : {
   label$2 : {
    while (1) {
     $1 = $9 + $13 | 0;
     $8 = HEAPU8[$1 | 0] | HEAPU8[$1 + 1 | 0] << 8 | (HEAPU8[$1 + 2 | 0] << 16 | HEAPU8[$1 + 3 | 0] << 24);
     $1 = $8 ^ $5;
     $12 = ($1 ^ -1) & $1 + -16843009 & -2139062144;
     if ($12) {
      while (1) {
       $16 = $14;
       $1 = $15;
       if ($12) {
        $10 = 31 - Math_clz32($12 + -1 ^ $12) | 0
       } else {
        $10 = 32
       }
       $1 = $1 & ($10 >>> 3) + $13;
       $10 = $16 + Math_imul($1, 20) | 0;
       label$6 : {
        if (HEAP32[$10 >> 2] != ($3 | 0)) {
         break label$6
        }
        if (HEAP32[$10 + 4 >> 2] != ($4 | 0)) {
         break label$6
        }
        if (HEAP32[$10 + 8 >> 2] != ($7 | 0)) {
         break label$6
        }
        if (HEAP32[$10 + 12 >> 2] == ($19 | 0)) {
         break label$2
        }
       }
       $12 = $12 + -1 & $12;
       if ($12) {
        continue
       }
       break;
      }
     }
     $11 = $11 + 4 | 0;
     $13 = $15 & $11 + $13;
     if (!($8 << 1 & $8 & -2139062144)) {
      continue
     }
     break;
    };
    HEAP32[$0 + 4 >> 2] = 0;
    $3 = HEAP32[$2 + 4 >> 2];
    $1 = $0 + 8 | 0;
    HEAP32[$1 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$1 + 4 >> 2] = $3;
    $2 = $2 + 8 | 0;
    $1 = HEAP32[$2 + 4 >> 2];
    $0 = $0 + 16 | 0;
    HEAP32[$0 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$0 + 4 >> 2] = $1;
    $0 = 1;
    break label$1;
   }
   HEAP32[$0 + 4 >> 2] = HEAP32[($14 + Math_imul($1, 20) | 0) + 16 >> 2];
   $0 = 0;
  }
  HEAP32[$17 >> 2] = $0;
  global$0 = $6 + 80 | 0;
 }
 
 function core__fmt__Formatter__pad_integral__h253f31941eb77fc7($0, $1, $2, $3, $4, $5) {
  var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  label$1 : {
   if ($1) {
    $9 = HEAP32[$0 >> 2];
    $1 = $9 & 1;
    $10 = $1 ? 43 : 1114112;
    $6 = $1 + $5 | 0;
    break label$1;
   }
   $9 = HEAP32[$0 >> 2];
   $10 = 45;
   $6 = $5 + 1 | 0;
  }
  label$3 : {
   if (!($9 & 4)) {
    $2 = 0;
    break label$3;
   }
   if ($3) {
    $8 = $3;
    $1 = $2;
    while (1) {
     $7 = ((HEAPU8[$1 | 0] & 192) == 128) + $7 | 0;
     $1 = $1 + 1 | 0;
     $8 = $8 + -1 | 0;
     if ($8) {
      continue
     }
     break;
    };
   }
   $6 = ($3 + $6 | 0) - $7 | 0;
  }
  folding_inner0 : {
   label$7 : {
    label$8 : {
     label$9 : {
      label$10 : {
       label$11 : {
        label$12 : {
         label$13 : {
          label$14 : {
           label$15 : {
            label$16 : {
             label$17 : {
              if (HEAP32[$0 + 8 >> 2] == 1) {
               $1 = HEAP32[$0 + 12 >> 2];
               if ($1 >>> 0 <= $6 >>> 0) {
                break label$17
               }
               if ($9 & 8) {
                break label$16
               }
               $6 = $1 - $6 | 0;
               $1 = HEAPU8[$0 + 48 | 0];
               $1 = ($1 | 0) == 3 ? 1 : $1;
               if (!($1 & 3)) {
                break label$15
               }
               if (($1 | 0) == 2) {
                break label$14
               }
               $7 = $6;
               $6 = 0;
               break label$13;
              }
              if (core__fmt__Formatter__pad_integral__write_prefix__h8ff96a3030fbf13b($0, $10, $2, $3)) {
               break label$9
              }
              break folding_inner0;
             }
             if (core__fmt__Formatter__pad_integral__write_prefix__h8ff96a3030fbf13b($0, $10, $2, $3)) {
              break label$9
             }
             break folding_inner0;
            }
            HEAP8[$0 + 48 | 0] = 1;
            HEAP32[$0 + 4 >> 2] = 48;
            if (core__fmt__Formatter__pad_integral__write_prefix__h8ff96a3030fbf13b($0, $10, $2, $3)) {
             break label$9
            }
            $6 = $1 - $6 | 0;
            $1 = HEAPU8[$0 + 48 | 0];
            $1 = ($1 | 0) == 3 ? 1 : $1;
            if (!($1 & 3)) {
             break label$12
            }
            if (($1 | 0) == 2) {
             break label$11
            }
            $7 = $6;
            $6 = 0;
            break label$10;
           }
           $7 = 0;
           break label$13;
          }
          $7 = $6 >>> 1;
          $6 = $6 + 1 >>> 1;
         }
         $1 = -1;
         $8 = $0 + 4 | 0;
         $9 = $0 + 24 | 0;
         $11 = $0 + 28 | 0;
         label$19 : {
          while (1) {
           $1 = $1 + 1 | 0;
           if ($1 >>> 0 >= $7 >>> 0) {
            break label$19
           }
           if (!FUNCTION_TABLE[HEAP32[HEAP32[$11 >> 2] + 16 >> 2]](HEAP32[$9 >> 2], HEAP32[$8 >> 2])) {
            continue
           }
           break;
          };
          return 1;
         }
         $1 = HEAP32[$0 + 4 >> 2];
         if (core__fmt__Formatter__pad_integral__write_prefix__h8ff96a3030fbf13b($0, $10, $2, $3)) {
          break label$9
         }
         $2 = $0 + 24 | 0;
         $0 = $0 + 28 | 0;
         if (FUNCTION_TABLE[HEAP32[HEAP32[$0 >> 2] + 12 >> 2]](HEAP32[$2 >> 2], $4, $5)) {
          break label$9
         }
         $2 = HEAP32[$2 >> 2];
         $7 = -1;
         $0 = HEAP32[$0 >> 2] + 16 | 0;
         while (1) {
          $7 = $7 + 1 | 0;
          if ($7 >>> 0 >= $6 >>> 0) {
           break label$8
          }
          if (!FUNCTION_TABLE[HEAP32[$0 >> 2]]($2, $1)) {
           continue
          }
          break;
         };
         break label$9;
        }
        $7 = 0;
        break label$10;
       }
       $7 = $6 >>> 1;
       $6 = $6 + 1 >>> 1;
      }
      $1 = -1;
      $2 = $0 + 4 | 0;
      $3 = $0 + 24 | 0;
      $8 = $0 + 28 | 0;
      label$22 : {
       while (1) {
        $1 = $1 + 1 | 0;
        if ($1 >>> 0 >= $7 >>> 0) {
         break label$22
        }
        if (!FUNCTION_TABLE[HEAP32[HEAP32[$8 >> 2] + 16 >> 2]](HEAP32[$3 >> 2], HEAP32[$2 >> 2])) {
         continue
        }
        break;
       };
       return 1;
      }
      $1 = HEAP32[$0 + 4 >> 2];
      $2 = $0 + 24 | 0;
      $0 = $0 + 28 | 0;
      if (FUNCTION_TABLE[HEAP32[HEAP32[$0 >> 2] + 12 >> 2]](HEAP32[$2 >> 2], $4, $5)) {
       break label$9
      }
      $2 = HEAP32[$2 >> 2];
      $7 = -1;
      $0 = HEAP32[$0 >> 2] + 16 | 0;
      while (1) {
       $7 = $7 + 1 | 0;
       if ($7 >>> 0 >= $6 >>> 0) {
        break label$7
       }
       if (!FUNCTION_TABLE[HEAP32[$0 >> 2]]($2, $1)) {
        continue
       }
       break;
      };
     }
     return 1;
    }
    return 0;
   }
   return 0;
  }
  return FUNCTION_TABLE[HEAP32[HEAP32[$0 + 28 >> 2] + 12 >> 2]](HEAP32[$0 + 24 >> 2], $4, $5) | 0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h84a6bf5a915079c7($0, $1, $2) {
  var $3 = Math_fround(0), $4 = 0, $5 = Math_fround(0), $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = Math_fround(0), $11 = 0, $12 = Math_fround(0), $13 = Math_fround(0), $14 = 0;
  $7 = global$0 - 48 | 0;
  global$0 = $7;
  $3 = HEAPF32[$2 + 132 >> 2];
  $8 = HEAPU8[HEAP32[$1 >> 2]];
  label$1 : {
   if (($8 | 2) == 3) {
    $4 = $2 + 108 | 0;
    $6 = $2 + 112 | 0;
    break label$1;
   }
   $4 = $2 + 100 | 0;
   $6 = $2 + 104 | 0;
  }
  $9 = $2;
  $3 = Math_fround($3 - Math_fround(HEAPF32[$4 >> 2] + HEAPF32[$6 >> 2]));
  label$3 : {
   if ((($8 | 2) & 3) == 3) {
    $4 = $2 + 128 | 0;
    $6 = $2 + 124 | 0;
    break label$3;
   }
   $4 = $2 + 120 | 0;
   $6 = $2 + 116 | 0;
  }
  HEAPF32[$9 + 136 >> 2] = $3 - Math_fround(HEAPF32[$6 >> 2] + HEAPF32[$4 >> 2]);
  $8 = HEAP32[$2 >> 2];
  $6 = HEAP32[HEAP32[$1 + 4 >> 2] >> 2];
  HEAP32[$7 + 24 >> 2] = 1;
  HEAP32[$7 + 16 >> 2] = 1;
  $4 = HEAP32[$1 + 8 >> 2];
  $9 = $4 + 8 | 0;
  $11 = HEAP32[$9 + 4 >> 2];
  $14 = $7 + 40 | 0;
  HEAP32[$14 >> 2] = HEAP32[$9 >> 2];
  HEAP32[$14 + 4 >> 2] = $11;
  $9 = HEAP32[$4 + 4 >> 2];
  HEAP32[$7 + 32 >> 2] = HEAP32[$4 >> 2];
  HEAP32[$7 + 36 >> 2] = $9;
  stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($7, $6, $8, $7 + 16 | 0, $7 + 32 | 0, 0);
  $4 = $7 + 8 | 0;
  $3 = HEAPF32[$4 >> 2];
  $4 = HEAP32[$4 >> 2];
  $5 = HEAPF32[$7 + 4 >> 2];
  $8 = HEAP32[$7 + 4 >> 2];
  $9 = HEAP32[$7 >> 2];
  if (($9 | 0) != 1) {
   $11 = HEAPU8[HEAP32[$1 >> 2]];
   $6 = $11 | 2;
   if (($6 | 0) != 3) {
    $3 = $5
   }
   $10 = $3;
   label$8 : {
    if (($6 & 3) == 3) {
     $6 = HEAP32[$2 + 28 >> 2];
     $5 = HEAPF32[$2 + 32 >> 2];
     break label$8;
    }
    $6 = HEAP32[$2 + 20 >> 2];
    $5 = HEAPF32[$2 + 24 >> 2];
   }
   $3 = $6 ? $10 : $3 != $3 ? $5 : $3 < $5 ? $5 : $3;
   $10 = $3;
   $12 = $3;
   $13 = $3;
   label$10 : {
    if ((($11 | 2) & 3) == 3) {
     $6 = HEAP32[$2 + 12 >> 2];
     $5 = HEAPF32[$2 + 16 >> 2];
     break label$10;
    }
    $6 = HEAP32[$2 + 4 >> 2];
    $5 = HEAPF32[$2 + 8 >> 2];
   }
   $3 = $6 ? $10 : $5 != $5 ? $12 : $3 < $5 ? $13 : $5;
   label$12 : {
    if (!$9) {
     break label$12
    }
    FUNCTION_TABLE[HEAP32[$4 >> 2]]($8);
    if (!HEAP32[$4 + 4 >> 2]) {
     break label$12
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($8);
   }
   $5 = HEAPF32[$2 + 132 >> 2];
   $3 = $5 != $5 ? $3 : $5 < $3 ? $3 : $5;
   $10 = $3;
   $12 = $3;
   $13 = $3;
   $4 = HEAPU8[HEAP32[$1 >> 2]] | 2;
   label$13 : {
    if (($4 | 0) == 3) {
     $8 = HEAP32[$2 + 44 >> 2];
     $5 = HEAPF32[$2 + 48 >> 2];
     break label$13;
    }
    $8 = HEAP32[$2 + 36 >> 2];
    $5 = HEAPF32[$2 + 40 >> 2];
   }
   $3 = $8 ? $10 : $5 != $5 ? $12 : $3 < $5 ? $13 : $5;
   label$15 : {
    if (($4 & 3) == 3) {
     HEAPF32[$2 + 148 >> 2] = $3;
     $3 = HEAPF32[$2 + 144 >> 2];
     break label$15;
    }
    HEAPF32[$2 + 144 >> 2] = $3;
   }
   $1 = HEAPU8[HEAP32[$1 >> 2]];
   $4 = $1 | 2;
   if (($4 | 0) == 3) {
    $3 = HEAPF32[$2 + 148 >> 2]
   }
   label$18 : {
    if (($4 & 3) == 3) {
     $4 = $2 + 96 | 0;
     $6 = $2 + 92 | 0;
     break label$18;
    }
    $4 = $2 + 88 | 0;
    $6 = $2 + 84 | 0;
   }
   $3 = Math_fround($3 + Math_fround(HEAPF32[$6 >> 2] + HEAPF32[$4 >> 2]));
   label$20 : {
    if ((($1 | 2) & 3) == 3) {
     HEAPF32[$2 + 156 >> 2] = $3;
     break label$20;
    }
    HEAPF32[$2 + 152 >> 2] = $3;
   }
   $8 = 0;
  }
  HEAP32[$0 + 4 >> 2] = $4;
  HEAP32[$0 >> 2] = $8;
  global$0 = $7 + 48 | 0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__hbd5b7feabac41337($0, $1, $2, $3) {
  var $4 = 0, $5 = Math_fround(0), $6 = Math_fround(0), $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = Math_fround(0), $14 = 0, $15 = Math_fround(0), $16 = Math_fround(0), $17 = 0;
  $8 = global$0 - 48 | 0;
  global$0 = $8;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        if (HEAPU8[HEAP32[$1 >> 2]]) {
         $10 = HEAP32[HEAP32[$1 + 4 >> 2] >> 2];
         $7 = HEAP32[$10 + 8 >> 2];
         $4 = HEAP32[$3 >> 2];
         $9 = HEAP32[$4 >> 2];
         if ($7 >>> 0 <= $9 >>> 0) {
          break label$3
         }
         if (HEAP32[(HEAP32[$10 >> 2] + Math_imul($9, 288) | 0) + 212 >> 2]) {
          break label$6
         }
         $4 = 1;
         HEAP32[$8 + 24 >> 2] = 1;
         HEAP32[$8 + 16 >> 2] = 1;
         $7 = HEAP32[$1 + 8 >> 2];
         $12 = $7 + 8 | 0;
         $17 = HEAP32[$12 + 4 >> 2];
         $14 = $8 + 40 | 0;
         HEAP32[$14 >> 2] = HEAP32[$12 >> 2];
         HEAP32[$14 + 4 >> 2] = $17;
         $12 = HEAP32[$7 + 4 >> 2];
         HEAP32[$8 + 32 >> 2] = HEAP32[$7 >> 2];
         HEAP32[$8 + 36 >> 2] = $12;
         stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($8, $10, $9, $8 + 16 | 0, $8 + 32 | 0, 0);
         $9 = HEAP32[$8 + 8 >> 2];
         $5 = HEAPF32[$8 + 4 >> 2];
         $10 = HEAP32[$8 + 4 >> 2];
         $7 = HEAP32[$8 >> 2];
         if (($7 | 0) != 1) {
          break label$5
         }
         HEAP32[$0 + 4 >> 2] = $10;
         HEAP32[$0 + 8 >> 2] = $9;
         break label$1;
        }
        $4 = HEAP32[$3 >> 2];
       }
       if ((HEAPU8[HEAP32[$1 + 12 >> 2]] | 2) != 3) {
        break label$4
       }
       $11 = HEAP32[$4 + 28 >> 2];
       $5 = HEAPF32[$4 + 32 >> 2];
       break label$2;
      }
      $4 = HEAP32[$3 >> 2];
      $6 = HEAPF32[$4 + 8 >> 2];
      $6 = HEAP32[$4 + 4 >> 2] ? $5 : $6 != $6 ? $5 : $5 < $6 ? $5 : $6;
      $5 = $6;
      $6 = HEAPF32[$4 + 24 >> 2];
      $5 = HEAP32[$4 + 20 >> 2] ? $5 : $5 != $5 ? $6 : $5 < $6 ? $6 : $5;
      if (!$7) {
       break label$2
      }
      FUNCTION_TABLE[HEAP32[$9 >> 2]]($10);
      if (!HEAP32[$9 + 4 >> 2]) {
       break label$2
      }
      dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($10);
      break label$2;
     }
     $5 = HEAPF32[$4 + 24 >> 2];
     $11 = HEAP32[$4 + 20 >> 2];
     break label$2;
    }
    core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $9, $7);
    abort();
   }
   $4 = HEAP32[$3 >> 2];
   $9 = HEAPU8[HEAP32[$1 + 12 >> 2]];
   $10 = $9 | 2;
   label$8 : {
    if (($10 | 0) == 3) {
     $6 = HEAPF32[$4 + 48 >> 2];
     $7 = HEAP32[$4 + 44 >> 2];
     break label$8;
    }
    $6 = HEAPF32[$4 + 40 >> 2];
    $7 = HEAP32[$4 + 36 >> 2];
   }
   $15 = HEAPF32[$4 + 164 >> 2];
   $16 = HEAPF32[$4 + 160 >> 2];
   $13 = ($10 & 3) == 3 ? $15 : $16;
   $6 = $7 ? $13 : $6 != $6 ? $13 : $13 < $6 ? $13 : $6;
   $5 = $11 ? $6 : $6 != $6 ? $5 : $6 < $5 ? $5 : $6;
   $5 = $5 != $5 ? Math_fround(0.0) : $5 < Math_fround(0.0) ? Math_fround(0.0) : $5;
   HEAPF32[$4 + 140 >> 2] = $5 - ((($9 | 2) & 3) == 3 ? $15 : $16);
   $4 = HEAP32[$3 >> 2];
   HEAPF32[((HEAPU8[HEAP32[$1 + 12 >> 2]] | 2) == 3 ? $4 + 164 | 0 : $4 + 160 | 0) >> 2] = $5;
   $4 = HEAP32[$3 >> 2];
   $1 = HEAPU8[HEAP32[$1 + 12 >> 2]];
   $11 = $1 | 2;
   $5 = HEAPF32[$4 + 164 >> 2];
   label$14 : {
    if (($11 | 0) == 3) {
     break label$14
    }
    $5 = HEAPF32[$4 + 160 >> 2];
   }
   label$16 : {
    if (($11 & 3) == 3) {
     $11 = $4 + 96 | 0;
     $7 = $4 + 92 | 0;
     break label$16;
    }
    $11 = $4 + 88 | 0;
    $7 = $4 + 84 | 0;
   }
   $5 = Math_fround($5 + Math_fround(HEAPF32[$7 >> 2] + HEAPF32[$11 >> 2]));
   HEAPF32[((($1 | 2) & 3) == 3 ? $4 + 172 | 0 : $4 + 168 | 0) >> 2] = $5;
   HEAPF32[$0 + 4 >> 2] = HEAPF32[HEAP32[$3 >> 2] + 140 >> 2] + $2;
   $4 = 0;
  }
  HEAP32[$0 >> 2] = $4;
  global$0 = $8 + 48 | 0;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__realloc__h89a3982cb9693a20($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  label$1 : {
   if ($1 >>> 0 > 4294901708) {
    break label$1
   }
   $2 = $1 >>> 0 < 11 ? 16 : $1 + 11 & -8;
   $6 = $0 + -4 | 0;
   $7 = HEAP32[$6 >> 2];
   $3 = $7 & -8;
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            if ($7 & 3) {
             $8 = $0 + -8 | 0;
             $5 = $3 + $8 | 0;
             if ($3 >>> 0 >= $2 >>> 0) {
              break label$10
             }
             if (($5 | 0) == HEAP32[266662]) {
              break label$9
             }
             if (($5 | 0) == HEAP32[266661]) {
              break label$8
             }
             $7 = HEAP32[$5 + 4 >> 2];
             if ($7 & 2) {
              break label$7
             }
             $9 = $7 & -8;
             $3 = $3 + $9 | 0;
             if ($3 >>> 0 < $2 >>> 0) {
              break label$7
             }
             $1 = $3 - $2 | 0;
             if ($9 >>> 0 >= 256) {
              break label$5
             }
             $4 = HEAP32[$5 + 12 >> 2];
             $5 = HEAP32[$5 + 8 >> 2];
             if (($4 | 0) == ($5 | 0)) {
              break label$4
             }
             HEAP32[$5 + 12 >> 2] = $4;
             HEAP32[$4 + 8 >> 2] = $5;
             break label$3;
            }
            if ($2 >>> 0 < 256) {
             break label$7
            }
            if ($3 >>> 0 < ($2 | 4) >>> 0) {
             break label$7
            }
            if ($3 - $2 >>> 0 < 131073) {
             break label$2
            }
            break label$7;
           }
           $1 = $3 - $2 | 0;
           if ($1 >>> 0 < 16) {
            break label$2
           }
           HEAP32[$6 >> 2] = $2 | $7 & 1 | 2;
           $4 = $2 + $8 | 0;
           HEAP32[$4 + 4 >> 2] = $1 | 3;
           HEAP32[$5 + 4 >> 2] = HEAP32[$5 + 4 >> 2] | 1;
           dlmalloc__dlmalloc__Dlmalloc__dispose_chunk__h6f59f1d81bec5e46($4, $1);
           break label$2;
          }
          $3 = $3 + HEAP32[266660] | 0;
          if ($3 >>> 0 <= $2 >>> 0) {
           break label$7
          }
          HEAP32[$6 >> 2] = $2 | $7 & 1 | 2;
          $1 = $2 + $8 | 0;
          $4 = $3 - $2 | 0;
          HEAP32[$1 + 4 >> 2] = $4 | 1;
          HEAP32[266660] = $4;
          HEAP32[266662] = $1;
          break label$2;
         }
         $3 = $3 + HEAP32[266659] | 0;
         if ($3 >>> 0 >= $2 >>> 0) {
          break label$6
         }
        }
        $2 = dlmalloc__dlmalloc__Dlmalloc__malloc__haa66310b00a7bd6b($1);
        if (!$2) {
         break label$1
        }
        $4 = HEAP32[$6 >> 2];
        $4 = ($4 & -8) - ($4 & 3 ? 4 : 8) | 0;
        $1 = memcpy($2, $0, $4 >>> 0 > $1 >>> 0 ? $1 : $4);
        dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($0);
        return $1;
       }
       $1 = $3 - $2 | 0;
       label$12 : {
        if ($1 >>> 0 <= 15) {
         HEAP32[$6 >> 2] = $3 | $7 & 1 | 2;
         $1 = $3 + $8 | 0;
         HEAP32[$1 + 4 >> 2] = HEAP32[$1 + 4 >> 2] | 1;
         $1 = 0;
         break label$12;
        }
        HEAP32[$6 >> 2] = $2 | $7 & 1 | 2;
        $4 = $2 + $8 | 0;
        HEAP32[$4 + 4 >> 2] = $1 | 1;
        $2 = $3 + $8 | 0;
        HEAP32[$2 >> 2] = $1;
        HEAP32[$2 + 4 >> 2] = HEAP32[$2 + 4 >> 2] & -2;
       }
       HEAP32[266661] = $4;
       HEAP32[266659] = $1;
       break label$2;
      }
      dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__h173f6e2d56218081($5);
      break label$3;
     }
     (wasm2js_i32$0 = 1066236, wasm2js_i32$1 = HEAP32[266559] & __wasm_rotl_i32($7 >>> 3)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    }
    if ($1 >>> 0 < 16) {
     HEAP32[$6 >> 2] = $3 | HEAP32[$6 >> 2] & 1 | 2;
     $1 = $3 + $8 | 0;
     HEAP32[$1 + 4 >> 2] = HEAP32[$1 + 4 >> 2] | 1;
     break label$2;
    }
    HEAP32[$6 >> 2] = $2 | HEAP32[$6 >> 2] & 1 | 2;
    $4 = $2 + $8 | 0;
    HEAP32[$4 + 4 >> 2] = $1 | 3;
    $2 = $3 + $8 | 0;
    HEAP32[$2 + 4 >> 2] = HEAP32[$2 + 4 >> 2] | 1;
    dlmalloc__dlmalloc__Dlmalloc__dispose_chunk__h6f59f1d81bec5e46($4, $1);
   }
   $4 = $0;
  }
  return $4;
 }
 
 function core__slice__memchr__memchr__h7af23d5070345c6c($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0;
  label$1 : {
   label$2 : {
    $4 = $2 & 3;
    if (!$4) {
     break label$2
    }
    $4 = 4 - $4 | 0;
    if (!$4) {
     break label$2
    }
    $9 = $4 >>> 0 > $3 >>> 0 ? $3 : $4;
    $10 = $9 + $2 | 0;
    $6 = $1 & 255;
    $8 = $9;
    $4 = $2;
    label$3 : {
     while (1) {
      if ($10 - $4 >>> 0 > 3) {
       $7 = HEAPU8[$4 | 0];
       $5 = (($7 | 0) != ($6 | 0)) + $5 | 0;
       if (($6 | 0) == ($7 | 0)) {
        break label$3
       }
       $7 = HEAPU8[$4 + 1 | 0];
       $5 = (($7 | 0) != ($6 | 0)) + $5 | 0;
       if (($6 | 0) == ($7 | 0)) {
        break label$3
       }
       $7 = HEAPU8[$4 + 2 | 0];
       $5 = (($7 | 0) != ($6 | 0)) + $5 | 0;
       if (($6 | 0) == ($7 | 0)) {
        break label$3
       }
       $7 = HEAPU8[$4 + 3 | 0];
       $5 = (($7 | 0) != ($6 | 0)) + $5 | 0;
       $8 = $8 + -4 | 0;
       $4 = $4 + 4 | 0;
       if (($6 | 0) != ($7 | 0)) {
        continue
       }
       break label$3;
      }
      break;
     };
     $6 = 0;
     $10 = $1 & 255;
     while (1) {
      if (!$8) {
       break label$2
      }
      $7 = $4 + $6 | 0;
      $8 = $8 + -1 | 0;
      $6 = $6 + 1 | 0;
      $7 = HEAPU8[$7 | 0];
      if (($7 | 0) != ($10 | 0)) {
       continue
      }
      break;
     };
     $5 = ((((($7 | 0) == ($1 & 255)) + 1 & 1) + $5 | 0) + $6 | 0) + -1 | 0;
    }
    $4 = 1;
    break label$1;
   }
   $6 = $1 & 255;
   label$7 : {
    label$8 : {
     if ($3 >>> 0 < 8) {
      break label$8
     }
     $8 = $3 + -8 | 0;
     if ($9 >>> 0 > $8 >>> 0) {
      break label$8
     }
     $4 = Math_imul($6, 16843009);
     while (1) {
      $5 = $2 + $9 | 0;
      $10 = $4 ^ HEAP32[$5 + 4 >> 2];
      $5 = $4 ^ HEAP32[$5 >> 2];
      if (!((($10 ^ -1) & $10 + -16843009 | ($5 ^ -1) & $5 + -16843009) & -2139062144)) {
       $9 = $9 + 8 | 0;
       if ($9 >>> 0 <= $8 >>> 0) {
        continue
       }
      }
      break;
     };
     if ($9 >>> 0 > $3 >>> 0) {
      break label$7
     }
    }
    $4 = $2 + $9 | 0;
    $2 = $2 + $3 | 0;
    $8 = $3 - $9 | 0;
    $5 = 0;
    label$11 : {
     label$12 : {
      while (1) {
       if ($2 - $4 >>> 0 > 3) {
        $3 = HEAPU8[$4 | 0];
        $5 = (($3 | 0) != ($6 | 0)) + $5 | 0;
        if (($3 | 0) == ($6 | 0)) {
         break label$12
        }
        $3 = HEAPU8[$4 + 1 | 0];
        $5 = (($3 | 0) != ($6 | 0)) + $5 | 0;
        if (($3 | 0) == ($6 | 0)) {
         break label$12
        }
        $3 = HEAPU8[$4 + 2 | 0];
        $5 = (($3 | 0) != ($6 | 0)) + $5 | 0;
        if (($3 | 0) == ($6 | 0)) {
         break label$12
        }
        $3 = HEAPU8[$4 + 3 | 0];
        $5 = (($3 | 0) != ($6 | 0)) + $5 | 0;
        $8 = $8 + -4 | 0;
        $4 = $4 + 4 | 0;
        if (($3 | 0) != ($6 | 0)) {
         continue
        }
        break label$12;
       }
       break;
      };
      $6 = 0;
      $2 = $1 & 255;
      while (1) {
       if (!$8) {
        break label$11
       }
       $3 = $4 + $6 | 0;
       $8 = $8 + -1 | 0;
       $6 = $6 + 1 | 0;
       $3 = HEAPU8[$3 | 0];
       if (($3 | 0) != ($2 | 0)) {
        continue
       }
       break;
      };
      $5 = ((((($3 | 0) == ($1 & 255)) + 1 & 1) + $5 | 0) + $6 | 0) + -1 | 0;
     }
     $4 = 1;
     $5 = $5 + $9 | 0;
     break label$1;
    }
    $4 = 0;
    $5 = ($5 + $6 | 0) + $9 | 0;
    break label$1;
   }
   core__slice__slice_index_order_fail__ha75fa70416d3bc2f($9, $3);
   abort();
  }
  HEAP32[$0 + 4 >> 2] = $5;
  HEAP32[$0 >> 2] = $4;
 }
 
 function core__num__dec2flt__algorithm__algorithm_m__h98d3ac2557e797f4($0, $1) {
  var $2 = 0, $3 = 0, $4 = Math_fround(0), $5 = 0;
  $2 = global$0 - 1536 | 0;
  global$0 = $2;
  $3 = $1 << 16;
  $5 = $3 >> 31;
  $1 = ($5 ^ $1 + $5) << 16 >> 16;
  HEAP16[$2 + 358 >> 1] = 0;
  label$1 : {
   if ($3 >> 16 >= 0) {
    $core__num__bignum__Big32x40_20as_20core__clone__Clone___clone__h6d9ab1cb70598592($2 + 1368 | 0, $0);
    memcpy($2 + 24 | 0, $2 + 1368 | 0, 164);
    core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e(core__num__bignum__Big32x40__mul_pow5__h5aa98cad29f0d9cf($2 + 24 | 0, $1), $1);
    core__num__bignum__Big32x40__from_small__h597a0b75ac140389($2 + 1368 | 0, 1);
    memcpy($2 + 192 | 0, $2 + 1368 | 0, 164);
    break label$1;
   }
   $core__num__bignum__Big32x40_20as_20core__clone__Clone___clone__h6d9ab1cb70598592($2 + 1368 | 0, $0);
   memcpy($2 + 24 | 0, $2 + 1368 | 0, 164);
   core__num__bignum__Big32x40__from_small__h597a0b75ac140389($2 + 1368 | 0, 1);
   memcpy($2 + 192 | 0, $2 + 1368 | 0, 164);
   core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e(core__num__bignum__Big32x40__mul_pow5__h5aa98cad29f0d9cf($2 + 192 | 0, $1), $1);
  }
  core__num__dec2flt__algorithm__quick_start__h42b2807582e4051c($2 + 24 | 0, $2 + 192 | 0, $2 + 358 | 0);
  core__num__bignum__Big32x40__from_small__h597a0b75ac140389($2 + 360 | 0, 0);
  core__num__bignum__Big32x40__from_small__h597a0b75ac140389($2 + 528 | 0, 0);
  core__num__bignum__Big32x40__from_u64__hb47af5bbea157ebc($2 + 696 | 0, 8388608, 0);
  core__num__bignum__Big32x40__from_u64__hb47af5bbea157ebc($2 + 864 | 0, 16777215, 0);
  $1 = HEAPU16[$2 + 358 >> 1];
  core__num__bignum__Big32x40__div_rem__hdacb35c2d8ce4a26($2 + 24 | 0, $2 + 192 | 0, $2 + 528 | 0, $2 + 360 | 0);
  label$3 : {
   label$4 : {
    label$5 : {
     label$6 : {
      if (($1 | 0) != 65387) {
       while (1) {
        if ($1 << 16 >> 16 > 104) {
         break label$6
        }
        label$9 : {
         if (($core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($2 + 528 | 0, $2 + 696 | 0) & 255) != 255) {
          if (($core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($2 + 528 | 0, $2 + 864 | 0) & 255) != 1) {
           break label$5
          }
          core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e($2 + 192 | 0, 1);
          $0 = 1;
          break label$9;
         }
         core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e($2 + 24 | 0, 1);
         $0 = 65535;
        }
        core__num__bignum__Big32x40__div_rem__hdacb35c2d8ce4a26($2 + 24 | 0, $2 + 192 | 0, $2 + 528 | 0, $2 + 360 | 0);
        $1 = $0 + $1 | 0;
        if (($1 & 65535) != 65387) {
         continue
        }
        break;
       };
       HEAP16[$2 + 358 >> 1] = 65387;
      }
      label$11 : {
       if (($core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($2 + 528 | 0, $2 + 696 | 0) & 255) >>> 0 > 1) {
        break label$11
       }
       $0 = $core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($2 + 528 | 0, $2 + 864 | 0);
       if (($0 & 255) == 2) {
        break label$11
       }
       $1 = 65387;
       if (($0 << 24 >> 24) + 1 >>> 0 < 2) {
        break label$4
       }
      }
      memcpy($2 + 1032 | 0, $2 + 528 | 0, 164);
      memcpy($2 + 1200 | 0, $2 + 192 | 0, 164);
      memcpy($2 + 1368 | 0, $2 + 360 | 0, 164);
      $4 = core__num__dec2flt__algorithm__underflow__hf0cfbbd4e5bacbdb($2 + 1032 | 0, $2 + 1200 | 0, $2 + 1368 | 0);
      break label$3;
     }
     HEAP16[$2 + 358 >> 1] = $1;
     $4 = Math_fround(infinity);
     break label$3;
    }
    HEAP16[$2 + 358 >> 1] = $1;
   }
   $3 = core__num__dec2flt__num__to_u64__h5d5282c7dcdcfd3f($2 + 528 | 0);
   $0 = $2 + 8 | 0;
   HEAP16[$0 + 8 >> 1] = $1;
   HEAP32[$0 >> 2] = $3;
   HEAP32[$0 + 4 >> 2] = i64toi32_i32$HIGH_BITS;
   $4 = core__num__dec2flt__rawfp__encode_normal__h79788dc1a919ce5b(HEAP32[$2 + 8 >> 2], HEAP32[$2 + 12 >> 2], HEAPU16[$2 + 16 >> 1]);
   memcpy($2 + 1200 | 0, $2 + 192 | 0, 164);
   memcpy($2 + 1368 | 0, $2 + 360 | 0, 164);
   $4 = core__num__dec2flt__algorithm__round_by_remainder__h3d86a91325e59e59($2 + 1200 | 0, $2 + 1368 | 0, $3, $4);
  }
  global$0 = $2 + 1536 | 0;
  return $4;
 }
 
 function core__num__dec2flt__rawfp__big_to_fp__h3ecadc46bb8700fe($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
  label$1 : {
   label$2 : {
    $7 = core__num__bignum__Big32x40__bit_length__h13ff63659f8edff3($1);
    if ($7) {
     $6 = $7 + -64 | 0;
     $9 = $6 >>> 0 > $7 >>> 0 ? 0 : $6;
     if ($7 - $9 >>> 0 > 64) {
      break label$2
     }
     $6 = 0;
     label$4 : {
      label$5 : {
       if ($7 >>> 0 > $9 >>> 0) {
        while (1) {
         $7 = $7 + -1 | 0;
         $2 = $7 >>> 5;
         if ($7 >>> 0 >= 1280) {
          break label$5
         }
         $8 = $11;
         $4 = $6 << 1 | $8 >>> 31;
         $11 = HEAP32[(($2 << 2) + $1 | 0) + 4 >> 2] >>> ($7 & 31) & 1 | $8 << 1;
         $6 = $4;
         if ($7 >>> 0 > $9 >>> 0) {
          continue
         }
         break;
        }
       }
       $4 = $11;
       $8 = $6;
       $16 = ($6 | 0) == 1 & $4 >>> 0 < 0 | $6 >>> 0 < 1;
       $3 = $16;
       $2 = $3 ? 0 : $4;
       $4 = $3 ? $4 : $6;
       $3 = $4;
       $4 = $3 << 16 | $2 >>> 16;
       $12 = ($3 | 0) == 65536 & $2 >>> 0 < 0 | $3 >>> 0 < 65536;
       $5 = $12;
       $2 = $5 ? $2 << 16 : $2;
       $4 = $5 ? $4 : $3;
       $3 = $4;
       $4 = $3 << 8 | $2 >>> 24;
       $15 = ($3 | 0) == 16777216 & $2 >>> 0 < 0 | $3 >>> 0 < 16777216;
       $5 = $15;
       $2 = $5 ? $2 << 8 : $2;
       $4 = $5 ? $4 : $3;
       $3 = $4;
       $4 = $3 << 4 | $2 >>> 28;
       $7 = ($3 | 0) == 268435456 & $2 >>> 0 < 0 | $3 >>> 0 < 268435456;
       $5 = $7;
       $2 = $5 ? $2 << 4 : $2;
       $4 = $5 ? $4 : $3;
       $3 = $4;
       $4 = $3 << 2 | $2 >>> 30;
       $14 = $2 << 2;
       $5 = $2;
       $10 = ($3 | 0) == 1073741824 & $2 >>> 0 < 0 | $3 >>> 0 < 1073741824;
       $2 = $10;
       $5 = $2 ? $14 : $5;
       $2 = $2 ? $4 : $3;
       $3 = $2;
       $4 = $5;
       $5 = ($2 ^ -1) >>> 31;
       $13 = $5;
       if (32 <= ($5 & 63) >>> 0) {
        $2 = $4 << $13;
        $14 = 0;
       } else {
        $2 = (1 << $13) - 1 & $4 >>> 32 - $13 | $2 << $13;
        $14 = $4 << $13;
       }
       $13 = $9 + -32 | 0;
       $5 = $16 ? $13 : $9;
       $5 = $12 ? $5 + -16 | 0 : $5;
       $5 = $15 ? $5 + -8 | 0 : $5;
       $5 = $7 ? $5 + -4 | 0 : $5;
       $10 = ($3 >> 31 ^ -1) + ($10 ? $5 + -2 | 0 : $5) | 0;
       label$8 : {
        if (!$9) {
         break label$8
        }
        $4 = $9 + -1 | 0;
        $3 = $4 >>> 5;
        if ($4 >>> 0 >= 1280) {
         break label$1
        }
        if (!(HEAP32[(($3 << 2) + $1 | 0) + 4 >> 2] & 1 << ($4 & 31))) {
         break label$8
        }
        $7 = 0;
        label$9 : {
         while (1) {
          if ($7 >>> 0 < $4 >>> 0) {
           $5 = $7 >>> 5;
           if ($7 >>> 0 >= 1280) {
            break label$4
           }
           $3 = $7 & 31;
           $7 = $7 + 1 | 0;
           if (!(HEAP32[(($5 << 2) + $1 | 0) + 4 >> 2] & 1 << $3)) {
            continue
           }
           break label$9;
          }
          break;
         };
         if (!($11 & 1)) {
          break label$8
         }
        }
        $1 = $8;
        $8 = $11 + 1 | 0;
        if ($8 >>> 0 < 1) {
         $1 = $1 + 1 | 0
        }
        $2 = $8;
        if (!(($1 | 0) == ($6 | 0) & $2 >>> 0 >= $11 >>> 0 | $1 >>> 0 > $6 >>> 0)) {
         $10 = $9 + 1 | 0;
         $14 = 0;
         $2 = -2147483648;
         break label$8;
        }
        $6 = $1;
        $1 = $8;
        $7 = ($6 | 0) == 1 & $1 >>> 0 < 0 | $6 >>> 0 < 1;
        $2 = $7;
        $8 = $2 ? 0 : $1;
        $2 = $2 ? $1 : $6;
        $6 = $2;
        $1 = $8;
        $2 = $2 << 16 | $1 >>> 16;
        $10 = ($6 | 0) == 65536 & $1 >>> 0 < 0 | $6 >>> 0 < 65536;
        $8 = $10;
        $1 = $8 ? $1 << 16 : $1;
        $2 = $8 ? $2 : $6;
        $6 = $2;
        $2 = $2 << 8 | $1 >>> 24;
        $5 = ($6 | 0) == 16777216 & $1 >>> 0 < 0 | $6 >>> 0 < 16777216;
        $1 = $5 ? $1 << 8 : $1;
        $3 = $5 ? $2 : $6;
        $2 = $1;
        $1 = $3 << 4 | $2 >>> 28;
        $11 = ($3 | 0) == 268435456 & $2 >>> 0 < 0 | $3 >>> 0 < 268435456;
        $6 = $11;
        $2 = $6 ? $2 << 4 : $2;
        $3 = $6 ? $1 : $3;
        $6 = $3;
        $1 = $2;
        $2 = $3 << 2 | $2 >>> 30;
        $4 = $1 << 2;
        $8 = $1;
        $3 = ($3 | 0) == 1073741824 & $1 >>> 0 < 0 | $3 >>> 0 < 1073741824;
        $1 = $3;
        $15 = $1 ? $4 : $8;
        $1 = $1 ? $2 : $6;
        $6 = $1;
        $2 = $15;
        $8 = ($1 ^ -1) >>> 31;
        $12 = $8;
        if (32 <= ($8 & 63) >>> 0) {
         $4 = $2 << $12;
         $14 = 0;
        } else {
         $4 = (1 << $12) - 1 & $2 >>> 32 - $12 | $1 << $12;
         $14 = $2 << $12;
        }
        $2 = $4;
        $1 = $7 ? $13 : $9;
        $1 = $10 ? $1 + -16 | 0 : $1;
        $1 = $5 ? $1 + -8 | 0 : $1;
        $1 = $11 ? $1 + -4 | 0 : $1;
        $10 = ($6 >> 31 ^ -1) + ($3 ? $1 + -2 | 0 : $1) | 0;
       }
       HEAP16[$0 + 8 >> 1] = $10;
       HEAP32[$0 >> 2] = $14;
       HEAP32[$0 + 4 >> 2] = $2;
       return;
      }
      core__panicking__panic_bounds_check__h0537ade040df571e(1065788, $2, 40);
      abort();
     }
     core__panicking__panic_bounds_check__h0537ade040df571e(1065788, $5, 40);
     abort();
    }
    core__panicking__panic__h2d0bc53a963fb996(1060104);
    abort();
   }
   core__panicking__panic__h2d0bc53a963fb996(1059908);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1065788, $3, 40);
  abort();
 }
 
 function core__iter__traits__iterator__Iterator__try_for_each___7b_7bclosure_7d_7d__h1d2e2143706e13e0($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  $3 = global$0 - 112 | 0;
  global$0 = $3;
  $4 = HEAP32[$1 >> 2];
  $6 = $3;
  $5 = HEAP32[$1 + 4 >> 2];
  if ((HEAPU8[$5 | 0] | 2) == 3) {
   $4 = $4 + 8 | 0
  }
  HEAP32[$6 + 48 >> 2] = HEAP32[$4 >> 2];
  HEAP32[$3 + 52 >> 2] = HEAP32[$2 + 16 >> 2];
  $4 = HEAP32[$1 + 28 >> 2];
  $7 = HEAP32[$1 + 24 >> 2];
  $8 = HEAP32[$1 + 20 >> 2];
  $9 = HEAP32[$1 + 16 >> 2];
  $10 = HEAP32[$1 + 12 >> 2];
  $11 = HEAP32[$1 + 8 >> 2];
  label$2 : {
   label$3 : {
    label$4 : {
     label$5 : {
      label$6 : {
       label$7 : {
        if ((HEAPU8[$5 | 0] | 1) == 3) {
         $6 = HEAP32[$2 >> 2];
         HEAP32[$3 + 64 >> 2] = $6;
         HEAP32[$3 + 68 >> 2] = $6 + Math_imul(HEAP32[$2 + 8 >> 2], 192);
         HEAP32[$3 + 104 >> 2] = $4;
         HEAP32[$3 + 100 >> 2] = $7;
         HEAP32[$3 + 96 >> 2] = $8;
         HEAP32[$3 + 88 >> 2] = $9;
         HEAP32[$3 + 84 >> 2] = $5;
         HEAP32[$3 + 76 >> 2] = $10;
         HEAP32[$3 + 72 >> 2] = $11;
         HEAP32[$3 + 92 >> 2] = $3 + 52;
         HEAP32[$3 + 80 >> 2] = $3 + 48;
         $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___try_fold__h019f9a3a3baf46ce($3, $3 - -64 | 0, $3 + 72 | 0);
         $5 = HEAP32[$3 >> 2];
         $4 = HEAP32[$3 + 4 >> 2];
         HEAP32[$3 + 60 >> 2] = $4;
         HEAP32[$3 + 56 >> 2] = $5;
         if ($5) {
          break label$2
         }
         core__ptr__real_drop_in_place__ha30d3a7460946ab5($3 + 56 | 0);
         break label$7;
        }
        $6 = HEAP32[$2 >> 2];
        $12 = HEAP32[$2 + 8 >> 2];
        HEAP32[$3 + 104 >> 2] = $4;
        HEAP32[$3 + 100 >> 2] = $7;
        HEAP32[$3 + 96 >> 2] = $8;
        HEAP32[$3 + 88 >> 2] = $9;
        HEAP32[$3 + 84 >> 2] = $5;
        HEAP32[$3 + 76 >> 2] = $10;
        HEAP32[$3 + 72 >> 2] = $11;
        $7 = $6 + Math_imul($12, 192) | 0;
        HEAP32[$3 + 92 >> 2] = $3 + 52;
        HEAP32[$3 + 80 >> 2] = $3 + 48;
        $4 = $6;
        label$9 : {
         while (1) {
          if ($7 - $4 >>> 0 <= 576) {
           break label$9
          }
          stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($3 + 32 | 0, $3 + 72 | 0, $4);
          $5 = HEAP32[$3 + 32 >> 2];
          if ($5) {
           break label$6
          }
          stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($3 + 24 | 0, $3 + 72 | 0, $4 + 192 | 0);
          $5 = HEAP32[$3 + 24 >> 2];
          if ($5) {
           break label$5
          }
          stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($3 + 16 | 0, $3 + 72 | 0, $4 + 384 | 0);
          $5 = HEAP32[$3 + 16 >> 2];
          if ($5) {
           break label$4
          }
          stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($3 + 8 | 0, $3 + 72 | 0, $4 + 576 | 0);
          $4 = $4 + 768 | 0;
          $5 = HEAP32[$3 + 8 >> 2];
          if (!$5) {
           continue
          }
          break;
         };
         $4 = HEAP32[$3 + 12 >> 2];
         break label$2;
        }
        if (($4 | 0) != ($7 | 0)) {
         $6 = $6 + Math_imul($12, 192) | 0;
         while (1) {
          stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($3 + 40 | 0, $3 + 72 | 0, $4);
          $5 = HEAP32[$3 + 40 >> 2];
          if ($5) {
           break label$3
          }
          $4 = $4 + 192 | 0;
          if (($6 | 0) != ($4 | 0)) {
           continue
          }
          break;
         };
        }
        HEAP32[$3 + 64 >> 2] = 0;
        core__ptr__real_drop_in_place__ha30d3a7460946ab5($3 - -64 | 0);
       }
       $4 = HEAP32[$1 + 16 >> 2];
       HEAPF32[$4 >> 2] = Math_fround(HEAPF32[$3 + 52 >> 2] + HEAPF32[$2 + 12 >> 2]) + HEAPF32[$4 >> 2];
       $2 = HEAP32[$1 + 32 >> 2];
       $1 = HEAP32[$2 + 8 >> 2];
       if (($1 | 0) == HEAP32[$2 + 4 >> 2]) {
        alloc__raw_vec__RawVec_T_2cA___reserve__h7e75e39abff808bb($2, $1);
        $1 = HEAP32[$2 + 8 >> 2];
       }
       $5 = 0;
       $1 = HEAP32[$2 >> 2] + Math_imul($1, 12) | 0;
       HEAP32[$1 + 8 >> 2] = 0;
       HEAP32[$1 >> 2] = 4;
       HEAP32[$1 + 4 >> 2] = 0;
       $4 = $2 + 8 | 0;
       HEAP32[$4 >> 2] = HEAP32[$4 >> 2] + 1;
       break label$2;
      }
      $4 = HEAP32[$3 + 36 >> 2];
      break label$2;
     }
     $4 = HEAP32[$3 + 28 >> 2];
     break label$2;
    }
    $4 = HEAP32[$3 + 20 >> 2];
    break label$2;
   }
   $4 = HEAP32[$3 + 44 >> 2];
  }
  HEAP32[$0 + 4 >> 2] = $4;
  HEAP32[$0 >> 2] = $5;
  global$0 = $3 + 112 | 0;
 }
 
 function $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  HEAP32[$0 + 56 >> 2] = HEAP32[$0 + 56 >> 2] + 4;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      $6 = HEAP32[$0 + 60 >> 2];
      if ($6) {
       $11 = 8 - $6 | 0;
       $10 = $11 >>> 0 < 4 ? $11 : 4;
       if ($10 >>> 0 < 4) {
        break label$4
       }
       $5 = HEAPU8[$1 | 0] | HEAPU8[$1 + 1 | 0] << 8 | (HEAPU8[$1 + 2 | 0] << 16 | HEAPU8[$1 + 3 | 0] << 24);
       $4 = 4;
       $2 = 0;
       break label$3;
      }
      break label$2;
     }
     $2 = 0;
    }
    if (($4 | 1) >>> 0 < $10 >>> 0) {
     $2 = $1 + $4 | 0;
     $7 = HEAPU8[$2 | 0] | HEAPU8[$2 + 1 | 0] << 8;
     $3 = $4 << 3;
     $2 = $3 & 31;
     if (32 <= ($3 & 63) >>> 0) {
      $3 = $7 << $2;
      $2 = 0;
     } else {
      $3 = (1 << $2) - 1 & $7 >>> 32 - $2;
      $2 = $7 << $2;
     }
     $5 = $2 | $5;
     $4 = $4 | 2;
     $2 = $3;
    }
    if ($4 >>> 0 < $10 >>> 0) {
     $7 = HEAPU8[$1 + $4 | 0];
     $3 = $4 << 3;
     $4 = $3 & 31;
     if (32 <= ($3 & 63) >>> 0) {
      $3 = $7 << $4;
      $4 = 0;
     } else {
      $3 = (1 << $4) - 1 & $7 >>> 32 - $4;
      $4 = $7 << $4;
     }
     $5 = $4 | $5;
     $2 = $3 | $2;
    }
    $7 = HEAP32[$0 + 52 >> 2];
    $3 = $6 << 3 & 56;
    $4 = $3 & 31;
    if (32 <= ($3 & 63) >>> 0) {
     $3 = $5 << $4;
     $4 = 0;
    } else {
     $3 = (1 << $4) - 1 & $5 >>> 32 - $4 | $2 << $4;
     $4 = $5 << $4;
    }
    $10 = $4 | HEAP32[$0 + 48 >> 2];
    $2 = $3 | $7;
    $12 = $2;
    HEAP32[$0 + 48 >> 2] = $10;
    HEAP32[$0 + 52 >> 2] = $2;
    if ($11 >>> 0 > 4) {
     $10 = $6 + 4 | 0;
     break label$1;
    }
    HEAP32[$0 + 60 >> 2] = 0;
    $8 = $0 + 32 | 0;
    $5 = $8;
    $6 = $0 + 40 | 0;
    $4 = $6;
    $14 = $10 ^ HEAP32[$4 >> 2];
    $7 = $14;
    $9 = $0 + 24 | 0;
    $3 = $9;
    $2 = $7 + HEAP32[$3 >> 2] | 0;
    $17 = $12 ^ HEAP32[$4 + 4 >> 2];
    $3 = $17 + HEAP32[$3 + 4 >> 2] | 0;
    $3 = $2 >>> 0 < $7 >>> 0 ? $3 + 1 | 0 : $3;
    $7 = $2;
    $4 = $3;
    $13 = HEAP32[$5 >> 2];
    $2 = HEAP32[$5 + 4 >> 2];
    $15 = __wasm_rotl_i64($13, $2, 13);
    $16 = i64toi32_i32$HIGH_BITS;
    $2 = HEAP32[$0 + 20 >> 2] + $2 | 0;
    $8 = HEAP32[$0 + 16 >> 2];
    $13 = $8 + $13 | 0;
    if ($13 >>> 0 < $8 >>> 0) {
     $2 = $2 + 1 | 0
    }
    $8 = $13;
    $13 = $2 ^ $16;
    $3 = $13 + $3 | 0;
    $15 = $8 ^ $15;
    $16 = $15 + $7 | 0;
    if ($16 >>> 0 < $15 >>> 0) {
     $3 = $3 + 1 | 0
    }
    (wasm2js_i32$0 = $5, wasm2js_i32$1 = __wasm_rotl_i64($15, $13, 17) ^ $16), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    HEAP32[$5 + 4 >> 2] = i64toi32_i32$HIGH_BITS ^ $3;
    (wasm2js_i32$0 = $9, wasm2js_i32$1 = __wasm_rotl_i64($16, $3, 32)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    HEAP32[$9 + 4 >> 2] = i64toi32_i32$HIGH_BITS;
    $3 = __wasm_rotl_i64($14, $17, 16) ^ $7;
    $4 = i64toi32_i32$HIGH_BITS ^ $4;
    $5 = $4;
    $4 = __wasm_rotl_i64($3, $4, 21);
    $7 = i64toi32_i32$HIGH_BITS;
    $9 = $4;
    $4 = __wasm_rotl_i64($8, $2, 32);
    $2 = $4 + $3 | 0;
    $3 = i64toi32_i32$HIGH_BITS + $5 | 0;
    $3 = $2 >>> 0 < $4 >>> 0 ? $3 + 1 | 0 : $3;
    HEAP32[$6 >> 2] = $9 ^ $2;
    HEAP32[$6 + 4 >> 2] = $3 ^ $7;
    HEAP32[$0 + 16 >> 2] = $2 ^ $10;
    HEAP32[$0 + 20 >> 2] = $3 ^ $12;
   }
   $2 = 4 - $11 | 0;
   $10 = $2 & 7;
   $13 = $2 - $10 | 0;
   if ($11 >>> 0 < $13 >>> 0) {
    $2 = $0 + 24 | 0;
    $4 = HEAP32[$2 >> 2];
    $6 = HEAP32[$2 + 4 >> 2];
    $2 = $0 + 32 | 0;
    $5 = HEAP32[$2 >> 2];
    $2 = HEAP32[$2 + 4 >> 2];
    $3 = $0 + 40 | 0;
    $12 = HEAP32[$3 >> 2];
    $8 = HEAP32[$3 + 4 >> 2];
    $9 = HEAP32[$0 + 16 >> 2];
    $14 = HEAP32[$0 + 20 >> 2];
    while (1) {
     $3 = $1 + $11 | 0;
     $17 = HEAPU8[$3 | 0] | HEAPU8[$3 + 1 | 0] << 8 | (HEAPU8[$3 + 2 | 0] << 16 | HEAPU8[$3 + 3 | 0] << 24);
     $15 = HEAPU8[$3 + 4 | 0] | HEAPU8[$3 + 5 | 0] << 8 | (HEAPU8[$3 + 6 | 0] << 16 | HEAPU8[$3 + 7 | 0] << 24);
     $8 = $8 ^ $15;
     $3 = $6 + $8 | 0;
     $12 = $12 ^ $17;
     $6 = $4 + $12 | 0;
     if ($6 >>> 0 < $4 >>> 0) {
      $3 = $3 + 1 | 0
     }
     $4 = $3;
     $7 = $3;
     $3 = $2 + $14 | 0;
     $9 = $5 + $9 | 0;
     if ($9 >>> 0 < $5 >>> 0) {
      $3 = $3 + 1 | 0
     }
     $5 = __wasm_rotl_i64($5, $2, 13) ^ $9;
     $2 = $7;
     $7 = i64toi32_i32$HIGH_BITS ^ $3;
     $2 = $2 + $7 | 0;
     $14 = $5 + $6 | 0;
     if ($14 >>> 0 < $5 >>> 0) {
      $2 = $2 + 1 | 0
     }
     $5 = __wasm_rotl_i64($5, $7, 17) ^ $14;
     $7 = $2;
     $2 = $2 ^ i64toi32_i32$HIGH_BITS;
     $6 = __wasm_rotl_i64($12, $8, 16) ^ $6;
     $4 = $4 ^ i64toi32_i32$HIGH_BITS;
     $12 = $4;
     $4 = __wasm_rotl_i64($6, $4, 21);
     $8 = i64toi32_i32$HIGH_BITS;
     $16 = $4;
     $4 = $6;
     $6 = __wasm_rotl_i64($9, $3, 32);
     $4 = $4 + $6 | 0;
     $3 = i64toi32_i32$HIGH_BITS + $12 | 0;
     $9 = $4;
     $12 = $16 ^ $4;
     $3 = $4 >>> 0 < $6 >>> 0 ? $3 + 1 | 0 : $3;
     $8 = $3 ^ $8;
     $4 = __wasm_rotl_i64($14, $7, 32);
     $6 = i64toi32_i32$HIGH_BITS;
     $9 = $9 ^ $17;
     $14 = $3 ^ $15;
     $11 = $11 + 8 | 0;
     if ($11 >>> 0 < $13 >>> 0) {
      continue
     }
     break;
    };
    $3 = $0 + 32 | 0;
    HEAP32[$3 >> 2] = $5;
    HEAP32[$3 + 4 >> 2] = $2;
    $2 = $0 + 16 | 0;
    HEAP32[$2 >> 2] = $9;
    HEAP32[$2 + 4 >> 2] = $14;
    $2 = $0 + 40 | 0;
    HEAP32[$2 >> 2] = $12;
    HEAP32[$2 + 4 >> 2] = $8;
    $2 = $0 + 24 | 0;
    HEAP32[$2 >> 2] = $4;
    HEAP32[$2 + 4 >> 2] = $6;
   }
   $4 = 4;
   label$11 : {
    if ($10 >>> 0 >= 4) {
     $2 = $1 + $11 | 0;
     $5 = HEAPU8[$2 | 0] | HEAPU8[$2 + 1 | 0] << 8 | (HEAPU8[$2 + 2 | 0] << 16 | HEAPU8[$2 + 3 | 0] << 24);
     $2 = 0;
     break label$11;
    }
    $5 = 0;
    $4 = 0;
    $2 = 0;
   }
   if (($4 | 1) >>> 0 < $10 >>> 0) {
    $2 = ($4 + $11 | 0) + $1 | 0;
    $6 = HEAPU8[$2 | 0] | HEAPU8[$2 + 1 | 0] << 8;
    $3 = $4 << 3;
    $2 = $3 & 31;
    if (32 <= ($3 & 63) >>> 0) {
     $3 = $6 << $2;
     $2 = 0;
    } else {
     $3 = (1 << $2) - 1 & $6 >>> 32 - $2;
     $2 = $6 << $2;
    }
    $5 = $2 | $5;
    $4 = $4 | 2;
    $2 = $3;
   }
   if ($4 >>> 0 < $10 >>> 0) {
    $6 = HEAPU8[($4 + $11 | 0) + $1 | 0];
    $3 = $4 << 3;
    $1 = $3 & 31;
    if (32 <= ($3 & 63) >>> 0) {
     $3 = $6 << $1;
     $1 = 0;
    } else {
     $3 = (1 << $1) - 1 & $6 >>> 32 - $1;
     $1 = $6 << $1;
    }
    $5 = $1 | $5;
    $2 = $3 | $2;
   }
   HEAP32[$0 + 48 >> 2] = $5;
   HEAP32[$0 + 52 >> 2] = $2;
  }
  HEAP32[$0 + 60 >> 2] = $10;
 }
 
 function core__num__bignum__Big32x40__div_rem__hdacb35c2d8ce4a26($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
  label$1 : {
   $6 = HEAP32[$1 >> 2];
   if ($6 >>> 0 < 41) {
    $4 = $1 + 4 | 0;
    $11 = $6 << 2;
    $10 = $4 + $11 | 0;
    label$3 : {
     while (1) {
      label$4 : {
       $7 = $1 + $5 | 0;
       if ($10 - $4 >>> 0 <= 12) {
        break label$4
       }
       if (HEAP32[$7 + 4 >> 2]) {
        break label$3
       }
       if (HEAP32[$7 + 8 >> 2]) {
        break label$3
       }
       if (HEAP32[$7 + 12 >> 2]) {
        break label$3
       }
       $5 = $5 + 16 | 0;
       $4 = $7 + 20 | 0;
       if (!HEAP32[$7 + 16 >> 2]) {
        continue
       }
       break label$3;
      }
      break;
     };
     $5 = $11 - $5 | 0;
     $4 = $7 + 4 | 0;
     while (1) {
      if (!$5) {
       break label$1
      }
      $5 = $5 + -4 | 0;
      $10 = HEAP32[$4 >> 2];
      $4 = $4 + 4 | 0;
      if (!$10) {
       continue
      }
      break;
     };
    }
    memset($2 + 4 | 0, 0, 160);
    $12 = memset($3 + 4 | 0, 0, 160);
    HEAP32[$3 >> 2] = $6;
    HEAP32[$2 >> 2] = 1;
    $8 = core__num__bignum__Big32x40__bit_length__h13ff63659f8edff3($0);
    label$7 : {
     if (!$8) {
      break label$7
     }
     $11 = $1 + 8 | 0;
     $10 = $3 + 8 | 0;
     $16 = 1;
     while (1) {
      core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e($3, 1);
      $8 = $8 + -1 | 0;
      $13 = $8 >>> 5;
      label$9 : {
       label$10 : {
        label$11 : {
         if ($8 >>> 0 < 1280) {
          $17 = $13 << 2;
          $18 = $8 & 31;
          $7 = HEAP32[$12 >> 2] | HEAP32[($17 + $0 | 0) + 4 >> 2] >>> $18 & 1;
          HEAP32[$12 >> 2] = $7;
          $4 = HEAP32[$3 >> 2];
          $5 = HEAP32[$1 >> 2];
          $9 = $5 >>> 0 < $4 >>> 0 ? $4 : $5;
          if ($9 >>> 0 >= 41) {
           break label$11
          }
          $4 = $9 << 2;
          label$13 : {
           label$14 : {
            while (1) {
             if (!$4) {
              break label$14
             }
             if (!$4) {
              break label$13
             }
             $6 = $3 + $4 | 0;
             $5 = $1 + $4 | 0;
             $4 = $4 + -4 | 0;
             $6 = HEAP32[$6 >> 2];
             $5 = HEAP32[$5 >> 2];
             if (($6 | 0) == ($5 | 0)) {
              continue
             }
             break;
            };
            if ($6 >>> 0 >= $5 >>> 0) {
             break label$13
            }
            break label$9;
           }
           if ($4) {
            break label$9
           }
          }
          if ($9) {
           $4 = $7 + (HEAP32[$1 + 4 >> 2] ^ -1) | 0;
           $5 = $4 + 1 | 0;
           HEAP32[$12 >> 2] = $5;
           $6 = $4 >>> 0 < $7 >>> 0 | $5 >>> 0 < $4 >>> 0;
           if (($9 | 0) != 1) {
            $14 = 1;
            $5 = $11;
            $4 = $10;
            while (1) {
             $7 = HEAP32[$4 >> 2];
             $15 = $7 + (HEAP32[$5 >> 2] ^ -1) | 0;
             $6 = $15 + ($6 & 1) | 0;
             HEAP32[$4 >> 2] = $6;
             $6 = $15 >>> 0 < $7 >>> 0 | $6 >>> 0 < $15 >>> 0;
             $5 = $5 + 4 | 0;
             $4 = $4 + 4 | 0;
             $14 = $14 + 1 | 0;
             if ($14 >>> 0 < $9 >>> 0) {
              continue
             }
             break;
            };
           }
           if (!$6) {
            break label$10
           }
          }
          HEAP32[$3 >> 2] = $9;
          if ($16) {
           HEAP32[$2 >> 2] = $13 + 1
          }
          $5 = ($2 + $17 | 0) + 4 | 0;
          HEAP32[$5 >> 2] = HEAP32[$5 >> 2] | 1 << $18;
          $16 = 0;
          if ($8) {
           continue
          }
          break label$7;
         }
         core__panicking__panic_bounds_check__h0537ade040df571e(1065788, $13, 40);
         abort();
        }
        core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($9, 40);
        abort();
       }
       core__panicking__panic__h2d0bc53a963fb996(1065848);
       abort();
      }
      if ($8) {
       continue
      }
      break;
     };
    }
    return;
   }
   core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($6, 40);
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1066104);
  abort();
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__hb96275d0dca88567($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  $3 = global$0 - 112 | 0;
  global$0 = $3;
  $4 = HEAP32[$1 >> 2];
  $6 = $3;
  $5 = HEAP32[$1 + 4 >> 2];
  if ((HEAPU8[$5 | 0] | 2) == 3) {
   $4 = $4 + 8 | 0
  }
  HEAP32[$6 + 56 >> 2] = HEAP32[$4 >> 2];
  HEAP32[$3 + 60 >> 2] = HEAP32[$2 + 16 >> 2];
  $4 = HEAP32[$1 + 28 >> 2];
  $7 = HEAP32[$1 + 24 >> 2];
  $8 = HEAP32[$1 + 20 >> 2];
  $9 = HEAP32[$1 + 16 >> 2];
  $10 = HEAP32[$1 + 12 >> 2];
  $11 = HEAP32[$1 + 8 >> 2];
  label$2 : {
   label$3 : {
    label$4 : {
     label$5 : {
      label$6 : {
       if ((HEAPU8[$5 | 0] | 1) == 3) {
        $6 = HEAP32[$2 >> 2];
        HEAP32[$3 + 64 >> 2] = $6;
        HEAP32[$3 + 68 >> 2] = $6 + Math_imul(HEAP32[$2 + 8 >> 2], 192);
        HEAP32[$3 + 104 >> 2] = $4;
        HEAP32[$3 + 100 >> 2] = $7;
        HEAP32[$3 + 96 >> 2] = $8;
        HEAP32[$3 + 88 >> 2] = $9;
        HEAP32[$3 + 84 >> 2] = $5;
        HEAP32[$3 + 76 >> 2] = $10;
        HEAP32[$3 + 72 >> 2] = $11;
        HEAP32[$3 + 92 >> 2] = $3 + 60;
        HEAP32[$3 + 80 >> 2] = $3 + 56;
        $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___try_fold__h019f9a3a3baf46ce($3 + 8 | 0, $3 - -64 | 0, $3 + 72 | 0);
        $5 = HEAP32[$3 + 8 >> 2];
        if (!$5) {
         break label$6
        }
        $4 = HEAP32[$3 + 12 >> 2];
        break label$2;
       }
       $6 = HEAP32[$2 >> 2];
       $12 = HEAP32[$2 + 8 >> 2];
       HEAP32[$3 + 104 >> 2] = $4;
       HEAP32[$3 + 100 >> 2] = $7;
       HEAP32[$3 + 96 >> 2] = $8;
       HEAP32[$3 + 88 >> 2] = $9;
       HEAP32[$3 + 84 >> 2] = $5;
       HEAP32[$3 + 76 >> 2] = $10;
       HEAP32[$3 + 72 >> 2] = $11;
       $7 = $6 + Math_imul($12, 192) | 0;
       HEAP32[$3 + 92 >> 2] = $3 + 60;
       HEAP32[$3 + 80 >> 2] = $3 + 56;
       $4 = $6;
       label$8 : {
        while (1) {
         if ($7 - $4 >>> 0 <= 576) {
          break label$8
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09($3 + 40 | 0, $3 + 72 | 0, $4);
         $5 = HEAP32[$3 + 40 >> 2];
         if ($5) {
          break label$5
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09($3 + 32 | 0, $3 + 72 | 0, $4 + 192 | 0);
         $5 = HEAP32[$3 + 32 >> 2];
         if ($5) {
          break label$4
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09($3 + 24 | 0, $3 + 72 | 0, $4 + 384 | 0);
         $5 = HEAP32[$3 + 24 >> 2];
         if ($5) {
          break label$3
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09($3 + 16 | 0, $3 + 72 | 0, $4 + 576 | 0);
         $4 = $4 + 768 | 0;
         $5 = HEAP32[$3 + 16 >> 2];
         if (!$5) {
          continue
         }
         break;
        };
        $4 = HEAP32[$3 + 20 >> 2];
        break label$2;
       }
       $6 = $6 + Math_imul($12, 192) | 0;
       while (1) {
        if (($4 | 0) == ($6 | 0)) {
         break label$6
        }
        stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09($3 + 48 | 0, $3 + 72 | 0, $4);
        $4 = $4 + 192 | 0;
        $5 = HEAP32[$3 + 48 >> 2];
        if (!$5) {
         continue
        }
        break;
       };
       $4 = HEAP32[$3 + 52 >> 2];
       break label$2;
      }
      $4 = HEAP32[$1 + 16 >> 2];
      HEAPF32[$4 >> 2] = Math_fround(HEAPF32[$3 + 60 >> 2] + HEAPF32[$2 + 12 >> 2]) + HEAPF32[$4 >> 2];
      $2 = HEAP32[$1 + 32 >> 2];
      $1 = HEAP32[$2 + 8 >> 2];
      if (($1 | 0) == HEAP32[$2 + 4 >> 2]) {
       alloc__raw_vec__RawVec_T_2cA___reserve__h7e75e39abff808bb($2, $1);
       $1 = HEAP32[$2 + 8 >> 2];
      }
      $5 = 0;
      $1 = HEAP32[$2 >> 2] + Math_imul($1, 12) | 0;
      HEAP32[$1 + 8 >> 2] = 0;
      HEAP32[$1 >> 2] = 4;
      HEAP32[$1 + 4 >> 2] = 0;
      $4 = $2 + 8 | 0;
      HEAP32[$4 >> 2] = HEAP32[$4 >> 2] + 1;
      break label$2;
     }
     $4 = HEAP32[$3 + 44 >> 2];
     break label$2;
    }
    $4 = HEAP32[$3 + 36 >> 2];
    break label$2;
   }
   $4 = HEAP32[$3 + 28 >> 2];
  }
  HEAP32[$0 + 4 >> 2] = $4;
  HEAP32[$0 >> 2] = $5;
  global$0 = $3 + 112 | 0;
 }
 
 function stretch__forest__Forest__new_node__h812321277be394a3($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  $4 = global$0 - 304 | 0;
  global$0 = $4;
  $8 = HEAP32[$0 + 8 >> 2];
  $3 = $8;
  label$1 : {
   $6 = HEAP32[$2 + 8 >> 2];
   if ($6) {
    $5 = HEAP32[$2 >> 2];
    $9 = $6 << 2;
    $10 = $0 + 32 | 0;
    $11 = $0 + 24 | 0;
    while (1) {
     $6 = HEAP32[$10 >> 2];
     $3 = HEAP32[$5 >> 2];
     if ($6 >>> 0 <= $3 >>> 0) {
      break label$1
     }
     $3 = HEAP32[$11 >> 2] + Math_imul($3, 12) | 0;
     $6 = $3 + 8 | 0;
     $7 = HEAP32[$3 + 8 >> 2];
     if (($7 | 0) == HEAP32[$3 + 4 >> 2]) {
      alloc__raw_vec__RawVec_T_2cA___reserve__h52463841ac7c0460($3, $7);
      $7 = HEAP32[$6 >> 2];
     }
     $5 = $5 + 4 | 0;
     HEAP32[HEAP32[$3 >> 2] + ($7 << 2) >> 2] = $8;
     HEAP32[$6 >> 2] = HEAP32[$6 >> 2] + 1;
     $9 = $9 + -4 | 0;
     if ($9) {
      continue
     }
     break;
    };
    $3 = HEAP32[$0 + 8 >> 2];
   }
   memcpy($4 + 88 | 0, $1, 212);
   HEAP32[$4 + 84 >> 2] = 0;
   $1 = $4 + 76 | 0;
   HEAP32[$1 >> 2] = 0;
   HEAP32[$1 + 4 >> 2] = 0;
   HEAP32[$4 + 68 >> 2] = 0;
   HEAP32[$4 + 72 >> 2] = 0;
   if (($3 | 0) == HEAP32[$0 + 4 >> 2]) {
    alloc__raw_vec__RawVec_T_2cA___reserve__h6ab7b297962633ea($0, $3);
    $3 = HEAP32[$0 + 8 >> 2];
   }
   $1 = memcpy(HEAP32[$0 >> 2] + Math_imul($3, 288) | 0, $4 + 88 | 0, 212);
   HEAP32[$1 + 212 >> 2] = 0;
   HEAP32[$1 + 240 >> 2] = 2;
   $5 = HEAP32[$4 + 68 >> 2];
   $3 = $1 + 216 | 0;
   HEAP32[$3 >> 2] = HEAP32[$4 + 64 >> 2];
   HEAP32[$3 + 4 >> 2] = $5;
   $5 = $4 + 72 | 0;
   $6 = HEAP32[$5 + 4 >> 2];
   $3 = $1 + 224 | 0;
   HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
   HEAP32[$3 + 4 >> 2] = $6;
   $5 = $4 + 80 | 0;
   $6 = HEAP32[$5 + 4 >> 2];
   $3 = $1 + 232 | 0;
   HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
   HEAP32[$3 + 4 >> 2] = $6;
   memcpy($1 + 244 | 0, $4 + 24 | 0, 40);
   HEAP8[$1 + 284 | 0] = 1;
   HEAP8[$1 + 287 | 0] = HEAPU8[$4 + 23 | 0];
   $3 = HEAPU8[$4 + 21 | 0] | HEAPU8[$4 + 22 | 0] << 8;
   HEAP8[$1 + 285 | 0] = $3;
   HEAP8[$1 + 286 | 0] = $3 >>> 8;
   $1 = $0 + 8 | 0;
   HEAP32[$1 >> 2] = HEAP32[$1 >> 2] + 1;
   $5 = $4 + 96 | 0;
   HEAP32[$5 >> 2] = HEAP32[$2 + 8 >> 2];
   $1 = HEAP32[$2 + 4 >> 2];
   HEAP32[$4 + 88 >> 2] = HEAP32[$2 >> 2];
   HEAP32[$4 + 92 >> 2] = $1;
   $3 = HEAP32[$0 + 20 >> 2];
   if (($3 | 0) == HEAP32[$0 + 16 >> 2]) {
    alloc__raw_vec__RawVec_T_2cA___reserve__h7e75e39abff808bb($0 + 12 | 0, $3);
    $3 = HEAP32[$0 + 20 >> 2];
   }
   $2 = HEAP32[$4 + 92 >> 2];
   $1 = HEAP32[$0 + 12 >> 2] + Math_imul($3, 12) | 0;
   HEAP32[$1 >> 2] = HEAP32[$4 + 88 >> 2];
   HEAP32[$1 + 4 >> 2] = $2;
   HEAP32[$1 + 8 >> 2] = HEAP32[$5 >> 2];
   $1 = $0 + 20 | 0;
   HEAP32[$1 >> 2] = HEAP32[$1 >> 2] + 1;
   alloc__raw_vec__RawVec_T_2cA___allocate_in__h37e24568f3387d91($4 + 8 | 0);
   $3 = $0 + 24 | 0;
   $5 = HEAP32[$4 + 12 >> 2];
   $6 = HEAP32[$4 + 8 >> 2];
   $1 = $0 + 32 | 0;
   $2 = HEAP32[$1 >> 2];
   if (($2 | 0) == HEAP32[$0 + 28 >> 2]) {
    alloc__raw_vec__RawVec_T_2cA___reserve__h7e75e39abff808bb($3, $2);
    $2 = HEAP32[$1 >> 2];
   }
   $0 = HEAP32[$3 >> 2] + Math_imul($2, 12) | 0;
   HEAP32[$0 + 8 >> 2] = 0;
   HEAP32[$0 + 4 >> 2] = $5;
   HEAP32[$0 >> 2] = $6;
   HEAP32[$1 >> 2] = HEAP32[$1 >> 2] + 1;
   global$0 = $4 + 304 | 0;
   return $8;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $3, $6);
  abort();
 }
 
 function hashbrown__raw__RawTable_T___resize__h4d6b531161ae3e7d($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
  $5 = global$0 - 32 | 0;
  global$0 = $5;
  HEAP32[$5 + 4 >> 2] = $2;
  hashbrown__raw__RawTable_T___try_with_capacity__hcabcbfe869fb1322($5 + 8 | 0, $1);
  label$1 : {
   if (HEAPU8[$5 + 8 | 0] == 1) {
    break label$1
   }
   $15 = HEAP32[$5 + 24 >> 2];
   $12 = HEAP32[$5 + 20 >> 2];
   $9 = HEAP32[$5 + 16 >> 2];
   $10 = HEAP32[$5 + 12 >> 2];
   $1 = HEAP32[$0 + 4 >> 2];
   $2 = $1 + 4 | 0;
   $16 = ($1 + HEAP32[$0 >> 2] | 0) + 1 | 0;
   $11 = HEAP32[$0 + 8 >> 2];
   $13 = HEAP32[$0 + 16 >> 2];
   $7 = (HEAP32[$1 >> 2] ^ -1) & -2139062144;
   $1 = 0;
   label$3 : {
    if (!$7) {
     break label$3
    }
    $1 = 1;
   }
   while (1) {
    label$6 : {
     label$7 : {
      label$8 : {
       label$9 : {
        if (!$1) {
         if ($2 >>> 0 >= $16 >>> 0) {
          break label$9
         }
         $11 = $11 + 80 | 0;
         $6 = HEAP32[$2 >> 2];
         $1 = $2 + 4 | 0;
         $2 = $1;
         $6 = $6 & -2139062144;
         if (($6 | 0) == -2139062144) {
          break label$8
         }
         $7 = $6 ^ -2139062144;
         $2 = $1;
         $1 = 1;
         continue;
        }
        $1 = $5 + 4 | 0;
        if ($7) {
         $4 = 31 - Math_clz32($7 + -1 ^ $7) | 0
        } else {
         $4 = 32
        }
        $6 = Math_imul($4 >>> 3, 20) + $11 | 0;
        $14 = hashbrown__map__HashMap_K_2cV_2cS___insert___7b_7bclosure_7d_7d__h8e0fa770beed92d3($1, $6);
        $1 = $14;
        $8 = 0;
        while (1) {
         $8 = $8 + 4 | 0;
         $4 = $1 & $10;
         $1 = $8 + $4 | 0;
         $3 = $9 + $4 | 0;
         $3 = (HEAPU8[$3 | 0] | HEAPU8[$3 + 1 | 0] << 8 | (HEAPU8[$3 + 2 | 0] << 16 | HEAPU8[$3 + 3 | 0] << 24)) & -2139062144;
         if (!$3) {
          continue
         }
         break;
        };
        $8 = $9;
        $1 = $10;
        if ($3) {
         $3 = 31 - Math_clz32($3 + -1 ^ $3) | 0
        } else {
         $3 = 32
        }
        $1 = $1 & $4 + ($3 >>> 3);
        if (HEAP8[$8 + $1 | 0] >= 0) {
         $1 = HEAP32[$9 >> 2] & -2139062144;
         $4 = 31 - Math_clz32($1 ^ $1 + -1) | 0;
         __inlined_func$__wasm_ctz_i321 : {
          if ($1) {
           break __inlined_func$__wasm_ctz_i321
          }
          $4 = 32;
         }
         $1 = $4 >>> 3;
        }
        $3 = $14 >>> 25;
        HEAP8[$1 + $9 | 0] = $3;
        HEAP8[(($10 & $1 + -4) + $9 | 0) + 4 | 0] = $3;
        $1 = Math_imul($1, 20) + $12 | 0;
        HEAP32[$1 + 16 >> 2] = HEAP32[$6 + 16 >> 2];
        $3 = $6 + 8 | 0;
        $8 = HEAP32[$3 + 4 >> 2];
        $4 = $1 + 8 | 0;
        HEAP32[$4 >> 2] = HEAP32[$3 >> 2];
        HEAP32[$4 + 4 >> 2] = $8;
        $3 = HEAP32[$6 + 4 >> 2];
        HEAP32[$1 >> 2] = HEAP32[$6 >> 2];
        HEAP32[$1 + 4 >> 2] = $3;
        $7 = $7 + -1 & $7;
        if ($7) {
         break label$6
        }
        break label$7;
       }
       HEAP32[$0 + 16 >> 2] = $13;
       HEAP32[$0 + 12 >> 2] = $15 - $13;
       HEAP32[$0 + 8 >> 2] = $12;
       $1 = HEAP32[$0 >> 2];
       HEAP32[$0 >> 2] = $10;
       $0 = $0 + 4 | 0;
       $2 = HEAP32[$0 >> 2];
       HEAP32[$0 >> 2] = $9;
       if (!$1) {
        break label$1
       }
       __wasm_i64_mul($1 + 1 | 0, 0, 20);
       label$14 : {
        if (i64toi32_i32$HIGH_BITS) {
         break label$14
        }
        if (($1 + 8 & -4) >>> 0 < $1 + 5 >>> 0) {
         break label$14
        }
       }
       dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($2);
       break label$1;
      }
      $1 = 0;
      continue;
     }
     $1 = 0;
     continue;
    }
    $1 = 1;
    continue;
   };
  }
  global$0 = $5 + 32 | 0;
 }
 
 function hashbrown__raw__RawTable_T___resize__h49539e222be8da42($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
  $5 = global$0 - 32 | 0;
  global$0 = $5;
  HEAP32[$5 + 4 >> 2] = $2;
  hashbrown__raw__RawTable_T___try_with_capacity__hcabcbfe869fb1322($5 + 8 | 0, $1);
  label$1 : {
   if (HEAPU8[$5 + 8 | 0] == 1) {
    break label$1
   }
   $15 = HEAP32[$5 + 24 >> 2];
   $12 = HEAP32[$5 + 20 >> 2];
   $9 = HEAP32[$5 + 16 >> 2];
   $10 = HEAP32[$5 + 12 >> 2];
   $1 = HEAP32[$0 + 4 >> 2];
   $2 = $1 + 4 | 0;
   $16 = ($1 + HEAP32[$0 >> 2] | 0) + 1 | 0;
   $11 = HEAP32[$0 + 8 >> 2];
   $13 = HEAP32[$0 + 16 >> 2];
   $7 = (HEAP32[$1 >> 2] ^ -1) & -2139062144;
   $1 = 0;
   label$3 : {
    if (!$7) {
     break label$3
    }
    $1 = 1;
   }
   while (1) {
    label$6 : {
     label$7 : {
      label$8 : {
       label$9 : {
        if (!$1) {
         if ($2 >>> 0 >= $16 >>> 0) {
          break label$9
         }
         $11 = $11 + 80 | 0;
         $6 = HEAP32[$2 >> 2];
         $1 = $2 + 4 | 0;
         $2 = $1;
         $6 = $6 & -2139062144;
         if (($6 | 0) == -2139062144) {
          break label$8
         }
         $7 = $6 ^ -2139062144;
         $2 = $1;
         $1 = 1;
         continue;
        }
        $1 = $5 + 4 | 0;
        if ($7) {
         $4 = 31 - Math_clz32($7 + -1 ^ $7) | 0
        } else {
         $4 = 32
        }
        $6 = Math_imul($4 >>> 3, 20) + $11 | 0;
        $14 = hashbrown__map__HashMap_K_2cV_2cS___insert___7b_7bclosure_7d_7d__h7ff258d5db5557c5($1, $6);
        $1 = $14;
        $8 = 0;
        while (1) {
         $8 = $8 + 4 | 0;
         $4 = $1 & $10;
         $1 = $8 + $4 | 0;
         $3 = $9 + $4 | 0;
         $3 = (HEAPU8[$3 | 0] | HEAPU8[$3 + 1 | 0] << 8 | (HEAPU8[$3 + 2 | 0] << 16 | HEAPU8[$3 + 3 | 0] << 24)) & -2139062144;
         if (!$3) {
          continue
         }
         break;
        };
        $8 = $9;
        $1 = $10;
        if ($3) {
         $3 = 31 - Math_clz32($3 + -1 ^ $3) | 0
        } else {
         $3 = 32
        }
        $1 = $1 & $4 + ($3 >>> 3);
        if (HEAP8[$8 + $1 | 0] >= 0) {
         $1 = HEAP32[$9 >> 2] & -2139062144;
         $4 = 31 - Math_clz32($1 ^ $1 + -1) | 0;
         __inlined_func$__wasm_ctz_i321 : {
          if ($1) {
           break __inlined_func$__wasm_ctz_i321
          }
          $4 = 32;
         }
         $1 = $4 >>> 3;
        }
        $3 = $14 >>> 25;
        HEAP8[$1 + $9 | 0] = $3;
        HEAP8[(($10 & $1 + -4) + $9 | 0) + 4 | 0] = $3;
        $1 = Math_imul($1, 20) + $12 | 0;
        HEAP32[$1 + 16 >> 2] = HEAP32[$6 + 16 >> 2];
        $3 = $6 + 8 | 0;
        $8 = HEAP32[$3 + 4 >> 2];
        $4 = $1 + 8 | 0;
        HEAP32[$4 >> 2] = HEAP32[$3 >> 2];
        HEAP32[$4 + 4 >> 2] = $8;
        $3 = HEAP32[$6 + 4 >> 2];
        HEAP32[$1 >> 2] = HEAP32[$6 >> 2];
        HEAP32[$1 + 4 >> 2] = $3;
        $7 = $7 + -1 & $7;
        if ($7) {
         break label$6
        }
        break label$7;
       }
       HEAP32[$0 + 16 >> 2] = $13;
       HEAP32[$0 + 12 >> 2] = $15 - $13;
       HEAP32[$0 + 8 >> 2] = $12;
       $1 = HEAP32[$0 >> 2];
       HEAP32[$0 >> 2] = $10;
       $0 = $0 + 4 | 0;
       $2 = HEAP32[$0 >> 2];
       HEAP32[$0 >> 2] = $9;
       if (!$1) {
        break label$1
       }
       __wasm_i64_mul($1 + 1 | 0, 0, 20);
       label$14 : {
        if (i64toi32_i32$HIGH_BITS) {
         break label$14
        }
        if (($1 + 8 & -4) >>> 0 < $1 + 5 >>> 0) {
         break label$14
        }
       }
       dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($2);
       break label$1;
      }
      $1 = 0;
      continue;
     }
     $1 = 0;
     continue;
    }
    $1 = 1;
    continue;
   };
  }
  global$0 = $5 + 32 | 0;
 }
 
 function $std__collections__hash__map__HashMap_K_2cV_2cS__20as_20core__ops__index__Index__Q____index__ha77d1aee23695641($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
  $7 = global$0 - 80 | 0;
  global$0 = $7;
  $9 = HEAP32[$0 + 12 >> 2];
  $3 = $7 + 48 | 0;
  $2 = $3;
  $5 = HEAP32[$0 + 8 >> 2];
  HEAP32[$2 >> 2] = $5 ^ 2037671283;
  HEAP32[$2 + 4 >> 2] = $9 ^ 1952801890;
  $8 = $7 + 40 | 0;
  $2 = $8;
  HEAP32[$2 >> 2] = $5 ^ 1852075885;
  HEAP32[$2 + 4 >> 2] = $9 ^ 1685025377;
  $10 = HEAP32[$0 + 4 >> 2];
  $6 = $7 + 32 | 0;
  $2 = $6;
  $4 = HEAP32[$0 >> 2];
  HEAP32[$2 >> 2] = $4 ^ 1852142177;
  HEAP32[$2 + 4 >> 2] = $10 ^ 1819895653;
  HEAP32[$7 + 64 >> 2] = 0;
  HEAP32[$7 + 68 >> 2] = 0;
  HEAP32[$7 + 56 >> 2] = 0;
  HEAP32[$7 + 60 >> 2] = 0;
  HEAP32[$7 + 16 >> 2] = $5;
  HEAP32[$7 + 20 >> 2] = $9;
  HEAP32[$7 + 8 >> 2] = $4;
  HEAP32[$7 + 12 >> 2] = $10;
  HEAP32[$7 + 24 >> 2] = $4 ^ 1886610805;
  HEAP32[$7 + 28 >> 2] = $10 ^ 1936682341;
  $16 = HEAP32[$1 >> 2];
  HEAP32[$7 + 76 >> 2] = $16;
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($7 + 8 | 0, $7 + 76 | 0);
  $13 = HEAP32[$7 + 60 >> 2] | HEAP32[$7 + 64 >> 2] << 24;
  $2 = $13 ^ HEAP32[$3 + 4 >> 2];
  $1 = $2;
  $12 = HEAP32[$7 + 56 >> 2];
  $5 = $12 ^ HEAP32[$3 >> 2];
  $4 = __wasm_rotl_i64($5, $1, 16);
  $3 = i64toi32_i32$HIGH_BITS;
  $1 = HEAP32[$6 + 4 >> 2] + $1 | 0;
  $2 = HEAP32[$6 >> 2];
  $5 = $5 + $2 | 0;
  if ($5 >>> 0 < $2 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $17 = $4 ^ $5;
  $4 = $1;
  $6 = $3 ^ $1;
  $11 = $6;
  $9 = HEAP32[$8 + 4 >> 2];
  $1 = $9 + HEAP32[$7 + 28 >> 2] | 0;
  $8 = HEAP32[$8 >> 2];
  $2 = HEAP32[$7 + 24 >> 2];
  $14 = $8 + $2 | 0;
  if ($14 >>> 0 < $2 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $3 = __wasm_rotl_i64($14, $1, 32);
  $15 = $3 + $17 | 0;
  $2 = i64toi32_i32$HIGH_BITS + $6 | 0;
  $10 = $15 >>> 0 < $3 >>> 0 ? $2 + 1 | 0 : $2;
  $6 = $13 ^ $10;
  $2 = __wasm_rotl_i64($8, $9, 13) ^ $14;
  $3 = $1 ^ i64toi32_i32$HIGH_BITS;
  $1 = $4 + $3 | 0;
  $4 = $2 + $5 | 0;
  if ($4 >>> 0 < $2 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $3 = __wasm_rotl_i64($2, $3, 17) ^ $4;
  $2 = $1;
  $5 = $1 ^ i64toi32_i32$HIGH_BITS;
  $1 = $6 + $5 | 0;
  $6 = $3 + ($12 ^ $15) | 0;
  if ($6 >>> 0 < $3 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $9 = __wasm_rotl_i64($3, $5, 13) ^ $6;
  $3 = $1;
  $1 = $1 ^ i64toi32_i32$HIGH_BITS;
  $8 = $1;
  $13 = __wasm_rotl_i64($17, $11, 21) ^ $15;
  $12 = $10 ^ i64toi32_i32$HIGH_BITS;
  $4 = __wasm_rotl_i64($4, $2, 32) ^ 255;
  $2 = $4 + $13 | 0;
  $1 = i64toi32_i32$HIGH_BITS + $12 | 0;
  $11 = $2 >>> 0 < $4 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $8 + $11 | 0;
  $5 = $2 + $9 | 0;
  if ($5 >>> 0 < $2 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $9 = __wasm_rotl_i64($9, $8, 17) ^ $5;
  $4 = $1;
  $1 = $1 ^ i64toi32_i32$HIGH_BITS;
  $10 = __wasm_rotl_i64($9, $1, 13);
  $8 = i64toi32_i32$HIGH_BITS;
  $13 = __wasm_rotl_i64($13, $12, 16) ^ $2;
  $12 = $11 ^ i64toi32_i32$HIGH_BITS;
  $3 = __wasm_rotl_i64($6, $3, 32);
  $2 = $3 + $13 | 0;
  $6 = $1;
  $1 = i64toi32_i32$HIGH_BITS + $12 | 0;
  $11 = $2 >>> 0 < $3 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $6 + $11 | 0;
  $6 = $2 + $9 | 0;
  if ($6 >>> 0 < $2 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $9 = $10 ^ $6;
  $3 = $1;
  $1 = $1 ^ $8;
  $8 = __wasm_rotl_i64($9, $1, 17);
  $10 = i64toi32_i32$HIGH_BITS;
  $13 = __wasm_rotl_i64($13, $12, 21) ^ $2;
  $12 = $11 ^ i64toi32_i32$HIGH_BITS;
  $4 = __wasm_rotl_i64($5, $4, 32);
  $2 = $4 + $13 | 0;
  $5 = $1;
  $1 = i64toi32_i32$HIGH_BITS + $12 | 0;
  $11 = $2 >>> 0 < $4 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $5 + $11 | 0;
  $5 = $2 + $9 | 0;
  if ($5 >>> 0 < $2 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $8 = $5 ^ $8;
  $4 = $1;
  $1 = $1 ^ $10;
  $9 = __wasm_rotl_i64($8, $1, 13);
  $10 = i64toi32_i32$HIGH_BITS;
  $12 = __wasm_rotl_i64($13, $12, 16) ^ $2;
  $11 = $11 ^ i64toi32_i32$HIGH_BITS;
  $3 = __wasm_rotl_i64($6, $3, 32);
  $2 = $3 + $12 | 0;
  $6 = $1;
  $1 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $3 = $2 >>> 0 < $3 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $6 + $3 | 0;
  $8 = $2 + $8 | 0;
  if ($8 >>> 0 < $2 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $1 = $1 ^ $10;
  $6 = $1;
  $11 = __wasm_rotl_i64($12, $11, 21) ^ $2;
  $10 = $3 ^ i64toi32_i32$HIGH_BITS;
  $4 = __wasm_rotl_i64($5, $4, 32);
  $2 = $4 + $11 | 0;
  $1 = i64toi32_i32$HIGH_BITS + $10 | 0;
  $3 = $2 >>> 0 < $4 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $6 + $3 | 0;
  $5 = $9 ^ $8;
  $4 = $2 + $5 | 0;
  if ($4 >>> 0 < $2 >>> 0) {
   $1 = $1 + 1 | 0
  }
  $2 = $1 ^ (__wasm_rotl_i64(__wasm_rotl_i64($11, $10, 16) ^ $2, $3 ^ i64toi32_i32$HIGH_BITS, 21) ^ $4 ^ __wasm_rotl_i64($5, $6, 17));
  $1 = $2 >>> 25;
  $1 = $1 << 8 | $1;
  $3 = $1 << 16 | $1;
  $9 = HEAP32[$0 + 16 >> 2];
  $1 = $9 & $2;
  $10 = HEAP32[$0 + 24 >> 2];
  $5 = HEAP32[$0 + 20 >> 2];
  $8 = 0;
  label$1 : {
   while (1) {
    $0 = $1 + $5 | 0;
    $6 = HEAPU8[$0 | 0] | HEAPU8[$0 + 1 | 0] << 8 | (HEAPU8[$0 + 2 | 0] << 16 | HEAPU8[$0 + 3 | 0] << 24);
    $0 = $6 ^ $3;
    $0 = ($0 ^ -1) & $0 + -16843009 & -2139062144;
    $8 = $8 + 4 | 0;
    $2 = $9 & $8 + $1;
    while (1) {
     if ($0) {
      if ($0) {
       $4 = 31 - Math_clz32($0 + -1 ^ $0) | 0
      } else {
       $4 = 32
      }
      $0 = $0 + -1 & $0;
      $4 = $9 & ($4 >>> 3) + $1;
      if (($16 | 0) != HEAP32[$10 + Math_imul($4, 20) >> 2]) {
       continue
      }
      break label$1;
     }
     break;
    };
    $1 = $2;
    if (!($6 << 1 & $6 & -2139062144)) {
     continue
    }
    break;
   };
   core__option__expect_failed__h4b77ebe6e62ec3a1(1051160);
   abort();
  }
  global$0 = $7 + 80 | 0;
  return ($10 + Math_imul($4, 20) | 0) + 4 | 0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h5612a521e1631bab($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, wasm2js_i32$0 = 0, wasm2js_f32$0 = Math_fround(0);
  $4 = global$0 + -64 | 0;
  global$0 = $4;
  $9 = HEAP32[$2 >> 2];
  $8 = HEAP32[HEAP32[$1 >> 2] >> 2];
  $3 = HEAPU8[HEAP32[$1 + 4 >> 2]];
  HEAP32[$4 + 36 >> 2] = HEAP32[($3 ? $2 + 148 | 0 : $2 + 164 | 0) >> 2];
  HEAP32[$4 + 32 >> 2] = 0;
  HEAP32[$4 + 24 >> 2] = 0;
  HEAP32[$4 + 28 >> 2] = HEAP32[($3 ? $2 + 160 | 0 : $2 + 144 | 0) >> 2];
  label$1 : {
   if ($3) {
    $7 = HEAP32[$1 + 12 >> 2];
    $3 = $7 + 12 | 0;
    $6 = HEAP32[$1 + 8 >> 2];
    $7 = HEAP32[$7 + 8 >> 2];
    break label$1;
   }
   $3 = HEAP32[$1 + 8 >> 2] + 4 | 0;
   $5 = HEAP32[$1 + 12 >> 2];
   $6 = $5 + 4 | 0;
   $5 = HEAP32[$5 >> 2];
   $7 = 0;
  }
  HEAP32[$4 + 52 >> 2] = HEAP32[$3 >> 2];
  HEAP32[$4 + 48 >> 2] = $7;
  HEAP32[$4 + 40 >> 2] = $5;
  HEAP32[$4 + 44 >> 2] = HEAP32[$6 >> 2];
  stretch__algo___impl_20stretch__forest__Forest___compute_internal__ha2ac585b869d5aaa($4 + 8 | 0, $8, $9, $4 + 24 | 0, $4 + 40 | 0, 1);
  $7 = HEAP32[$4 + 16 >> 2];
  $9 = HEAP32[$4 + 12 >> 2];
  label$3 : {
   label$4 : {
    $3 = HEAP32[$4 + 8 >> 2];
    label$5 : {
     label$6 : {
      if (!$3) {
       break label$6
      }
      if (($3 | 0) == 1) {
       break label$5
      }
      FUNCTION_TABLE[HEAP32[$7 >> 2]]($9);
      if (!HEAP32[$7 + 4 >> 2]) {
       break label$6
      }
      dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($9);
     }
     $10 = HEAP32[HEAP32[$1 >> 2] >> 2];
     $3 = HEAP32[$10 + 20 >> 2];
     $1 = HEAP32[HEAP32[$1 + 16 >> 2] >> 2];
     if ($3 >>> 0 <= $1 >>> 0) {
      break label$3
     }
     $6 = HEAP32[$2 >> 2];
     $3 = HEAP32[$10 + 12 >> 2] + Math_imul($1, 12) | 0;
     $1 = HEAP32[$3 >> 2];
     $8 = HEAP32[$3 + 8 >> 2] << 2;
     $12 = $1 + $8 | 0;
     $5 = 0;
     $3 = $1;
     label$7 : {
      while (1) {
       if ($12 - $3 >>> 0 > 12) {
        $3 = HEAP32[$1 >> 2];
        $5 = (($3 | 0) != ($6 | 0)) + $5 | 0;
        if (($3 | 0) == ($6 | 0)) {
         break label$7
        }
        $3 = HEAP32[$1 + 4 >> 2];
        $5 = (($3 | 0) != ($6 | 0)) + $5 | 0;
        if (($3 | 0) == ($6 | 0)) {
         break label$7
        }
        $3 = HEAP32[$1 + 8 >> 2];
        $5 = (($3 | 0) != ($6 | 0)) + $5 | 0;
        if (($3 | 0) == ($6 | 0)) {
         break label$7
        }
        $8 = $8 + -16 | 0;
        $11 = HEAP32[$1 + 12 >> 2];
        $5 = (($11 | 0) != ($6 | 0)) + $5 | 0;
        $3 = $1 + 16 | 0;
        $1 = $3;
        if (($6 | 0) != ($11 | 0)) {
         continue
        }
        break label$7;
       }
       break;
      };
      $5 = 1 - $5 | 0;
      while (1) {
       if (!$8) {
        break label$4
       }
       $5 = $5 + -1 | 0;
       $8 = $8 + -4 | 0;
       $3 = HEAP32[$1 >> 2];
       $1 = $1 + 4 | 0;
       $3 = ($3 | 0) == ($6 | 0);
       if (!$3) {
        continue
       }
       break;
      };
      $5 = ($3 + 1 & 1) - $5 | 0;
     }
     HEAP32[$4 + 48 >> 2] = $7;
     HEAP32[$4 + 52 >> 2] = 0;
     HEAP32[$4 + 56 >> 2] = 0;
     HEAP32[$4 + 44 >> 2] = $9;
     HEAP32[$4 + 40 >> 2] = $5;
     (wasm2js_i32$0 = $2, wasm2js_f32$0 = stretch__algo___impl_20stretch__forest__Forest___compute_internal__calc_baseline__h62c01a9be0888d54($10, $6, $4 + 40 | 0)), HEAPF32[wasm2js_i32$0 + 176 >> 2] = wasm2js_f32$0;
     $9 = 0;
    }
    HEAP32[$0 + 4 >> 2] = $7;
    HEAP32[$0 >> 2] = $9;
    global$0 = $4 - -64 | 0;
    return;
   }
   core__panicking__panic__h2d0bc53a963fb996(1050988);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $1, $3);
  abort();
 }
 
 function stretch__node__Stretch__new_node__hd6818620093f909c($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  $4 = global$0 - 304 | 0;
  global$0 = $4;
  HEAP32[$4 + 4 >> 2] = $1;
  $6 = $1 + 100 | 0;
  $5 = HEAP32[$6 >> 2];
  label$1 : {
   if ($5) {
    $7 = $6;
    $6 = $5 + -1 | 0;
    HEAP32[$7 >> 2] = $6;
    $5 = HEAP32[$1 + 92 >> 2] + ($6 << 3) | 0;
    $6 = HEAP32[$5 + 4 >> 2] + 1 | 0;
    $5 = HEAP32[$5 >> 2];
    break label$1;
   }
   $5 = HEAP32[$1 + 88 >> 2];
   HEAP32[$1 + 88 >> 2] = $5 + 1;
   $6 = 0;
  }
  $11 = HEAP32[$1 + 84 >> 2];
  $12 = HEAP32[$1 + 80 >> 2];
  $1 = HEAP32[$3 + 8 >> 2];
  $10 = HEAP32[$3 >> 2];
  HEAP32[$4 + 72 >> 2] = $10;
  HEAP32[$4 + 76 >> 2] = $10 + ($1 << 4);
  HEAP32[$4 + 80 >> 2] = $4 + 4;
  HEAP32[$4 + 84 >> 2] = 2;
  $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____from_iter__h6dc1793ab3f658eb($4 + 288 | 0, $4 + 72 | 0);
  $1 = $4 + 84 | 0;
  label$3 : {
   if (HEAP32[$4 + 84 >> 2] == 2) {
    $7 = $4 + 56 | 0;
    HEAP32[$7 >> 2] = HEAP32[$4 + 296 >> 2];
    $8 = HEAP32[$4 + 292 >> 2];
    HEAP32[$4 + 48 >> 2] = HEAP32[$4 + 288 >> 2];
    HEAP32[$4 + 52 >> 2] = $8;
    HEAP32[$4 + 40 >> 2] = HEAP32[$4 - -64 >> 2];
    $8 = HEAP32[$7 + 4 >> 2];
    $9 = $4 + 32 | 0;
    HEAP32[$9 >> 2] = HEAP32[$7 >> 2];
    HEAP32[$9 + 4 >> 2] = $8;
    $8 = HEAP32[$4 + 52 >> 2];
    HEAP32[$4 + 24 >> 2] = HEAP32[$4 + 48 >> 2];
    HEAP32[$4 + 28 >> 2] = $8;
    $8 = $4 + 16 | 0;
    HEAP32[$8 >> 2] = HEAP32[$9 >> 2];
    $9 = HEAP32[$4 + 28 >> 2];
    HEAP32[$4 + 8 >> 2] = HEAP32[$4 + 24 >> 2];
    HEAP32[$4 + 12 >> 2] = $9;
    $9 = HEAP32[$4 + 4 >> 2];
    memcpy($4 + 72 | 0, $2, 212);
    HEAP32[$7 >> 2] = HEAP32[$8 >> 2];
    $2 = HEAP32[$4 + 12 >> 2];
    HEAP32[$4 + 48 >> 2] = HEAP32[$4 + 8 >> 2];
    HEAP32[$4 + 52 >> 2] = $2;
    $2 = stretch__forest__Forest__new_node__h812321277be394a3($9 + 104 | 0, $4 + 72 | 0, $4 + 48 | 0);
    $7 = HEAP32[$4 + 4 >> 2];
    HEAP32[$1 >> 2] = $6;
    HEAP32[$4 + 80 >> 2] = $5;
    HEAP32[$4 + 76 >> 2] = $11;
    HEAP32[$4 + 72 >> 2] = $12;
    stretch__node__Stretch__add_node__hd4b6e5bc2be15460($7, $4 + 72 | 0, $2);
    HEAP32[$0 + 16 >> 2] = $6;
    HEAP32[$0 + 12 >> 2] = $5;
    HEAP32[$0 + 8 >> 2] = $11;
    HEAP32[$0 + 4 >> 2] = $12;
    HEAP32[$0 >> 2] = 0;
    if (!HEAP32[$3 + 4 >> 2]) {
     break label$3
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($10);
    break label$3;
   }
   $6 = $4 - -64 | 0;
   HEAP32[$6 >> 2] = HEAP32[$1 + 16 >> 2];
   $5 = $1 + 8 | 0;
   $7 = HEAP32[$5 + 4 >> 2];
   $2 = $4 + 56 | 0;
   HEAP32[$2 >> 2] = HEAP32[$5 >> 2];
   HEAP32[$2 + 4 >> 2] = $7;
   $5 = HEAP32[$1 + 4 >> 2];
   HEAP32[$4 + 48 >> 2] = HEAP32[$1 >> 2];
   HEAP32[$4 + 52 >> 2] = $5;
   if (HEAP32[$4 + 292 >> 2]) {
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$4 + 288 >> 2])
   }
   $5 = $4 + 40 | 0;
   HEAP32[$5 >> 2] = HEAP32[$6 >> 2];
   $6 = HEAP32[$2 + 4 >> 2];
   $1 = $4 + 32 | 0;
   HEAP32[$1 >> 2] = HEAP32[$2 >> 2];
   HEAP32[$1 + 4 >> 2] = $6;
   $2 = HEAP32[$4 + 52 >> 2];
   HEAP32[$4 + 24 >> 2] = HEAP32[$4 + 48 >> 2];
   HEAP32[$4 + 28 >> 2] = $2;
   HEAP32[$0 >> 2] = 1;
   HEAP32[$0 + 20 >> 2] = HEAP32[$5 >> 2];
   $2 = HEAP32[$1 + 4 >> 2];
   $6 = $0 + 12 | 0;
   HEAP32[$6 >> 2] = HEAP32[$1 >> 2];
   HEAP32[$6 + 4 >> 2] = $2;
   $1 = HEAP32[$4 + 28 >> 2];
   HEAP32[$0 + 4 >> 2] = HEAP32[$4 + 24 >> 2];
   HEAP32[$0 + 8 >> 2] = $1;
   if (!HEAP32[$3 + 4 >> 2]) {
    break label$3
   }
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($10);
  }
  global$0 = $4 + 304 | 0;
 }
 
 function $char_20as_20core__fmt__Debug___fmt__h8724f2c9877f6e71($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  if (FUNCTION_TABLE[HEAP32[HEAP32[$1 + 28 >> 2] + 16 >> 2]](HEAP32[$1 + 24 >> 2], 39)) {
   return 1
  }
  $2 = 2;
  label$2 : {
   label$3 : {
    label$4 : {
     label$5 : {
      label$6 : {
       label$7 : {
        $0 = HEAP32[$0 >> 2];
        $4 = $0 + -9 | 0;
        if ($4 >>> 0 <= 30) {
         $5 = 116;
         label$10 : {
          switch ($4 - 1 | 0) {
          case 0:
           break label$10;
          case 24:
          case 29:
           break label$3;
          case 3:
           break label$6;
          case 1:
          case 2:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 25:
          case 26:
          case 27:
          case 28:
           break label$7;
          default:
           break label$2;
          };
         }
         $5 = 110;
         break label$2;
        }
        if (($0 | 0) != 92) {
         break label$7
        }
        break label$3;
       }
       if (!core__unicode__bool_trie__BoolTrie__lookup__h31c9aa57385fbd21($0)) {
        break label$5
       }
       $3 = 5;
       $6 = Math_clz32($0 | 1) >>> 2 ^ 7;
       break label$4;
      }
      $5 = 114;
      break label$2;
     }
     label$11 : {
      label$12 : {
       if ($0 >>> 0 < 65536) {
        if (core__unicode__printable__check__h1e7c010e493ddb3e($0, 1061328, 40, 1061408, 303, 1061711, 316)) {
         break label$12
        }
        break label$11;
       }
       if ($0 >>> 0 < 131072) {
        if (core__unicode__printable__check__h1e7c010e493ddb3e($0, 1062027, 33, 1062093, 158, 1062251, 381)) {
         break label$12
        }
        break label$11;
       }
       if ($0 >>> 0 > 917999) {
        break label$11
       }
       if ($0 + -195102 >>> 0 < 722658) {
        break label$11
       }
       if ($0 + -191457 >>> 0 < 3103) {
        break label$11
       }
       if ($0 + -183970 >>> 0 < 14) {
        break label$11
       }
       if (($0 & 2097150) == 178206) {
        break label$11
       }
       if ($0 + -173783 >>> 0 < 41) {
        break label$11
       }
       if ($0 + -177973 >>> 0 <= 10) {
        break label$11
       }
      }
      $2 = 1;
      break label$3;
     }
     $3 = 5;
     $6 = Math_clz32($0 | 1) >>> 2 ^ 7;
    }
    $2 = 3;
   }
   $5 = $0;
  }
  $7 = $1 + 24 | 0;
  $8 = $1 + 28 | 0;
  while (1) {
   label$16 : {
    label$17 : {
     label$18 : {
      label$19 : {
       label$20 : {
        label$21 : {
         label$22 : {
          label$23 : {
           if (($2 | 0) != 1) {
            $0 = 92;
            if (($2 | 0) == 2) {
             break label$23
            }
            if (($2 | 0) != 3) {
             break label$17
            }
            $4 = ($3 & 255) + -1 | 0;
            if ($4 >>> 0 > 4) {
             break label$17
            }
            label$25 : {
             switch ($4 - 1 | 0) {
             case 3:
              break label$19;
             case 2:
              break label$20;
             case 1:
              break label$21;
             case 0:
              break label$22;
             default:
              break label$25;
             };
            }
            $3 = $3 & -256;
            $0 = 125;
            $2 = 3;
            break label$16;
           }
           $2 = 0;
           $0 = $5;
           break label$16;
          }
          $2 = 1;
          break label$16;
         }
         $0 = $5 >>> ($6 << 2 & 28) & 15;
         $0 = $0 >>> 0 < 10 ? $0 | 48 : $0 + 87 | 0;
         if (!$6) {
          break label$18
         }
         $6 = $6 + -1 | 0;
         $2 = 3;
         break label$16;
        }
        $3 = $3 & -256 | 2;
        $0 = 123;
        $2 = 3;
        break label$16;
       }
       $3 = $3 & -256 | 3;
       $0 = 117;
       $2 = 3;
       break label$16;
      }
      $3 = $3 & -256 | 4;
      $2 = 3;
      break label$16;
     }
     $3 = $3 & -256 | 1;
     $2 = 3;
     break label$16;
    }
    return FUNCTION_TABLE[HEAP32[HEAP32[$1 + 28 >> 2] + 16 >> 2]](HEAP32[$1 + 24 >> 2], 39) | 0;
   }
   if (!FUNCTION_TABLE[HEAP32[HEAP32[$8 >> 2] + 16 >> 2]](HEAP32[$7 >> 2], $0)) {
    continue
   }
   break;
  };
  return 1;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__dispose_chunk__h6f59f1d81bec5e46($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $2 = $0 + $1 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        $3 = HEAP32[$0 + 4 >> 2];
        label$7 : {
         label$8 : {
          if ($3 & 1) {
           break label$8
          }
          if (!($3 & 3)) {
           break label$7
          }
          $3 = HEAP32[$0 >> 2];
          $1 = $3 + $1 | 0;
          label$9 : {
           label$10 : {
            $0 = $0 - $3 | 0;
            if (($0 | 0) != HEAP32[266661]) {
             if ($3 >>> 0 >= 256) {
              break label$10
             }
             $4 = HEAP32[$0 + 8 >> 2];
             $5 = HEAP32[$0 + 12 >> 2];
             if (($4 | 0) == ($5 | 0)) {
              break label$9
             }
             HEAP32[$4 + 12 >> 2] = $5;
             HEAP32[$5 + 8 >> 2] = $4;
             break label$8;
            }
            if ((HEAP32[$2 + 4 >> 2] & 3) != 3) {
             break label$8
            }
            HEAP32[266659] = $1;
            $3 = $2 + 4 | 0;
            HEAP32[$3 >> 2] = HEAP32[$3 >> 2] & -2;
            HEAP32[$0 + 4 >> 2] = $1 | 1;
            HEAP32[$2 >> 2] = $1;
            return;
           }
           dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__h173f6e2d56218081($0);
           break label$8;
          }
          (wasm2js_i32$0 = 1066236, wasm2js_i32$1 = HEAP32[266559] & __wasm_rotl_i32($3 >>> 3)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
         }
         label$12 : {
          $3 = HEAP32[$2 + 4 >> 2];
          if (!($3 & 2)) {
           if (($2 | 0) == HEAP32[266662]) {
            break label$12
           }
           if (($2 | 0) == HEAP32[266661]) {
            break label$6
           }
           $4 = $3 & -8;
           $1 = $4 + $1 | 0;
           if ($4 >>> 0 >= 256) {
            break label$5
           }
           $4 = HEAP32[$2 + 12 >> 2];
           $2 = HEAP32[$2 + 8 >> 2];
           if (($4 | 0) == ($2 | 0)) {
            break label$3
           }
           HEAP32[$2 + 12 >> 2] = $4;
           HEAP32[$4 + 8 >> 2] = $2;
           break label$2;
          }
          HEAP32[$2 + 4 >> 2] = $3 & -2;
          HEAP32[$0 + 4 >> 2] = $1 | 1;
          HEAP32[$0 + $1 >> 2] = $1;
          break label$1;
         }
         HEAP32[266662] = $0;
         $1 = HEAP32[266660] + $1 | 0;
         HEAP32[266660] = $1;
         HEAP32[$0 + 4 >> 2] = $1 | 1;
         if (HEAP32[266661] == ($0 | 0)) {
          break label$4
         }
        }
        return;
       }
       HEAP32[266661] = $0;
       $1 = HEAP32[266659] + $1 | 0;
       HEAP32[266659] = $1;
       HEAP32[$0 + 4 >> 2] = $1 | 1;
       HEAP32[$0 + $1 >> 2] = $1;
       return;
      }
      dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__h173f6e2d56218081($2);
      break label$2;
     }
     HEAP32[266659] = 0;
     HEAP32[266661] = 0;
     return;
    }
    (wasm2js_i32$0 = 1066236, wasm2js_i32$1 = HEAP32[266559] & __wasm_rotl_i32($3 >>> 3)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
   }
   HEAP32[$0 + 4 >> 2] = $1 | 1;
   HEAP32[$0 + $1 >> 2] = $1;
   if (HEAP32[266661] != ($0 | 0)) {
    break label$1
   }
   HEAP32[266659] = $1;
   return;
  }
  label$14 : {
   label$15 : {
    if ($1 >>> 0 < 256) {
     $2 = $1 >>> 3;
     $1 = ($2 << 3) + 1066244 | 0;
     $3 = HEAP32[266559];
     $2 = 1 << ($2 & 31);
     if (!($3 & $2)) {
      break label$15
     }
     $2 = HEAP32[$1 + 8 >> 2];
     break label$14;
    }
    dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h2b5800089452f7a4($0, $1);
    return;
   }
   HEAP32[266559] = $2 | $3;
   $2 = $1;
  }
  HEAP32[$1 + 8 >> 2] = $0;
  HEAP32[$2 + 12 >> 2] = $0;
  HEAP32[$0 + 12 >> 2] = $1;
  HEAP32[$0 + 8 >> 2] = $2;
 }
 
 function stretch_layout__get_dimension__h96f4ff66d8555efd($0, $1, $2, $3) {
  var $4 = 0, $5 = Math_fround(0), $6 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $4 = global$0 - 128 | 0;
  global$0 = $4;
  label$1 : {
   if (!stretch_layout__has_key__hf2b3c8fbd22a58c3($1, $2, $3)) {
    break label$1
   }
   (wasm2js_i32$0 = $4, wasm2js_i32$1 = __wbindgen_string_new($2 | 0, $3 | 0) | 0), HEAP32[wasm2js_i32$0 + 64 >> 2] = wasm2js_i32$1;
   js_sys__Reflect__get__h47f550132b94fe08($4 + 56 | 0, $1, $4 - -64 | 0);
   $1 = HEAP32[$4 + 60 >> 2];
   label$3 : {
    if (HEAP32[$4 + 56 >> 2]) {
     if ($1 >>> 0 < 36) {
      break label$3
     }
     __wbindgen_object_drop_ref($1 | 0);
     break label$3;
    }
    HEAP32[$4 + 68 >> 2] = $1;
    wasm_bindgen__JsValue__as_f64__h1f8b3e8c0b7cfbf2($4 + 40 | 0, $4 + 68 | 0);
    label$5 : {
     label$6 : {
      if (HEAP32[$4 + 40 >> 2] == 1) {
       $5 = Math_fround(HEAPF64[$4 + 48 >> 3]);
       $6 = 2;
       break label$6;
      }
      wasm_bindgen__JsValue__as_string__h07e31cacac40de29($4 + 72 | 0, $4 + 68 | 0);
      label$8 : {
       label$9 : {
        label$10 : {
         label$11 : {
          if (HEAP32[$4 + 72 >> 2]) {
           HEAP32[$4 + 96 >> 2] = HEAP32[$4 + 80 >> 2];
           $1 = HEAP32[$4 + 76 >> 2];
           HEAP32[$4 + 88 >> 2] = HEAP32[$4 + 72 >> 2];
           HEAP32[$4 + 92 >> 2] = $1;
           $1 = $4 + 32 | 0;
           $2 = $4 + 88 | 0;
           HEAP32[$1 + 4 >> 2] = HEAP32[$2 + 8 >> 2];
           HEAP32[$1 >> 2] = HEAP32[$2 >> 2];
           $1 = 1;
           if (core__slice___impl_20core__cmp__PartialEq__5bB_5d__20for_20_5bA_5d___eq__h2b75469410f254a8(HEAP32[$4 + 32 >> 2], HEAP32[$4 + 36 >> 2], 1049085, 4)) {
            break label$8
           }
           $1 = $4 + 24 | 0;
           $2 = $4 + 88 | 0;
           HEAP32[$1 + 4 >> 2] = HEAP32[$2 + 8 >> 2];
           HEAP32[$1 >> 2] = HEAP32[$2 >> 2];
           core__num__dec2flt__dec2flt__h61a64678c8bb0200($4 + 112 | 0, HEAP32[$4 + 24 >> 2], HEAP32[$4 + 28 >> 2]);
           if (!HEAPU8[$4 + 112 | 0]) {
            break label$10
           }
           $1 = $4 + 16 | 0;
           $2 = $4 + 88 | 0;
           HEAP32[$1 + 4 >> 2] = HEAP32[$2 + 8 >> 2];
           HEAP32[$1 >> 2] = HEAP32[$2 >> 2];
           if (core__str___impl_20str___ends_with__h5d6bb4579d889be6(HEAP32[$4 + 16 >> 2], HEAP32[$4 + 20 >> 2])) {
            $1 = HEAP32[$4 + 96 >> 2];
            $2 = $4 + 8 | 0;
            $3 = $4 + 88 | 0;
            HEAP32[$2 + 4 >> 2] = HEAP32[$3 + 8 >> 2];
            HEAP32[$2 >> 2] = HEAP32[$3 >> 2];
            $2 = HEAP32[$4 + 8 >> 2];
            $3 = HEAP32[$4 + 12 >> 2];
            HEAP32[$4 + 116 >> 2] = $3;
            HEAP32[$4 + 112 >> 2] = $2;
            $1 = $1 + -1 | 0;
            HEAP32[$4 + 124 >> 2] = $1;
            label$15 : {
             if (!$1) {
              break label$15
             }
             if (($1 | 0) == ($3 | 0)) {
              break label$15
             }
             if ($3 >>> 0 <= $1 >>> 0) {
              break label$5
             }
             if (HEAP8[$1 + $2 | 0] <= -65) {
              break label$5
             }
            }
            core__num__dec2flt__dec2flt__h61a64678c8bb0200($4 + 104 | 0, $2, $1);
            if (!HEAPU8[$4 + 104 | 0]) {
             break label$9
            }
           }
           $alloc__raw_vec__RawVec_T_2cA__20as_20core__ops__drop__Drop___drop__hea72d4f82201e60d($4 + 88 | 0);
           if (HEAP32[$4 + 72 >> 2]) {
            break label$11
           }
          }
          core__ptr__real_drop_in_place__h2d71aab7a2e116e4($4 + 72 | 0);
         }
         $1 = HEAP32[$4 + 68 >> 2];
         if ($1 >>> 0 < 36) {
          break label$3
         }
         __wbindgen_object_drop_ref($1 | 0);
         break label$3;
        }
        $5 = HEAPF32[$4 + 116 >> 2];
        $1 = 2;
        break label$8;
       }
       $5 = Math_fround(HEAPF32[$4 + 108 >> 2] / Math_fround(100.0));
       $1 = 3;
      }
      $6 = $1;
      $alloc__raw_vec__RawVec_T_2cA__20as_20core__ops__drop__Drop___drop__hea72d4f82201e60d($4 + 88 | 0);
      if (HEAP32[$4 + 72 >> 2]) {
       break label$6
      }
      core__ptr__real_drop_in_place__h2d71aab7a2e116e4($4 + 72 | 0);
     }
     $1 = HEAP32[$4 + 68 >> 2];
     if ($1 >>> 0 >= 36) {
      __wbindgen_object_drop_ref($1 | 0)
     }
     $1 = HEAP32[$4 + 64 >> 2];
     if ($1 >>> 0 < 36) {
      break label$1
     }
     __wbindgen_object_drop_ref($1 | 0);
     break label$1;
    }
    $0 = $4 + 112 | 0;
    core__str__slice_error_fail__h65b601301310b052(HEAP32[$0 >> 2], HEAP32[$0 + 4 >> 2], 0, HEAP32[$4 + 124 >> 2]);
    abort();
   }
   $1 = HEAP32[$4 + 64 >> 2];
   if ($1 >>> 0 < 36) {
    break label$1
   }
   __wbindgen_object_drop_ref($1 | 0);
  }
  HEAPF32[$0 + 4 >> 2] = $5;
  HEAP32[$0 >> 2] = $6;
  global$0 = $4 + 128 | 0;
 }
 
 function $alloc__rc__Rc_T__20as_20core__ops__drop__Drop___drop__h43384082c72e7313($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $6 = global$0 - 16 | 0;
  global$0 = $6;
  $2 = HEAP32[$0 >> 2];
  HEAP32[$2 >> 2] = HEAP32[$2 >> 2] + -1;
  $2 = HEAP32[$0 >> 2];
  label$1 : {
   if (HEAP32[$2 >> 2]) {
    break label$1
   }
   $stretch__node__Stretch_20as_20core__ops__drop__Drop___drop__h4dc0d026bc6ad7fc($2 + 16 | 0);
   $1 = $2 + 108 | 0;
   if (HEAP32[$1 + 4 >> 2]) {
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$1 >> 2])
   }
   $3 = HEAP32[$2 + 32 >> 2];
   if ($3) {
    $1 = $6 + 8 | 0;
    HEAP32[$1 >> 2] = 20;
    HEAP32[$1 + 4 >> 2] = 4;
    label$3 : {
     label$6 : {
      $1 = HEAP32[$6 + 12 >> 2];
      $4 = $1 + -1 | 0;
      $7 = HEAP32[$6 + 8 >> 2];
      $8 = 0 - $1 | 0;
      $5 = $4 + $7 & $8;
      if ($5 >>> 0 >= $7 >>> 0) {
       $7 = __wasm_i64_mul($5, 0, $3 + 1 | 0);
       if (!i64toi32_i32$HIGH_BITS) {
        break label$6
       }
      }
      break label$3;
     }
     if (!$1) {
      break label$3
     }
     label$8 : {
      $5 = $3 + 5 | 0;
      $3 = $8 & $4 + $5;
      if ($3 >>> 0 >= $5 >>> 0) {
       $4 = $3 + $7 | 0;
       if ($4 >>> 0 >= $3 >>> 0) {
        break label$8
       }
      }
      break label$3;
     }
     $1 = $1 >>> 0 > 4 ? $1 : 4;
     if ($4 >>> 0 <= 0 - $1 >>> 0 ? !($1 & $1 + -1) : 0) {
      break label$3
     }
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$2 + 36 >> 2]);
   }
   $3 = HEAP32[$2 + 72 >> 2];
   if ($3) {
    HEAP32[$6 >> 2] = 20;
    HEAP32[$6 + 4 >> 2] = 4;
    label$12 : {
     label$15 : {
      $1 = HEAP32[$6 + 4 >> 2];
      $4 = $1 + -1 | 0;
      $7 = HEAP32[$6 >> 2];
      $8 = 0 - $1 | 0;
      $5 = $4 + $7 & $8;
      if ($5 >>> 0 >= $7 >>> 0) {
       $7 = __wasm_i64_mul($5, 0, $3 + 1 | 0);
       if (!i64toi32_i32$HIGH_BITS) {
        break label$15
       }
      }
      break label$12;
     }
     if (!$1) {
      break label$12
     }
     label$17 : {
      $5 = $3 + 5 | 0;
      $3 = $8 & $4 + $5;
      if ($3 >>> 0 >= $5 >>> 0) {
       $4 = $3 + $7 | 0;
       if ($4 >>> 0 >= $3 >>> 0) {
        break label$17
       }
      }
      break label$12;
     }
     $1 = $1 >>> 0 > 4 ? $1 : 4;
     if ($4 >>> 0 <= 0 - $1 >>> 0 ? !($1 & $1 + -1) : 0) {
      break label$12
     }
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$2 + 76 >> 2]);
   }
   $1 = $2 + 120 | 0;
   $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__hc1d85a0d86e2916e($1);
   alloc__raw_vec__RawVec_T_2cA___dealloc_buffer__h706c3aae176f3002($1);
   $1 = $2 + 132 | 0;
   $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__h6e997e740088a7d8($1);
   alloc__raw_vec__RawVec_T_2cA___dealloc_buffer__hcfc71f822a24d45c($1);
   $2 = $2 + 144 | 0;
   $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__h6e997e740088a7d8($2);
   alloc__raw_vec__RawVec_T_2cA___dealloc_buffer__hcfc71f822a24d45c($2);
   $2 = HEAP32[$0 >> 2];
   HEAP32[$2 + 4 >> 2] = HEAP32[$2 + 4 >> 2] + -1;
   $0 = HEAP32[$0 >> 2];
   if (HEAP32[$0 + 4 >> 2]) {
    break label$1
   }
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($0);
  }
  global$0 = $6 + 16 | 0;
 }
 
 function stretch__node__Stretch__replace_child_at_index__h2605bb22b900daa8($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  $5 = global$0 - 48 | 0;
  global$0 = $5;
  $8 = $2 + 8 | 0;
  $9 = HEAP32[$8 + 4 >> 2];
  $6 = $5 + 40 | 0;
  HEAP32[$6 >> 2] = HEAP32[$8 >> 2];
  HEAP32[$6 + 4 >> 2] = $9;
  $7 = HEAP32[$2 + 4 >> 2];
  HEAP32[$5 + 32 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$5 + 36 >> 2] = $7;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($5 + 8 | 0, $1, $5 + 32 | 0);
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       if (HEAP32[$5 + 8 >> 2] == 1) {
        $1 = HEAP32[$5 + 16 >> 2];
        HEAP32[$0 + 4 >> 2] = HEAP32[$5 + 12 >> 2];
        HEAP32[$0 + 8 >> 2] = $1;
        HEAP32[$0 >> 2] = 1;
        HEAP32[$0 + 20 >> 2] = HEAP32[$5 + 28 >> 2];
        $1 = $5 + 20 | 0;
        $2 = HEAP32[$1 + 4 >> 2];
        $0 = $0 + 12 | 0;
        HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
        HEAP32[$0 + 4 >> 2] = $2;
        break label$5;
       }
       $8 = HEAP32[$5 + 12 >> 2];
       HEAP32[$5 + 4 >> 2] = $8;
       $2 = $4 + 8 | 0;
       $7 = HEAP32[$2 + 4 >> 2];
       HEAP32[$6 >> 2] = HEAP32[$2 >> 2];
       HEAP32[$6 + 4 >> 2] = $7;
       $2 = HEAP32[$4 + 4 >> 2];
       HEAP32[$5 + 32 >> 2] = HEAP32[$4 >> 2];
       HEAP32[$5 + 36 >> 2] = $2;
       stretch__node__Stretch__find_node__hfb9818efa90b275a($5 + 8 | 0, $1, $5 + 32 | 0);
       if (HEAP32[$5 + 8 >> 2] == 1) {
        $1 = HEAP32[$5 + 16 >> 2];
        HEAP32[$0 + 4 >> 2] = HEAP32[$5 + 12 >> 2];
        HEAP32[$0 + 8 >> 2] = $1;
        HEAP32[$0 >> 2] = 1;
        HEAP32[$0 + 20 >> 2] = HEAP32[$5 + 28 >> 2];
        $1 = $5 + 20 | 0;
        $2 = HEAP32[$1 + 4 >> 2];
        $0 = $0 + 12 | 0;
        HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
        HEAP32[$0 + 4 >> 2] = $2;
        break label$5;
       }
       $2 = HEAP32[$1 + 136 >> 2];
       $4 = HEAP32[$5 + 12 >> 2];
       if ($2 >>> 0 <= $4 >>> 0) {
        break label$4
       }
       $9 = $1 + 128 | 0;
       $2 = HEAP32[$9 >> 2] + Math_imul($4, 12) | 0;
       $6 = $2 + 8 | 0;
       $7 = HEAP32[$2 + 8 >> 2];
       if (($7 | 0) == HEAP32[$2 + 4 >> 2]) {
        alloc__raw_vec__RawVec_T_2cA___reserve__h52463841ac7c0460($2, $7);
        $7 = HEAP32[$6 >> 2];
       }
       HEAP32[HEAP32[$2 >> 2] + ($7 << 2) >> 2] = $8;
       HEAP32[$6 >> 2] = HEAP32[$6 >> 2] + 1;
       $6 = HEAP32[$1 + 124 >> 2];
       $2 = HEAP32[$5 + 4 >> 2];
       if ($6 >>> 0 <= $2 >>> 0) {
        break label$3
       }
       $2 = HEAP32[$1 + 116 >> 2] + Math_imul($2, 12) | 0;
       $6 = HEAP32[$2 + 8 >> 2];
       if ($6 >>> 0 <= $3 >>> 0) {
        break label$2
       }
       $3 = HEAP32[$2 >> 2] + ($3 << 2) | 0;
       $2 = HEAP32[$3 >> 2];
       HEAP32[$3 >> 2] = $4;
       HEAP32[$5 + 8 >> 2] = $2;
       $3 = HEAP32[$1 + 136 >> 2];
       if ($3 >>> 0 <= $2 >>> 0) {
        break label$1
       }
       alloc__vec__Vec_T___retain__h03ae853cde8d2bf8(HEAP32[$1 + 128 >> 2] + Math_imul($2, 12) | 0, $5 + 4 | 0);
       stretch__forest__Forest__mark_dirty__mark_dirty_impl__hdd964a1d064beeaf($1 + 104 | 0, $9, HEAP32[$5 + 4 >> 2]);
       $1 = $std__collections__hash__map__HashMap_K_2cV_2cS__20as_20core__ops__index__Index__Q____index__ha77d1aee23695641($1 + 40 | 0, $5 + 8 | 0);
       HEAP32[$0 >> 2] = 0;
       $2 = HEAP32[$1 + 4 >> 2];
       HEAP32[$0 + 4 >> 2] = HEAP32[$1 >> 2];
       HEAP32[$0 + 8 >> 2] = $2;
       $1 = $1 + 8 | 0;
       $2 = HEAP32[$1 + 4 >> 2];
       $0 = $0 + 12 | 0;
       HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
       HEAP32[$0 + 4 >> 2] = $2;
      }
      global$0 = $5 + 48 | 0;
      return;
     }
     core__panicking__panic_bounds_check__h0537ade040df571e(1051320, $4, $2);
     abort();
    }
    core__panicking__panic_bounds_check__h0537ade040df571e(1051320, $2, $6);
    abort();
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1051320, $3, $6);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051320, $2, $3);
  abort();
 }
 
 function stretch__node__Stretch__with_capacity__he42f2add5ee12749($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
  $1 = global$0 - 128 | 0;
  global$0 = $1;
  HEAP32[$1 + 40 >> 2] = 1066128;
  if (HEAP32[266538] != 3) {
   HEAP32[$1 + 64 >> 2] = $1 + 40;
   HEAP32[$1 + 88 >> 2] = $1 - -64;
   std__sync__once__Once__call_inner__h49bf6a110bd0c1f8($1 + 88 | 0);
  }
  std__sync__mutex__Mutex_T___lock__h7318c0b80a9bd337($1 + 88 | 0, HEAP32[$1 + 40 >> 2]);
  $10 = HEAPU8[$1 + 96 | 0];
  $5 = HEAP32[$1 + 92 >> 2];
  if (HEAP32[$1 + 88 >> 2] != 1) {
   $2 = HEAP32[$5 + 20 >> 2];
   label$3 : {
    if ($2) {
     $2 = $2 + -1 | 0;
     HEAP32[$5 + 20 >> 2] = $2;
     $3 = HEAP32[$5 + 12 >> 2] + ($2 << 3) | 0;
     $2 = HEAP32[$3 + 4 >> 2] + 1 | 0;
     $3 = HEAP32[$3 >> 2];
     break label$3;
    }
    $3 = HEAP32[$5 + 8 >> 2];
    HEAP32[$5 + 8 >> 2] = $3 + 1;
    $2 = 0;
   }
   std__thread__local__LocalKey_T___with__h4101f28caa7b56ee($1 + 24 | 0);
   $13 = HEAP32[$1 + 24 >> 2];
   $14 = HEAP32[$1 + 28 >> 2];
   $15 = HEAP32[$1 + 32 >> 2];
   $16 = HEAP32[$1 + 36 >> 2];
   hashbrown__raw__RawTable_T___try_with_capacity__hcabcbfe869fb1322($1 + 88 | 0, 16);
   $11 = $1 + 56 | 0;
   $6 = $1 + 108 | 0;
   HEAP32[$11 >> 2] = HEAP32[$6 >> 2];
   $4 = $1 + 100 | 0;
   $8 = HEAP32[$4 + 4 >> 2];
   $7 = $1 + 48 | 0;
   HEAP32[$7 >> 2] = HEAP32[$4 >> 2];
   HEAP32[$7 + 4 >> 2] = $8;
   $9 = HEAP32[$1 + 96 >> 2];
   HEAP32[$1 + 40 >> 2] = HEAP32[$1 + 92 >> 2];
   HEAP32[$1 + 44 >> 2] = $9;
   std__thread__local__LocalKey_T___with__h4101f28caa7b56ee($1 + 8 | 0);
   $9 = HEAP32[$1 + 8 >> 2];
   $8 = HEAP32[$1 + 12 >> 2];
   $17 = HEAP32[$1 + 16 >> 2];
   $18 = HEAP32[$1 + 20 >> 2];
   hashbrown__raw__RawTable_T___try_with_capacity__hcabcbfe869fb1322($1 + 88 | 0, 16);
   $12 = $1 + 80 | 0;
   HEAP32[$12 >> 2] = HEAP32[$6 >> 2];
   $19 = HEAP32[$4 + 4 >> 2];
   $6 = $1 + 72 | 0;
   HEAP32[$6 >> 2] = HEAP32[$4 >> 2];
   HEAP32[$6 + 4 >> 2] = $19;
   $4 = HEAP32[$1 + 96 >> 2];
   HEAP32[$1 + 64 >> 2] = HEAP32[$1 + 92 >> 2];
   HEAP32[$1 + 68 >> 2] = $4;
   stretch__forest__Forest__with_capacity__h017f7c44ebc5436e($1 + 88 | 0);
   $4 = $0 + 96 | 0;
   HEAP32[$4 >> 2] = 0;
   HEAP32[$4 + 4 >> 2] = 0;
   HEAP32[$0 + 88 >> 2] = 0;
   HEAP32[$0 + 92 >> 2] = 4;
   HEAP32[$0 + 84 >> 2] = $2;
   HEAP32[$0 + 80 >> 2] = $3;
   HEAP32[$0 + 8 >> 2] = $15;
   HEAP32[$0 + 12 >> 2] = $16;
   HEAP32[$0 >> 2] = $13;
   HEAP32[$0 + 4 >> 2] = $14;
   $2 = $0 + 48 | 0;
   HEAP32[$2 >> 2] = $17;
   HEAP32[$2 + 4 >> 2] = $18;
   HEAP32[$0 + 40 >> 2] = $9;
   HEAP32[$0 + 44 >> 2] = $8;
   $2 = HEAP32[$1 + 44 >> 2];
   HEAP32[$0 + 16 >> 2] = HEAP32[$1 + 40 >> 2];
   HEAP32[$0 + 20 >> 2] = $2;
   $2 = HEAP32[$7 + 4 >> 2];
   $3 = $0 + 24 | 0;
   HEAP32[$3 >> 2] = HEAP32[$7 >> 2];
   HEAP32[$3 + 4 >> 2] = $2;
   HEAP32[$0 + 32 >> 2] = HEAP32[$11 >> 2];
   $2 = HEAP32[$1 + 68 >> 2];
   $3 = $0 + 56 | 0;
   HEAP32[$3 >> 2] = HEAP32[$1 + 64 >> 2];
   HEAP32[$3 + 4 >> 2] = $2;
   $2 = HEAP32[$6 + 4 >> 2];
   $3 = $0 - -64 | 0;
   HEAP32[$3 >> 2] = HEAP32[$6 >> 2];
   HEAP32[$3 + 4 >> 2] = $2;
   HEAP32[$0 + 72 >> 2] = HEAP32[$12 >> 2];
   memcpy($0 + 104 | 0, $1 + 88 | 0, 36);
   label$5 : {
    if ($10) {
     break label$5
    }
    if (!std__panicking__panicking__hf26bc0dde81b7530()) {
     break label$5
    }
    HEAP8[$5 + 4 | 0] = 1;
   }
   HEAP8[HEAP32[$5 >> 2]] = 0;
   global$0 = $1 + 128 | 0;
   return;
  }
  core__result__unwrap_failed__hd436cac2acefb838($5, ($10 | 0) != 0);
  abort();
 }
 
 function $core__fmt__builders__PadAdapter_20as_20core__fmt__Write___write_str__h09f53eef721a952f($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0;
  $4 = global$0 - 48 | 0;
  global$0 = $4;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if ($2) {
       $9 = $4 + 40 | 0;
       $10 = $0 + 8 | 0;
       $12 = $4 + 32 | 0;
       $11 = $4 + 28 | 0;
       $15 = $4 + 36 | 0;
       $13 = $0 + 4 | 0;
       while (1) {
        if (HEAPU8[$10 | 0]) {
         if (FUNCTION_TABLE[HEAP32[HEAP32[$13 >> 2] + 12 >> 2]](HEAP32[$0 >> 2], 1061100, 4)) {
          break label$4
         }
        }
        HEAP32[$9 >> 2] = 10;
        HEAP32[$12 >> 2] = 10;
        HEAP32[$12 + 4 >> 2] = 1;
        HEAP32[$11 >> 2] = $2;
        $6 = $4 + 24 | 0;
        HEAP32[$6 >> 2] = 0;
        HEAP32[$4 + 20 >> 2] = $2;
        HEAP32[$4 + 16 >> 2] = $1;
        core__slice__memchr__memchr__h7af23d5070345c6c($4 + 8 | 0, 10, $1, $2);
        label$8 : {
         label$9 : {
          label$10 : {
           label$11 : {
            if (HEAP32[$4 + 8 >> 2] == 1) {
             $3 = HEAP32[$4 + 12 >> 2];
             while (1) {
              $3 = (HEAP32[$6 >> 2] + $3 | 0) + 1 | 0;
              HEAP32[$6 >> 2] = $3;
              $5 = HEAP32[$15 >> 2];
              label$14 : {
               if ($3 >>> 0 < $5 >>> 0) {
                $7 = HEAP32[$4 + 20 >> 2];
                break label$14;
               }
               $7 = HEAP32[$4 + 20 >> 2];
               if ($7 >>> 0 < $3 >>> 0) {
                break label$14
               }
               if ($5 >>> 0 >= 5) {
                break label$9
               }
               $8 = $3 - $5 | 0;
               $14 = $8 + HEAP32[$4 + 16 >> 2] | 0;
               if (($14 | 0) == ($9 | 0)) {
                break label$10
               }
               if (!memcmp($14, $9, $5)) {
                break label$10
               }
              }
              $8 = HEAP32[$11 >> 2];
              if ($8 >>> 0 < $3 >>> 0) {
               break label$11
              }
              if ($7 >>> 0 < $8 >>> 0) {
               break label$11
              }
              core__slice__memchr__memchr__h7af23d5070345c6c($4, HEAPU8[($5 + $4 | 0) + 39 | 0], $3 + HEAP32[$4 + 16 >> 2] | 0, $8 - $3 | 0);
              $3 = HEAP32[$4 + 4 >> 2];
              if (HEAP32[$4 >> 2] == 1) {
               continue
              }
              break;
             };
            }
            HEAP32[$6 >> 2] = HEAP32[$11 >> 2];
           }
           HEAP8[$10 | 0] = 0;
           $3 = $2;
           break label$8;
          }
          HEAP8[$10 | 0] = 1;
          $3 = $8 + 1 | 0;
          break label$8;
         }
         core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($5, 4);
         abort();
        }
        $5 = HEAP32[$13 >> 2];
        $6 = HEAP32[$0 >> 2];
        $7 = !$3 | ($2 | 0) == ($3 | 0);
        if (!$7) {
         if ($2 >>> 0 <= $3 >>> 0) {
          break label$2
         }
         if (HEAP8[$1 + $3 | 0] <= -65) {
          break label$2
         }
        }
        if (FUNCTION_TABLE[HEAP32[$5 + 12 >> 2]]($6, $1, $3)) {
         break label$4
        }
        if (!$7) {
         if ($2 >>> 0 <= $3 >>> 0) {
          break label$1
         }
         if (HEAP8[$1 + $3 | 0] <= -65) {
          break label$1
         }
        }
        $1 = $1 + $3 | 0;
        $2 = $2 - $3 | 0;
        if ($2) {
         continue
        }
        break;
       };
      }
      $3 = 0;
      break label$3;
     }
     $3 = 1;
    }
    global$0 = $4 + 48 | 0;
    return $3 | 0;
   }
   core__str__slice_error_fail__h65b601301310b052($1, $2, 0, $3);
   abort();
  }
  core__str__slice_error_fail__h65b601301310b052($1, $2, $3, $2);
  abort();
 }
 
 function core__num__dec2flt__num__digits_to_big__hef6bb2d3b095a9ae($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
  $6 = global$0 - 176 | 0;
  global$0 = $6;
  HEAP32[$6 + 8 >> 2] = 1;
  $13 = memset($6 + 8 | 4, 0, 160);
  $11 = $3 + $4 | 0;
  $9 = $1 + $2 | 0;
  $14 = $6 + 16 | 0;
  $5 = 1;
  label$1 : {
   while (1) {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          if (($8 | 0) != 1) {
           if (($8 | 0) != 2) {
            break label$8
           }
           if (($3 | 0) == ($11 | 0)) {
            break label$4
           }
           $10 = $3 + 1 | 0;
           $8 = 2;
           $4 = $1;
           if ($5 >>> 0 < 41) {
            break label$3
           }
           break label$5;
          }
          if (($1 | 0) == ($9 | 0)) {
           break label$4
          }
          $8 = 1;
          $4 = $1 + 1 | 0;
          break label$7;
         }
         if (($1 | 0) == ($9 | 0)) {
          break label$6
         }
         $8 = 0;
         $4 = $1 + 1 | 0;
        }
        $10 = $3;
        $3 = $1;
        if ($5 >>> 0 >= 41) {
         break label$5
        }
        break label$3;
       }
       if (($3 | 0) == ($11 | 0)) {
        break label$4
       }
       $10 = $3 + 1 | 0;
       $8 = 2;
       $4 = $9;
       if ($5 >>> 0 < 41) {
        break label$3
       }
      }
      core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($5, 40);
      abort();
     }
     memcpy($0, $6 + 8 | 0, 164);
     global$0 = $6 + 176 | 0;
     return;
    }
    $15 = HEAPU8[$3 | 0];
    label$10 : {
     if ($5) {
      $2 = $5 << 2;
      $16 = $2 + ($6 + 8 | 0) | 0;
      $1 = 0;
      $3 = $13;
      while (1) {
       $12 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10) + $1 | 0;
       $7 = i64toi32_i32$HIGH_BITS;
       $7 = $12 >>> 0 < $1 >>> 0 ? $7 + 1 | 0 : $7;
       HEAP32[$3 >> 2] = $12;
       $3 = $3 + 4 | 0;
       $1 = $7;
       $2 = $2 + -4 | 0;
       if ($2) {
        continue
       }
       break;
      };
      if (!$1) {
       break label$10
      }
      if ($5 >>> 0 > 39) {
       break label$1
      }
      HEAP32[$16 + 4 >> 2] = $1;
      $5 = $5 + 1 | 0;
      break label$10;
     }
     $5 = 0;
    }
    HEAP32[$6 + 8 >> 2] = $5;
    $1 = HEAP32[$6 + 12 >> 2];
    $3 = $1 + ($15 + -48 & 255) | 0;
    HEAP32[$6 + 12 >> 2] = $3;
    $2 = 1;
    label$13 : {
     if ($3 >>> 0 < $1 >>> 0) {
      $3 = $14;
      while (1) {
       if ($2 >>> 0 >= 40) {
        break label$13
       }
       $1 = HEAP32[$3 >> 2];
       $7 = $1 + 1 | 0;
       HEAP32[$3 >> 2] = $7;
       $3 = $3 + 4 | 0;
       $2 = $2 + 1 | 0;
       if ($7 >>> 0 < $1 >>> 0) {
        continue
       }
       break;
      };
     }
     $1 = $4;
     $3 = $10;
     if ($2 >>> 0 <= $5 >>> 0) {
      continue
     }
     HEAP32[$6 + 8 >> 2] = $2;
     $5 = $2;
     continue;
    }
    break;
   };
   core__panicking__panic_bounds_check__h0537ade040df571e(1065804, $2, 40);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1065872, $5, 40);
  abort();
 }
 
 function std__thread__park__h8c2d8fb1038e650a() {
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0;
  $0 = global$0 - 96 | 0;
  global$0 = $0;
  if (HEAP32[266556] != 1) {
   HEAP32[266556] = 1;
   HEAP32[266557] = 0;
   HEAP32[266558] = 0;
  }
  $1 = std__sys_common__thread_info__ThreadInfo__with___7b_7bclosure_7d_7d__hb699849b36c0e1da();
  $3 = HEAP32[$1 + 24 >> 2];
  $2 = ($3 | 0) == 2;
  HEAP32[$1 + 24 >> 2] = $2 ? 0 : $3;
  HEAP32[$0 + 8 >> 2] = $1;
  label$2 : {
   label$3 : {
    label$4 : {
     label$5 : {
      label$6 : {
       if (!$2) {
        $1 = HEAP32[$0 + 8 >> 2];
        $2 = HEAP32[$1 + 28 >> 2];
        if (HEAPU8[$2 | 0]) {
         break label$6
        }
        HEAP8[$2 | 0] = 1;
        $2 = 0;
        label$8 : {
         if (HEAP32[266672] == 1) {
          $2 = HEAP32[266673];
          break label$8;
         }
         HEAP32[266672] = 1;
         HEAP32[266673] = 0;
        }
        HEAP32[266673] = $2;
        if (HEAPU8[$1 + 32 | 0]) {
         break label$5
        }
        $4 = $1 + 24 | 0;
        $3 = HEAP32[$4 >> 2];
        HEAP32[$4 >> 2] = $3 ? $3 : 1;
        if (!$3) {
         break label$4
        }
        if (($3 | 0) != 2) {
         break label$3
        }
        $4 = HEAP32[$0 + 8 >> 2] + 24 | 0;
        $3 = HEAP32[$4 >> 2];
        HEAP32[$4 >> 2] = 0;
        HEAP32[$0 + 12 >> 2] = $3;
        if (($3 | 0) != 2) {
         break label$2
        }
        label$10 : {
         if ($2) {
          break label$10
         }
         if (HEAP32[266672] == 1) {
          if (!HEAP32[266673]) {
           break label$10
          }
          HEAP8[$1 + 32 | 0] = 1;
          break label$10;
         }
         HEAP32[266672] = 1;
         HEAP32[266673] = 0;
        }
        HEAP8[HEAP32[$1 + 28 >> 2]] = 0;
       }
       $2 = HEAP32[$0 + 8 >> 2];
       $1 = HEAP32[$2 >> 2];
       HEAP32[$2 >> 2] = $1 + -1;
       if (($1 | 0) == 1) {
        alloc__sync__Arc_T___drop_slow__h51a4fa13661dd7d4($0 + 8 | 0)
       }
       global$0 = $0 + 96 | 0;
       return;
      }
      std__panicking__begin_panic__haa7e8f73e4c17ace(1053360, 32, 1053344);
      abort();
     }
     core__result__unwrap_failed__hf393a2f4cae996d3($1 + 28 | 0, ($2 | 0) != 0);
     abort();
    }
    std__sync__condvar__Condvar__verify__h4afacbcb46c33d4f(HEAP32[$0 + 8 >> 2] + 36 | 0, HEAP32[$1 + 28 >> 2]);
    std__panicking__begin_panic__haa7e8f73e4c17ace(1053284, 29, 1053268);
    abort();
   }
   std__panicking__begin_panic__haa7e8f73e4c17ace(1052584, 23, 1052568);
   abort();
  }
  HEAP32[$0 + 64 >> 2] = $0 + 12;
  HEAP32[$0 + 68 >> 2] = 1052608;
  HEAP32[$0 + 92 >> 2] = 0;
  HEAP32[$0 + 60 >> 2] = 22;
  HEAP32[$0 + 52 >> 2] = 55;
  HEAP32[$0 + 36 >> 2] = 3;
  HEAP32[$0 + 88 >> 2] = 1052196;
  HEAP32[$0 + 76 >> 2] = 1;
  HEAP32[$0 + 80 >> 2] = 0;
  HEAP32[$0 + 72 >> 2] = 1052644;
  HEAP32[$0 + 44 >> 2] = 55;
  HEAP32[$0 + 20 >> 2] = 3;
  HEAP32[$0 + 24 >> 2] = 0;
  HEAP32[$0 + 16 >> 2] = 1052216;
  HEAP32[$0 + 56 >> 2] = $0 + 72;
  HEAP32[$0 + 48 >> 2] = $0 + 68;
  HEAP32[$0 + 40 >> 2] = $0 - -64;
  HEAP32[$0 + 32 >> 2] = $0 + 40;
  std__panicking__begin_panic_fmt__hb7825530f38bd066($0 + 16 | 0, 1052652);
  abort();
 }
 
 function core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  label$1 : {
   label$2 : {
    if ($1 >>> 0 < 1280) {
     $5 = $1 >>> 5;
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         $4 = HEAP32[$0 >> 2];
         if ($4) {
          $3 = $4 + -1 | 0;
          $2 = ($4 << 2) + $0 | 0;
          $6 = ($4 + $5 << 2) + $0 | 0;
          while (1) {
           if ($3 >>> 0 > 39) {
            break label$7
           }
           $4 = $3 + $5 | 0;
           if ($4 >>> 0 > 39) {
            break label$6
           }
           HEAP32[$6 >> 2] = HEAP32[$2 >> 2];
           $2 = $2 + -4 | 0;
           $6 = $6 + -4 | 0;
           $3 = $3 + -1 | 0;
           if (($3 | 0) != -1) {
            continue
           }
           break;
          };
         }
         if ($5) {
          $3 = $0 + 4 | 0;
          $2 = 0;
          while (1) {
           if ($2 >>> 0 > 39) {
            break label$5
           }
           HEAP32[$3 >> 2] = 0;
           $3 = $3 + 4 | 0;
           $2 = $2 + 1 | 0;
           if ($2 >>> 0 < $5 >>> 0) {
            continue
           }
           break;
          };
         }
         $3 = HEAP32[$0 >> 2];
         $2 = $3 + $5 | 0;
         $8 = $1 & 31;
         if ($8) {
          $7 = $2 + -1 | 0;
          if ($7 >>> 0 > 39) {
           break label$2
          }
          $4 = $2;
          $6 = HEAP32[(($7 << 2) + $0 | 0) + 4 >> 2];
          $7 = 0 - $1 & 31;
          $1 = $6 >>> $7;
          if ($1) {
           if ($2 >>> 0 > 39) {
            break label$1
           }
           HEAP32[(($2 << 2) + $0 | 0) + 4 >> 2] = $1;
           $4 = $2 + 1 | 0;
          }
          $1 = $5 + 1 | 0;
          if ($1 >>> 0 < $2 >>> 0) {
           $3 = (($3 + $5 << 2) + $0 | 0) + -4 | 0;
           while (1) {
            if ($2 + -2 >>> 0 > 39) {
             break label$4
            }
            $9 = $6 << $8;
            $6 = HEAP32[$3 >> 2];
            HEAP32[$3 + 4 >> 2] = $9 | $6 >>> $7;
            $3 = $3 + -4 | 0;
            $2 = $2 + -1 | 0;
            if ($1 >>> 0 < $2 >>> 0) {
             continue
            }
            break;
           };
          }
          $1 = (($5 << 2) + $0 | 0) + 4 | 0;
          HEAP32[$1 >> 2] = HEAP32[$1 >> 2] << $8;
          HEAP32[$0 >> 2] = $4;
          return $0;
         }
         HEAP32[$0 >> 2] = $2;
         return $0;
        }
        core__panicking__panic_bounds_check__h0537ade040df571e(1065944, $3, 40);
        abort();
       }
       core__panicking__panic_bounds_check__h0537ade040df571e(1065960, $4, 40);
       abort();
      }
      core__panicking__panic_bounds_check__h0537ade040df571e(1065976, $2, 40);
      abort();
     }
     core__panicking__panic_bounds_check__h0537ade040df571e(1066024, $2 + -2 | 0, 40);
     abort();
    }
    core__panicking__panic__h2d0bc53a963fb996(1065920);
    abort();
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1065992, $7, 40);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1066008, $2, 40);
  abort();
 }
 
 function stretch_layout__Layout__new__h80f5bc745f91ec19($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0;
  $3 = global$0 + -64 | 0;
  global$0 = $3;
  HEAP32[$3 + 12 >> 2] = $1;
  folding_inner0 : {
   label$1 : {
    label$2 : {
     label$3 : {
      $7 = HEAP32[$1 >> 2];
      $1 = HEAP32[$7 + 8 >> 2];
      if (($1 | 0) < 0) {
       break label$3
      }
      if (($1 | 0) == 2147483647) {
       break label$3
      }
      HEAP32[$7 + 8 >> 2] = $1 + 1;
      $6 = $2 + 8 | 0;
      $1 = $6;
      $5 = HEAP32[$1 + 4 >> 2];
      $4 = $3 + 48 | 0;
      HEAP32[$4 >> 2] = HEAP32[$1 >> 2];
      HEAP32[$4 + 4 >> 2] = $5;
      $1 = HEAP32[$2 + 4 >> 2];
      HEAP32[$3 + 40 >> 2] = HEAP32[$2 >> 2];
      HEAP32[$3 + 44 >> 2] = $1;
      $8 = $7 + 16 | 0;
      stretch__node__Stretch__layout__h80f3380d515b813e($3 + 16 | 0, $8, $3 + 40 | 0);
      $1 = $3 + 16 | 4;
      if (HEAP32[$3 + 16 >> 2] == 1) {
       break label$2
      }
      $5 = HEAP32[$3 + 20 >> 2];
      $9 = HEAP32[$6 + 4 >> 2];
      HEAP32[$4 >> 2] = HEAP32[$6 >> 2];
      HEAP32[$4 + 4 >> 2] = $9;
      $4 = HEAP32[$2 + 4 >> 2];
      HEAP32[$3 + 40 >> 2] = HEAP32[$2 >> 2];
      HEAP32[$3 + 44 >> 2] = $4;
      stretch__node__Stretch__children__h768d3b74d890ec6a($3 + 16 | 0, $8, $3 + 40 | 0);
      if (HEAP32[$3 + 16 >> 2] == 1) {
       break label$1
      }
      $1 = HEAP32[$3 + 20 >> 2];
      $2 = HEAP32[$3 + 24 >> 2];
      $4 = HEAP32[$5 + 4 >> 2];
      $6 = HEAP32[$5 + 8 >> 2];
      $8 = HEAP32[$5 + 12 >> 2];
      $5 = HEAP32[$5 + 16 >> 2];
      $9 = HEAP32[$3 + 28 >> 2];
      HEAP32[$3 + 24 >> 2] = $9;
      HEAP32[$3 + 16 >> 2] = $1;
      HEAP32[$3 + 20 >> 2] = $2;
      $1 = HEAP32[$3 + 16 >> 2];
      $2 = HEAP32[$3 + 20 >> 2];
      $10 = HEAP32[$3 + 24 >> 2];
      HEAP32[$3 + 48 >> 2] = 0;
      HEAP32[$3 + 40 >> 2] = 4;
      HEAP32[$3 + 44 >> 2] = 0;
      HEAP32[$3 + 28 >> 2] = $1 + ($10 << 4);
      HEAP32[$3 + 24 >> 2] = $1;
      HEAP32[$3 + 20 >> 2] = $2;
      HEAP32[$3 + 16 >> 2] = $1;
      HEAP32[$3 + 32 >> 2] = $3 + 12;
      $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____spec_extend__h9445b3b85bba6c91($3 + 40 | 0, $3 + 16 | 0);
      $1 = $3 + 24 | 0;
      HEAP32[$1 >> 2] = HEAP32[$3 + 48 >> 2];
      $2 = HEAP32[$3 + 44 >> 2];
      HEAP32[$3 + 16 >> 2] = HEAP32[$3 + 40 >> 2];
      HEAP32[$3 + 20 >> 2] = $2;
      HEAP32[$0 + 16 >> 2] = $9;
      HEAP32[$0 + 8 >> 2] = $8;
      HEAP32[$0 + 12 >> 2] = $5;
      HEAP32[$0 >> 2] = $4;
      HEAP32[$0 + 4 >> 2] = $6;
      $2 = HEAP32[$3 + 20 >> 2];
      HEAP32[$0 + 20 >> 2] = HEAP32[$3 + 16 >> 2];
      HEAP32[$0 + 24 >> 2] = $2;
      HEAP32[$0 + 28 >> 2] = HEAP32[$1 >> 2];
      $0 = $7 + 8 | 0;
      HEAP32[$0 >> 2] = HEAP32[$0 >> 2] + -1;
      global$0 = $3 - -64 | 0;
      return;
     }
     core__result__unwrap_failed__h617b15fdce22e446();
     abort();
    }
    HEAP32[$3 + 56 >> 2] = HEAP32[$1 + 16 >> 2];
    $0 = $1 + 8 | 0;
    $2 = HEAP32[$0 + 4 >> 2];
    HEAP32[$4 >> 2] = HEAP32[$0 >> 2];
    break folding_inner0;
   }
   HEAP32[$3 + 56 >> 2] = HEAP32[$1 + 16 >> 2];
   $0 = $1 + 8 | 0;
   $2 = HEAP32[$0 + 4 >> 2];
   $4 = $3 + 48 | 0;
   HEAP32[$4 >> 2] = HEAP32[$0 >> 2];
  }
  HEAP32[$4 + 4 >> 2] = $2;
  $0 = HEAP32[$1 + 4 >> 2];
  HEAP32[$3 + 40 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$3 + 44 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($3 + 40 | 0);
  abort();
 }
 
 function hashbrown__map__HashMap_K_2cV_2cS___insert___7b_7bclosure_7d_7d__h7ff258d5db5557c5($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  $2 = global$0 - 80 | 0;
  global$0 = $2;
  $5 = HEAP32[HEAP32[$0 >> 2] >> 2];
  $0 = $5;
  $10 = HEAP32[$0 + 12 >> 2];
  $12 = $2 + 48 | 0;
  $3 = $12;
  $7 = HEAP32[$0 + 8 >> 2];
  HEAP32[$3 >> 2] = $7 ^ 2037671283;
  HEAP32[$3 + 4 >> 2] = $10 ^ 1952801890;
  $8 = $2 + 40 | 0;
  $0 = $8;
  HEAP32[$0 >> 2] = $7 ^ 1852075885;
  HEAP32[$0 + 4 >> 2] = $10 ^ 1685025377;
  $6 = HEAP32[$5 + 4 >> 2];
  $4 = $2 + 32 | 0;
  $0 = $4;
  $3 = HEAP32[$5 >> 2];
  HEAP32[$0 >> 2] = $3 ^ 1852142177;
  HEAP32[$0 + 4 >> 2] = $6 ^ 1819895653;
  HEAP32[$2 + 64 >> 2] = 0;
  HEAP32[$2 + 68 >> 2] = 0;
  HEAP32[$2 + 56 >> 2] = 0;
  HEAP32[$2 + 60 >> 2] = 0;
  HEAP32[$2 + 16 >> 2] = $7;
  HEAP32[$2 + 20 >> 2] = $10;
  HEAP32[$2 + 8 >> 2] = $3;
  HEAP32[$2 + 12 >> 2] = $6;
  HEAP32[$2 + 24 >> 2] = $3 ^ 1886610805;
  HEAP32[$2 + 28 >> 2] = $6 ^ 1936682341;
  HEAP32[$2 + 76 >> 2] = HEAP32[$1 >> 2];
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($2 + 8 | 0, $2 + 76 | 0);
  $1 = HEAP32[$0 >> 2];
  $6 = HEAP32[$0 + 4 >> 2];
  $13 = HEAP32[$8 >> 2];
  $9 = HEAP32[$8 + 4 >> 2];
  $4 = HEAP32[$2 + 24 >> 2];
  $10 = HEAP32[$2 + 28 >> 2];
  global$0 = $2 + 80 | 0;
  $8 = HEAP32[$12 + 4 >> 2];
  $5 = HEAP32[$2 + 56 >> 2];
  $12 = $5 ^ HEAP32[$12 >> 2];
  $7 = HEAP32[$2 + 60 >> 2] | HEAP32[$2 + 64 >> 2] << 24;
  $0 = $7 ^ $8;
  $2 = $0;
  $0 = __wasm_rotl_i64($12, $2, 16);
  $3 = i64toi32_i32$HIGH_BITS;
  $8 = $0;
  $0 = $2 + $6 | 0;
  $2 = $1 + $12 | 0;
  if ($2 >>> 0 < $1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $6 = $2;
  $8 = $8 ^ $2;
  $1 = $3;
  $3 = $0;
  $2 = $1 ^ $0;
  $11 = $2;
  $0 = $10 + $9 | 0;
  $1 = $4;
  $4 = $1 + $13 | 0;
  if ($4 >>> 0 < $1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $12 = $4;
  $1 = $0;
  $4 = __wasm_rotl_i64($4, $0, 32);
  $10 = $4 + $8 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $2 | 0;
  $0 = $10 >>> 0 < $4 >>> 0 ? $0 + 1 | 0 : $0;
  $5 = $5 ^ $10;
  $4 = $0;
  $7 = $7 ^ $0;
  $2 = __wasm_rotl_i64($13, $9, 13) ^ $12;
  $0 = $3;
  $3 = $1 ^ i64toi32_i32$HIGH_BITS;
  $0 = $0 + $3 | 0;
  $1 = $2;
  $2 = $2 + $6 | 0;
  if ($2 >>> 0 < $1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $6 = $2;
  $1 = __wasm_rotl_i64($1, $3, 17) ^ $2;
  $2 = $7;
  $3 = $0;
  $7 = $0 ^ i64toi32_i32$HIGH_BITS;
  $0 = $2 + $7 | 0;
  $2 = $1 + $5 | 0;
  if ($2 >>> 0 < $1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $12 = $2;
  $2 = __wasm_rotl_i64($1, $7, 13) ^ $2;
  $7 = $0;
  $1 = $0 ^ i64toi32_i32$HIGH_BITS;
  $5 = $1;
  $9 = __wasm_rotl_i64($8, $11, 21) ^ $10;
  $11 = $4 ^ i64toi32_i32$HIGH_BITS;
  $3 = __wasm_rotl_i64($6, $3, 32) ^ 255;
  $4 = $3 + $9 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $0 = $4 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
  $3 = $4;
  $4 = $0;
  $0 = $0 + $1 | 0;
  $1 = $2 + $3 | 0;
  if ($1 >>> 0 < $3 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $10 = $1;
  $2 = __wasm_rotl_i64($2, $5, 17) ^ $1;
  $8 = $0;
  $1 = $0 ^ i64toi32_i32$HIGH_BITS;
  $6 = __wasm_rotl_i64($2, $1, 13);
  $5 = i64toi32_i32$HIGH_BITS;
  $9 = __wasm_rotl_i64($9, $11, 16) ^ $3;
  $11 = $4 ^ i64toi32_i32$HIGH_BITS;
  $3 = __wasm_rotl_i64($12, $7, 32);
  $4 = $3 + $9 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $0 = $4 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
  $3 = $4;
  $4 = $0;
  $0 = $0 + $1 | 0;
  $1 = $2 + $3 | 0;
  if ($1 >>> 0 < $3 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $12 = $1;
  $2 = $1 ^ $6;
  $7 = $0;
  $1 = $0 ^ $5;
  $6 = __wasm_rotl_i64($2, $1, 17);
  $5 = i64toi32_i32$HIGH_BITS;
  $9 = __wasm_rotl_i64($9, $11, 21) ^ $3;
  $11 = $4 ^ i64toi32_i32$HIGH_BITS;
  $3 = __wasm_rotl_i64($10, $8, 32);
  $4 = $3 + $9 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $0 = $4 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
  $3 = $4;
  $4 = $0;
  $0 = $0 + $1 | 0;
  $1 = $2 + $3 | 0;
  if ($1 >>> 0 < $3 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $10 = $1;
  $2 = $1 ^ $6;
  $8 = $0;
  $1 = $0 ^ $5;
  $6 = __wasm_rotl_i64($2, $1, 13);
  $5 = i64toi32_i32$HIGH_BITS;
  $9 = __wasm_rotl_i64($9, $11, 16) ^ $3;
  $11 = $4 ^ i64toi32_i32$HIGH_BITS;
  $3 = __wasm_rotl_i64($12, $7, 32);
  $4 = $3 + $9 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $0 = $4 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
  $3 = $4;
  $4 = $0;
  $0 = $0 + $1 | 0;
  $1 = $2;
  $2 = $3;
  $1 = $1 + $2 | 0;
  if ($1 >>> 0 < $2 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $3 = $1 ^ $6;
  $1 = $0 ^ $5;
  $7 = $1;
  $6 = __wasm_rotl_i64($9, $11, 21) ^ $2;
  $5 = $4 ^ i64toi32_i32$HIGH_BITS;
  $2 = __wasm_rotl_i64($10, $8, 32);
  $4 = $2 + $6 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $5 | 0;
  $0 = $4 >>> 0 < $2 >>> 0 ? $0 + 1 | 0 : $0;
  $2 = $0;
  $0 = $0 + $1 | 0;
  $1 = $4;
  $4 = $1 + $3 | 0;
  if ($4 >>> 0 < $1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $2 = __wasm_rotl_i64(__wasm_rotl_i64($6, $5, 16) ^ $1, $2 ^ i64toi32_i32$HIGH_BITS, 21) ^ $4;
  $1 = i64toi32_i32$HIGH_BITS ^ $0;
  $2 = __wasm_rotl_i64($3, $7, 17) ^ $2;
  $1 = i64toi32_i32$HIGH_BITS ^ $1;
  $0 = __wasm_rotl_i64($4, $0, 32) ^ $2;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$HIGH_BITS ^ $1;
  return $0;
 }
 
 function core__num__dec2flt__parse__parse_decimal__h0e8f7547838b6a7c($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  folding_inner1 : {
   folding_inner0 : {
    label$1 : {
     label$2 : {
      label$4 : {
       label$8 : {
        label$9 : {
         if ($2) {
          while (1) {
           if ((HEAPU8[$1 + $3 | 0] + -48 & 255) >>> 0 <= 9) {
            $3 = $3 + 1 | 0;
            if ($3 >>> 0 < $2 >>> 0) {
             continue
            }
           }
           break;
          };
          if ($3 >>> 0 > $2 >>> 0) {
           break label$2
          }
          $4 = $2 - $3 | 0;
          if (!$4) {
           break label$9
          }
          $2 = $1 + $3 | 0;
          $5 = HEAPU8[$2 | 0];
          if (($5 | 0) == 46) {
           break label$8
          }
          if (($5 | 0) != 101 ? ($5 | 0) != 69 : 0) {
           break folding_inner0
          }
          if (!$3) {
           break folding_inner0
          }
          core__num__dec2flt__parse__parse_exp__h25cffe421291b6f9($0, $1, $3, 1053460, 0, $2 + 1 | 0, $4 + -1 | 0);
          return;
         }
         break folding_inner0;
        }
        HEAP32[$0 + 8 >> 2] = 0;
        HEAP32[$0 + 12 >> 2] = 0;
        HEAP32[$0 >> 2] = 0;
        HEAP32[$0 + 4 >> 2] = 0;
        HEAP32[$0 + 28 >> 2] = 0;
        HEAP32[$0 + 24 >> 2] = 1053460;
        break folding_inner1;
       }
       $5 = $2 + 1 | 0;
       $2 = 0;
       $4 = $4 + -1 | 0;
       if ($4) {
        while (1) {
         if ((HEAPU8[$2 + $5 | 0] + -48 & 255) >>> 0 <= 9) {
          $2 = $2 + 1 | 0;
          if ($2 >>> 0 < $4 >>> 0) {
           continue
          }
         }
         break;
        };
        if ($2 >>> 0 > $4 >>> 0) {
         break label$1
        }
       }
       if (!($2 | $3)) {
        break folding_inner0
       }
       $4 = $4 - $2 | 0;
       if (!$4) {
        break label$4
       }
       $6 = $2 + $5 | 0;
       if ((HEAPU8[$6 | 0] | 32) != 101) {
        break folding_inner0
       }
       core__num__dec2flt__parse__parse_exp__h25cffe421291b6f9($0, $1, $3, $5, $2, $6 + 1 | 0, $4 + -1 | 0);
       return;
      }
      HEAP32[$0 + 8 >> 2] = 0;
      HEAP32[$0 + 12 >> 2] = 0;
      HEAP32[$0 >> 2] = 0;
      HEAP32[$0 + 4 >> 2] = 0;
      HEAP32[$0 + 28 >> 2] = $2;
      HEAP32[$0 + 24 >> 2] = $5;
      break folding_inner1;
     }
     core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($3, $2);
     abort();
    }
    core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($2, $4);
    abort();
   }
   HEAP32[$0 >> 2] = 3;
   HEAP32[$0 + 4 >> 2] = 0;
   return;
  }
  HEAP32[$0 + 20 >> 2] = $3;
  HEAP32[$0 + 16 >> 2] = $1;
 }
 
 function hashbrown__map__HashMap_K_2cV_2cS___insert___7b_7bclosure_7d_7d__h8e0fa770beed92d3($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  $2 = global$0 + -64 | 0;
  global$0 = $2;
  $5 = HEAP32[HEAP32[$0 >> 2] >> 2];
  $0 = $5;
  $10 = HEAP32[$0 + 12 >> 2];
  $12 = $2 + 40 | 0;
  $3 = $12;
  $7 = HEAP32[$0 + 8 >> 2];
  HEAP32[$3 >> 2] = $7 ^ 2037671283;
  HEAP32[$3 + 4 >> 2] = $10 ^ 1952801890;
  $8 = $2 + 32 | 0;
  $0 = $8;
  HEAP32[$0 >> 2] = $7 ^ 1852075885;
  HEAP32[$0 + 4 >> 2] = $10 ^ 1685025377;
  $6 = HEAP32[$5 + 4 >> 2];
  $4 = $2 + 24 | 0;
  $0 = $4;
  $3 = HEAP32[$5 >> 2];
  HEAP32[$0 >> 2] = $3 ^ 1852142177;
  HEAP32[$0 + 4 >> 2] = $6 ^ 1819895653;
  HEAP32[$2 + 8 >> 2] = $7;
  HEAP32[$2 + 12 >> 2] = $10;
  HEAP32[$2 >> 2] = $3;
  HEAP32[$2 + 4 >> 2] = $6;
  HEAP32[$2 + 56 >> 2] = 0;
  HEAP32[$2 + 60 >> 2] = 0;
  HEAP32[$2 + 48 >> 2] = 0;
  HEAP32[$2 + 52 >> 2] = 0;
  HEAP32[$2 + 16 >> 2] = $3 ^ 1886610805;
  HEAP32[$2 + 20 >> 2] = $6 ^ 1936682341;
  $stretch__node__Node_20as_20core__hash__Hash___hash__h1591695e242000e2($1, $2);
  $1 = HEAP32[$0 >> 2];
  $6 = HEAP32[$0 + 4 >> 2];
  $13 = HEAP32[$8 >> 2];
  $9 = HEAP32[$8 + 4 >> 2];
  $4 = HEAP32[$2 + 16 >> 2];
  $10 = HEAP32[$2 + 20 >> 2];
  global$0 = $2 - -64 | 0;
  $8 = HEAP32[$12 + 4 >> 2];
  $5 = HEAP32[$2 + 48 >> 2];
  $12 = $5 ^ HEAP32[$12 >> 2];
  $7 = HEAP32[$2 + 52 >> 2] | HEAP32[$2 + 56 >> 2] << 24;
  $0 = $7 ^ $8;
  $2 = $0;
  $0 = __wasm_rotl_i64($12, $0, 16);
  $3 = i64toi32_i32$HIGH_BITS;
  $8 = $0;
  $0 = $2 + $6 | 0;
  $2 = $1 + $12 | 0;
  if ($2 >>> 0 < $1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $6 = $2;
  $8 = $8 ^ $2;
  $1 = $3;
  $3 = $0;
  $2 = $1 ^ $0;
  $11 = $2;
  $0 = $10 + $9 | 0;
  $1 = $4;
  $4 = $1 + $13 | 0;
  if ($4 >>> 0 < $1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $12 = $4;
  $1 = $0;
  $4 = __wasm_rotl_i64($4, $0, 32);
  $10 = $4 + $8 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $2 | 0;
  $0 = $10 >>> 0 < $4 >>> 0 ? $0 + 1 | 0 : $0;
  $5 = $5 ^ $10;
  $4 = $0;
  $7 = $7 ^ $0;
  $2 = __wasm_rotl_i64($13, $9, 13) ^ $12;
  $0 = $3;
  $3 = $1 ^ i64toi32_i32$HIGH_BITS;
  $0 = $0 + $3 | 0;
  $1 = $2;
  $2 = $2 + $6 | 0;
  if ($2 >>> 0 < $1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $6 = $2;
  $1 = __wasm_rotl_i64($1, $3, 17) ^ $2;
  $2 = $7;
  $3 = $0;
  $7 = $0 ^ i64toi32_i32$HIGH_BITS;
  $0 = $2 + $7 | 0;
  $2 = $1 + $5 | 0;
  if ($2 >>> 0 < $1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $12 = $2;
  $2 = __wasm_rotl_i64($1, $7, 13) ^ $2;
  $7 = $0;
  $1 = $0 ^ i64toi32_i32$HIGH_BITS;
  $5 = $1;
  $9 = __wasm_rotl_i64($8, $11, 21) ^ $10;
  $11 = $4 ^ i64toi32_i32$HIGH_BITS;
  $3 = __wasm_rotl_i64($6, $3, 32) ^ 255;
  $4 = $3 + $9 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $0 = $4 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
  $3 = $4;
  $4 = $0;
  $0 = $0 + $1 | 0;
  $1 = $2 + $3 | 0;
  if ($1 >>> 0 < $3 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $10 = $1;
  $2 = __wasm_rotl_i64($2, $5, 17) ^ $1;
  $8 = $0;
  $1 = $0 ^ i64toi32_i32$HIGH_BITS;
  $6 = __wasm_rotl_i64($2, $1, 13);
  $5 = i64toi32_i32$HIGH_BITS;
  $9 = __wasm_rotl_i64($9, $11, 16) ^ $3;
  $11 = $4 ^ i64toi32_i32$HIGH_BITS;
  $3 = __wasm_rotl_i64($12, $7, 32);
  $4 = $3 + $9 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $0 = $4 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
  $3 = $4;
  $4 = $0;
  $0 = $0 + $1 | 0;
  $1 = $2 + $3 | 0;
  if ($1 >>> 0 < $3 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $12 = $1;
  $2 = $1 ^ $6;
  $7 = $0;
  $1 = $0 ^ $5;
  $6 = __wasm_rotl_i64($2, $1, 17);
  $5 = i64toi32_i32$HIGH_BITS;
  $9 = __wasm_rotl_i64($9, $11, 21) ^ $3;
  $11 = $4 ^ i64toi32_i32$HIGH_BITS;
  $3 = __wasm_rotl_i64($10, $8, 32);
  $4 = $3 + $9 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $0 = $4 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
  $3 = $4;
  $4 = $0;
  $0 = $0 + $1 | 0;
  $1 = $2 + $3 | 0;
  if ($1 >>> 0 < $3 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $10 = $1;
  $2 = $1 ^ $6;
  $8 = $0;
  $1 = $0 ^ $5;
  $6 = __wasm_rotl_i64($2, $1, 13);
  $5 = i64toi32_i32$HIGH_BITS;
  $9 = __wasm_rotl_i64($9, $11, 16) ^ $3;
  $11 = $4 ^ i64toi32_i32$HIGH_BITS;
  $3 = __wasm_rotl_i64($12, $7, 32);
  $4 = $3 + $9 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $11 | 0;
  $0 = $4 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
  $3 = $4;
  $4 = $0;
  $0 = $0 + $1 | 0;
  $1 = $2;
  $2 = $3;
  $1 = $1 + $2 | 0;
  if ($1 >>> 0 < $2 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $3 = $1 ^ $6;
  $1 = $0 ^ $5;
  $7 = $1;
  $6 = __wasm_rotl_i64($9, $11, 21) ^ $2;
  $5 = $4 ^ i64toi32_i32$HIGH_BITS;
  $2 = __wasm_rotl_i64($10, $8, 32);
  $4 = $2 + $6 | 0;
  $0 = i64toi32_i32$HIGH_BITS + $5 | 0;
  $0 = $4 >>> 0 < $2 >>> 0 ? $0 + 1 | 0 : $0;
  $2 = $0;
  $0 = $0 + $1 | 0;
  $1 = $4;
  $4 = $1 + $3 | 0;
  if ($4 >>> 0 < $1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $2 = __wasm_rotl_i64(__wasm_rotl_i64($6, $5, 16) ^ $1, $2 ^ i64toi32_i32$HIGH_BITS, 21) ^ $4;
  $1 = i64toi32_i32$HIGH_BITS ^ $0;
  $2 = __wasm_rotl_i64($3, $7, 17) ^ $2;
  $1 = i64toi32_i32$HIGH_BITS ^ $1;
  $0 = __wasm_rotl_i64($4, $0, 32) ^ $2;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$HIGH_BITS ^ $1;
  return $0;
 }
 
 function $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___try_fold__hd9cbd0c9665d0d28($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0;
  $4 = global$0 - 32 | 0;
  global$0 = $4;
  HEAP32[$4 + 12 >> 2] = $3;
  HEAP32[$4 + 8 >> 2] = $2;
  $5 = $1 + 4 | 0;
  $3 = $4 + 24 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         while (1) {
          $6 = HEAP32[$5 >> 2];
          $2 = HEAP32[$1 >> 2];
          if ($6 - $2 >>> 0 <= 12) {
           break label$7
          }
          HEAP32[$1 >> 2] = $2 + 4;
          $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__h9d3a14a313358ba8($4 + 16 | 0, $4 + 8 | 0, $2);
          if (HEAP32[$4 + 16 >> 2] == 1) {
           break label$6
          }
          $2 = HEAP32[$1 >> 2];
          HEAP32[$1 >> 2] = $2 + 4;
          $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__h9d3a14a313358ba8($4 + 16 | 0, $4 + 8 | 0, $2);
          if (HEAP32[$4 + 16 >> 2] == 1) {
           break label$5
          }
          $2 = HEAP32[$1 >> 2];
          HEAP32[$1 >> 2] = $2 + 4;
          $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__h9d3a14a313358ba8($4 + 16 | 0, $4 + 8 | 0, $2);
          if (HEAP32[$4 + 16 >> 2] == 1) {
           break label$4
          }
          $2 = HEAP32[$1 >> 2];
          HEAP32[$1 >> 2] = $2 + 4;
          $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__h9d3a14a313358ba8($4 + 16 | 0, $4 + 8 | 0, $2);
          if (HEAP32[$4 + 16 >> 2] != 1) {
           continue
          }
          break;
         };
         $1 = HEAP32[$3 >> 2];
         break label$2;
        }
        $3 = 0;
        if (($2 | 0) == ($6 | 0)) {
         break label$1
        }
        $5 = $4 + 24 | 0;
        while (1) {
         HEAP32[$1 >> 2] = $2 + 4;
         $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__h9d3a14a313358ba8($4 + 16 | 0, $4 + 8 | 0, $2);
         if (HEAP32[$4 + 16 >> 2] == 1) {
          break label$3
         }
         $2 = HEAP32[$1 >> 2];
         if (($2 | 0) != HEAP32[$1 + 4 >> 2]) {
          continue
         }
         break;
        };
        break label$1;
       }
       $1 = HEAP32[$3 >> 2];
       break label$2;
      }
      $1 = HEAP32[$3 >> 2];
      break label$2;
     }
     $1 = HEAP32[$3 >> 2];
     break label$2;
    }
    $1 = HEAP32[$5 >> 2];
   }
   HEAP32[$0 + 4 >> 2] = HEAP32[$4 + 20 >> 2];
   HEAP32[$0 + 8 >> 2] = $1;
   $3 = 1;
  }
  HEAP32[$0 >> 2] = $3;
  global$0 = $4 + 32 | 0;
 }
 
 function stretch_layout__Node__set_measure___7b_7bclosure_7d_7d__h28a392002c378f9d($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, $6 = Math_fround(0), $7 = Math_fround(0);
  $3 = global$0 - 48 | 0;
  global$0 = $3;
  $4 = $3;
  if (HEAP32[$2 >> 2]) {
   $5 = 32
  } else {
   $5 = __wbindgen_number_new(+HEAPF32[$2 + 4 >> 2]) | 0
  }
  HEAP32[$4 + 32 >> 2] = $5;
  $4 = $3;
  if (HEAP32[$2 + 8 >> 2]) {
   $2 = 32
  } else {
   $2 = __wbindgen_number_new(+HEAPF32[$2 + 12 >> 2]) | 0
  }
  HEAP32[$4 + 36 >> 2] = $2;
  HEAP32[$3 + 40 >> 2] = 32;
  js_sys__Function__call2__h7c4e3107f8362d5f($3 + 24 | 0, $1, $3 + 40 | 0, $3 + 32 | 0, $3 + 36 | 0);
  $1 = HEAP32[$3 + 28 >> 2];
  label$3 : {
   label$4 : {
    label$5 : {
     if (HEAP32[$3 + 24 >> 2]) {
      if ($1 >>> 0 < 36) {
       break label$5
      }
      __wbindgen_object_drop_ref($1 | 0);
      break label$5;
     }
     HEAP32[$3 + 44 >> 2] = $1;
     stretch_layout__get_f32__ha7adebcd40baf7fe($3 + 16 | 0, $3 + 44 | 0, 1049029, 5);
     $6 = HEAPF32[$3 + 20 >> 2];
     $1 = HEAP32[$3 + 16 >> 2];
     stretch_layout__get_f32__ha7adebcd40baf7fe($3 + 8 | 0, $3 + 44 | 0, 1049034, 6);
     label$7 : {
      if (($1 | 0) != 1) {
       break label$7
      }
      if (HEAP32[$3 + 8 >> 2] != 1) {
       break label$7
      }
      $7 = HEAPF32[$3 + 12 >> 2];
      HEAP32[$0 >> 2] = 0;
      HEAPF32[$0 + 8 >> 2] = $7;
      HEAPF32[$0 + 4 >> 2] = $6;
      $0 = HEAP32[$3 + 44 >> 2];
      if ($0 >>> 0 >= 36) {
       __wbindgen_object_drop_ref($0 | 0)
      }
      $0 = HEAP32[$3 + 40 >> 2];
      if ($0 >>> 0 >= 36) {
       __wbindgen_object_drop_ref($0 | 0)
      }
      $0 = HEAP32[$3 + 36 >> 2];
      if ($0 >>> 0 >= 36) {
       __wbindgen_object_drop_ref($0 | 0)
      }
      $0 = HEAP32[$3 + 32 >> 2];
      if ($0 >>> 0 < 36) {
       break label$4
      }
      __wbindgen_object_drop_ref($0 | 0);
      break label$4;
     }
     $1 = HEAP32[$3 + 44 >> 2];
     if ($1 >>> 0 < 36) {
      break label$5
     }
     __wbindgen_object_drop_ref($1 | 0);
    }
    $1 = HEAP32[$3 + 40 >> 2];
    if ($1 >>> 0 >= 36) {
     __wbindgen_object_drop_ref($1 | 0)
    }
    $1 = __rust_alloc(8, 4);
    if (!$1) {
     break label$3
    }
    HEAP32[$1 + 4 >> 2] = 20;
    HEAP32[$1 >> 2] = 1049116;
    HEAP32[$0 + 4 >> 2] = $1;
    HEAP32[$0 >> 2] = 1;
    HEAP32[$0 + 8 >> 2] = 1049136;
    $0 = HEAP32[$3 + 36 >> 2];
    if ($0 >>> 0 >= 36) {
     __wbindgen_object_drop_ref($0 | 0)
    }
    $0 = HEAP32[$3 + 32 >> 2];
    if ($0 >>> 0 < 36) {
     break label$4
    }
    __wbindgen_object_drop_ref($0 | 0);
   }
   global$0 = $3 + 48 | 0;
   return;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](8, 4);
  abort();
 }
 
 function core__num__dec2flt__algorithm__algorithm_r__hc78fd1e69554e0fc($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $3 = global$0 - 864 | 0;
  global$0 = $3;
  $7 = $3 + 356 | 0;
  while (1) {
   $f32_20as_20core__num__dec2flt__rawfp__RawFloat___unpack__haddc0a4db1e502dc($3, $2);
   $8 = HEAPU16[$3 + 8 >> 1];
   $5 = HEAP32[$3 >> 2];
   $4 = HEAP32[$3 + 4 >> 2];
   $6 = $4;
   $core__num__bignum__Big32x40_20as_20core__clone__Clone___clone__h6d9ab1cb70598592($3 + 16 | 0, $0);
   core__num__bignum__Big32x40__from_u64__hb47af5bbea157ebc($3 + 184 | 0, $5, $4);
   core__num__dec2flt__algorithm__make_ratio__h003a9dbef8c19d2f($3 + 16 | 0, $3 + 184 | 0, $1, $8);
   HEAP32[$7 >> 2] = $4;
   HEAP32[$3 + 352 >> 2] = $5;
   label$2 : {
    if (($core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($3 + 16 | 0, $3 + 184 | 0) & 255) >>> 0 < 2) {
     core__num__bignum__Big32x40__mul_digits__h7d68f43b76f883f5(core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e(core__num__bignum__Big32x40__sub__ha94c81ecf8eacd8a($3 + 16 | 0, $3 + 184 | 0), 1), $3 + 352 | 0);
     memcpy($3 + 528 | 0, $3 + 16 | 0, 164);
     $4 = 0;
     break label$2;
    }
    $core__num__bignum__Big32x40_20as_20core__clone__Clone___clone__h6d9ab1cb70598592($3 + 696 | 0, $3 + 184 | 0);
    core__num__bignum__Big32x40__mul_digits__h7d68f43b76f883f5(core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e(core__num__bignum__Big32x40__sub__ha94c81ecf8eacd8a($3 + 696 | 0, $3 + 16 | 0), 1), $3 + 352 | 0);
    memcpy($3 + 528 | 0, $3 + 696 | 0, 164);
    $4 = 1;
   }
   memcpy($3 + 360 | 0, $3 + 528 | 0, 164);
   label$4 : {
    label$5 : {
     if (($core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($3 + 360 | 0, $3 + 184 | 0) & 255) != 255) {
      label$7 : {
       if (!$core__num__bignum__Big32x40_20as_20core__cmp__PartialEq___eq__h59a6aa076884368c($3 + 360 | 0, $3 + 184 | 0)) {
        break label$7
       }
       if ($5 & 1) {
        break label$7
       }
       if (!(($5 | 0) != 8388608 | ($6 | 0) != 0 | $4 ^ 1)) {
        break label$5
       }
       break label$4;
      }
      if ($4) {
       break label$5
      }
      $2 = core__num__dec2flt__rawfp__next_float__h96c2fc47f7b351c4($2);
      continue;
     }
     memcpy($3 + 696 | 0, $3 + 360 | 0, 164);
     core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e($3 + 696 | 0, 1);
     if (($5 | 0) != 8388608 | $6 | $4 ^ 1) {
      break label$4
     }
     if (($core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($3 + 696 | 0, $3 + 184 | 0) & 255) != 1) {
      break label$4
     }
    }
    $2 = core__num__dec2flt__rawfp__prev_float__h84a9ca750e8146ac($2);
    continue;
   }
   break;
  };
  global$0 = $3 + 864 | 0;
  return $2;
 }
 
 function $std__sync__once__Finish_20as_20core__ops__drop__Drop___drop__h1e616a02947bc277($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0;
  $1 = global$0 + -64 | 0;
  global$0 = $1;
  $2 = HEAP32[$0 >> 2];
  $3 = HEAP32[$2 >> 2];
  HEAP32[$2 >> 2] = HEAPU8[$0 + 4 | 0] ? 1 : 3;
  $0 = $3 & 3;
  HEAP32[$1 + 12 >> 2] = $0;
  if (($0 | 0) == 2) {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       $0 = $3 & -4;
       if ($0) {
        while (1) {
         $3 = HEAP32[$0 + 4 >> 2];
         $2 = HEAP32[$0 >> 2];
         HEAP32[$0 >> 2] = 0;
         if (!$2) {
          break label$5
         }
         HEAP8[$0 + 8 | 0] = 1;
         HEAP32[$1 + 16 >> 2] = $2;
         $2 = $2 + 24 | 0;
         $0 = HEAP32[$2 >> 2];
         HEAP32[$2 >> 2] = 2;
         label$8 : {
          if (!$0) {
           break label$8
          }
          if (($0 | 0) != 1) {
           if (($0 | 0) == 2) {
            break label$8
           }
           break label$4;
          }
          $2 = HEAP32[$1 + 16 >> 2];
          $4 = $2 + 28 | 0;
          $0 = HEAP32[$4 >> 2];
          if (HEAPU8[$0 | 0]) {
           break label$3
          }
          HEAP8[$0 | 0] = 1;
          if (HEAP32[266672] == 1) {
           $0 = HEAP32[266673]
          } else {
           HEAP32[266672] = 1;
           HEAP32[266673] = 0;
           $0 = 0;
          }
          HEAP32[266673] = $0;
          if (HEAPU8[$2 + 32 | 0]) {
           break label$2
          }
          HEAP8[HEAP32[$4 >> 2]] = 0;
         }
         $2 = HEAP32[$1 + 16 >> 2];
         $0 = HEAP32[$2 >> 2];
         HEAP32[$2 >> 2] = $0 + -1;
         if (($0 | 0) == 1) {
          alloc__sync__Arc_T___drop_slow__h51a4fa13661dd7d4($1 + 16 | 0)
         }
         $0 = $3;
         if ($0) {
          continue
         }
         break;
        }
       }
       global$0 = $1 - -64 | 0;
       return;
      }
      core__panicking__panic__h2d0bc53a963fb996(1052304);
      abort();
     }
     std__panicking__begin_panic__haa7e8f73e4c17ace(1052804, 28, 1052788);
     abort();
    }
    std__panicking__begin_panic__haa7e8f73e4c17ace(1053360, 32, 1053344);
    abort();
   }
   core__result__unwrap_failed__hf393a2f4cae996d3($2 + 28 | 0, ($0 | 0) != 0);
   abort();
  }
  HEAP32[$1 + 56 >> 2] = $1 + 12;
  HEAP32[$1 + 52 >> 2] = 55;
  HEAP32[$1 + 36 >> 2] = 2;
  HEAP32[$1 + 44 >> 2] = 55;
  HEAP32[$1 + 60 >> 2] = 1052608;
  HEAP32[$1 + 20 >> 2] = 3;
  HEAP32[$1 + 24 >> 2] = 0;
  HEAP32[$1 + 16 >> 2] = 1052172;
  HEAP32[$1 + 48 >> 2] = $1 + 60;
  HEAP32[$1 + 40 >> 2] = $1 + 56;
  HEAP32[$1 + 32 >> 2] = $1 + 40;
  std__panicking__begin_panic_fmt__hb7825530f38bd066($1 + 16 | 0, 1053080);
  abort();
 }
 
 function $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__h6431a241e07b125a($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = Math_fround(0), $5 = Math_fround(0), $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  label$1 : {
   label$2 : {
    $6 = HEAP32[$0 >> 2];
    $8 = HEAP32[$0 + 4 >> 2];
    if (($6 | 0) != ($8 | 0)) {
     $11 = HEAP32[$0 + 20 >> 2];
     $9 = HEAP32[$0 + 16 >> 2];
     $12 = HEAP32[$0 + 12 >> 2];
     $0 = HEAP32[HEAP32[$0 + 8 >> 2] >> 2];
     $7 = HEAP32[$0 + 8 >> 2];
     $10 = HEAP32[$0 >> 2];
     while (1) {
      $0 = $6;
      $1 = HEAP32[$0 >> 2];
      if ($7 >>> 0 <= $1 >>> 0) {
       break label$2
      }
      $2 = HEAP32[$12 >> 2];
      if ($7 >>> 0 <= $2 >>> 0) {
       break label$1
      }
      $6 = $0 + 192 | 0;
      label$5 : {
       label$6 : {
        $1 = Math_imul($1, 288) + $10 | 0;
        $3 = HEAPU8[$1 + 207 | 0];
        if (($3 & 7) != 4) {
         if ($3) {
          break label$6
         }
         if (HEAPU8[(Math_imul($2, 288) + $10 | 0) + 206 | 0] != 3) {
          break label$6
         }
        }
        $2 = HEAPU8[$9 | 0] | 2;
        $3 = $1 + 48 | 0;
        label$8 : {
         if (($2 | 0) != 3) {
          break label$8
         }
         $3 = $1 + 32 | 0;
        }
        if (HEAP32[$3 >> 2] == 1) {
         break label$6
        }
        $2 = ($2 & 3) == 3;
        $3 = $1 + 56 | 0;
        label$10 : {
         if (!$2) {
          break label$10
         }
         $3 = $1 + 40 | 0;
        }
        if (HEAP32[$3 >> 2] == 1) {
         break label$6
        }
        if (HEAP32[($2 ? $1 + 144 | 0 : $1 + 152 | 0) >> 2] != 1) {
         break label$6
        }
        $4 = Math_fround(Math_fround(HEAPF32[$11 >> 2] - HEAPF32[$0 + 176 >> 2]) + ($2 ? HEAPF32[$0 + 152 >> 2] : HEAPF32[$0 + 156 >> 2]));
        break label$5;
       }
       $4 = HEAPF32[$0 + 156 >> 2];
       if ((HEAPU8[$9 | 0] | 2) != 3) {
        break label$5
       }
       $4 = HEAPF32[$0 + 152 >> 2];
      }
      $5 = $5 != $5 ? $4 : $5 < $4 ? $4 : $5;
      if (($6 | 0) != ($8 | 0)) {
       continue
      }
      break;
     };
    }
    return $5;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1051560, $1, $7);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051560, $2, $7);
  abort();
 }
 
 function hashbrown__raw__RawTable_T___try_with_capacity__hcabcbfe869fb1322($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  label$1 : {
   $6 = $0;
   label$2 : {
    label$4 : {
     label$5 : {
      label$6 : {
       if ($1) {
        if ($1 >>> 0 >= 8) {
         break label$6
        }
        $1 = $1 + 1 | 0;
        break label$5;
       }
       HEAP32[$0 + 20 >> 2] = 0;
       $1 = $0 + 12 | 0;
       HEAP32[$1 >> 2] = 4;
       HEAP32[$1 + 4 >> 2] = 0;
       HEAP32[$0 + 8 >> 2] = 1050920;
       HEAP32[$0 + 4 >> 2] = 0;
       $0 = 0;
       break label$2;
      }
      $2 = $1 << 3;
      if (!($1 >>> 29)) {
       $1 = ($2 >>> 0) / 7 | 0;
       $3 = 1;
       if ($2 >>> 0 >= 14) {
        break label$5
       }
       break label$4;
      }
      core__panicking__panic__h2d0bc53a963fb996(1050896);
      abort();
     }
     $3 = (-1 >>> Math_clz32($1 + -1 | 0)) + 1 | 0;
    }
    $2 = __wasm_i64_mul($3, 0, 20);
    if (i64toi32_i32$HIGH_BITS) {
     break label$1
    }
    $1 = $3 + 7 & -4;
    $4 = $3 + 4 | 0;
    if ($1 >>> 0 < $4 >>> 0) {
     break label$1
    }
    $2 = $1 + $2 | 0;
    if ($2 >>> 0 < $1 >>> 0) {
     break label$1
    }
    if ($2 >>> 0 >= 4294967293) {
     break label$1
    }
    $5 = __rust_alloc($2, 4);
    if ($5) {
     $2 = memset($5, 255, $4);
     HEAP32[$0 + 20 >> 2] = 0;
     HEAP32[$0 + 12 >> 2] = $1 + $2;
     HEAP32[$0 + 8 >> 2] = $2;
     $1 = $3 + -1 | 0;
     HEAP32[$0 + 4 >> 2] = $1;
     HEAP32[$0 + 16 >> 2] = $1 >>> 0 < 8 ? $1 : Math_imul($3 >>> 3, 7);
     $0 = 0;
     break label$2;
    }
    $0 = HEAP32[266546];
    FUNCTION_TABLE[$0 ? $0 : 56]($2, 4);
    abort();
   }
   HEAP8[$6 | 0] = $0;
   return;
  }
  core__panicking__panic__h2d0bc53a963fb996(1050896);
  abort();
 }
 
 function core__num__bignum__Big32x40__mul_pow5__h5aa98cad29f0d9cf($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if ($1 >>> 0 >= 13) {
       $6 = $0 + 4 | 0;
       $2 = HEAP32[$0 >> 2];
       while (1) {
        if ($2 >>> 0 >= 41) {
         break label$4
        }
        label$7 : {
         if ($2) {
          $5 = $2 << 2;
          $9 = $5 + $0 | 0;
          $4 = 0;
          $3 = $6;
          while (1) {
           $7 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 1220703125) + $4 | 0;
           $8 = i64toi32_i32$HIGH_BITS;
           $8 = $7 >>> 0 < $4 >>> 0 ? $8 + 1 | 0 : $8;
           HEAP32[$3 >> 2] = $7;
           $3 = $3 + 4 | 0;
           $4 = $8;
           $5 = $5 + -4 | 0;
           if ($5) {
            continue
           }
           break;
          };
          if (!$4) {
           break label$7
          }
          if ($2 >>> 0 > 39) {
           break label$3
          }
          HEAP32[$9 + 4 >> 2] = $4;
          $2 = $2 + 1 | 0;
          break label$7;
         }
         $2 = 0;
        }
        HEAP32[$0 >> 2] = $2;
        $1 = $1 + -13 | 0;
        if ($1 >>> 0 >= 13) {
         continue
        }
        break;
       };
      }
      label$10 : {
       if ($1) {
        $3 = 1;
        while (1) {
         $3 = Math_imul($3, 5);
         $1 = $1 + -1 | 0;
         if ($1) {
          continue
         }
         break;
        };
        $1 = $3;
        break label$10;
       }
       $1 = 1;
      }
      $2 = HEAP32[$0 >> 2];
      if ($2 >>> 0 >= 41) {
       break label$2
      }
      if ($2) {
       $5 = $2 << 2;
       $9 = ($5 + $0 | 0) + 4 | 0;
       $3 = $0 + 4 | 0;
       $4 = 0;
       while (1) {
        $7 = __wasm_i64_mul($1, 0, HEAP32[$3 >> 2]) + $4 | 0;
        $6 = i64toi32_i32$HIGH_BITS;
        $6 = $7 >>> 0 < $4 >>> 0 ? $6 + 1 | 0 : $6;
        HEAP32[$3 >> 2] = $7;
        $3 = $3 + 4 | 0;
        $4 = $6;
        $5 = $5 + -4 | 0;
        if ($5) {
         continue
        }
        break;
       };
       $1 = $0;
       if ($4) {
        if ($2 >>> 0 > 39) {
         break label$1
        }
        HEAP32[$9 >> 2] = $4;
        $2 = $2 + 1 | 0;
       }
       HEAP32[$1 >> 2] = $2;
       return $0;
      }
      HEAP32[$0 >> 2] = 0;
      return $0;
     }
     core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($2, 40);
     abort();
    }
    core__panicking__panic_bounds_check__h0537ade040df571e(1065872, $2, 40);
    abort();
   }
   core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($2, 40);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1065872, $2, 40);
  abort();
 }
 
 function core__fmt__builders__DebugStruct__field__hab3f8a77cf8c4394($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
  $5 = global$0 - 80 | 0;
  global$0 = $5;
  $8 = 1;
  label$1 : {
   if (HEAPU8[$0 + 4 | 0]) {
    break label$1
   }
   $7 = HEAPU8[$0 + 5 | 0];
   $6 = HEAP32[$0 >> 2];
   if (!(HEAPU8[$6 | 0] & 4)) {
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 28 >> 2] + 12 >> 2]](HEAP32[$6 + 24 >> 2], $7 ? 1061109 : 1061111, $7 ? 2 : 3)) {
     break label$1
    }
    $6 = HEAP32[$0 >> 2];
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 28 >> 2] + 12 >> 2]](HEAP32[$6 + 24 >> 2], $1, $2)) {
     break label$1
    }
    $1 = HEAP32[$0 >> 2];
    if (FUNCTION_TABLE[HEAP32[HEAP32[$1 + 28 >> 2] + 12 >> 2]](HEAP32[$1 + 24 >> 2], 1060412, 2)) {
     break label$1
    }
    $8 = FUNCTION_TABLE[HEAP32[$4 + 12 >> 2]]($3, HEAP32[$0 >> 2]) | 0;
    break label$1;
   }
   if (!$7) {
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 28 >> 2] + 12 >> 2]](HEAP32[$6 + 24 >> 2], 1061104, 3)) {
     break label$1
    }
    $6 = HEAP32[$0 >> 2];
   }
   HEAP8[$5 + 16 | 0] = 1;
   $7 = HEAP32[$6 + 16 >> 2];
   $10 = HEAP32[$6 + 20 >> 2];
   $11 = HEAP32[$6 + 8 >> 2];
   $12 = HEAP32[$6 + 12 >> 2];
   HEAP32[$5 + 52 >> 2] = 1061076;
   $9 = HEAP32[$6 + 28 >> 2];
   HEAP32[$5 + 8 >> 2] = HEAP32[$6 + 24 >> 2];
   HEAP32[$5 + 12 >> 2] = $9;
   $9 = HEAP32[$6 + 32 >> 2];
   $13 = HEAP32[$6 + 36 >> 2];
   $14 = HEAP32[$6 + 40 >> 2];
   $15 = HEAP32[$6 + 44 >> 2];
   HEAP8[$5 + 72 | 0] = HEAPU8[$6 + 48 | 0];
   $16 = HEAP32[$6 >> 2];
   $6 = HEAP32[$6 + 4 >> 2];
   HEAP32[$5 + 32 >> 2] = $11;
   HEAP32[$5 + 36 >> 2] = $12;
   HEAP32[$5 + 40 >> 2] = $7;
   HEAP32[$5 + 44 >> 2] = $10;
   HEAP32[$5 + 64 >> 2] = $14;
   HEAP32[$5 + 68 >> 2] = $15;
   HEAP32[$5 + 56 >> 2] = $9;
   HEAP32[$5 + 60 >> 2] = $13;
   HEAP32[$5 + 24 >> 2] = $16;
   HEAP32[$5 + 28 >> 2] = $6;
   HEAP32[$5 + 48 >> 2] = $5 + 8;
   if ($core__fmt__builders__PadAdapter_20as_20core__fmt__Write___write_str__h09f53eef721a952f($5 + 8 | 0, $1, $2)) {
    break label$1
   }
   if ($core__fmt__builders__PadAdapter_20as_20core__fmt__Write___write_str__h09f53eef721a952f($5 + 8 | 0, 1060412, 2)) {
    break label$1
   }
   if (FUNCTION_TABLE[HEAP32[$4 + 12 >> 2]]($3, $5 + 24 | 0)) {
    break label$1
   }
   $8 = FUNCTION_TABLE[HEAP32[HEAP32[$5 + 52 >> 2] + 12 >> 2]](HEAP32[$5 + 48 >> 2], 1061107, 2) | 0;
  }
  HEAP8[$0 + 5 | 0] = 1;
  HEAP8[$0 + 4 | 0] = $8;
  global$0 = $5 + 80 | 0;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__memalign__he461fff21ac8d1e2($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $0 = $0 >>> 0 > 16 ? $0 : 16;
  label$1 : {
   if (-65587 - $0 >>> 0 <= $1 >>> 0) {
    break label$1
   }
   $4 = $1 >>> 0 < 11 ? 16 : $1 + 11 & -8;
   $2 = dlmalloc__dlmalloc__Dlmalloc__malloc__haa66310b00a7bd6b(($4 + $0 | 0) + 12 | 0);
   if (!$2) {
    break label$1
   }
   $1 = $2 + -8 | 0;
   label$2 : {
    label$3 : {
     $3 = $0 + -1 | 0;
     if ($3 & $2) {
      $5 = $2 + -4 | 0;
      $6 = HEAP32[$5 >> 2];
      $2 = ($2 + $3 & 0 - $0) + -8 | 0;
      $0 = $2 - $1 >>> 0 > 16 ? $2 : $0 + $2 | 0;
      $2 = $0 - $1 | 0;
      $3 = ($6 & -8) - $2 | 0;
      if (!($6 & 3)) {
       break label$3
      }
      HEAP32[$0 + 4 >> 2] = $3 | HEAP32[$0 + 4 >> 2] & 1 | 2;
      $3 = $0 + $3 | 0;
      HEAP32[$3 + 4 >> 2] = HEAP32[$3 + 4 >> 2] | 1;
      HEAP32[$5 >> 2] = $2 | HEAP32[$5 >> 2] & 1 | 2;
      HEAP32[$0 + 4 >> 2] = HEAP32[$0 + 4 >> 2] | 1;
      dlmalloc__dlmalloc__Dlmalloc__dispose_chunk__h6f59f1d81bec5e46($1, $2);
      break label$2;
     }
     $0 = $1;
     break label$2;
    }
    $1 = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $3;
    HEAP32[$0 >> 2] = $1 + $2;
   }
   $1 = HEAP32[$0 + 4 >> 2];
   label$5 : {
    if (!($1 & 3)) {
     break label$5
    }
    $2 = $1 & -8;
    if ($2 >>> 0 <= $4 + 16 >>> 0) {
     break label$5
    }
    HEAP32[$0 + 4 >> 2] = $4 | $1 & 1 | 2;
    $1 = $0 + $4 | 0;
    $4 = $2 - $4 | 0;
    HEAP32[$1 + 4 >> 2] = $4 | 3;
    $2 = $0 + $2 | 0;
    HEAP32[$2 + 4 >> 2] = HEAP32[$2 + 4 >> 2] | 1;
    dlmalloc__dlmalloc__Dlmalloc__dispose_chunk__h6f59f1d81bec5e46($1, $4);
   }
   $3 = $0 + 8 | 0;
  }
  return $3;
 }
 
 function std__sync__once__Once__call_inner__h49bf6a110bd0c1f8($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  $6 = $2 | 2;
  $3 = HEAP32[266538];
  $5 = $2 + 8 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     while (1) {
      label$4 : {
       label$6 : {
        $1 = $3;
        if ($1) {
         if (($1 | 0) != 1) {
          if (($1 | 0) == 3) {
           break label$3
          }
          if (($1 & 3) != 2) {
           break label$2
          }
          if (HEAP32[266556] != 1) {
           HEAP32[266556] = 1;
           HEAP32[266557] = 0;
           HEAP32[266558] = 0;
          }
          $3 = std__sys_common__thread_info__ThreadInfo__with___7b_7bclosure_7d_7d__hb699849b36c0e1da();
          HEAP8[$5 | 0] = 0;
          HEAP32[$2 >> 2] = $3;
          HEAP32[$2 + 4 >> 2] = 0;
          $3 = $1;
          while (1) {
           if (($3 & 3) != 2) {
            break label$6
           }
           $1 = HEAP32[266538];
           HEAP32[266538] = ($1 | 0) == ($3 | 0) ? $6 : $1;
           HEAP32[$2 + 4 >> 2] = $3 & -4;
           $4 = ($1 | 0) != ($3 | 0);
           $3 = $1;
           if ($4) {
            continue
           }
           break;
          };
          if (!HEAPU8[$5 | 0]) {
           while (1) {
            std__thread__park__h8c2d8fb1038e650a();
            if (!HEAPU8[$5 | 0]) {
             continue
            }
            break;
           }
          }
          $3 = HEAP32[266538];
          $1 = HEAP32[$2 >> 2];
          if (!$1) {
           continue
          }
          $4 = $1;
          $1 = HEAP32[$1 >> 2];
          HEAP32[$4 >> 2] = $1 + -1;
          if (($1 | 0) != 1) {
           continue
          }
          alloc__sync__Arc_T___drop_slow__h51a4fa13661dd7d4($2);
          continue;
         }
         break label$1;
        }
        $3 = HEAP32[266538];
        HEAP32[266538] = ($1 | 0) == ($3 | 0) ? 2 : $3;
        if (($1 | 0) != ($3 | 0)) {
         continue
        }
        break label$4;
       }
       $1 = HEAP32[$2 >> 2];
       if (!$1) {
        continue
       }
       $4 = $1;
       $1 = HEAP32[$1 >> 2];
       HEAP32[$4 >> 2] = $1 + -1;
       if (($1 | 0) != 1) {
        continue
       }
       alloc__sync__Arc_T___drop_slow__h51a4fa13661dd7d4($2);
       continue;
      }
      break;
     };
     HEAP32[$2 >> 2] = 1066152;
     FUNCTION_TABLE[HEAP32[262508]]($0, ($1 | 0) == 1);
     HEAP8[$2 + 4 | 0] = 0;
     $std__sync__once__Finish_20as_20core__ops__drop__Drop___drop__h1e616a02947bc277($2);
    }
    global$0 = $2 + 16 | 0;
    return;
   }
   std__panicking__begin_panic__haa7e8f73e4c17ace(1052972, 47, 1052956);
   abort();
  }
  std__panicking__begin_panic__haa7e8f73e4c17ace(1053036, 42, 1053020);
  abort();
 }
 
 function core__num__bignum__Big32x40__bit_length__h13ff63659f8edff3($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  label$1 : {
   $3 = HEAP32[$0 >> 2];
   if ($3 >>> 0 < 41) {
    $1 = $3 << 2;
    $4 = $0 + 4 | 0;
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         if ($3 >>> 0 >= 4) {
          $1 = ($0 + $1 | 0) + -12 | 0;
          while (1) {
           if (HEAP32[$1 + 12 >> 2]) {
            break label$3
           }
           if (HEAP32[$1 + 8 >> 2]) {
            break label$6
           }
           if (HEAP32[$1 + 4 >> 2]) {
            break label$5
           }
           if (HEAP32[$1 >> 2]) {
            break label$4
           }
           $2 = $2 + 4 | 0;
           $6 = $1 - $4 | 0;
           $5 = $1 + -16 | 0;
           $1 = $5;
           if ($6 >>> 0 > 12) {
            continue
           }
           break;
          };
          $1 = $5 + 16 | 0;
          if (($4 | 0) != ($1 | 0)) {
           break label$7
          }
          break label$3;
         }
         $1 = $1 + $4 | 0;
         if (($4 | 0) == ($1 | 0)) {
          break label$3
         }
        }
        $1 = $1 + -4 | 0;
        while (1) {
         if (HEAP32[$1 >> 2]) {
          break label$3
         }
         $2 = $2 + 1 | 0;
         $1 = $1 + -4 | 0;
         if (($1 | 0) != ($0 | 0)) {
          continue
         }
         break;
        };
        break label$3;
       }
       $2 = $2 + 1 | 0;
       break label$3;
      }
      $2 = $2 + 2 | 0;
      break label$3;
     }
     $2 = $2 + 3 | 0;
    }
    $1 = $3 - $2 | 0;
    if ($3 >>> 0 < $2 >>> 0) {
     break label$1
    }
    label$11 : {
     if ($1) {
      $1 = ($3 << 5 | 1) - ($2 << 5) | 0;
      while (1) {
       $2 = $1 + -2 | 0;
       $3 = $2 >>> 5;
       if ($2 >>> 0 >= 1280) {
        break label$11
       }
       $1 = $1 + -1 | 0;
       if (!(HEAP32[(($3 << 2) + $0 | 0) + 4 >> 2] & 1 << ($2 & 31))) {
        continue
       }
       break;
      };
      return $1;
     }
     return 0;
    }
    core__panicking__panic_bounds_check__h0537ade040df571e(1065788, $3, 40);
    abort();
   }
   core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($3, 40);
   abort();
  }
  core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($1, $3);
  abort();
 }
 
 function std__thread__Thread__new__h5b15730e54159bdd($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  label$1 : {
   label$2 : {
    $1 = HEAP32[$0 >> 2];
    label$3 : {
     if ($1) {
      $3 = HEAP32[$0 + 8 >> 2];
      HEAP32[$2 + 36 >> 2] = HEAP32[$0 + 4 >> 2];
      HEAP32[$2 + 40 >> 2] = $3;
      HEAP32[$2 + 32 >> 2] = $1;
      $0 = $2 + 32 | 0;
      $3 = HEAP32[$0 + 4 >> 2];
      $1 = $2 + 16 | 0;
      HEAP32[$1 >> 2] = HEAP32[$0 >> 2];
      HEAP32[$1 + 4 >> 2] = $3;
      HEAP32[$1 + 8 >> 2] = HEAP32[$0 + 8 >> 2];
      $0 = HEAP32[$2 + 16 >> 2];
      core__slice__memchr__memchr__h7af23d5070345c6c($2 + 8 | 0, 0, $0, HEAP32[$2 + 24 >> 2]);
      if (HEAP32[$2 + 8 >> 2]) {
       break label$2
      }
      HEAP32[$2 + 40 >> 2] = HEAP32[$2 + 24 >> 2];
      $0 = HEAP32[$2 + 20 >> 2];
      HEAP32[$2 + 32 >> 2] = HEAP32[$2 + 16 >> 2];
      HEAP32[$2 + 36 >> 2] = $0;
      std__ffi__c_str__CString__from_vec_unchecked__hd801b68fb97cc939($2, $2 + 32 | 0);
      $5 = HEAP32[$2 + 4 >> 2];
      $6 = HEAP32[$2 >> 2];
      if (HEAPU8[1066696]) {
       break label$3
      }
      break label$1;
     }
     if (!HEAPU8[1066696]) {
      break label$1
     }
    }
    std__panicking__begin_panic__haa7e8f73e4c17ace(1053360, 32, 1053344);
    abort();
   }
   $1 = HEAP32[$2 + 12 >> 2];
   $3 = HEAP32[$2 + 24 >> 2];
   $4 = $2 + 40 | 0;
   HEAP32[$4 >> 2] = HEAP32[$2 + 20 >> 2];
   HEAP32[$4 + 4 >> 2] = $3;
   HEAP32[$2 + 36 >> 2] = $0;
   HEAP32[$2 + 32 >> 2] = $1;
   core__result__unwrap_failed__hae3003d4eb6b7de1($2 + 32 | 0);
   abort();
  }
  HEAP8[1066696] = 1;
  $1 = HEAP32[266677];
  $0 = $1;
  label$5 : {
   label$6 : {
    label$7 : {
     $3 = HEAP32[266676];
     if (!(($3 | 0) == -1 & ($1 | 0) == -1)) {
      $1 = $0;
      $4 = $3 + 1 | 0;
      if ($4 >>> 0 < 1) {
       $1 = $1 + 1 | 0
      }
      HEAP32[266676] = $4;
      HEAP32[266677] = $1;
      if (!($0 | $3)) {
       break label$7
      }
      HEAP8[1066696] = 0;
      $4 = __rust_alloc(1, 1);
      if (!$4) {
       break label$6
      }
      HEAP8[$4 | 0] = 0;
      $1 = __rust_alloc(48, 8);
      if (!$1) {
       break label$5
      }
      HEAP32[$1 + 36 >> 2] = 1;
      HEAP32[$1 + 40 >> 2] = 0;
      HEAP32[$1 + 24 >> 2] = 0;
      HEAP32[$1 + 20 >> 2] = $5;
      HEAP32[$1 + 16 >> 2] = $6;
      HEAP32[$1 + 8 >> 2] = $3;
      HEAP32[$1 + 12 >> 2] = $0;
      HEAP32[$1 >> 2] = 1;
      HEAP32[$1 + 4 >> 2] = 1;
      HEAP32[$1 + 28 >> 2] = $4;
      HEAP32[$1 + 32 >> 2] = 0;
      global$0 = $2 + 48 | 0;
      return $1;
     }
     std__panicking__begin_panic__haa7e8f73e4c17ace(1052684, 55, 1052668);
     abort();
    }
    core__panicking__panic__h2d0bc53a963fb996(1052304);
    abort();
   }
   $0 = HEAP32[266546];
   FUNCTION_TABLE[$0 ? $0 : 56](1, 1);
   abort();
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](48, 8);
  abort();
 }
 
 function core__unicode__printable__check__h1e7c010e493ddb3e($0, $1, $2, $3, $4, $5, $6) {
  var $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  $9 = 1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        if (!$2) {
         break label$6
        }
        $10 = ($2 << 1) + $1 | 0;
        $11 = ($0 & 65280) >>> 8;
        $13 = $0 & 255;
        while (1) {
         $12 = $1 + 2 | 0;
         $2 = HEAPU8[$1 + 1 | 0];
         $8 = $7 + $2 | 0;
         label$8 : {
          $1 = HEAPU8[$1 | 0];
          if (($11 | 0) == ($1 | 0)) {
           if ($8 >>> 0 < $7 >>> 0) {
            break label$2
           }
           if ($8 >>> 0 > $4 >>> 0) {
            break label$1
           }
           $1 = $3 + $7 | 0;
           while (1) {
            if (!$2) {
             break label$8
            }
            $2 = $2 + -1 | 0;
            $7 = HEAPU8[$1 | 0];
            $1 = $1 + 1 | 0;
            if (($7 | 0) != ($13 | 0)) {
             continue
            }
            break;
           };
           break label$5;
          }
          if ($1 >>> 0 > $11 >>> 0) {
           break label$6
          }
          $7 = $8;
          $1 = $12;
          if (($10 | 0) != ($1 | 0)) {
           continue
          }
          break label$6;
         }
         $7 = $8;
         $1 = $12;
         if (($10 | 0) != ($1 | 0)) {
          continue
         }
         break;
        };
       }
       if (!$6) {
        break label$4
       }
       $3 = $5 + $6 | 0;
       $1 = $0 & 65535;
       while (1) {
        $0 = $5 + 1 | 0;
        $2 = HEAPU8[$5 | 0];
        $4 = $2 << 24 >> 24;
        $6 = $0;
        label$12 : {
         if (($4 | 0) >= 0) {
          break label$12
         }
         if (($0 | 0) == ($3 | 0)) {
          break label$3
         }
         $2 = HEAPU8[$5 + 1 | 0] | ($4 & 127) << 8;
         $6 = $5 + 2 | 0;
        }
        $5 = $6;
        $1 = $1 - $2 | 0;
        if (($1 | 0) < 0) {
         break label$4
        }
        $9 = $9 ^ 1;
        if (($3 | 0) != ($5 | 0)) {
         continue
        }
        break;
       };
       break label$4;
      }
      $9 = 0;
     }
     return $9 & 1;
    }
    core__panicking__panic__h2d0bc53a963fb996(1060364);
    abort();
   }
   core__slice__slice_index_order_fail__ha75fa70416d3bc2f($7, $8);
   abort();
  }
  core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($8, $4);
  abort();
 }
 
 function $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___try_fold__hf93756c6b86e34c3($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0;
  $4 = global$0 + -64 | 0;
  global$0 = $4;
  HEAP32[$4 + 56 >> 2] = $1 + 8;
  HEAP32[$4 + 52 >> 2] = $3;
  HEAP32[$4 + 48 >> 2] = $2;
  $6 = $1 + 4 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        while (1) {
         $5 = HEAP32[$6 >> 2];
         $2 = HEAP32[$1 >> 2];
         if ($5 - $2 >>> 0 <= 12) {
          break label$6
         }
         HEAP32[$1 >> 2] = $2 + 4;
         $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__hbd3363d75bff1023($4 + 32 | 0, $4 + 48 | 0, $2);
         $3 = HEAP32[$4 + 32 >> 2];
         if ($3) {
          break label$5
         }
         $2 = HEAP32[$1 >> 2];
         HEAP32[$1 >> 2] = $2 + 4;
         $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__hbd3363d75bff1023($4 + 24 | 0, $4 + 48 | 0, $2);
         $3 = HEAP32[$4 + 24 >> 2];
         if ($3) {
          break label$4
         }
         $2 = HEAP32[$1 >> 2];
         HEAP32[$1 >> 2] = $2 + 4;
         $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__hbd3363d75bff1023($4 + 16 | 0, $4 + 48 | 0, $2);
         $3 = HEAP32[$4 + 16 >> 2];
         if ($3) {
          break label$3
         }
         $2 = HEAP32[$1 >> 2];
         HEAP32[$1 >> 2] = $2 + 4;
         $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__hbd3363d75bff1023($4 + 8 | 0, $4 + 48 | 0, $2);
         $3 = HEAP32[$4 + 8 >> 2];
         if (!$3) {
          continue
         }
         break;
        };
        $1 = HEAP32[$4 + 12 >> 2];
        break label$1;
       }
       $3 = 0;
       if (($2 | 0) != ($5 | 0)) {
        while (1) {
         HEAP32[$1 >> 2] = $2 + 4;
         $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__hbd3363d75bff1023($4 + 40 | 0, $4 + 48 | 0, $2);
         $2 = HEAP32[$4 + 40 >> 2];
         if ($2) {
          break label$2
         }
         $2 = HEAP32[$1 >> 2];
         if (($2 | 0) != HEAP32[$1 + 4 >> 2]) {
          continue
         }
         break;
        }
       }
       break label$1;
      }
      $1 = HEAP32[$4 + 36 >> 2];
      break label$1;
     }
     $1 = HEAP32[$4 + 28 >> 2];
     break label$1;
    }
    $1 = HEAP32[$4 + 20 >> 2];
    break label$1;
   }
   $1 = HEAP32[$4 + 44 >> 2];
   $3 = $2;
  }
  HEAP32[$0 + 4 >> 2] = $1;
  HEAP32[$0 >> 2] = $3;
  global$0 = $4 - -64 | 0;
 }
 
 function $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___try_fold__hdc43748b75452749($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       $5 = HEAP32[$1 + 4 >> 2];
       $8 = HEAP32[$1 >> 2];
       if ($5 - $8 >>> 0 >= 4) {
        $4 = $1 + 4 | 0;
        while (1) {
         $6 = $3 + $5 | 0;
         $7 = $6 + -1 | 0;
         HEAP32[$4 >> 2] = $7;
         if (HEAPU8[$7 | 0] != 48) {
          break label$5
         }
         $7 = $6 + -2 | 0;
         HEAP32[$4 >> 2] = $7;
         if (HEAPU8[$7 | 0] != 48) {
          break label$4
         }
         $7 = $6 + -3 | 0;
         HEAP32[$4 >> 2] = $7;
         if (HEAPU8[$7 | 0] != 48) {
          break label$3
         }
         $6 = $6 + -4 | 0;
         HEAP32[$4 >> 2] = $6;
         if (HEAPU8[$6 | 0] != 48) {
          break label$2
         }
         $3 = $3 + -4 | 0;
         if ($6 - $8 >>> 0 > 3) {
          continue
         }
         break;
        };
        $5 = $3 + $5 | 0;
        $3 = 0 - $3 | 0;
       }
       $4 = 0;
       if (($5 | 0) == ($8 | 0)) {
        break label$1
       }
       $1 = $1 + 4 | 0;
       while (1) {
        label$8 : {
         $5 = $5 + -1 | 0;
         HEAP32[$1 >> 2] = $5;
         if (HEAPU8[$5 | 0] != 48) {
          break label$8
         }
         $3 = $3 + 1 | 0;
         if (($5 | 0) != ($8 | 0)) {
          continue
         }
         break label$1;
        }
        break;
       };
       $4 = 1;
       HEAP8[$2 | 0] = 1;
       break label$1;
      }
      $4 = 1;
      HEAP8[$2 | 0] = 1;
      $3 = 0 - $3 | 0;
      break label$1;
     }
     $4 = 1;
     HEAP8[$2 | 0] = 1;
     $3 = 1 - $3 | 0;
     break label$1;
    }
    $4 = 1;
    HEAP8[$2 | 0] = 1;
    $3 = 2 - $3 | 0;
    break label$1;
   }
   $4 = 1;
   HEAP8[$2 | 0] = 1;
   $3 = 3 - $3 | 0;
  }
  HEAP32[$0 + 4 >> 2] = $3;
  HEAP32[$0 >> 2] = $4;
 }
 
 function $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___try_fold__h019f9a3a3baf46ce($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = global$0 - 80 | 0;
  global$0 = $3;
  memcpy($3 + 40 | 0, $2, 36);
  $2 = $1 + 4 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        while (1) {
         $5 = HEAP32[$2 >> 2];
         $6 = HEAP32[$1 >> 2];
         if ($5 - $6 >>> 0 <= 576) {
          break label$6
         }
         $4 = $5 + -192 | 0;
         HEAP32[$2 >> 2] = $4;
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($3 + 24 | 0, $3 + 40 | 0, $4);
         $4 = HEAP32[$3 + 24 >> 2];
         if ($4) {
          break label$5
         }
         $4 = HEAP32[$2 >> 2] + -192 | 0;
         HEAP32[$2 >> 2] = $4;
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($3 + 16 | 0, $3 + 40 | 0, $4);
         $4 = HEAP32[$3 + 16 >> 2];
         if ($4) {
          break label$4
         }
         $4 = HEAP32[$2 >> 2] + -192 | 0;
         HEAP32[$2 >> 2] = $4;
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($3 + 8 | 0, $3 + 40 | 0, $4);
         $4 = HEAP32[$3 + 8 >> 2];
         if ($4) {
          break label$3
         }
         $4 = HEAP32[$2 >> 2] + -192 | 0;
         HEAP32[$2 >> 2] = $4;
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($3, $3 + 40 | 0, $4);
         $4 = HEAP32[$3 >> 2];
         if (!$4) {
          continue
         }
         break;
        };
        $2 = HEAP32[$3 + 4 >> 2];
        break label$1;
       }
       $4 = 0;
       if (($5 | 0) != ($6 | 0)) {
        $2 = $1 + 4 | 0;
        while (1) {
         $5 = $5 + -192 | 0;
         HEAP32[$2 >> 2] = $5;
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__he7465018d5e9ec09_1($3 + 32 | 0, $3 + 40 | 0, $5);
         $5 = HEAP32[$3 + 32 >> 2];
         if ($5) {
          break label$2
         }
         $5 = HEAP32[$2 >> 2];
         if (($5 | 0) != HEAP32[$1 >> 2]) {
          continue
         }
         break;
        };
       }
       break label$1;
      }
      $2 = HEAP32[$3 + 28 >> 2];
      break label$1;
     }
     $2 = HEAP32[$3 + 20 >> 2];
     break label$1;
    }
    $2 = HEAP32[$3 + 12 >> 2];
    break label$1;
   }
   $2 = HEAP32[$3 + 36 >> 2];
   $4 = $5;
  }
  HEAP32[$0 + 4 >> 2] = $2;
  HEAP32[$0 >> 2] = $4;
  global$0 = $3 + 80 | 0;
 }
 
 function $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___try_fold__h3910027a1d12e1fd($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = global$0 - 80 | 0;
  global$0 = $3;
  memcpy($3 + 40 | 0, $2, 36);
  $2 = $1 + 4 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        while (1) {
         $5 = HEAP32[$2 >> 2];
         $6 = HEAP32[$1 >> 2];
         if ($5 - $6 >>> 0 <= 60) {
          break label$6
         }
         $4 = $5 + -20 | 0;
         HEAP32[$2 >> 2] = $4;
         core__iter__traits__iterator__Iterator__try_for_each___7b_7bclosure_7d_7d__h1d2e2143706e13e0($3 + 24 | 0, $3 + 40 | 0, $4);
         $4 = HEAP32[$3 + 24 >> 2];
         if ($4) {
          break label$5
         }
         $4 = HEAP32[$2 >> 2] + -20 | 0;
         HEAP32[$2 >> 2] = $4;
         core__iter__traits__iterator__Iterator__try_for_each___7b_7bclosure_7d_7d__h1d2e2143706e13e0($3 + 16 | 0, $3 + 40 | 0, $4);
         $4 = HEAP32[$3 + 16 >> 2];
         if ($4) {
          break label$4
         }
         $4 = HEAP32[$2 >> 2] + -20 | 0;
         HEAP32[$2 >> 2] = $4;
         core__iter__traits__iterator__Iterator__try_for_each___7b_7bclosure_7d_7d__h1d2e2143706e13e0($3 + 8 | 0, $3 + 40 | 0, $4);
         $4 = HEAP32[$3 + 8 >> 2];
         if ($4) {
          break label$3
         }
         $4 = HEAP32[$2 >> 2] + -20 | 0;
         HEAP32[$2 >> 2] = $4;
         core__iter__traits__iterator__Iterator__try_for_each___7b_7bclosure_7d_7d__h1d2e2143706e13e0($3, $3 + 40 | 0, $4);
         $4 = HEAP32[$3 >> 2];
         if (!$4) {
          continue
         }
         break;
        };
        $2 = HEAP32[$3 + 4 >> 2];
        break label$1;
       }
       $4 = 0;
       if (($5 | 0) != ($6 | 0)) {
        $2 = $1 + 4 | 0;
        while (1) {
         $5 = $5 + -20 | 0;
         HEAP32[$2 >> 2] = $5;
         core__iter__traits__iterator__Iterator__try_for_each___7b_7bclosure_7d_7d__h1d2e2143706e13e0($3 + 32 | 0, $3 + 40 | 0, $5);
         $5 = HEAP32[$3 + 32 >> 2];
         if ($5) {
          break label$2
         }
         $5 = HEAP32[$2 >> 2];
         if (($5 | 0) != HEAP32[$1 >> 2]) {
          continue
         }
         break;
        };
       }
       break label$1;
      }
      $2 = HEAP32[$3 + 28 >> 2];
      break label$1;
     }
     $2 = HEAP32[$3 + 20 >> 2];
     break label$1;
    }
    $2 = HEAP32[$3 + 12 >> 2];
    break label$1;
   }
   $2 = HEAP32[$3 + 36 >> 2];
   $4 = $5;
  }
  HEAP32[$0 + 4 >> 2] = $2;
  HEAP32[$0 >> 2] = $4;
  global$0 = $3 + 80 | 0;
 }
 
 function core__num__dec2flt__parse__parse_exp__h25cffe421291b6f9($0, $1, $2, $3, $4, $5, $6) {
  var $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  folding_inner0 : {
   label$1 : {
    label$2 : {
     label$3 : {
      label$4 : {
       if (!$6) {
        break folding_inner0
       }
       $7 = HEAPU8[$5 | 0];
       label$7 : {
        label$8 : {
         if (($7 | 0) != 43) {
          $9 = 1;
          if (($7 | 0) == 45) {
           break label$8
          }
          break label$7;
         }
         $9 = 0;
        }
        $11 = $9;
        $6 = $6 + -1 | 0;
        if (!$6) {
         break folding_inner0
        }
        $5 = $5 + 1 | 0;
       }
       while (1) {
        if ((HEAPU8[$5 + $8 | 0] + -48 & 255) >>> 0 <= 9) {
         $8 = $8 + 1 | 0;
         if ($8 >>> 0 < $6 >>> 0) {
          continue
         }
        }
        break;
       };
       if ($8 >>> 0 > $6 >>> 0) {
        break label$1
       }
       if (($6 | 0) != ($8 | 0)) {
        break folding_inner0
       }
       while (1) {
        if (HEAPU8[$5 | 0] != 48) {
         break label$4
        }
        $5 = $5 + 1 | 0;
        $6 = $6 + -1 | 0;
        if ($6) {
         continue
        }
        break;
       };
       $7 = 0;
       break label$3;
      }
      if ($6 >>> 0 > 17) {
       if (!$11) {
        break label$2
       }
       HEAP32[$0 >> 2] = 2;
       HEAP32[$0 + 4 >> 2] = 0;
       return;
      }
      $7 = 0;
      $8 = 0;
      while (1) {
       $7 = __wasm_i64_mul($7, $10, 10);
       $10 = i64toi32_i32$HIGH_BITS;
       $9 = $7;
       $7 = HEAPU8[$5 + $8 | 0] + -48 & 255;
       $9 = $9 + $7 | 0;
       if ($9 >>> 0 < $7 >>> 0) {
        $10 = $10 + 1 | 0
       }
       $7 = $9;
       $8 = $8 + 1 | 0;
       if (($8 | 0) != ($6 | 0)) {
        continue
       }
       break;
      };
     }
     HEAP32[$0 >> 2] = 0;
     HEAP32[$0 + 4 >> 2] = 0;
     HEAP32[$0 + 28 >> 2] = $4;
     HEAP32[$0 + 24 >> 2] = $3;
     HEAP32[$0 + 20 >> 2] = $2;
     HEAP32[$0 + 16 >> 2] = $1;
     HEAP32[$0 + 8 >> 2] = $11 ? 0 - $7 | 0 : $7;
     HEAP32[$0 + 12 >> 2] = $11 ? 0 - ($10 + (0 < $7 >>> 0) | 0) | 0 : $10;
     return;
    }
    HEAP32[$0 >> 2] = 1;
    HEAP32[$0 + 4 >> 2] = 0;
    return;
   }
   core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($8, $6);
   abort();
  }
  HEAP32[$0 >> 2] = 3;
  HEAP32[$0 + 4 >> 2] = 0;
 }
 
 function $_mut_20W_20as_20core__fmt__Write___write_char__h1c21fdd05686cba7($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  $0 = HEAP32[$0 >> 2];
  label$1 : {
   if ($1 >>> 0 < 128) {
    $3 = HEAP32[$0 + 8 >> 2];
    if (($3 | 0) == HEAP32[$0 + 4 >> 2]) {
     alloc__vec__Vec_T___reserve__hc0f95e3f359a8226($0, 1);
     $3 = HEAP32[$0 + 8 >> 2];
    }
    HEAP8[$3 + HEAP32[$0 >> 2] | 0] = $1;
    $0 = $0 + 8 | 0;
    HEAP32[$0 >> 2] = HEAP32[$0 >> 2] + 1;
    break label$1;
   }
   HEAP32[$2 + 12 >> 2] = 0;
   $3 = $0;
   label$4 : {
    if ($1 >>> 0 < 2048) {
     HEAP8[$2 + 13 | 0] = $1 & 63 | 128;
     HEAP8[$2 + 12 | 0] = $1 >>> 6 & 31 | 192;
     $1 = 2;
     break label$4;
    }
    if ($1 >>> 0 < 65536) {
     HEAP8[$2 + 14 | 0] = $1 & 63 | 128;
     HEAP8[$2 + 13 | 0] = $1 >>> 6 & 63 | 128;
     HEAP8[$2 + 12 | 0] = $1 >>> 12 & 15 | 224;
     $1 = 3;
     break label$4;
    }
    HEAP8[$2 + 15 | 0] = $1 & 63 | 128;
    HEAP8[$2 + 12 | 0] = $1 >>> 18 | 240;
    HEAP8[$2 + 14 | 0] = $1 >>> 6 & 63 | 128;
    HEAP8[$2 + 13 | 0] = $1 >>> 12 & 63 | 128;
    $1 = 4;
   }
   alloc__vec__Vec_T___reserve__hc0f95e3f359a8226($3, $1);
   $3 = HEAP32[$0 + 8 >> 2];
   HEAP32[$0 + 8 >> 2] = $3 + $1;
   memcpy($3 + HEAP32[$0 >> 2] | 0, $2 + 12 | 0, $1);
  }
  global$0 = $2 + 16 | 0;
  return 0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__h601d2dea1571a4fc($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $3 = global$0 + -64 | 0;
  global$0 = $3;
  $4 = HEAP32[$2 >> 2];
  $6 = HEAP32[$2 + 8 >> 2];
  $2 = HEAP32[$1 >> 2];
  $5 = HEAP32[$1 + 4 >> 2];
  $7 = HEAP32[$1 + 12 >> 2];
  $8 = HEAP32[$1 + 8 >> 2];
  HEAP32[$3 + 56 >> 2] = HEAP32[$1 + 16 >> 2];
  HEAP32[$3 + 48 >> 2] = $8;
  HEAP32[$3 + 52 >> 2] = $7;
  HEAP32[$3 + 40 >> 2] = $2;
  HEAP32[$3 + 44 >> 2] = $5;
  $5 = Math_imul($6, 192) + $4 | 0;
  $1 = $4;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        while (1) {
         if ($5 - $1 >>> 0 <= 576) {
          break label$6
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h47f1631c47b88853($3 + 24 | 0, $3 + 40 | 0, $1);
         $2 = HEAP32[$3 + 24 >> 2];
         if ($2) {
          break label$5
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h47f1631c47b88853($3 + 16 | 0, $3 + 40 | 0, $1 + 192 | 0);
         $2 = HEAP32[$3 + 16 >> 2];
         if ($2) {
          break label$4
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h47f1631c47b88853($3 + 8 | 0, $3 + 40 | 0, $1 + 384 | 0);
         $2 = HEAP32[$3 + 8 >> 2];
         if ($2) {
          break label$3
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h47f1631c47b88853($3, $3 + 40 | 0, $1 + 576 | 0);
         $1 = $1 + 768 | 0;
         $2 = HEAP32[$3 >> 2];
         if (!$2) {
          continue
         }
         break;
        };
        $1 = HEAP32[$3 + 4 >> 2];
        break label$1;
       }
       $4 = Math_imul($6, 192) + $4 | 0;
       while (1) {
        if (($1 | 0) == ($4 | 0)) {
         break label$2
        }
        stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h47f1631c47b88853($3 + 32 | 0, $3 + 40 | 0, $1);
        $1 = $1 + 192 | 0;
        $2 = HEAP32[$3 + 32 >> 2];
        if (!$2) {
         continue
        }
        break;
       };
       $1 = HEAP32[$3 + 36 >> 2];
       break label$1;
      }
      $1 = HEAP32[$3 + 28 >> 2];
      break label$1;
     }
     $1 = HEAP32[$3 + 20 >> 2];
     break label$1;
    }
    $1 = HEAP32[$3 + 12 >> 2];
    break label$1;
   }
   $2 = 0;
  }
  HEAP32[$0 + 4 >> 2] = $1;
  HEAP32[$0 >> 2] = $2;
  global$0 = $3 - -64 | 0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d__ha11e2b1466222b90($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $3 = global$0 + -64 | 0;
  global$0 = $3;
  $4 = HEAP32[$2 >> 2];
  $6 = HEAP32[$2 + 8 >> 2];
  $2 = HEAP32[$1 >> 2];
  $5 = HEAP32[$1 + 4 >> 2];
  $7 = HEAP32[$1 + 12 >> 2];
  $8 = HEAP32[$1 + 8 >> 2];
  HEAP32[$3 + 56 >> 2] = HEAP32[$1 + 16 >> 2];
  HEAP32[$3 + 48 >> 2] = $8;
  HEAP32[$3 + 52 >> 2] = $7;
  HEAP32[$3 + 40 >> 2] = $2;
  HEAP32[$3 + 44 >> 2] = $5;
  $5 = Math_imul($6, 192) + $4 | 0;
  $1 = $4;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        while (1) {
         if ($5 - $1 >>> 0 <= 576) {
          break label$6
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h5612a521e1631bab($3 + 24 | 0, $3 + 40 | 0, $1);
         $2 = HEAP32[$3 + 24 >> 2];
         if ($2) {
          break label$5
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h5612a521e1631bab($3 + 16 | 0, $3 + 40 | 0, $1 + 192 | 0);
         $2 = HEAP32[$3 + 16 >> 2];
         if ($2) {
          break label$4
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h5612a521e1631bab($3 + 8 | 0, $3 + 40 | 0, $1 + 384 | 0);
         $2 = HEAP32[$3 + 8 >> 2];
         if ($2) {
          break label$3
         }
         stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h5612a521e1631bab($3, $3 + 40 | 0, $1 + 576 | 0);
         $1 = $1 + 768 | 0;
         $2 = HEAP32[$3 >> 2];
         if (!$2) {
          continue
         }
         break;
        };
        $1 = HEAP32[$3 + 4 >> 2];
        break label$1;
       }
       $4 = Math_imul($6, 192) + $4 | 0;
       while (1) {
        if (($1 | 0) == ($4 | 0)) {
         break label$2
        }
        stretch__algo___impl_20stretch__forest__Forest___compute_internal___7b_7bclosure_7d_7d___7b_7bclosure_7d_7d__h5612a521e1631bab($3 + 32 | 0, $3 + 40 | 0, $1);
        $1 = $1 + 192 | 0;
        $2 = HEAP32[$3 + 32 >> 2];
        if (!$2) {
         continue
        }
        break;
       };
       $1 = HEAP32[$3 + 36 >> 2];
       break label$1;
      }
      $1 = HEAP32[$3 + 28 >> 2];
      break label$1;
     }
     $1 = HEAP32[$3 + 20 >> 2];
     break label$1;
    }
    $1 = HEAP32[$3 + 12 >> 2];
    break label$1;
   }
   $2 = 0;
  }
  HEAP32[$0 + 4 >> 2] = $1;
  HEAP32[$0 >> 2] = $2;
  global$0 = $3 - -64 | 0;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h2b5800089452f7a4($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  HEAP32[$0 + 16 >> 2] = 0;
  HEAP32[$0 + 20 >> 2] = 0;
  $5 = $0;
  $2 = $1 >>> 8;
  label$1 : {
   if ($2) {
    $3 = 31;
    if ($1 >>> 0 > 16777215) {
     break label$1
    }
    $2 = Math_clz32($2);
    $3 = $1 >>> (38 - $2 & 31) & 1 | 31 - $2 << 1;
    break label$1;
   }
   $3 = 0;
  }
  $4 = $3;
  HEAP32[$5 + 28 >> 2] = $4;
  $5 = ($4 << 2) + 1066508 | 0;
  label$3 : {
   label$4 : {
    label$5 : {
     label$6 : {
      $3 = 1 << ($4 & 31);
      $2 = HEAP32[266560];
      if ($3 & $2) {
       $2 = HEAP32[$5 >> 2];
       if ((HEAP32[$2 + 4 >> 2] & -8) != ($1 | 0)) {
        break label$6
       }
       $3 = $2;
       break label$5;
      }
      HEAP32[266560] = $2 | $3;
      HEAP32[$5 >> 2] = $0;
      HEAP32[$0 + 24 >> 2] = $5;
      break label$3;
     }
     $4 = $1 << (($4 | 0) == 31 ? 0 : 25 - ($4 >>> 1) & 31);
     while (1) {
      $5 = (($4 >>> 29 & 4) + $2 | 0) + 16 | 0;
      $3 = HEAP32[$5 >> 2];
      if (!$3) {
       break label$4
      }
      $4 = $4 << 1;
      $2 = $3;
      if ((HEAP32[$2 + 4 >> 2] & -8) != ($1 | 0)) {
       continue
      }
      break;
     };
    }
    $1 = HEAP32[$3 + 8 >> 2];
    HEAP32[$1 + 12 >> 2] = $0;
    HEAP32[$3 + 8 >> 2] = $0;
    HEAP32[$0 + 24 >> 2] = 0;
    HEAP32[$0 + 12 >> 2] = $3;
    HEAP32[$0 + 8 >> 2] = $1;
    return;
   }
   HEAP32[$5 >> 2] = $0;
   HEAP32[$0 + 24 >> 2] = $2;
  }
  HEAP32[$0 + 12 >> 2] = $0;
  HEAP32[$0 + 8 >> 2] = $0;
 }
 
 function stretch_layout__Node__compute_layout__h28a27c3bee5a2ca8($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = Math_fround(0);
  $3 = global$0 - 80 | 0;
  global$0 = $3;
  label$1 : {
   $4 = HEAP32[$1 >> 2];
   if (!HEAP32[$4 + 8 >> 2]) {
    $6 = $4 + 8 | 0;
    HEAP32[$6 >> 2] = -1;
    $7 = $1 + 12 | 0;
    $8 = HEAP32[$7 + 4 >> 2];
    $5 = $3 + 48 | 0;
    HEAP32[$5 >> 2] = HEAP32[$7 >> 2];
    HEAP32[$5 + 4 >> 2] = $8;
    $5 = HEAP32[$1 + 8 >> 2];
    HEAP32[$3 + 40 >> 2] = HEAP32[$1 + 4 >> 2];
    HEAP32[$3 + 44 >> 2] = $5;
    stretch_layout__get_f32__ha7adebcd40baf7fe($3 + 8 | 0, $2, 1049029, 5);
    $5 = HEAP32[$3 + 8 >> 2];
    $9 = HEAPF32[$3 + 12 >> 2];
    stretch_layout__get_f32__ha7adebcd40baf7fe($3, $2, 1049034, 6);
    HEAPF32[$3 + 68 >> 2] = HEAPF32[$3 + 4 >> 2];
    HEAPF32[$3 + 60 >> 2] = $9;
    HEAP32[$3 + 56 >> 2] = ($5 | 0) != 1;
    HEAP32[$3 + 64 >> 2] = HEAP32[$3 >> 2] != 1;
    stretch__node__Stretch__compute_layout__hef8bc57acfce3d43($3 + 16 | 0, $4 + 16 | 0, $3 + 40 | 0, $3 + 56 | 0);
    if (HEAP32[$3 + 16 >> 2] != 2) {
     break label$1
    }
    HEAP32[$6 >> 2] = HEAP32[$6 >> 2] + 1;
    $2 = $1 + 4 | 0;
    $6 = $2 + 8 | 0;
    $5 = HEAP32[$6 + 4 >> 2];
    $4 = $3 - -64 | 0;
    HEAP32[$4 >> 2] = HEAP32[$6 >> 2];
    HEAP32[$4 + 4 >> 2] = $5;
    $4 = HEAP32[$2 + 4 >> 2];
    HEAP32[$3 + 56 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$3 + 60 >> 2] = $4;
    stretch_layout__Layout__new__h80f5bc745f91ec19($0, $1, $3 + 56 | 0);
    global$0 = $3 + 80 | 0;
    return;
   }
   core__result__unwrap_failed__h2450ec3de4884319();
   abort();
  }
  HEAP32[$3 + 72 >> 2] = HEAP32[$3 + 32 >> 2];
  $1 = $3 + 24 | 0;
  $2 = HEAP32[$1 + 4 >> 2];
  $0 = $3 - -64 | 0;
  HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$0 + 4 >> 2] = $2;
  $0 = HEAP32[$3 + 20 >> 2];
  HEAP32[$3 + 56 >> 2] = HEAP32[$3 + 16 >> 2];
  HEAP32[$3 + 60 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($3 + 56 | 0);
  abort();
 }
 
 function core__num__bignum__Big32x40__mul_digits__mul_inner__h022b103c0ead7ba4($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
  $15 = $4 << 2;
  $16 = $4 + 1 | 0;
  $17 = ($2 << 2) + $1 | 0;
  label$1 : {
   label$2 : {
    while (1) {
     $8 = ($13 << 2) + $0 | 0;
     $6 = $1;
     label$4 : {
      while (1) {
       $10 = $13;
       $2 = $8;
       if (($6 | 0) == ($17 | 0)) {
        break label$4
       }
       $8 = $2 + 4 | 0;
       $13 = $10 + 1 | 0;
       $9 = HEAP32[$6 >> 2];
       $1 = $6 + 4 | 0;
       $6 = $1;
       if (!$9) {
        continue
       }
       break;
      };
      label$6 : {
       if ($4) {
        $18 = $9;
        $5 = 0;
        $9 = 0;
        $11 = $15;
        $6 = $10;
        $8 = $3;
        while (1) {
         if ($6 >>> 0 > 39) {
          break label$2
         }
         $7 = $5;
         $5 = HEAP32[$2 >> 2];
         $7 = $7 + $5 | 0;
         if ($7 >>> 0 < $5 >>> 0) {
          $9 = 1
         }
         $14 = __wasm_i64_mul(HEAP32[$8 >> 2], 0, $18);
         $7 = $14 + $7 | 0;
         $5 = i64toi32_i32$HIGH_BITS + $9 | 0;
         HEAP32[$2 >> 2] = $7;
         $9 = 0;
         $5 = $7 >>> 0 < $14 >>> 0 ? $5 + 1 | 0 : $5;
         $2 = $2 + 4 | 0;
         $6 = $6 + 1 | 0;
         $8 = $8 + 4 | 0;
         $11 = $11 + -4 | 0;
         if ($11) {
          continue
         }
         break;
        };
        $2 = $4;
        if (!$5) {
         break label$6
        }
        $2 = $4 + $10 | 0;
        if ($2 >>> 0 > 39) {
         break label$1
        }
        HEAP32[($2 << 2) + $0 >> 2] = $5;
        $2 = $16;
        break label$6;
       }
       $2 = 0;
      }
      $2 = $2 + $10 | 0;
      $12 = $12 >>> 0 < $2 >>> 0 ? $2 : $12;
      continue;
     }
     break;
    };
    return $12;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1066040, $6, 40);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1066056, $2, 40);
  abort();
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__h173f6e2d56218081($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $4 = HEAP32[$0 + 24 >> 2];
  label$1 : {
   $1 = HEAP32[$0 + 12 >> 2];
   label$2 : {
    label$3 : {
     if (($0 | 0) != ($1 | 0)) {
      $2 = HEAP32[$0 + 8 >> 2];
      HEAP32[$2 + 12 >> 2] = $1;
      HEAP32[$1 + 8 >> 2] = $2;
      if ($4) {
       break label$3
      }
      break label$2;
     }
     $1 = $0 + 20 | 0;
     $3 = HEAP32[$1 >> 2];
     $2 = HEAP32[($3 ? 20 : 16) + $0 >> 2];
     if ($2) {
      $3 = $3 ? $1 : $0 + 16 | 0;
      while (1) {
       $5 = $3;
       $1 = $2;
       $3 = $1 + 20 | 0;
       $2 = HEAP32[$3 >> 2];
       label$6 : {
        if ($2) {
         if ($2) {
          continue
         }
         break label$6;
        }
        $3 = $1 + 16 | 0;
        $2 = HEAP32[$1 + 16 >> 2];
        if ($2) {
         continue
        }
       }
       break;
      };
      HEAP32[$5 >> 2] = 0;
      if ($4) {
       break label$3
      }
      break label$2;
     }
     $1 = 0;
     if (!$4) {
      break label$2
     }
    }
    $2 = (HEAP32[$0 + 28 >> 2] << 2) + 1066508 | 0;
    label$9 : {
     if (($0 | 0) != HEAP32[$2 >> 2]) {
      HEAP32[(HEAP32[$4 + 16 >> 2] == ($0 | 0) ? 16 : 20) + $4 >> 2] = $1;
      if ($1) {
       break label$9
      }
      break label$2;
     }
     HEAP32[$2 >> 2] = $1;
     if (!$1) {
      break label$1
     }
    }
    HEAP32[$1 + 24 >> 2] = $4;
    $2 = HEAP32[$0 + 16 >> 2];
    if ($2) {
     HEAP32[$1 + 16 >> 2] = $2;
     HEAP32[$2 + 24 >> 2] = $1;
    }
    $0 = HEAP32[$0 + 20 >> 2];
    if (!$0) {
     break label$2
    }
    HEAP32[$1 + 20 >> 2] = $0;
    HEAP32[$0 + 24 >> 2] = $1;
   }
   return;
  }
  (wasm2js_i32$0 = 1066240, wasm2js_i32$1 = HEAP32[266560] & __wasm_rotl_i32(HEAP32[$0 + 28 >> 2])), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
 }
 
 function core__fmt__num__imp__fmt_u64__h529ebc247831d1ee($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  $7 = global$0 - 48 | 0;
  global$0 = $7;
  $4 = 39;
  label$1 : {
   if (!(!$1 & $0 >>> 0 < 1e4 | $1 >>> 0 < 0)) {
    while (1) {
     $6 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($0, $1);
     $5 = i64toi32_i32$HIGH_BITS;
     $12 = $5;
     $8 = ($7 + 9 | 0) + $4 | 0;
     $10 = $8 + -4 | 0;
     $5 = $0 - __wasm_i64_mul($6, $5, 1e4) | 0;
     $11 = ($5 >>> 0) / 100 | 0;
     $9 = ($11 << 1) + 1060874 | 0;
     $9 = HEAPU8[$9 | 0] | HEAPU8[$9 + 1 | 0] << 8;
     HEAP8[$10 | 0] = $9;
     HEAP8[$10 + 1 | 0] = $9 >>> 8;
     $8 = $8 + -2 | 0;
     $5 = ($5 - Math_imul($11, 100) << 1) + 1060874 | 0;
     $5 = HEAPU8[$5 | 0] | HEAPU8[$5 + 1 | 0] << 8;
     HEAP8[$8 | 0] = $5;
     HEAP8[$8 + 1 | 0] = $5 >>> 8;
     $4 = $4 + -4 | 0;
     $5 = !$1 & $0 >>> 0 > 99999999 | $1 >>> 0 > 0;
     $0 = $6;
     $1 = $12;
     if ($5) {
      continue
     }
     break;
    };
    break label$1;
   }
   $6 = $0;
  }
  if (($6 | 0) >= 100) {
   $0 = $6;
   $6 = (($0 & 65535) >>> 0) / 100 | 0;
   $4 = $4 + -2 | 0;
   $1 = $4 + ($7 + 9 | 0) | 0;
   $0 = (($0 - Math_imul($6, 100) & 65535) << 1) + 1060874 | 0;
   $0 = HEAPU8[$0 | 0] | HEAPU8[$0 + 1 | 0] << 8;
   HEAP8[$1 | 0] = $0;
   HEAP8[$1 + 1 | 0] = $0 >>> 8;
  }
  label$5 : {
   if (($6 | 0) < 10) {
    $4 = $4 + -1 | 0;
    HEAP8[$4 + ($7 + 9 | 0) | 0] = $6 + 48;
    break label$5;
   }
   $4 = $4 + -2 | 0;
   $0 = $4 + ($7 + 9 | 0) | 0;
   $1 = ($6 << 1) + 1060874 | 0;
   $1 = HEAPU8[$1 | 0] | HEAPU8[$1 + 1 | 0] << 8;
   HEAP8[$0 | 0] = $1;
   HEAP8[$0 + 1 | 0] = $1 >>> 8;
  }
  $0 = core__fmt__Formatter__pad_integral__h253f31941eb77fc7($3, $2, 1053460, 0, ($7 + 9 | 0) + $4 | 0, 39 - $4 | 0);
  global$0 = $7 + 48 | 0;
  return $0;
 }
 
 function core__num__dec2flt__dec2flt__h61a64678c8bb0200($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = Math_fround(0), $6 = 0;
  $3 = global$0 + -64 | 0;
  global$0 = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        if ($2) {
         core__num__dec2flt__extract_sign__hcb13026d4c78d8d0($3, $1, $2);
         $6 = HEAPU8[$3 | 0];
         $1 = HEAP32[$3 + 4 >> 2];
         $2 = HEAP32[$3 + 8 >> 2];
         core__num__dec2flt__parse__parse_decimal__h0e8f7547838b6a7c($3, $1, $2);
         $5 = Math_fround(infinity);
         $4 = HEAP32[$3 >> 2];
         if (($4 | 0) == 1) {
          break label$2
         }
         if (($4 | 0) == 2) {
          break label$6
         }
         if (($4 | 0) != 3) {
          break label$5
         }
         if (core__slice___impl_20core__cmp__PartialEq__5bB_5d__20for_20_5bA_5d___eq__h2b75469410f254a8($1, $2, 1049868, 3)) {
          break label$2
         }
         $5 = Math_fround(nan);
         if (core__slice___impl_20core__cmp__PartialEq__5bB_5d__20for_20_5bA_5d___eq__h2b75469410f254a8($1, $2, 1049871, 3)) {
          break label$2
         }
         $1 = 1;
         break label$4;
        }
        HEAP8[$0 | 0] = 1;
        HEAP8[$0 + 1 | 0] = 0;
        break label$1;
       }
       $5 = Math_fround(0.0);
       break label$2;
      }
      $1 = $3 + 24 | 0;
      $2 = HEAP32[$1 + 4 >> 2];
      $4 = $3 + 56 | 0;
      HEAP32[$4 >> 2] = HEAP32[$1 >> 2];
      HEAP32[$4 + 4 >> 2] = $2;
      $1 = $3 + 16 | 0;
      $2 = HEAP32[$1 + 4 >> 2];
      $4 = $3 + 48 | 0;
      HEAP32[$4 >> 2] = HEAP32[$1 >> 2];
      HEAP32[$4 + 4 >> 2] = $2;
      $1 = HEAP32[$3 + 12 >> 2];
      HEAP32[$3 + 40 >> 2] = HEAP32[$3 + 8 >> 2];
      HEAP32[$3 + 44 >> 2] = $1;
      core__num__dec2flt__convert__h66adbcaef35cbf62($3 + 32 | 0, $3 + 40 | 0);
      $1 = HEAP32[$3 + 32 >> 2];
      if (($1 & 255) != 1) {
       break label$3
      }
      $1 = ($1 & 65280) != 0;
     }
     HEAP8[$0 | 0] = 1;
     HEAP8[$0 + 1 | 0] = $1;
     break label$1;
    }
    $5 = HEAPF32[$3 + 36 >> 2];
   }
   if (($6 | 0) == 1) {
    HEAP8[$0 | 0] = 0;
    HEAPF32[$0 + 4 >> 2] = -$5;
    break label$1;
   }
   HEAP8[$0 | 0] = 0;
   HEAPF32[$0 + 4 >> 2] = $5;
  }
  global$0 = $3 - -64 | 0;
 }
 
 function core__fmt__builders__DebugTuple__field__hb9640642e98eeefe($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0;
  $3 = global$0 - 80 | 0;
  global$0 = $3;
  $8 = $0 + 8 | 0;
  $5 = 1;
  label$1 : {
   if (HEAPU8[$0 + 8 | 0]) {
    break label$1
   }
   $6 = HEAP32[$0 + 4 >> 2];
   $4 = HEAP32[$0 >> 2];
   if (!(HEAPU8[$4 | 0] & 4)) {
    $5 = 1;
    if (FUNCTION_TABLE[HEAP32[HEAP32[$4 + 28 >> 2] + 12 >> 2]](HEAP32[$4 + 24 >> 2], $6 ? 1061109 : 1061119, $6 ? 2 : 1)) {
     break label$1
    }
    $5 = FUNCTION_TABLE[HEAP32[$2 + 12 >> 2]]($1, HEAP32[$0 >> 2]) | 0;
    break label$1;
   }
   if (!$6) {
    $5 = 1;
    if (FUNCTION_TABLE[HEAP32[HEAP32[$4 + 28 >> 2] + 12 >> 2]](HEAP32[$4 + 24 >> 2], 1061117, 2)) {
     break label$1
    }
    $4 = HEAP32[$0 >> 2];
   }
   HEAP8[$3 + 16 | 0] = 1;
   $6 = HEAP32[$4 + 16 >> 2];
   $9 = HEAP32[$4 + 20 >> 2];
   $10 = HEAP32[$4 + 8 >> 2];
   $11 = HEAP32[$4 + 12 >> 2];
   $7 = $3 + 52 | 0;
   HEAP32[$7 >> 2] = 1061076;
   $5 = HEAP32[$4 + 28 >> 2];
   HEAP32[$3 + 8 >> 2] = HEAP32[$4 + 24 >> 2];
   HEAP32[$3 + 12 >> 2] = $5;
   $5 = HEAP32[$4 + 32 >> 2];
   $12 = HEAP32[$4 + 36 >> 2];
   $13 = HEAP32[$4 + 40 >> 2];
   $14 = HEAP32[$4 + 44 >> 2];
   HEAP8[$3 + 72 | 0] = HEAPU8[$4 + 48 | 0];
   $15 = HEAP32[$4 >> 2];
   $4 = HEAP32[$4 + 4 >> 2];
   HEAP32[$3 + 32 >> 2] = $10;
   HEAP32[$3 + 36 >> 2] = $11;
   HEAP32[$3 + 40 >> 2] = $6;
   HEAP32[$3 + 44 >> 2] = $9;
   HEAP32[$3 + 64 >> 2] = $13;
   HEAP32[$3 + 68 >> 2] = $14;
   HEAP32[$3 + 56 >> 2] = $5;
   HEAP32[$3 + 60 >> 2] = $12;
   HEAP32[$3 + 24 >> 2] = $15;
   HEAP32[$3 + 28 >> 2] = $4;
   HEAP32[$3 + 48 >> 2] = $3 + 8;
   $5 = 1;
   if (FUNCTION_TABLE[HEAP32[$2 + 12 >> 2]]($1, $3 + 24 | 0)) {
    break label$1
   }
   $5 = FUNCTION_TABLE[HEAP32[HEAP32[$7 >> 2] + 12 >> 2]](HEAP32[$3 + 48 >> 2], 1061107, 2) | 0;
  }
  HEAP8[$8 | 0] = $5;
  HEAP32[$0 + 4 >> 2] = HEAP32[$0 + 4 >> 2] + 1;
  global$0 = $3 + 80 | 0;
 }
 
 function core__fmt__builders__DebugInner__entry__h37ef1f566aaa9690($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  $3 = global$0 - 80 | 0;
  global$0 = $3;
  $4 = 1;
  label$1 : {
   if (HEAPU8[$0 + 4 | 0]) {
    break label$1
   }
   $4 = HEAPU8[$0 + 5 | 0];
   $2 = HEAP32[$0 >> 2];
   if (!(HEAPU8[$2 | 0] & 4)) {
    if ($4) {
     $4 = 1;
     if (FUNCTION_TABLE[HEAP32[HEAP32[$2 + 28 >> 2] + 12 >> 2]](HEAP32[$2 + 24 >> 2], 1061109, 2)) {
      break label$1
     }
     $2 = HEAP32[$0 >> 2];
    }
    $4 = FUNCTION_TABLE[HEAP32[263017]]($1, $2) | 0;
    break label$1;
   }
   if (!$4) {
    $4 = 1;
    if (FUNCTION_TABLE[HEAP32[HEAP32[$2 + 28 >> 2] + 12 >> 2]](HEAP32[$2 + 24 >> 2], 1061122, 1)) {
     break label$1
    }
    $2 = HEAP32[$0 >> 2];
   }
   HEAP8[$3 + 16 | 0] = 1;
   $4 = HEAP32[$2 + 16 >> 2];
   $7 = HEAP32[$2 + 20 >> 2];
   $8 = HEAP32[$2 + 8 >> 2];
   $9 = HEAP32[$2 + 12 >> 2];
   $6 = $3 + 52 | 0;
   HEAP32[$6 >> 2] = 1061076;
   $5 = HEAP32[$2 + 28 >> 2];
   HEAP32[$3 + 8 >> 2] = HEAP32[$2 + 24 >> 2];
   HEAP32[$3 + 12 >> 2] = $5;
   $5 = HEAP32[$2 + 32 >> 2];
   $10 = HEAP32[$2 + 36 >> 2];
   $11 = HEAP32[$2 + 40 >> 2];
   $12 = HEAP32[$2 + 44 >> 2];
   HEAP8[$3 + 72 | 0] = HEAPU8[$2 + 48 | 0];
   $13 = HEAP32[$2 >> 2];
   $2 = HEAP32[$2 + 4 >> 2];
   HEAP32[$3 + 32 >> 2] = $8;
   HEAP32[$3 + 36 >> 2] = $9;
   HEAP32[$3 + 40 >> 2] = $4;
   HEAP32[$3 + 44 >> 2] = $7;
   HEAP32[$3 + 64 >> 2] = $11;
   HEAP32[$3 + 68 >> 2] = $12;
   HEAP32[$3 + 56 >> 2] = $5;
   HEAP32[$3 + 60 >> 2] = $10;
   HEAP32[$3 + 24 >> 2] = $13;
   HEAP32[$3 + 28 >> 2] = $2;
   HEAP32[$3 + 48 >> 2] = $3 + 8;
   $4 = 1;
   if (FUNCTION_TABLE[HEAP32[263017]]($1, $3 + 24 | 0)) {
    break label$1
   }
   $4 = FUNCTION_TABLE[HEAP32[HEAP32[$6 >> 2] + 12 >> 2]](HEAP32[$3 + 48 >> 2], 1061107, 2) | 0;
  }
  HEAP8[$0 + 5 | 0] = 1;
  HEAP8[$0 + 4 | 0] = $4;
  global$0 = $3 + 80 | 0;
 }
 
 function $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___fold__h6d7294a172877643($0, $1, $2) {
  var $3 = Math_fround(0), $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  label$1 : {
   if (($0 | 0) != ($1 | 0)) {
    $4 = HEAP32[$2 + 20 >> 2];
    $7 = HEAP32[$2 + 16 >> 2];
    $6 = HEAP32[$2 + 12 >> 2];
    $8 = HEAP32[$2 + 8 >> 2];
    $10 = HEAP32[$2 + 4 >> 2];
    $11 = HEAP32[$2 >> 2];
    while (1) {
     $9 = HEAP32[$11 >> 2];
     $2 = HEAP32[$9 + 8 >> 2];
     $5 = HEAP32[$10 >> 2];
     if ($2 >>> 0 <= $5 >>> 0) {
      break label$1
     }
     $2 = $1;
     $1 = $2 + -192 | 0;
     label$4 : {
      label$5 : {
       $5 = HEAPU8[(HEAP32[$9 >> 2] + Math_imul($5, 288) | 0) + 209 | 0] + -1 | 0;
       label$6 : {
        if ($5 >>> 0 <= 4) {
         label$8 : {
          switch ($5 - 1 | 0) {
          default:
           $3 = Math_fround(0.0);
           if ($4) {
            break label$4
           }
           if (HEAPU8[$8 | 0]) {
            break label$4
           }
           break label$6;
          case 3:
           $3 = Math_fround(HEAPF32[$6 >> 2] / Math_fround(HEAP32[$7 >> 2] + 1 >>> 0));
           break label$4;
          case 1:
           if (!$4) {
            break label$5
           }
           $3 = Math_fround(HEAPF32[$6 >> 2] / Math_fround(HEAP32[$7 >> 2] + -1 >>> 0));
           break label$4;
          case 0:
           $3 = Math_fround(0.0);
           if ($4) {
            break label$4
           }
           $3 = Math_fround(HEAPF32[$6 >> 2] * Math_fround(.5));
           break label$4;
          case 2:
           break label$8;
          };
         }
         $3 = Math_fround(HEAPF32[$6 >> 2] / Math_fround(HEAPU32[$7 >> 2]));
         $3 = $4 ? $3 : Math_fround($3 * Math_fround(.5));
         break label$4;
        }
        $3 = Math_fround(0.0);
        if ($4) {
         break label$4
        }
        if (!HEAPU8[$8 | 0]) {
         break label$4
        }
       }
       $3 = HEAPF32[$6 >> 2];
       break label$4;
      }
      $3 = Math_fround(0.0);
     }
     HEAPF32[$2 + -12 >> 2] = $3;
     $4 = $4 + 1 | 0;
     if (($0 | 0) != ($1 | 0)) {
      continue
     }
     break;
    };
   }
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051560, $5, $2);
  abort();
 }
 
 function stretch__node__Stretch__remove_child__h14a29c25ce936817($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $4 = global$0 - 48 | 0;
  global$0 = $4;
  $7 = $2 + 8 | 0;
  $8 = HEAP32[$7 + 4 >> 2];
  $6 = $4 + 40 | 0;
  $5 = $6;
  HEAP32[$5 >> 2] = HEAP32[$7 >> 2];
  HEAP32[$5 + 4 >> 2] = $8;
  $5 = HEAP32[$2 + 4 >> 2];
  HEAP32[$4 + 32 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$4 + 36 >> 2] = $5;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($4 + 8 | 0, $1, $4 + 32 | 0);
  label$1 : {
   if (HEAP32[$4 + 8 >> 2] == 1) {
    $1 = HEAP32[$4 + 16 >> 2];
    HEAP32[$0 + 4 >> 2] = HEAP32[$4 + 12 >> 2];
    HEAP32[$0 + 8 >> 2] = $1;
    HEAP32[$0 >> 2] = 1;
    HEAP32[$0 + 20 >> 2] = HEAP32[$4 + 28 >> 2];
    $1 = $4 + 20 | 0;
    $2 = HEAP32[$1 + 4 >> 2];
    $0 = $0 + 12 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $2;
    break label$1;
   }
   $2 = HEAP32[$4 + 12 >> 2];
   $5 = $3 + 8 | 0;
   $7 = HEAP32[$5 + 4 >> 2];
   HEAP32[$6 >> 2] = HEAP32[$5 >> 2];
   HEAP32[$6 + 4 >> 2] = $7;
   $6 = HEAP32[$3 + 4 >> 2];
   HEAP32[$4 + 32 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$4 + 36 >> 2] = $6;
   stretch__node__Stretch__find_node__hfb9818efa90b275a($4 + 8 | 0, $1, $4 + 32 | 0);
   if (HEAP32[$4 + 8 >> 2] == 1) {
    $1 = HEAP32[$4 + 16 >> 2];
    HEAP32[$0 + 4 >> 2] = HEAP32[$4 + 12 >> 2];
    HEAP32[$0 + 8 >> 2] = $1;
    HEAP32[$0 >> 2] = 1;
    HEAP32[$0 + 20 >> 2] = HEAP32[$4 + 28 >> 2];
    $1 = $4 + 20 | 0;
    $2 = HEAP32[$1 + 4 >> 2];
    $0 = $0 + 12 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $2;
    break label$1;
   }
   (wasm2js_i32$0 = $4, wasm2js_i32$1 = stretch__forest__Forest__remove_child__ha225db89d0709a26($1 + 104 | 0, $2, HEAP32[$4 + 12 >> 2])), HEAP32[wasm2js_i32$0 + 8 >> 2] = wasm2js_i32$1;
   $1 = $std__collections__hash__map__HashMap_K_2cV_2cS__20as_20core__ops__index__Index__Q____index__ha77d1aee23695641($1 + 40 | 0, $4 + 8 | 0);
   HEAP32[$0 >> 2] = 0;
   $2 = HEAP32[$1 + 4 >> 2];
   HEAP32[$0 + 4 >> 2] = HEAP32[$1 >> 2];
   HEAP32[$0 + 8 >> 2] = $2;
   $1 = $1 + 8 | 0;
   $2 = HEAP32[$1 + 4 >> 2];
   $0 = $0 + 12 | 0;
   HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
   HEAP32[$0 + 4 >> 2] = $2;
  }
  global$0 = $4 + 48 | 0;
 }
 
 function stretch__forest__Forest__remove_child__ha225db89d0709a26($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $4 = HEAP32[$0 + 20 >> 2];
  if ($4 >>> 0 > $1 >>> 0) {
   $3 = HEAP32[$0 + 12 >> 2] + Math_imul($1, 12) | 0;
   $4 = HEAP32[$3 >> 2];
   $6 = HEAP32[$3 + 8 >> 2] << 2;
   $8 = $4 + $6 | 0;
   $3 = $4;
   label$2 : {
    label$3 : {
     while (1) {
      if ($8 - $3 >>> 0 > 12) {
       $3 = HEAP32[$4 >> 2];
       $5 = (($3 | 0) != ($2 | 0)) + $5 | 0;
       if (($2 | 0) == ($3 | 0)) {
        break label$3
       }
       $3 = HEAP32[$4 + 4 >> 2];
       $5 = (($3 | 0) != ($2 | 0)) + $5 | 0;
       if (($2 | 0) == ($3 | 0)) {
        break label$3
       }
       $3 = HEAP32[$4 + 8 >> 2];
       $5 = (($3 | 0) != ($2 | 0)) + $5 | 0;
       if (($2 | 0) == ($3 | 0)) {
        break label$3
       }
       $6 = $6 + -16 | 0;
       $7 = HEAP32[$4 + 12 >> 2];
       $5 = (($7 | 0) != ($2 | 0)) + $5 | 0;
       $3 = $4 + 16 | 0;
       $4 = $3;
       if (($2 | 0) != ($7 | 0)) {
        continue
       }
       break label$3;
      }
      break;
     };
     $5 = 1 - $5 | 0;
     while (1) {
      if (!$6) {
       break label$2
      }
      $5 = $5 + -1 | 0;
      $6 = $6 + -4 | 0;
      $3 = HEAP32[$4 >> 2];
      $4 = $4 + 4 | 0;
      $3 = ($2 | 0) == ($3 | 0);
      if (!$3) {
       continue
      }
      break;
     };
     $5 = ($3 + 1 & 1) - $5 | 0;
    }
    return stretch__forest__Forest__remove_child_at_index__hebc91c7f2c6ef02a($0, $1, $5);
   }
   core__panicking__panic__h2d0bc53a963fb996(1050988);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $1, $4);
  abort();
 }
 
 function stretch__node__Stretch__children__h768d3b74d890ec6a($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = global$0 - 48 | 0;
  global$0 = $3;
  HEAP32[$3 + 4 >> 2] = $1;
  $5 = $2 + 8 | 0;
  $6 = HEAP32[$5 + 4 >> 2];
  $4 = $3 + 40 | 0;
  HEAP32[$4 >> 2] = HEAP32[$5 >> 2];
  HEAP32[$4 + 4 >> 2] = $6;
  $4 = HEAP32[$2 + 4 >> 2];
  HEAP32[$3 + 32 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 36 >> 2] = $4;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($3 + 8 | 0, $1, $3 + 32 | 0);
  label$1 : {
   label$2 : {
    if (HEAP32[$3 + 8 >> 2] == 1) {
     $1 = HEAP32[$3 + 16 >> 2];
     HEAP32[$0 + 4 >> 2] = HEAP32[$3 + 12 >> 2];
     HEAP32[$0 + 8 >> 2] = $1;
     HEAP32[$0 >> 2] = 1;
     HEAP32[$0 + 20 >> 2] = HEAP32[$3 + 28 >> 2];
     $1 = $3 + 20 | 0;
     $2 = HEAP32[$1 + 4 >> 2];
     $0 = $0 + 12 | 0;
     HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
     HEAP32[$0 + 4 >> 2] = $2;
     break label$2;
    }
    $4 = HEAP32[$1 + 124 >> 2];
    $2 = HEAP32[$3 + 12 >> 2];
    if ($4 >>> 0 <= $2 >>> 0) {
     break label$1
    }
    $2 = HEAP32[$1 + 116 >> 2] + Math_imul($2, 12) | 0;
    $1 = HEAP32[$2 >> 2];
    $2 = HEAP32[$2 + 8 >> 2];
    HEAP32[$3 + 40 >> 2] = 0;
    HEAP32[$3 + 32 >> 2] = 4;
    HEAP32[$3 + 36 >> 2] = 0;
    HEAP32[$3 + 12 >> 2] = $1 + ($2 << 2);
    HEAP32[$3 + 8 >> 2] = $1;
    HEAP32[$3 + 16 >> 2] = $3 + 4;
    $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____spec_extend__hd90720e4237c5918($3 + 32 | 0, $3 + 8 | 0);
    $1 = $3 + 16 | 0;
    HEAP32[$1 >> 2] = HEAP32[$3 + 40 >> 2];
    $2 = HEAP32[$3 + 36 >> 2];
    HEAP32[$3 + 8 >> 2] = HEAP32[$3 + 32 >> 2];
    HEAP32[$3 + 12 >> 2] = $2;
    HEAP32[$0 >> 2] = 0;
    HEAP32[$0 + 12 >> 2] = HEAP32[$1 >> 2];
    $1 = HEAP32[$3 + 12 >> 2];
    HEAP32[$0 + 4 >> 2] = HEAP32[$3 + 8 >> 2];
    HEAP32[$0 + 8 >> 2] = $1;
   }
   global$0 = $3 + 48 | 0;
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051304, $2, $4);
  abort();
 }
 
 function stretch__geometry__Rect_T___map__hf8927dbb844aafea($0, $1, $2) {
  var $3 = 0, $4 = Math_fround(0), $5 = 0, $6 = 0, $7 = Math_fround(0), $8 = Math_fround(0), $9 = Math_fround(0), $10 = Math_fround(0);
  $4 = HEAPF32[$2 + 4 >> 2];
  $2 = HEAP32[$2 >> 2];
  $7 = HEAPF32[$1 + 4 >> 2];
  label$1 : {
   label$2 : {
    $5 = HEAP32[$1 >> 2];
    if (($5 | 0) != 3) {
     if (($5 | 0) != 2) {
      break label$2
     }
     $3 = 0;
     break label$1;
    }
    $7 = Math_fround($7 * $4);
    $3 = $2;
    break label$1;
   }
   $3 = 1;
  }
  $5 = $3;
  $8 = HEAPF32[$1 + 12 >> 2];
  label$4 : {
   label$5 : {
    $6 = HEAP32[$1 + 8 >> 2];
    if (($6 | 0) != 3) {
     if (($6 | 0) != 2) {
      break label$5
     }
     $3 = 0;
     break label$4;
    }
    $8 = Math_fround($4 * $8);
    $3 = $2;
    break label$4;
   }
   $3 = 1;
  }
  $6 = $3;
  $9 = HEAPF32[$1 + 20 >> 2];
  label$7 : {
   label$8 : {
    $3 = HEAP32[$1 + 16 >> 2];
    if (($3 | 0) != 3) {
     if (($3 | 0) != 2) {
      break label$8
     }
     $3 = 0;
     break label$7;
    }
    $9 = Math_fround($4 * $9);
    $3 = $2;
    break label$7;
   }
   $3 = 1;
  }
  $10 = HEAPF32[$1 + 28 >> 2];
  label$10 : {
   label$11 : {
    $1 = HEAP32[$1 + 24 >> 2];
    if (($1 | 0) != 3) {
     if (($1 | 0) != 2) {
      break label$11
     }
     $2 = 0;
     break label$10;
    }
    $10 = Math_fround($4 * $10);
    break label$10;
   }
   $2 = 1;
  }
  HEAP32[$0 + 24 >> 2] = $2;
  HEAP32[$0 + 16 >> 2] = $3;
  HEAP32[$0 + 8 >> 2] = $6;
  HEAPF32[$0 + 4 >> 2] = $7;
  HEAP32[$0 >> 2] = $5;
  HEAPF32[$0 + 28 >> 2] = $10;
  HEAPF32[$0 + 20 >> 2] = $9;
  HEAPF32[$0 + 12 >> 2] = $8;
 }
 
 function core__fmt__num___impl_20core__fmt__Debug_20for_20usize___fmt__h02e757fe1749b44e($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $4 = global$0 - 128 | 0;
  global$0 = $4;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      $3 = HEAP32[$1 >> 2];
      if (!($3 & 16)) {
       $2 = HEAP32[$0 >> 2];
       if ($3 & 32) {
        break label$4
       }
       $0 = core__fmt__num__imp__fmt_u64__h529ebc247831d1ee($2, 0, 1, $1);
       break label$3;
      }
      $2 = HEAP32[$0 >> 2];
      $0 = 0;
      while (1) {
       $3 = $2 & 15;
       HEAP8[($0 + $4 | 0) + 127 | 0] = $3 >>> 0 < 10 ? $3 | 48 : $3 + 87 | 0;
       $0 = $0 + -1 | 0;
       $2 = $2 >>> 4;
       if ($2) {
        continue
       }
       break;
      };
      $2 = $0 + 128 | 0;
      if ($2 >>> 0 >= 129) {
       break label$2
      }
      $0 = core__fmt__Formatter__pad_integral__h253f31941eb77fc7($1, 1, 1060872, 2, ($0 + $4 | 0) + 128 | 0, 0 - $0 | 0);
      break label$3;
     }
     $0 = 0;
     while (1) {
      $3 = $2 & 15;
      HEAP8[($0 + $4 | 0) + 127 | 0] = $3 >>> 0 < 10 ? $3 | 48 : $3 + 55 | 0;
      $0 = $0 + -1 | 0;
      $2 = $2 >>> 4;
      if ($2) {
       continue
      }
      break;
     };
     $2 = $0 + 128 | 0;
     if ($2 >>> 0 >= 129) {
      break label$1
     }
     $0 = core__fmt__Formatter__pad_integral__h253f31941eb77fc7($1, 1, 1060872, 2, ($0 + $4 | 0) + 128 | 0, 0 - $0 | 0);
    }
    global$0 = $4 + 128 | 0;
    return $0;
   }
   core__slice__slice_index_order_fail__ha75fa70416d3bc2f($2, 128);
   abort();
  }
  core__slice__slice_index_order_fail__ha75fa70416d3bc2f($2, 128);
  abort();
 }
 
 function $std__panicking__continue_panic_fmt__PanicPayload_20as_20core__panic__BoxMeUp___box_me_up__h8011f8530b5a8041($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  $3 = HEAP32[$1 + 4 >> 2];
  if (!$3) {
   $3 = HEAP32[$1 >> 2];
   HEAP32[$2 + 16 >> 2] = 0;
   HEAP32[$2 + 8 >> 2] = 1;
   HEAP32[$2 + 12 >> 2] = 0;
   HEAP32[$2 + 20 >> 2] = $2 + 8;
   $5 = $3 + 16 | 0;
   $4 = HEAP32[$5 + 4 >> 2];
   $6 = $2 + 40 | 0;
   HEAP32[$6 >> 2] = HEAP32[$5 >> 2];
   HEAP32[$6 + 4 >> 2] = $4;
   $4 = $3 + 8 | 0;
   $6 = HEAP32[$4 + 4 >> 2];
   $5 = $2 + 32 | 0;
   HEAP32[$5 >> 2] = HEAP32[$4 >> 2];
   HEAP32[$5 + 4 >> 2] = $6;
   $4 = HEAP32[$3 + 4 >> 2];
   HEAP32[$2 + 24 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$2 + 28 >> 2] = $4;
   core__fmt__write__h85435378f7fd6609($2 + 20 | 0, 1052032, $2 + 24 | 0);
   HEAP32[$5 >> 2] = HEAP32[$2 + 16 >> 2];
   $3 = HEAP32[$2 + 12 >> 2];
   HEAP32[$2 + 24 >> 2] = HEAP32[$2 + 8 >> 2];
   HEAP32[$2 + 28 >> 2] = $3;
   $3 = $1 + 4 | 0;
   $4 = HEAP32[$3 >> 2];
   label$2 : {
    if (!$4) {
     break label$2
    }
    if (!HEAP32[$1 + 8 >> 2]) {
     break label$2
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($4);
   }
   $4 = HEAP32[$2 + 28 >> 2];
   HEAP32[$3 >> 2] = HEAP32[$2 + 24 >> 2];
   HEAP32[$3 + 4 >> 2] = $4;
   HEAP32[$3 + 8 >> 2] = HEAP32[$5 >> 2];
   $3 = HEAP32[$3 >> 2];
  }
  HEAP32[$1 + 4 >> 2] = 1;
  $5 = HEAP32[$1 + 12 >> 2];
  $1 = $1 + 8 | 0;
  $4 = HEAP32[$1 >> 2];
  HEAP32[$1 >> 2] = 0;
  HEAP32[$1 + 4 >> 2] = 0;
  $1 = __rust_alloc(12, 4);
  if ($1) {
   HEAP32[$1 + 8 >> 2] = $5;
   HEAP32[$1 + 4 >> 2] = $4;
   HEAP32[$1 >> 2] = $3;
   HEAP32[$0 + 4 >> 2] = 1053144;
   HEAP32[$0 >> 2] = $1;
   global$0 = $2 + 48 | 0;
   return;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](12, 4);
  abort();
 }
 
 function stretch_layout__Node__new__h74347de20ce72863($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $3 = global$0 - 256 | 0;
  global$0 = $3;
  label$1 : {
   label$2 : {
    $4 = HEAP32[$1 >> 2];
    $1 = HEAP32[$4 >> 2] + 1 | 0;
    if ($1 >>> 0 > 1) {
     HEAP32[$4 >> 2] = $1;
     if (HEAP32[$4 + 8 >> 2]) {
      break label$2
     }
     $7 = $4 + 8 | 0;
     HEAP32[$7 >> 2] = -1;
     stretch_layout__parse_style__h7b31828c5d69ff51($3 + 24 | 0, $2);
     HEAP32[$3 + 248 >> 2] = 0;
     HEAP32[$3 + 240 >> 2] = 4;
     HEAP32[$3 + 244 >> 2] = 0;
     stretch__node__Stretch__new_node__hd6818620093f909c($3, $4 + 16 | 0, $3 + 24 | 0, $3 + 240 | 0);
     $1 = $3 | 4;
     if (HEAP32[$3 >> 2] == 1) {
      break label$1
     }
     $6 = $1 + 8 | 0;
     $8 = HEAP32[$6 + 4 >> 2];
     $5 = $3 + 32 | 0;
     HEAP32[$5 >> 2] = HEAP32[$6 >> 2];
     HEAP32[$5 + 4 >> 2] = $8;
     $6 = HEAP32[$1 + 4 >> 2];
     HEAP32[$3 + 24 >> 2] = HEAP32[$1 >> 2];
     HEAP32[$3 + 28 >> 2] = $6;
     $1 = __wbindgen_object_clone_ref(HEAP32[$2 >> 2]) | 0;
     HEAP32[$0 >> 2] = $4;
     HEAP32[$0 + 24 >> 2] = 0;
     HEAP32[$0 + 20 >> 2] = $1;
     $1 = HEAP32[$3 + 28 >> 2];
     HEAP32[$0 + 4 >> 2] = HEAP32[$3 + 24 >> 2];
     HEAP32[$0 + 8 >> 2] = $1;
     $1 = HEAP32[$5 + 4 >> 2];
     $0 = $0 + 12 | 0;
     HEAP32[$0 >> 2] = HEAP32[$5 >> 2];
     HEAP32[$0 + 4 >> 2] = $1;
     HEAP32[$7 >> 2] = HEAP32[$7 >> 2] + 1;
     global$0 = $3 + 256 | 0;
     return;
    }
    abort();
   }
   core__result__unwrap_failed__h2450ec3de4884319();
   abort();
  }
  HEAP32[$3 + 40 >> 2] = HEAP32[$1 + 16 >> 2];
  $2 = $1 + 8 | 0;
  $4 = HEAP32[$2 + 4 >> 2];
  $0 = $3 + 32 | 0;
  HEAP32[$0 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$0 + 4 >> 2] = $4;
  $0 = HEAP32[$1 + 4 >> 2];
  HEAP32[$3 + 24 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$3 + 28 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($3 + 24 | 0);
  abort();
 }
 
 function core__unicode__bool_trie__BoolTrie__lookup__h31c9aa57385fbd21($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       $2 = ($0 >>> 3 & 536870904) + 1064176 | 0;
       label$6 : {
        if ($0 >>> 0 < 2048) {
         break label$6
        }
        if ($0 >>> 0 < 65536) {
         $1 = ($0 >>> 6) + -32 | 0;
         if ($1 >>> 0 > 991) {
          break label$5
         }
         $2 = HEAP32[266109];
         $1 = HEAPU8[$1 + 1064456 | 0];
         if ($2 >>> 0 <= $1 >>> 0) {
          break label$4
         }
         $2 = HEAP32[266108] + ($1 << 3) | 0;
         break label$6;
        }
        $1 = ($0 >>> 12) + -16 | 0;
        if ($1 >>> 0 >= 256) {
         break label$3
        }
        $1 = $0 >>> 6 & 63 | HEAPU8[$1 + 1065448 | 0] << 6;
        $2 = HEAP32[266111];
        if ($1 >>> 0 >= $2 >>> 0) {
         break label$2
        }
        $2 = HEAP32[266113];
        $1 = HEAPU8[$1 + HEAP32[266110] | 0];
        if ($2 >>> 0 <= $1 >>> 0) {
         break label$1
        }
        $2 = HEAP32[266112] + ($1 << 3) | 0;
       }
       $3 = HEAP32[$2 + 4 >> 2];
       $0 = $0 & 63;
       $1 = $0 & 31;
       if (32 <= $0 >>> 0) {
        $0 = 1 << $1;
        $1 = 0;
       } else {
        $0 = (1 << $1) - 1 & 1 >>> 32 - $1;
        $1 = 1 << $1;
       }
       return ($1 & HEAP32[$2 >> 2]) != 0 | ($0 & $3) != 0;
      }
      core__panicking__panic_bounds_check__h0537ade040df571e(1061248, $1, 992);
      abort();
     }
     core__panicking__panic_bounds_check__h0537ade040df571e(1061264, $1, $2);
     abort();
    }
    core__panicking__panic_bounds_check__h0537ade040df571e(1061280, $1, 256);
    abort();
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1061296, $1, $2);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1061312, $1, $2);
  abort();
 }
 
 function core__num__dec2flt__algorithm__bellerophon__h0c5b0e70784f3385($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = Math_fround(0), $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  $2 = global$0 - 272 | 0;
  global$0 = $2;
  core__num__bignum__Big32x40__from_u64__hb47af5bbea157ebc($2 + 72 | 0, 16777215, 0);
  label$1 : {
   label$2 : {
    $3 = $core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($0, $2 + 72 | 0);
    if (($3 & 255) == 2) {
     break label$2
    }
    if (($3 << 24 >> 24) + 1 >>> 0 >= 2) {
     break label$2
    }
    $7 = $1 << 16 >> 16 > -1 ? 0 : 3;
    break label$1;
   }
   $7 = $1 << 16 >> 16 > -1 ? 1 : 4;
  }
  core__num__dec2flt__rawfp__big_to_fp__h3ecadc46bb8700fe($2 + 56 | 0, $0);
  HEAP16[$2 + 264 >> 1] = HEAPU16[$2 + 64 >> 1];
  $3 = HEAP32[$2 + 60 >> 2];
  HEAP32[$2 + 256 >> 2] = HEAP32[$2 + 56 >> 2];
  HEAP32[$2 + 260 >> 2] = $3;
  core__num__dec2flt__algorithm__power_of_ten__habacea71fff464e2($2 + 40 | 0, $1);
  HEAP16[$2 + 80 >> 1] = HEAPU16[$2 + 48 >> 1];
  $3 = HEAP32[$2 + 44 >> 2];
  HEAP32[$2 + 72 >> 2] = HEAP32[$2 + 40 >> 2];
  HEAP32[$2 + 76 >> 2] = $3;
  core__num__diy_float__Fp__mul__ha783f4c77c52b6c1($2 + 24 | 0, $2 + 256 | 0, $2 + 72 | 0);
  HEAP16[$2 + 248 >> 1] = HEAPU16[$2 + 32 >> 1];
  $3 = HEAP32[$2 + 28 >> 2];
  HEAP32[$2 + 240 >> 2] = HEAP32[$2 + 24 >> 2];
  HEAP32[$2 + 244 >> 2] = $3;
  core__num__diy_float__Fp__normalize__h3de17146ae536bff($2 + 8 | 0, $2 + 240 | 0);
  $3 = HEAP32[$2 + 8 >> 2];
  $4 = HEAP32[$2 + 12 >> 2];
  $5 = core__num__dec2flt__rawfp__fp_to_float__hfb005cc21d1c97fe($3, $4, HEAPU16[$2 + 16 >> 1]);
  $6 = 0 - $3 | 0;
  $4 = $4 & 255;
  $8 = 128 - ($4 + (0 < $3 >>> 0) | 0) | 0;
  $4 = $4 + -128 | 0;
  $4 = $3 >>> 0 < 0 ? $4 + 1 | 0 : $4;
  $9 = $3;
  if (($4 | 0) < 0) {
   $3 = 1
  } else {
   if (($4 | 0) <= 0) {
    $3 = $3 >>> 0 >= 0 ? 0 : 1
   } else {
    $3 = 0
   }
  }
  $6 = $3 ? $6 : $9;
  $3 = $3 ? $8 : $4;
  if (($3 | 0) > 0) {
   $3 = 1
  } else {
   $3 = ($3 | 0) >= 0 ? ($6 >>> 0 <= $7 >>> 0 ? 0 : 1) : 0
  }
  if (!$3) {
   $5 = core__num__dec2flt__algorithm__algorithm_r__hc78fd1e69554e0fc($0, $1, $5)
  }
  global$0 = $2 + 272 | 0;
  return $5;
 }
 
 function std__ffi__c_str__CString__from_vec_unchecked__hd801b68fb97cc939($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = HEAP32[$1 + 4 >> 2];
  $4 = HEAP32[$1 + 8 >> 2];
  if (($2 | 0) == ($4 | 0)) {
   label$2 : {
    label$3 : {
     $2 = $4 + 1 | 0;
     if (($2 | 0) < 0) {
      break label$3
     }
     if ($2 >>> 0 < $4 >>> 0) {
      break label$3
     }
     label$4 : {
      if ($4) {
       $3 = __rust_realloc(HEAP32[$1 >> 2], $4, 1, $2);
       if (!$3) {
        break label$4
       }
       break label$2;
      }
      $3 = __rust_alloc($2, 1);
      if ($3) {
       break label$2
      }
     }
     $0 = HEAP32[266546];
     FUNCTION_TABLE[$0 ? $0 : 56]($2, 1);
     abort();
    }
    alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
    abort();
   }
   HEAP32[$1 >> 2] = $3;
   HEAP32[$1 + 4 >> 2] = $2;
  }
  if (($2 | 0) == ($4 | 0)) {
   alloc__vec__Vec_T___reserve__hc0f95e3f359a8226($1, 1);
   $4 = HEAP32[$1 + 8 >> 2];
   $2 = HEAP32[$1 + 4 >> 2];
  }
  $3 = $4 + 1 | 0;
  HEAP32[$1 + 8 >> 2] = $3;
  $5 = HEAP32[$1 >> 2];
  HEAP8[$4 + $5 | 0] = 0;
  label$7 : {
   label$8 : {
    if (($2 | 0) == ($3 | 0)) {
     $1 = $5;
     $3 = $2;
     break label$8;
    }
    if ($2 >>> 0 < $3 >>> 0) {
     break label$7
    }
    if ($3) {
     $1 = __rust_realloc($5, $2, 1, $3);
     if ($1) {
      break label$8
     }
     $0 = HEAP32[266546];
     FUNCTION_TABLE[$0 ? $0 : 56]($3, 1);
     abort();
    }
    $3 = 0;
    $1 = 1;
    if (!$2) {
     break label$8
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($5);
   }
   HEAP32[$0 + 4 >> 2] = $3;
   HEAP32[$0 >> 2] = $1;
   return;
  }
  core__panicking__panic__h2d0bc53a963fb996(1052492);
  abort();
 }
 
 function $_mut_20I_20as_20core__iter__traits__iterator__Iterator___next__h612ae4917c912bb5($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $3 = global$0 - 48 | 0;
  global$0 = $3;
  $1 = HEAP32[$1 >> 2];
  $2 = HEAP32[$1 >> 2];
  label$1 : {
   label$3 : {
    if (HEAP32[$1 + 4 >> 2] != ($2 | 0)) {
     HEAP32[$1 >> 2] = $2 + 16;
     $6 = HEAP32[HEAP32[$1 + 8 >> 2] >> 2];
     $5 = $2 + 8 | 0;
     $7 = HEAP32[$5 + 4 >> 2];
     $4 = $3 + 32 | 0;
     HEAP32[$4 >> 2] = HEAP32[$5 >> 2];
     HEAP32[$4 + 4 >> 2] = $7;
     $5 = HEAP32[$2 + 4 >> 2];
     HEAP32[$3 + 24 >> 2] = HEAP32[$2 >> 2];
     HEAP32[$3 + 28 >> 2] = $5;
     stretch__node__Stretch__find_node__hfb9818efa90b275a($3, $6, $3 + 24 | 0);
     $6 = 0;
     $2 = HEAP32[$3 >> 2];
     if (($2 | 0) == 1) {
      break label$3
     }
     if (($2 | 0) == 2) {
      break label$1
     }
     $6 = 1;
     $1 = HEAP32[$3 + 4 >> 2];
     break label$1;
    }
    HEAP32[$3 >> 2] = 2;
    break label$1;
   }
   HEAP32[$3 + 40 >> 2] = HEAP32[$3 + 20 >> 2];
   $2 = $3 + 12 | 0;
   $5 = HEAP32[$2 + 4 >> 2];
   HEAP32[$4 >> 2] = HEAP32[$2 >> 2];
   HEAP32[$4 + 4 >> 2] = $5;
   $2 = HEAP32[$3 + 8 >> 2];
   HEAP32[$3 + 24 >> 2] = HEAP32[$3 + 4 >> 2];
   HEAP32[$3 + 28 >> 2] = $2;
   $2 = $1 + 12 | 0;
   if (HEAP32[$1 + 12 >> 2] != 2) {
    core__ptr__real_drop_in_place__h4667a55ad65e99f0($2)
   }
   $4 = HEAP32[$3 + 28 >> 2];
   HEAP32[$2 >> 2] = HEAP32[$3 + 24 >> 2];
   HEAP32[$2 + 4 >> 2] = $4;
   HEAP32[$2 + 16 >> 2] = HEAP32[$3 + 40 >> 2];
   $4 = $3 + 32 | 0;
   $5 = HEAP32[$4 + 4 >> 2];
   $2 = $2 + 8 | 0;
   HEAP32[$2 >> 2] = HEAP32[$4 >> 2];
   HEAP32[$2 + 4 >> 2] = $5;
  }
  HEAP32[$0 + 4 >> 2] = $1;
  HEAP32[$0 >> 2] = $6;
  global$0 = $3 + 48 | 0;
 }
 
 function $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__h708e7d0fcd3f4aad($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  $2 = global$0 + -64 | 0;
  global$0 = $2;
  $6 = HEAP32[$1 + 8 >> 2];
  $9 = HEAP32[$1 + 4 >> 2];
  $10 = HEAP32[$0 + 4 >> 2];
  $11 = HEAP32[$0 >> 2];
  $5 = HEAP32[$0 + 8 >> 2];
  $7 = HEAP32[$0 + 12 >> 2];
  if (($5 | 0) != ($7 | 0)) {
   $12 = HEAP32[$0 + 16 >> 2];
   $0 = HEAP32[$1 >> 2];
   while (1) {
    $3 = $5 + 8 | 0;
    $4 = HEAP32[$3 + 4 >> 2];
    $1 = $2 + 8 | 0;
    HEAP32[$1 >> 2] = HEAP32[$3 >> 2];
    HEAP32[$1 + 4 >> 2] = $4;
    $3 = HEAP32[$5 + 4 >> 2];
    HEAP32[$2 >> 2] = HEAP32[$5 >> 2];
    HEAP32[$2 + 4 >> 2] = $3;
    $3 = HEAP32[$12 >> 2];
    $4 = HEAP32[$1 + 4 >> 2];
    $8 = $2 + 56 | 0;
    HEAP32[$8 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$8 + 4 >> 2] = $4;
    $1 = HEAP32[$2 + 4 >> 2];
    HEAP32[$2 + 48 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$2 + 52 >> 2] = $1;
    stretch_layout__Layout__new__h80f5bc745f91ec19($2 + 16 | 0, $3, $2 + 48 | 0);
    $1 = $2 + 40 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $4 = $0 + 24 | 0;
    HEAP32[$4 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$4 + 4 >> 2] = $3;
    $1 = $2 + 32 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $4 = $0 + 16 | 0;
    HEAP32[$4 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$4 + 4 >> 2] = $3;
    $1 = $2 + 24 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $4 = $0 + 8 | 0;
    HEAP32[$4 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$4 + 4 >> 2] = $3;
    $1 = HEAP32[$2 + 20 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$2 + 16 >> 2];
    HEAP32[$0 + 4 >> 2] = $1;
    $6 = $6 + 1 | 0;
    $0 = $0 + 32 | 0;
    $5 = $5 + 16 | 0;
    if (($7 | 0) != ($5 | 0)) {
     continue
    }
    break;
   };
  }
  HEAP32[$9 >> 2] = $6;
  HEAP32[$2 + 20 >> 2] = $10;
  HEAP32[$2 + 16 >> 2] = $11;
  $0 = $2 + 16 | 0;
  if (HEAP32[$0 + 4 >> 2]) {
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
  }
  global$0 = $2 - -64 | 0;
 }
 
 function $core__iter__adapters__Rev_I__20as_20core__iter__traits__iterator__Iterator___fold__hb6f361fea9c2bb5f($0, $1, $2) {
  var $3 = Math_fround(0), $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  label$1 : {
   if (($0 | 0) != ($1 | 0)) {
    $4 = HEAP32[$2 + 20 >> 2];
    $7 = HEAP32[$2 + 16 >> 2];
    $6 = HEAP32[$2 + 12 >> 2];
    $8 = HEAP32[$2 + 8 >> 2];
    $10 = HEAP32[$2 + 4 >> 2];
    $11 = HEAP32[$2 >> 2];
    while (1) {
     $9 = HEAP32[$11 >> 2];
     $2 = HEAP32[$9 + 8 >> 2];
     $5 = HEAP32[$10 >> 2];
     if ($2 >>> 0 <= $5 >>> 0) {
      break label$1
     }
     $2 = $1;
     $1 = $2 + -20 | 0;
     $3 = Math_fround(0.0);
     $5 = HEAPU8[(HEAP32[$9 >> 2] + Math_imul($5, 288) | 0) + 208 | 0] + -1 | 0;
     label$4 : {
      label$5 : {
       if ($5 >>> 0 <= 4) {
        label$7 : {
         switch ($5 - 1 | 0) {
         default:
          if ($4) {
           break label$4
          }
          if (HEAPU8[$8 | 0]) {
           break label$4
          }
          break label$5;
         case 3:
          $3 = Math_fround(HEAPF32[$6 >> 2] / Math_fround(HEAPU32[$7 >> 2]));
          $3 = $4 ? $3 : Math_fround($3 * Math_fround(.5));
          break label$4;
         case 0:
          if ($4) {
           break label$4
          }
          $3 = Math_fround(HEAPF32[$6 >> 2] * Math_fround(.5));
          break label$4;
         case 1:
          break label$4;
         case 2:
          break label$7;
         };
        }
        if (!$4) {
         break label$4
        }
        $3 = Math_fround(HEAPF32[$6 >> 2] / Math_fround(HEAP32[$7 >> 2] + -1 >>> 0));
        break label$4;
       }
       if ($4) {
        break label$4
       }
       if (!HEAPU8[$8 | 0]) {
        break label$4
       }
      }
      $3 = HEAPF32[$6 >> 2];
     }
     HEAPF32[$2 + -4 >> 2] = $3;
     $4 = $4 + 1 | 0;
     if (($0 | 0) != ($1 | 0)) {
      continue
     }
     break;
    };
   }
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051560, $5, $2);
  abort();
 }
 
 function core__str___impl_20str___ends_with__h5d6bb4579d889be6($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if ($1) {
      $1 = $0 + $1 | 0;
      $2 = $1 + -1 | 0;
      $4 = HEAPU8[$2 | 0];
      $5 = $4 << 24 >> 24;
      if (($5 | 0) < 0) {
       break label$3
      }
      return ($4 | 0) == 37;
     }
     break label$2;
    }
    label$5 : {
     if (($0 | 0) == ($2 | 0)) {
      break label$5
     }
     label$6 : {
      label$7 : {
       label$8 : {
        label$9 : {
         label$10 : {
          $2 = $1 + -2 | 0;
          $3 = HEAPU8[$2 | 0];
          if (($3 & 192) == 128) {
           if (($0 | 0) == ($2 | 0)) {
            break label$10
           }
           $4 = $1 + -3 | 0;
           $2 = HEAPU8[$4 | 0];
           if (($2 & 192) != 128) {
            break label$9
           }
           if (($0 | 0) == ($4 | 0)) {
            break label$8
           }
           $0 = (HEAPU8[$1 + -4 | 0] & 7) << 6;
           break label$7;
          }
          $3 = $3 & 31;
          break label$5;
         }
         $0 = 0;
         break label$6;
        }
        $0 = $2 & 15;
        break label$6;
       }
       $0 = 0;
      }
      $0 = $0 | $2 & 63;
     }
     $3 = $0 << 6 | $3 & 63;
    }
    $0 = $5 & 63 | $3 << 6;
    if (($0 | 0) != 1114112) {
     break label$1
    }
   }
   return 0;
  }
  return ($0 | 0) == 37;
 }
 
 function stretch__geometry__Rect_T___map__h7b4730a6dda3311f($0, $1, $2) {
  var $3 = 0, $4 = Math_fround(0), $5 = Math_fround(0), $6 = Math_fround(0), $7 = Math_fround(0), $8 = Math_fround(0), $9 = Math_fround(0);
  $7 = HEAPF32[$2 + 4 >> 2];
  $2 = HEAP32[$2 >> 2];
  $4 = HEAPF32[$1 + 4 >> 2];
  $3 = HEAP32[$1 >> 2];
  label$1 : {
   if (($3 | 0) != 2) {
    if (($3 | 0) != 3) {
     break label$1
    }
    if ($2) {
     break label$1
    }
    $8 = Math_fround($4 * $7);
    break label$1;
   }
   $8 = $4;
  }
  $5 = HEAPF32[$1 + 12 >> 2];
  $3 = HEAP32[$1 + 8 >> 2];
  label$3 : {
   if (($3 | 0) != 2) {
    $4 = Math_fround(0.0);
    if (($3 | 0) != 3) {
     break label$3
    }
    if ($2) {
     break label$3
    }
    $4 = Math_fround($7 * $5);
    break label$3;
   }
   $4 = $5;
  }
  $6 = HEAPF32[$1 + 20 >> 2];
  $3 = HEAP32[$1 + 16 >> 2];
  label$5 : {
   if (($3 | 0) != 2) {
    $5 = Math_fround(0.0);
    if (($3 | 0) != 3) {
     break label$5
    }
    if ($2) {
     break label$5
    }
    $5 = Math_fround($7 * $6);
    break label$5;
   }
   $5 = $6;
  }
  $9 = HEAPF32[$1 + 28 >> 2];
  $1 = HEAP32[$1 + 24 >> 2];
  label$7 : {
   if (($1 | 0) != 2) {
    $6 = Math_fround(0.0);
    if (($1 | 0) != 3) {
     break label$7
    }
    if ($2) {
     break label$7
    }
    $6 = Math_fround($7 * $9);
    break label$7;
   }
   $6 = $9;
  }
  HEAPF32[$0 + 12 >> 2] = $6;
  HEAPF32[$0 + 8 >> 2] = $5;
  HEAPF32[$0 + 4 >> 2] = $4;
  HEAPF32[$0 >> 2] = $8;
 }
 
 function std__panicking__rust_panic_with_hook__h6fe9d3817474ba5a($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  $4 = global$0 + -64 | 0;
  global$0 = $4;
  $6 = 1;
  $5 = HEAP32[$3 + 12 >> 2];
  $7 = HEAP32[$3 + 8 >> 2];
  $8 = HEAP32[$3 + 4 >> 2];
  $9 = HEAP32[$3 >> 2];
  label$1 : {
   label$2 : {
    label$3 : {
     if (HEAP32[266672] == 1) {
      $6 = HEAP32[266673] + 1 | 0;
      HEAP32[266673] = $6;
      if ($6 >>> 0 <= 2) {
       break label$3
      }
      break label$2;
     }
     HEAP32[266672] = 1;
     HEAP32[266673] = 1;
    }
    $3 = $4 + 48 | 0;
    HEAP32[$3 + 12 >> 2] = $5;
    HEAP32[$3 + 8 >> 2] = $7;
    HEAP32[$3 + 4 >> 2] = $8;
    HEAP32[$3 >> 2] = $9;
    $3 = $4 + 56 | 0;
    $5 = HEAP32[$3 + 4 >> 2];
    $7 = $4 + 36 | 0;
    HEAP32[$7 >> 2] = HEAP32[$3 >> 2];
    HEAP32[$7 + 4 >> 2] = $5;
    HEAP32[$4 + 24 >> 2] = $2;
    HEAP32[$4 + 20 >> 2] = 1052196;
    HEAP32[$4 + 16 >> 2] = 1052196;
    $2 = HEAP32[$4 + 52 >> 2];
    HEAP32[$4 + 28 >> 2] = HEAP32[$4 + 48 >> 2];
    HEAP32[$4 + 32 >> 2] = $2;
    $2 = HEAP32[266547];
    if (($2 | 0) <= -1) {
     break label$2
    }
    $2 = $2 + 1 | 0;
    HEAP32[266547] = $2;
    $3 = HEAP32[266549];
    if ($3) {
     $2 = HEAP32[266548];
     FUNCTION_TABLE[HEAP32[$1 + 16 >> 2]]($4 + 8 | 0, $0);
     $5 = HEAP32[$4 + 12 >> 2];
     HEAP32[$4 + 16 >> 2] = HEAP32[$4 + 8 >> 2];
     HEAP32[$4 + 20 >> 2] = $5;
     FUNCTION_TABLE[HEAP32[$3 + 12 >> 2]]($2, $4 + 16 | 0);
     $2 = HEAP32[266547];
    }
    HEAP32[266547] = $2 + -1;
    if ($6 >>> 0 <= 1) {
     break label$1
    }
   }
   abort();
  }
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  HEAP32[$2 + 12 >> 2] = $1;
  HEAP32[$2 + 8 >> 2] = $0;
  abort();
 }
 
 function $alloc__vec__DrainFilter_T_2cF__20as_20core__iter__traits__iterator__Iterator___next__h24d94adb72f98975($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  label$1 : {
   label$2 : {
    $2 = HEAP32[$1 + 4 >> 2];
    $3 = HEAP32[$1 + 12 >> 2];
    label$3 : {
     if (($2 | 0) == ($3 | 0)) {
      break label$3
     }
     $6 = $1 + 4 | 0;
     $10 = $1 + 16 | 0;
     $11 = $1 + 8 | 0;
     $12 = $1 + 12 | 0;
     label$4 : {
      while (1) {
       $4 = $2 + 1 | 0;
       HEAP32[$6 >> 2] = $4;
       if ($2 >>> 0 >= $3 >>> 0) {
        break label$2
       }
       $5 = HEAP32[$11 >> 2];
       $7 = HEAP32[HEAP32[$1 >> 2] >> 2];
       $8 = $7 + ($2 << 2) | 0;
       $9 = HEAP32[$8 >> 2];
       if (($9 | 0) == HEAP32[HEAP32[HEAP32[$10 >> 2] >> 2] >> 2]) {
        break label$4
       }
       label$7 : {
        if ($5) {
         $4 = $2 - $5 | 0;
         if ($4 >>> 0 >= $3 >>> 0) {
          break label$1
         }
         HEAP32[($4 << 2) + $7 >> 2] = $9;
         $3 = HEAP32[$12 >> 2];
         $2 = HEAP32[$6 >> 2];
         break label$7;
        }
        $2 = $4;
       }
       if (($2 | 0) != ($3 | 0)) {
        continue
       }
       break;
      };
      break label$3;
     }
     $13 = 1;
     HEAP32[$1 + 8 >> 2] = $5 + 1;
     $2 = HEAP32[$8 >> 2];
    }
    HEAP32[$0 + 4 >> 2] = $2;
    HEAP32[$0 >> 2] = $13;
    return;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1050756, $2, $3);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1050772, $4, $3);
  abort();
 }
 
 function core__fmt__Write__write_char__h3c3cb45a8d017382($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  HEAP32[$2 + 12 >> 2] = 0;
  $3 = $2 + 12 | 0;
  label$1 : {
   if ($1 >>> 0 < 128) {
    HEAP8[$2 + 12 | 0] = $1;
    $1 = 1;
    break label$1;
   }
   if ($1 >>> 0 < 2048) {
    HEAP8[$2 + 13 | 0] = $1 & 63 | 128;
    HEAP8[$2 + 12 | 0] = $1 >>> 6 & 31 | 192;
    $1 = 2;
    break label$1;
   }
   if ($1 >>> 0 < 65536) {
    HEAP8[$2 + 14 | 0] = $1 & 63 | 128;
    HEAP8[$2 + 13 | 0] = $1 >>> 6 & 63 | 128;
    HEAP8[$2 + 12 | 0] = $1 >>> 12 & 15 | 224;
    $1 = 3;
    break label$1;
   }
   HEAP8[$2 + 15 | 0] = $1 & 63 | 128;
   HEAP8[$2 + 12 | 0] = $1 >>> 18 | 240;
   HEAP8[$2 + 14 | 0] = $1 >>> 6 & 63 | 128;
   HEAP8[$2 + 13 | 0] = $1 >>> 12 & 63 | 128;
   $1 = 4;
  }
  $0 = $core__fmt__builders__PadAdapter_20as_20core__fmt__Write___write_str__h09f53eef721a952f($0, $3, $1);
  global$0 = $2 + 16 | 0;
  return $0 | 0;
 }
 
 function core__num__dec2flt__rawfp__fp_to_float__hfb005cc21d1c97fe($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = Math_fround(0);
  $3 = global$0 - 96 | 0;
  global$0 = $3;
  HEAP16[$3 + 48 >> 1] = $2;
  HEAP32[$3 + 40 >> 2] = $0;
  HEAP32[$3 + 44 >> 2] = $1;
  core__num__diy_float__Fp__normalize__h3de17146ae536bff($3 + 24 | 0, $3 + 40 | 0);
  $0 = HEAP32[$3 + 24 >> 2];
  $1 = HEAP32[$3 + 28 >> 2];
  $2 = HEAPU16[$3 + 32 >> 1];
  $4 = $2 + 63 | 0;
  HEAP16[$3 + 62 >> 1] = $4;
  label$1 : {
   $4 = $4 << 16 >> 16;
   if (($4 | 0) <= 127) {
    if (($4 | 0) <= -126) {
     break label$1
    }
    core__num__dec2flt__rawfp__round_normal__ha876a267818aec99($3 + 8 | 0, $0, $1, $2);
    $5 = core__num__dec2flt__rawfp__encode_normal__h79788dc1a919ce5b(HEAP32[$3 + 8 >> 2], HEAP32[$3 + 12 >> 2], HEAPU16[$3 + 16 >> 1]);
    global$0 = $3 + 96 | 0;
    return $5;
   }
   HEAP32[$3 + 84 >> 2] = 1;
   HEAP32[$3 + 92 >> 2] = 6;
   HEAP32[$3 + 68 >> 2] = 2;
   HEAP32[$3 + 72 >> 2] = 0;
   HEAP32[$3 + 64 >> 2] = 1049664;
   HEAP32[$3 + 88 >> 2] = $3 + 62;
   HEAP32[$3 + 80 >> 2] = $3 + 88;
   core__panicking__panic_fmt__h2daf88b2616ca2b2($3 - -64 | 0, 1049680);
   abort();
  }
  HEAP32[$3 + 84 >> 2] = 1;
  HEAP32[$3 + 92 >> 2] = 6;
  HEAP32[$3 + 68 >> 2] = 2;
  HEAP32[$3 + 72 >> 2] = 0;
  HEAP32[$3 + 64 >> 2] = 1049708;
  HEAP32[$3 + 88 >> 2] = $3 + 62;
  HEAP32[$3 + 80 >> 2] = $3 + 88;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($3 - -64 | 0, 1049724);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve_internal__h8d71322955e7b7f1($0, $1, $2) {
  var $3 = 0, $4 = 0;
  label$2 : {
   $3 = HEAP32[$0 + 4 >> 2];
   if ($3 - $1 >>> 0 < $2 >>> 0) {
    $2 = $1 + $2 | 0;
    if ($2 >>> 0 >= $1 >>> 0) {
     break label$2
    }
    return 0;
   } else {
    $0 = 2
   }
   return $0;
  }
  $1 = $3 << 1;
  $4 = $2 >>> 0 < $1 >>> 0 ? $1 : $2;
  if ($4 >>> 27) {
   return 0
  }
  label$6 : {
   label$7 : {
    label$9 : {
     $2 = $4 << 5;
     if (($2 | 0) > -1) {
      if (!$3) {
       break label$9
      }
      $1 = __rust_realloc(HEAP32[$0 >> 2], $3 << 5, 4, $2);
      if (!$1) {
       break label$6
      }
      break label$7;
     }
     return 0;
    }
    $1 = __rust_alloc($2, 4);
    if ($1) {
     break label$7
    }
    break label$6;
   }
   if ($1) {
    HEAP32[$0 >> 2] = $1;
    HEAP32[$0 + 4 >> 2] = $4;
    return 2;
   }
   return 1;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($2, 4);
  abort();
 }
 
 function stretch__node__Stretch__add_child__h29c56c8474f233e8($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $4 = global$0 - 48 | 0;
  global$0 = $4;
  $7 = $2 + 8 | 0;
  $8 = HEAP32[$7 + 4 >> 2];
  $6 = $4 + 40 | 0;
  $5 = $6;
  HEAP32[$5 >> 2] = HEAP32[$7 >> 2];
  HEAP32[$5 + 4 >> 2] = $8;
  $5 = HEAP32[$2 + 4 >> 2];
  HEAP32[$4 + 32 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$4 + 36 >> 2] = $5;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($4 + 8 | 0, $1, $4 + 32 | 0);
  label$1 : {
   if (HEAP32[$4 + 8 >> 2] == 1) {
    $1 = HEAP32[$4 + 16 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$4 + 12 >> 2];
    HEAP32[$0 + 4 >> 2] = $1;
    HEAP32[$0 + 16 >> 2] = HEAP32[$4 + 28 >> 2];
    $1 = $4 + 20 | 0;
    $2 = HEAP32[$1 + 4 >> 2];
    $0 = $0 + 8 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $2;
    break label$1;
   }
   $2 = HEAP32[$4 + 12 >> 2];
   $5 = $3 + 8 | 0;
   $7 = HEAP32[$5 + 4 >> 2];
   HEAP32[$6 >> 2] = HEAP32[$5 >> 2];
   HEAP32[$6 + 4 >> 2] = $7;
   $6 = HEAP32[$3 + 4 >> 2];
   HEAP32[$4 + 32 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$4 + 36 >> 2] = $6;
   stretch__node__Stretch__find_node__hfb9818efa90b275a($4 + 8 | 0, $1, $4 + 32 | 0);
   if (HEAP32[$4 + 8 >> 2] == 1) {
    $1 = HEAP32[$4 + 16 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$4 + 12 >> 2];
    HEAP32[$0 + 4 >> 2] = $1;
    HEAP32[$0 + 16 >> 2] = HEAP32[$4 + 28 >> 2];
    $1 = $4 + 20 | 0;
    $2 = HEAP32[$1 + 4 >> 2];
    $0 = $0 + 8 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $2;
    break label$1;
   }
   stretch__forest__Forest__add_child__hd48b85d31c869332($1 + 104 | 0, $2, HEAP32[$4 + 12 >> 2]);
   HEAP32[$0 >> 2] = 2;
  }
  global$0 = $4 + 48 | 0;
 }
 
 function stretch_layout__Node__set_style__h516a5766908e8697($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $2 = global$0 - 256 | 0;
  global$0 = $2;
  label$1 : {
   $3 = HEAP32[$0 >> 2];
   if (!HEAP32[$3 + 8 >> 2]) {
    $5 = $3 + 8 | 0;
    HEAP32[$5 >> 2] = -1;
    $6 = $0 + 12 | 0;
    $7 = HEAP32[$6 + 4 >> 2];
    $4 = $2 + 32 | 0;
    HEAP32[$4 >> 2] = HEAP32[$6 >> 2];
    HEAP32[$4 + 4 >> 2] = $7;
    $4 = HEAP32[$0 + 8 >> 2];
    HEAP32[$2 + 24 >> 2] = HEAP32[$0 + 4 >> 2];
    HEAP32[$2 + 28 >> 2] = $4;
    stretch_layout__parse_style__h7b31828c5d69ff51($2 + 40 | 0, $1);
    stretch__node__Stretch__set_style__h4b5cb223f1b8dc25($2, $3 + 16 | 0, $2 + 24 | 0, $2 + 40 | 0);
    if (HEAP32[$2 >> 2] != 2) {
     break label$1
    }
    HEAP32[$5 >> 2] = HEAP32[$5 >> 2] + 1;
    $1 = __wbindgen_object_clone_ref(HEAP32[$1 >> 2]) | 0;
    $3 = HEAP32[$0 + 20 >> 2];
    if ($3 >>> 0 >= 36) {
     __wbindgen_object_drop_ref($3 | 0)
    }
    HEAP32[$0 + 20 >> 2] = $1;
    global$0 = $2 + 256 | 0;
    return;
   }
   core__result__unwrap_failed__h2450ec3de4884319();
   abort();
  }
  HEAP32[$2 + 56 >> 2] = HEAP32[$2 + 16 >> 2];
  $1 = $2 + 8 | 0;
  $3 = HEAP32[$1 + 4 >> 2];
  $0 = $2 + 48 | 0;
  HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$0 + 4 >> 2] = $3;
  $0 = HEAP32[$2 + 4 >> 2];
  HEAP32[$2 + 40 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$2 + 44 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($2 + 40 | 0);
  abort();
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___round_layout__he1e66d70fec8b5f8($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0, $7 = Math_fround(0), $8 = Math_fround(0), wasm2js_i32$0 = 0, wasm2js_f32$0 = Math_fround(0);
  label$1 : {
   $5 = HEAP32[$0 + 8 >> 2];
   if ($5 >>> 0 > $2 >>> 0) {
    $5 = HEAP32[$0 >> 2] + Math_imul($2, 288) | 0;
    $6 = $5 + 236 | 0;
    $7 = HEAPF32[$6 >> 2];
    (wasm2js_i32$0 = $6, wasm2js_f32$0 = roundf($7)), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
    $6 = $5 + 232 | 0;
    $8 = HEAPF32[$6 >> 2];
    (wasm2js_i32$0 = $6, wasm2js_f32$0 = roundf($8)), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
    $3 = Math_fround($8 + $3);
    $6 = $5 + 224 | 0;
    $8 = roundf(Math_fround($3 + HEAPF32[$6 >> 2]));
    (wasm2js_i32$0 = $6, wasm2js_f32$0 = Math_fround($8 - roundf($3))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
    $4 = Math_fround($7 + $4);
    $5 = $5 + 228 | 0;
    $7 = roundf(Math_fround($4 + HEAPF32[$5 >> 2]));
    (wasm2js_i32$0 = $5, wasm2js_f32$0 = Math_fround($7 - roundf($4))), HEAPF32[wasm2js_i32$0 >> 2] = wasm2js_f32$0;
    $5 = HEAP32[$1 + 8 >> 2];
    if ($5 >>> 0 <= $2 >>> 0) {
     break label$1
    }
    $2 = HEAP32[$1 >> 2] + Math_imul($2, 12) | 0;
    $5 = HEAP32[$2 + 8 >> 2];
    if ($5) {
     $2 = HEAP32[$2 >> 2];
     $5 = $5 << 2;
     while (1) {
      stretch__algo___impl_20stretch__forest__Forest___round_layout__he1e66d70fec8b5f8($0, $1, HEAP32[$2 >> 2], $3, $4);
      $2 = $2 + 4 | 0;
      $5 = $5 + -4 | 0;
      if ($5) {
       continue
      }
      break;
     };
    }
    return;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $2, $5);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $2, $5);
  abort();
 }
 
 function stretch_layout__get_i32__hece4b5caa75e8ca8($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0.0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $4 = global$0 - 32 | 0;
  global$0 = $4;
  label$1 : {
   if (!stretch_layout__has_key__hf2b3c8fbd22a58c3($1, $2, $3)) {
    break label$1
   }
   (wasm2js_i32$0 = $4, wasm2js_i32$1 = __wbindgen_string_new($2 | 0, $3 | 0) | 0), HEAP32[wasm2js_i32$0 + 24 >> 2] = wasm2js_i32$1;
   js_sys__Reflect__get__h47f550132b94fe08($4 + 16 | 0, $1, $4 + 24 | 0);
   $1 = HEAP32[$4 + 20 >> 2];
   if (HEAP32[$4 + 16 >> 2]) {
    if ($1 >>> 0 >= 36) {
     __wbindgen_object_drop_ref($1 | 0)
    }
    $1 = HEAP32[$4 + 24 >> 2];
    if ($1 >>> 0 < 36) {
     break label$1
    }
    __wbindgen_object_drop_ref($1 | 0);
    break label$1;
   }
   HEAP32[$4 + 28 >> 2] = $1;
   wasm_bindgen__JsValue__as_f64__h1f8b3e8c0b7cfbf2($4, $4 + 28 | 0);
   $3 = HEAP32[$4 >> 2];
   $5 = HEAP32[$4 + 28 >> 2];
   $2 = $5 >>> 0 < 36;
   $6 = HEAPF64[$4 + 8 >> 3];
   label$5 : {
    label$6 : {
     if (!(Math_abs($6) < 2147483648.0)) {
      $1 = -2147483648;
      if (!$2) {
       break label$6
      }
      break label$5;
     }
     $1 = ~~$6;
     if ($2) {
      break label$5
     }
    }
    __wbindgen_object_drop_ref($5 | 0);
   }
   $2 = HEAP32[$4 + 24 >> 2];
   if ($2 >>> 0 >= 36) {
    __wbindgen_object_drop_ref($2 | 0)
   }
   $5 = ($3 | 0) != 0;
  }
  HEAP32[$0 + 4 >> 2] = $1;
  HEAP32[$0 >> 2] = $5;
  global$0 = $4 + 32 | 0;
 }
 
 function stretch__forest__Forest__add_child__hd48b85d31c869332($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  label$1 : {
   $3 = HEAP32[$0 + 32 >> 2];
   if ($3 >>> 0 > $2 >>> 0) {
    $4 = HEAP32[$0 + 24 >> 2] + Math_imul($2, 12) | 0;
    $5 = $4 + 8 | 0;
    $3 = HEAP32[$4 + 8 >> 2];
    if (($3 | 0) == HEAP32[$4 + 4 >> 2]) {
     alloc__raw_vec__RawVec_T_2cA___reserve__h52463841ac7c0460($4, $3);
     $3 = HEAP32[$5 >> 2];
    }
    HEAP32[HEAP32[$4 >> 2] + ($3 << 2) >> 2] = $1;
    HEAP32[$5 >> 2] = HEAP32[$5 >> 2] + 1;
    $3 = HEAP32[$0 + 20 >> 2];
    if ($3 >>> 0 <= $1 >>> 0) {
     break label$1
    }
    $6 = $0 + 24 | 0;
    $4 = HEAP32[$0 + 12 >> 2] + Math_imul($1, 12) | 0;
    $5 = $4 + 8 | 0;
    $3 = HEAP32[$4 + 8 >> 2];
    if (($3 | 0) == HEAP32[$4 + 4 >> 2]) {
     alloc__raw_vec__RawVec_T_2cA___reserve__h52463841ac7c0460($4, $3);
     $3 = HEAP32[$5 >> 2];
    }
    HEAP32[HEAP32[$4 >> 2] + ($3 << 2) >> 2] = $2;
    HEAP32[$5 >> 2] = HEAP32[$5 >> 2] + 1;
    stretch__forest__Forest__mark_dirty__mark_dirty_impl__hdd964a1d064beeaf($0, $6, $1);
    return;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $2, $3);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $1, $3);
  abort();
 }
 
 function stretch_layout__Node__set_measure__h59d145755cdb3f8d($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  $3 = __wbindgen_object_clone_ref(HEAP32[$1 >> 2]) | 0;
  label$1 : {
   label$2 : {
    $1 = HEAP32[$0 >> 2];
    if (!HEAP32[$1 + 8 >> 2]) {
     HEAP32[$1 + 8 >> 2] = -1;
     $4 = $0 + 12 | 0;
     $6 = HEAP32[$4 + 4 >> 2];
     $5 = $2 + 32 | 0;
     HEAP32[$5 >> 2] = HEAP32[$4 >> 2];
     HEAP32[$5 + 4 >> 2] = $6;
     $4 = HEAP32[$0 + 8 >> 2];
     HEAP32[$2 + 24 >> 2] = HEAP32[$0 + 4 >> 2];
     HEAP32[$2 + 28 >> 2] = $4;
     $0 = __rust_alloc(4, 4);
     if (!$0) {
      break label$2
     }
     HEAP32[$0 >> 2] = $3;
     stretch__node__Stretch__set_measure__h36d3edf123132e91($2, $1 + 16 | 0, $2 + 24 | 0, $0);
     if (HEAP32[$2 >> 2] != 2) {
      break label$1
     }
     $0 = $1 + 8 | 0;
     HEAP32[$0 >> 2] = HEAP32[$0 >> 2] + 1;
     global$0 = $2 + 48 | 0;
     return;
    }
    core__result__unwrap_failed__h2450ec3de4884319();
    abort();
   }
   $0 = HEAP32[266546];
   FUNCTION_TABLE[$0 ? $0 : 56](4, 4);
   abort();
  }
  HEAP32[$2 + 40 >> 2] = HEAP32[$2 + 16 >> 2];
  $0 = $2 + 8 | 0;
  $1 = HEAP32[$0 + 4 >> 2];
  $3 = $2 + 32 | 0;
  HEAP32[$3 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $0 = HEAP32[$2 + 4 >> 2];
  HEAP32[$2 + 24 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$2 + 28 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($2 + 24 | 0);
  abort();
 }
 
 function stretch__node__Stretch__set_measure__h36d3edf123132e91($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $4 = global$0 - 48 | 0;
  global$0 = $4;
  HEAP32[$4 + 4 >> 2] = 1049092;
  HEAP32[$4 >> 2] = $3;
  $5 = $2 + 8 | 0;
  $7 = HEAP32[$5 + 4 >> 2];
  $6 = $4 + 40 | 0;
  HEAP32[$6 >> 2] = HEAP32[$5 >> 2];
  HEAP32[$6 + 4 >> 2] = $7;
  $5 = HEAP32[$2 + 4 >> 2];
  HEAP32[$4 + 32 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$4 + 36 >> 2] = $5;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($4 + 8 | 0, $1, $4 + 32 | 0);
  label$1 : {
   label$2 : {
    if (HEAP32[$4 + 8 >> 2] == 1) {
     $1 = HEAP32[$4 + 16 >> 2];
     HEAP32[$0 >> 2] = HEAP32[$4 + 12 >> 2];
     HEAP32[$0 + 4 >> 2] = $1;
     HEAP32[$0 + 16 >> 2] = HEAP32[$4 + 28 >> 2];
     $1 = $4 + 20 | 0;
     $2 = HEAP32[$1 + 4 >> 2];
     $0 = $0 + 8 | 0;
     HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
     HEAP32[$0 + 4 >> 2] = $2;
     core__ptr__real_drop_in_place__ha30d3a7460946ab5($4);
     break label$2;
    }
    $5 = HEAP32[$1 + 112 >> 2];
    $2 = HEAP32[$4 + 12 >> 2];
    if ($5 >>> 0 <= $2 >>> 0) {
     break label$1
    }
    $5 = HEAP32[$1 + 104 >> 2] + Math_imul($2, 288) | 0;
    core__ptr__real_drop_in_place__ha30d3a7460946ab5($5 + 212 | 0);
    HEAP32[$5 + 216 >> 2] = 1049092;
    HEAP32[$5 + 212 >> 2] = $3;
    stretch__forest__Forest__mark_dirty__mark_dirty_impl__hdd964a1d064beeaf($1 + 104 | 0, $1 + 128 | 0, $2);
    HEAP32[$0 >> 2] = 2;
   }
   global$0 = $4 + 48 | 0;
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051320, $2, $5);
  abort();
 }
 
 function std__sys_common__thread_info__ThreadInfo__with___7b_7bclosure_7d_7d__hb699849b36c0e1da() {
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      $0 = HEAP32[266557];
      if (($0 | 0) < 0) {
       break label$4
      }
      if (($0 | 0) == 2147483647) {
       break label$4
      }
      HEAP32[266557] = $0;
      $1 = HEAP32[266558];
      if (!$1) {
       HEAP32[$2 >> 2] = 0;
       $1 = std__thread__Thread__new__h5b15730e54159bdd($2);
       if (HEAP32[266557]) {
        break label$3
       }
       HEAP32[266557] = -1;
       $0 = HEAP32[266558];
       label$6 : {
        if (!$0) {
         break label$6
        }
        $3 = $0;
        $0 = HEAP32[$0 >> 2];
        HEAP32[$3 >> 2] = $0 + -1;
        if (($0 | 0) != 1) {
         break label$6
        }
        alloc__sync__Arc_T___drop_slow__h51a4fa13661dd7d4(1066232);
       }
       HEAP32[266558] = $1;
       $0 = HEAP32[266557] + 1 | 0;
       HEAP32[266557] = $0;
      }
      if ($0) {
       break label$3
      }
      HEAP32[266557] = -1;
      if (!$1) {
       break label$2
      }
      $0 = HEAP32[$1 >> 2];
      HEAP32[$1 >> 2] = $0 + 1;
      if (($0 | 0) <= -1) {
       break label$1
      }
      HEAP32[266557] = HEAP32[266557] + 1;
      global$0 = $2 + 16 | 0;
      return $1;
     }
     core__result__unwrap_failed__hf5e9b5ec58b89940();
     abort();
    }
    core__result__unwrap_failed__hdc9bb8ca94a20a33();
    abort();
   }
   core__panicking__panic__h2d0bc53a963fb996(1052304);
   abort();
  }
  abort();
 }
 
 function core__num__dec2flt__algorithm__make_ratio__h003a9dbef8c19d2f($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0;
  $4 = $3;
  $5 = $3 << 16;
  $3 = $5 >> 31;
  $3 = ($4 + $3 ^ $3) << 16 >> 16;
  $4 = $2 << 16;
  $6 = $4 >> 31;
  $2 = ($6 ^ $2 + $6) << 16 >> 16;
  label$1 : {
   label$2 : {
    if ($4 >> 16 > -1) {
     if ($5 >> 16 <= -1) {
      break label$2
     }
     $4 = core__num__bignum__Big32x40__mul_pow5__h5aa98cad29f0d9cf($0, $2);
     $0 = $2 >>> 0 > $3 >>> 0 ? $3 : $2;
     core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e($4, $2 - $0 | 0);
     core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e($1, $3 - $0 | 0);
     return;
    }
    if ($5 >> 16 <= -1) {
     break label$1
    }
    core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e(core__num__bignum__Big32x40__mul_pow5__h5aa98cad29f0d9cf($1, $2), $2 + $3 | 0);
    return;
   }
   core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e(core__num__bignum__Big32x40__mul_pow5__h5aa98cad29f0d9cf($0, $2), $2 + $3 | 0);
   return;
  }
  $4 = $0;
  $0 = $2 >>> 0 > $3 >>> 0 ? $3 : $2;
  core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e($4, $3 - $0 | 0);
  core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e(core__num__bignum__Big32x40__mul_pow5__h5aa98cad29f0d9cf($1, $2), $2 - $0 | 0);
 }
 
 function stretch_layout__Node__add_child__h24958c907242c3db($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $2 = global$0 + -64 | 0;
  global$0 = $2;
  label$1 : {
   $6 = HEAP32[$0 >> 2];
   if (!HEAP32[$6 + 8 >> 2]) {
    $7 = $6 + 8 | 0;
    HEAP32[$7 >> 2] = -1;
    $4 = $0 + 12 | 0;
    $5 = HEAP32[$4 + 4 >> 2];
    $3 = $2 + 32 | 0;
    HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
    HEAP32[$3 + 4 >> 2] = $5;
    $3 = HEAP32[$0 + 8 >> 2];
    HEAP32[$2 + 24 >> 2] = HEAP32[$0 + 4 >> 2];
    HEAP32[$2 + 28 >> 2] = $3;
    $5 = $1 + 12 | 0;
    $4 = HEAP32[$5 + 4 >> 2];
    $3 = $2 + 48 | 0;
    HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
    HEAP32[$3 + 4 >> 2] = $4;
    $4 = HEAP32[$1 + 8 >> 2];
    HEAP32[$2 + 40 >> 2] = HEAP32[$1 + 4 >> 2];
    HEAP32[$2 + 44 >> 2] = $4;
    stretch__node__Stretch__add_child__h29c56c8474f233e8($2, $6 + 16 | 0, $2 + 24 | 0, $2 + 40 | 0);
    if (HEAP32[$2 >> 2] != 2) {
     break label$1
    }
    HEAP32[$7 >> 2] = HEAP32[$7 >> 2] + 1;
    HEAP32[$0 + 24 >> 2] = HEAP32[$0 + 24 >> 2] + 1;
    global$0 = $2 - -64 | 0;
    return;
   }
   core__result__unwrap_failed__h2450ec3de4884319();
   abort();
  }
  HEAP32[$2 + 56 >> 2] = HEAP32[$2 + 16 >> 2];
  $0 = $2 + 8 | 0;
  $1 = HEAP32[$0 + 4 >> 2];
  HEAP32[$3 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $0 = HEAP32[$2 + 4 >> 2];
  HEAP32[$2 + 40 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$2 + 44 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($2 + 40 | 0);
  abort();
 }
 
 function stretch_layout__Node__remove_child__h5ac3490bdd08e8f4($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $2 = global$0 + -64 | 0;
  global$0 = $2;
  label$1 : {
   $6 = HEAP32[$0 >> 2];
   if (!HEAP32[$6 + 8 >> 2]) {
    $7 = $6 + 8 | 0;
    HEAP32[$7 >> 2] = -1;
    $4 = $0 + 12 | 0;
    $5 = HEAP32[$4 + 4 >> 2];
    $3 = $2 + 32 | 0;
    HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
    HEAP32[$3 + 4 >> 2] = $5;
    $3 = HEAP32[$0 + 8 >> 2];
    HEAP32[$2 + 24 >> 2] = HEAP32[$0 + 4 >> 2];
    HEAP32[$2 + 28 >> 2] = $3;
    $5 = $1 + 12 | 0;
    $4 = HEAP32[$5 + 4 >> 2];
    $3 = $2 + 48 | 0;
    HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
    HEAP32[$3 + 4 >> 2] = $4;
    $4 = HEAP32[$1 + 8 >> 2];
    HEAP32[$2 + 40 >> 2] = HEAP32[$1 + 4 >> 2];
    HEAP32[$2 + 44 >> 2] = $4;
    stretch__node__Stretch__remove_child__h14a29c25ce936817($2, $6 + 16 | 0, $2 + 24 | 0, $2 + 40 | 0);
    if (HEAP32[$2 >> 2] == 1) {
     break label$1
    }
    HEAP32[$7 >> 2] = HEAP32[$7 >> 2] + 1;
    HEAP32[$0 + 24 >> 2] = HEAP32[$0 + 24 >> 2] + -1;
    global$0 = $2 - -64 | 0;
    return;
   }
   core__result__unwrap_failed__h2450ec3de4884319();
   abort();
  }
  HEAP32[$2 + 56 >> 2] = HEAP32[$2 + 20 >> 2];
  $0 = $2 + 12 | 0;
  $1 = HEAP32[$0 + 4 >> 2];
  HEAP32[$3 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $0 = HEAP32[$2 + 8 >> 2];
  HEAP32[$2 + 40 >> 2] = HEAP32[$2 + 4 >> 2];
  HEAP32[$2 + 44 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($2 + 40 | 0);
  abort();
 }
 
 function core__num__dec2flt__algorithm__underflow__hf0cfbbd4e5bacbdb($0, $1, $2) {
  var $3 = 0, $4 = Math_fround(0), $5 = 0, $6 = 0;
  $3 = global$0 - 352 | 0;
  global$0 = $3;
  core__num__bignum__Big32x40__from_u64__hb47af5bbea157ebc($3 + 184 | 0, 8388608, 0);
  label$1 : {
   label$2 : {
    label$3 : {
     if (($core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($0, $3 + 184 | 0) & 255) != 255) {
      $1 = core__num__bignum__Big32x40__bit_length__h13ff63659f8edff3($0);
      $5 = $1 + -24 | 0;
      $6 = core__num__dec2flt__num__get_bits__h41e84022231dc9df($0, $5, $1);
      HEAP16[$3 + 8 >> 1] = $1 + -173;
      HEAP32[$3 >> 2] = $6;
      HEAP32[$3 + 4 >> 2] = i64toi32_i32$HIGH_BITS;
      $4 = core__num__dec2flt__rawfp__encode_normal__h79788dc1a919ce5b(HEAP32[$3 >> 2], HEAP32[$3 + 4 >> 2], HEAPU16[$3 + 8 >> 1]);
      $0 = core__num__dec2flt__num__compare_with_half_ulp__he9852dcf9bb66aab($0, $5);
      if (!($0 & 255)) {
       break label$3
      }
      if (($0 & 255) != 1) {
       break label$1
      }
      break label$2;
     }
     $0 = core__num__dec2flt__num__to_u64__h5d5282c7dcdcfd3f($0);
     $4 = core__num__dec2flt__rawfp__encode_subnormal__h6cdda8501f4182df($0, i64toi32_i32$HIGH_BITS);
     memcpy($3 + 16 | 0, $1, 164);
     memcpy($3 + 184 | 0, $2, 164);
     $4 = core__num__dec2flt__algorithm__round_by_remainder__h3d86a91325e59e59($3 + 16 | 0, $3 + 184 | 0, $0, $4);
     break label$1;
    }
    $0 = core__num__bignum__Big32x40__is_zero__hfabaf882dfbca75e($2);
    if ($6 & 1) {
     break label$2
    }
    if ($0) {
     break label$1
    }
   }
   $4 = core__num__dec2flt__rawfp__next_float__h96c2fc47f7b351c4($4);
  }
  global$0 = $3 + 352 | 0;
  return $4;
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve_internal__h28a36e5702bfaf69($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   label$2 : {
    $4 = HEAP32[$0 + 4 >> 2];
    $3 = 2;
    label$3 : {
     if ($4 - $1 >>> 0 >= $2 >>> 0) {
      break label$3
     }
     $2 = $1 + $2 | 0;
     $3 = 0;
     if ($2 >>> 0 < $1 >>> 0) {
      break label$3
     }
     $1 = $4 << 1;
     $5 = $2 >>> 0 < $1 >>> 0 ? $1 : $2;
     $3 = 0;
     if ($5 >>> 29) {
      break label$3
     }
     $2 = $5 << 3;
     $3 = 0;
     if (($2 | 0) < 0) {
      break label$3
     }
     label$6 : {
      if ($4) {
       $1 = __rust_realloc(HEAP32[$0 >> 2], $4 << 3, 4, $2);
       if (!$1) {
        break label$1
       }
       break label$6;
      }
      $1 = __rust_alloc($2, 4);
      if ($1) {
       break label$6
      }
      break label$1;
     }
     if (!$1) {
      break label$2
     }
     HEAP32[$0 >> 2] = $1;
     HEAP32[$0 + 4 >> 2] = $5;
     $3 = 2;
    }
    return $3;
   }
   return 1;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($2, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve_internal__h5b451f0e173ccf3c($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   label$2 : {
    $4 = HEAP32[$0 + 4 >> 2];
    $3 = 2;
    label$3 : {
     if ($4 - $1 >>> 0 >= $2 >>> 0) {
      break label$3
     }
     $2 = $1 + $2 | 0;
     $3 = 0;
     if ($2 >>> 0 < $1 >>> 0) {
      break label$3
     }
     $1 = $4 << 1;
     $5 = $2 >>> 0 < $1 >>> 0 ? $1 : $2;
     $3 = 0;
     if ($5 >>> 28) {
      break label$3
     }
     $2 = $5 << 4;
     $3 = 0;
     if (($2 | 0) < 0) {
      break label$3
     }
     label$6 : {
      if ($4) {
       $1 = __rust_realloc(HEAP32[$0 >> 2], $4 << 4, 4, $2);
       if (!$1) {
        break label$1
       }
       break label$6;
      }
      $1 = __rust_alloc($2, 4);
      if ($1) {
       break label$6
      }
      break label$1;
     }
     if (!$1) {
      break label$2
     }
     HEAP32[$0 >> 2] = $1;
     HEAP32[$0 + 4 >> 2] = $5;
     $3 = 2;
    }
    return $3;
   }
   return 1;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($2, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve_internal__h8443634e8050c0d7($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   label$2 : {
    $4 = HEAP32[$0 + 4 >> 2];
    $2 = 2;
    label$3 : {
     if ($4 - $1 >>> 0 >= 1) {
      break label$3
     }
     $3 = $1 + 1 | 0;
     $2 = 0;
     if ($3 >>> 0 < $1 >>> 0) {
      break label$3
     }
     $1 = $4 << 1;
     $5 = $3 >>> 0 < $1 >>> 0 ? $1 : $3;
     $3 = __wasm_i64_mul($5, 0, 288);
     $2 = 0;
     if (i64toi32_i32$HIGH_BITS) {
      break label$3
     }
     $2 = 0;
     if (($3 | 0) < 0) {
      break label$3
     }
     label$6 : {
      if ($4) {
       $1 = __rust_realloc(HEAP32[$0 >> 2], Math_imul($4, 288), 4, $3);
       if (!$1) {
        break label$1
       }
       break label$6;
      }
      $1 = __rust_alloc($3, 4);
      if ($1) {
       break label$6
      }
      break label$1;
     }
     if (!$1) {
      break label$2
     }
     HEAP32[$0 >> 2] = $1;
     HEAP32[$0 + 4 >> 2] = $5;
     $2 = 2;
    }
    return $2;
   }
   return 1;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($3, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve_internal__h8add1c9e76e271f3($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   label$2 : {
    $4 = HEAP32[$0 + 4 >> 2];
    $2 = 2;
    label$3 : {
     if ($4 - $1 >>> 0 >= 1) {
      break label$3
     }
     $3 = $1 + 1 | 0;
     $2 = 0;
     if ($3 >>> 0 < $1 >>> 0) {
      break label$3
     }
     $1 = $4 << 1;
     $5 = $3 >>> 0 < $1 >>> 0 ? $1 : $3;
     $2 = 0;
     if ($5 >>> 30) {
      break label$3
     }
     $3 = $5 << 2;
     $2 = 0;
     if (($3 | 0) < 0) {
      break label$3
     }
     label$6 : {
      if ($4) {
       $1 = __rust_realloc(HEAP32[$0 >> 2], $4 << 2, 4, $3);
       if (!$1) {
        break label$1
       }
       break label$6;
      }
      $1 = __rust_alloc($3, 4);
      if ($1) {
       break label$6
      }
      break label$1;
     }
     if (!$1) {
      break label$2
     }
     HEAP32[$0 >> 2] = $1;
     HEAP32[$0 + 4 >> 2] = $5;
     $2 = 2;
    }
    return $2;
   }
   return 1;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($3, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve_internal__h8b9c496d8cbceb29($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   label$2 : {
    $4 = HEAP32[$0 + 4 >> 2];
    $2 = 2;
    label$3 : {
     if ($4 - $1 >>> 0 >= 1) {
      break label$3
     }
     $3 = $1 + 1 | 0;
     $2 = 0;
     if ($3 >>> 0 < $1 >>> 0) {
      break label$3
     }
     $1 = $4 << 1;
     $5 = $3 >>> 0 < $1 >>> 0 ? $1 : $3;
     $3 = __wasm_i64_mul($5, 0, 192);
     $2 = 0;
     if (i64toi32_i32$HIGH_BITS) {
      break label$3
     }
     $2 = 0;
     if (($3 | 0) < 0) {
      break label$3
     }
     label$6 : {
      if ($4) {
       $1 = __rust_realloc(HEAP32[$0 >> 2], Math_imul($4, 192), 4, $3);
       if (!$1) {
        break label$1
       }
       break label$6;
      }
      $1 = __rust_alloc($3, 4);
      if ($1) {
       break label$6
      }
      break label$1;
     }
     if (!$1) {
      break label$2
     }
     HEAP32[$0 >> 2] = $1;
     HEAP32[$0 + 4 >> 2] = $5;
     $2 = 2;
    }
    return $2;
   }
   return 1;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($3, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve_internal__hd0068c913e781a6c($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   label$2 : {
    $4 = HEAP32[$0 + 4 >> 2];
    $2 = 2;
    label$3 : {
     if ($4 - $1 >>> 0 >= 1) {
      break label$3
     }
     $3 = $1 + 1 | 0;
     $2 = 0;
     if ($3 >>> 0 < $1 >>> 0) {
      break label$3
     }
     $1 = $4 << 1;
     $5 = $3 >>> 0 < $1 >>> 0 ? $1 : $3;
     $3 = __wasm_i64_mul($5, 0, 12);
     $2 = 0;
     if (i64toi32_i32$HIGH_BITS) {
      break label$3
     }
     $2 = 0;
     if (($3 | 0) < 0) {
      break label$3
     }
     label$6 : {
      if ($4) {
       $1 = __rust_realloc(HEAP32[$0 >> 2], Math_imul($4, 12), 4, $3);
       if (!$1) {
        break label$1
       }
       break label$6;
      }
      $1 = __rust_alloc($3, 4);
      if ($1) {
       break label$6
      }
      break label$1;
     }
     if (!$1) {
      break label$2
     }
     HEAP32[$0 >> 2] = $1;
     HEAP32[$0 + 4 >> 2] = $5;
     $2 = 2;
    }
    return $2;
   }
   return 1;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($3, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve_internal__hdf0cc57226d33c45($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   label$2 : {
    $4 = HEAP32[$0 + 4 >> 2];
    $2 = 2;
    label$3 : {
     if ($4 - $1 >>> 0 >= 1) {
      break label$3
     }
     $3 = $1 + 1 | 0;
     $2 = 0;
     if ($3 >>> 0 < $1 >>> 0) {
      break label$3
     }
     $1 = $4 << 1;
     $5 = $3 >>> 0 < $1 >>> 0 ? $1 : $3;
     $3 = __wasm_i64_mul($5, 0, 20);
     $2 = 0;
     if (i64toi32_i32$HIGH_BITS) {
      break label$3
     }
     $2 = 0;
     if (($3 | 0) < 0) {
      break label$3
     }
     label$6 : {
      if ($4) {
       $1 = __rust_realloc(HEAP32[$0 >> 2], Math_imul($4, 20), 4, $3);
       if (!$1) {
        break label$1
       }
       break label$6;
      }
      $1 = __rust_alloc($3, 4);
      if ($1) {
       break label$6
      }
      break label$1;
     }
     if (!$1) {
      break label$2
     }
     HEAP32[$0 >> 2] = $1;
     HEAP32[$0 + 4 >> 2] = $5;
     $2 = 2;
    }
    return $2;
   }
   return 1;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($3, 4);
  abort();
 }
 
 function core__num__dec2flt__num__from_str_unchecked__hceac95e679e8304a($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $7 = HEAP32[$0 + 12 >> 2];
  $2 = HEAPU8[$0 + 16 | 0];
  $5 = HEAP32[$0 + 8 >> 2];
  $6 = HEAP32[$0 + 4 >> 2];
  $3 = HEAP32[$0 >> 2];
  while (1) {
   $1 = $3;
   $0 = $5;
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        if (($2 | 0) != 1) {
         if (($2 | 0) != 2) {
          break label$6
         }
         if (($0 | 0) == ($7 | 0)) {
          break label$3
         }
         $5 = $0 + 1 | 0;
         $2 = 2;
         break label$2;
        }
        if (($1 | 0) == ($6 | 0)) {
         break label$3
        }
        $2 = 1;
        $3 = $1 + 1 | 0;
        break label$5;
       }
       if (($1 | 0) == ($6 | 0)) {
        break label$4
       }
       $2 = 0;
       $3 = $1 + 1 | 0;
      }
      $0 = $1;
      break label$2;
     }
     if (($0 | 0) == ($7 | 0)) {
      break label$3
     }
     $5 = $0 + 1 | 0;
     $2 = 2;
     $3 = $6;
     break label$2;
    }
    i64toi32_i32$HIGH_BITS = $4;
    return $8;
   }
   $1 = __wasm_i64_mul($8, $4, 10);
   $4 = i64toi32_i32$HIGH_BITS;
   $0 = HEAPU8[$0 | 0] + -48 & 255;
   $1 = $0 + $1 | 0;
   if ($1 >>> 0 < $0 >>> 0) {
    $4 = $4 + 1 | 0
   }
   $8 = $1;
   continue;
  };
 }
 
 function core__slice___impl_20_5bT_5d___copy_from_slice__h2863b55bca734ebe($0, $1, $2, $3) {
  var $4 = 0;
  $4 = global$0 - 96 | 0;
  global$0 = $4;
  HEAP32[$4 + 8 >> 2] = $1;
  HEAP32[$4 + 12 >> 2] = $3;
  if (($1 | 0) == ($3 | 0)) {
   memcpy($0, $2, $1 << 3);
   global$0 = $4 + 96 | 0;
   return;
  }
  HEAP32[$4 + 64 >> 2] = $4 + 8;
  HEAP32[$4 + 68 >> 2] = $4 + 12;
  HEAP32[$4 + 92 >> 2] = 0;
  HEAP32[$4 + 60 >> 2] = 22;
  HEAP32[$4 + 52 >> 2] = 23;
  HEAP32[$4 + 36 >> 2] = 3;
  HEAP32[$4 + 88 >> 2] = 1050544;
  HEAP32[$4 + 76 >> 2] = 1;
  HEAP32[$4 + 80 >> 2] = 0;
  HEAP32[$4 + 72 >> 2] = 1050536;
  HEAP32[$4 + 44 >> 2] = 23;
  HEAP32[$4 + 20 >> 2] = 3;
  HEAP32[$4 + 24 >> 2] = 0;
  HEAP32[$4 + 16 >> 2] = 1050460;
  HEAP32[$4 + 56 >> 2] = $4 + 72;
  HEAP32[$4 + 48 >> 2] = $4 + 68;
  HEAP32[$4 + 40 >> 2] = $4 - -64;
  HEAP32[$4 + 32 >> 2] = $4 + 40;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($4 + 16 | 0, 1050568);
  abort();
 }
 
 function stretch__node__Stretch__set_style__h4b5cb223f1b8dc25($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $4 = global$0 - 240 | 0;
  global$0 = $4;
  $6 = $2 + 8 | 0;
  $7 = HEAP32[$6 + 4 >> 2];
  $5 = $4 + 16 | 0;
  HEAP32[$5 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$5 + 4 >> 2] = $7;
  $5 = HEAP32[$2 + 4 >> 2];
  HEAP32[$4 + 8 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$4 + 12 >> 2] = $5;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($4 + 24 | 0, $1, $4 + 8 | 0);
  label$1 : {
   label$2 : {
    if (HEAP32[$4 + 24 >> 2] == 1) {
     $1 = HEAP32[$4 + 32 >> 2];
     HEAP32[$0 >> 2] = HEAP32[$4 + 28 >> 2];
     HEAP32[$0 + 4 >> 2] = $1;
     HEAP32[$0 + 16 >> 2] = HEAP32[$4 + 44 >> 2];
     $1 = $4 + 36 | 0;
     $2 = HEAP32[$1 + 4 >> 2];
     $0 = $0 + 8 | 0;
     HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
     HEAP32[$0 + 4 >> 2] = $2;
     break label$2;
    }
    $2 = HEAP32[$4 + 28 >> 2];
    memcpy($4 + 24 | 0, $3, 212);
    $3 = HEAP32[$1 + 112 >> 2];
    if ($3 >>> 0 <= $2 >>> 0) {
     break label$1
    }
    $3 = $1 + 104 | 0;
    memcpy(HEAP32[$3 >> 2] + Math_imul($2, 288) | 0, $4 + 24 | 0, 212);
    stretch__forest__Forest__mark_dirty__mark_dirty_impl__hdd964a1d064beeaf($3, $1 + 128 | 0, $2);
    HEAP32[$0 >> 2] = 2;
   }
   global$0 = $4 + 240 | 0;
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051320, $2, $3);
  abort();
 }
 
 function stretch_layout__Node__replace_child_at_index__h2a6d31954cfde073($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $3 = global$0 + -64 | 0;
  global$0 = $3;
  label$1 : {
   $6 = HEAP32[$0 >> 2];
   if (!HEAP32[$6 + 8 >> 2]) {
    $7 = $6 + 8 | 0;
    HEAP32[$7 >> 2] = -1;
    $5 = $0 + 12 | 0;
    $8 = HEAP32[$5 + 4 >> 2];
    $4 = $3 + 32 | 0;
    HEAP32[$4 >> 2] = HEAP32[$5 >> 2];
    HEAP32[$4 + 4 >> 2] = $8;
    $4 = HEAP32[$0 + 8 >> 2];
    HEAP32[$3 + 24 >> 2] = HEAP32[$0 + 4 >> 2];
    HEAP32[$3 + 28 >> 2] = $4;
    $5 = $2 + 12 | 0;
    $8 = HEAP32[$5 + 4 >> 2];
    $0 = $3 + 48 | 0;
    HEAP32[$0 >> 2] = HEAP32[$5 >> 2];
    HEAP32[$0 + 4 >> 2] = $8;
    $4 = HEAP32[$2 + 8 >> 2];
    HEAP32[$3 + 40 >> 2] = HEAP32[$2 + 4 >> 2];
    HEAP32[$3 + 44 >> 2] = $4;
    stretch__node__Stretch__replace_child_at_index__h2605bb22b900daa8($3, $6 + 16 | 0, $3 + 24 | 0, $1, $3 + 40 | 0);
    if (HEAP32[$3 >> 2] == 1) {
     break label$1
    }
    HEAP32[$7 >> 2] = HEAP32[$7 >> 2] + 1;
    global$0 = $3 - -64 | 0;
    return;
   }
   core__result__unwrap_failed__h2450ec3de4884319();
   abort();
  }
  HEAP32[$3 + 56 >> 2] = HEAP32[$3 + 20 >> 2];
  $1 = $3 + 12 | 0;
  $2 = HEAP32[$1 + 4 >> 2];
  HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$0 + 4 >> 2] = $2;
  $0 = HEAP32[$3 + 8 >> 2];
  HEAP32[$3 + 40 >> 2] = HEAP32[$3 + 4 >> 2];
  HEAP32[$3 + 44 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($3 + 40 | 0);
  abort();
 }
 
 function $std__panicking__continue_panic_fmt__PanicPayload_20as_20core__panic__BoxMeUp___get__h10b76064b0aa5d4d($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  $6 = $1 + 4 | 0;
  if (!HEAP32[$1 + 4 >> 2]) {
   $3 = HEAP32[$1 >> 2];
   HEAP32[$2 + 16 >> 2] = 0;
   HEAP32[$2 + 8 >> 2] = 1;
   HEAP32[$2 + 12 >> 2] = 0;
   HEAP32[$2 + 20 >> 2] = $2 + 8;
   $4 = $3 + 16 | 0;
   $5 = HEAP32[$4 + 4 >> 2];
   $7 = $2 + 40 | 0;
   HEAP32[$7 >> 2] = HEAP32[$4 >> 2];
   HEAP32[$7 + 4 >> 2] = $5;
   $5 = $3 + 8 | 0;
   $7 = HEAP32[$5 + 4 >> 2];
   $4 = $2 + 32 | 0;
   HEAP32[$4 >> 2] = HEAP32[$5 >> 2];
   HEAP32[$4 + 4 >> 2] = $7;
   $5 = HEAP32[$3 + 4 >> 2];
   HEAP32[$2 + 24 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$2 + 28 >> 2] = $5;
   core__fmt__write__h85435378f7fd6609($2 + 20 | 0, 1052032, $2 + 24 | 0);
   HEAP32[$4 >> 2] = HEAP32[$2 + 16 >> 2];
   $3 = HEAP32[$2 + 12 >> 2];
   HEAP32[$2 + 24 >> 2] = HEAP32[$2 + 8 >> 2];
   HEAP32[$2 + 28 >> 2] = $3;
   $3 = HEAP32[$6 >> 2];
   label$2 : {
    if (!$3) {
     break label$2
    }
    if (!HEAP32[$1 + 8 >> 2]) {
     break label$2
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($3);
   }
   $1 = HEAP32[$2 + 28 >> 2];
   HEAP32[$6 >> 2] = HEAP32[$2 + 24 >> 2];
   HEAP32[$6 + 4 >> 2] = $1;
   HEAP32[$6 + 8 >> 2] = HEAP32[$4 >> 2];
  }
  HEAP32[$0 + 4 >> 2] = 1053144;
  HEAP32[$0 >> 2] = $6;
  global$0 = $2 + 48 | 0;
 }
 
 function alloc__vec__Vec_T___extend_desugared__he10598498ae1398c($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $2 = global$0 - 400 | 0;
  global$0 = $2;
  $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___try_fold__hf93756c6b86e34c3($2 + 8 | 0, $1, $1, $1);
  $3 = HEAP32[$2 + 8 >> 2];
  label$1 : {
   if ($3) {
    $6 = $1 + 12 | 0;
    $4 = HEAP32[$2 + 12 >> 2];
    $7 = $0 + 4 | 0;
    $5 = $0 + 8 | 0;
    while (1) {
     core__ops__function__impls___impl_20core__ops__function__FnOnce_A__20for_20_mut_20F___call_once__h59f68519e42c83e0($2 + 16 | 0, $6, $3, $4);
     if (HEAP32[$2 + 20 >> 2] == 2) {
      break label$1
     }
     memcpy($2 + 208 | 0, $2 + 16 | 0, 192);
     $3 = HEAP32[$5 >> 2];
     if (($3 | 0) == HEAP32[$7 >> 2]) {
      alloc__raw_vec__RawVec_T_2cA___reserve__h9214e91843dca51d($0, $3)
     }
     memcpy(HEAP32[$0 >> 2] + Math_imul($3, 192) | 0, $2 + 208 | 0, 192);
     HEAP32[$5 >> 2] = $3 + 1;
     $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___try_fold__hf93756c6b86e34c3($2, $1, $1, $1);
     $4 = HEAP32[$2 + 4 >> 2];
     $3 = HEAP32[$2 >> 2];
     if ($3) {
      continue
     }
     break;
    };
   }
   HEAP32[$2 + 20 >> 2] = 2;
  }
  global$0 = $2 + 400 | 0;
 }
 
 function $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____from_iter__h7b545461b265ed21($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = global$0 - 224 | 0;
  global$0 = $2;
  $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___try_fold__hf93756c6b86e34c3($2 + 8 | 0, $1, $1, $1);
  $3 = HEAP32[$2 + 8 >> 2];
  label$1 : {
   label$2 : {
    if ($3) {
     core__ops__function__impls___impl_20core__ops__function__FnOnce_A__20for_20_mut_20F___call_once__h59f68519e42c83e0($2 + 32 | 0, $1 + 12 | 0, $3, HEAP32[$2 + 12 >> 2]);
     if (HEAP32[$2 + 36 >> 2] == 2) {
      break label$2
     }
     alloc__raw_vec__RawVec_T_2cA___allocate_in__h515997524f025491($2);
     $3 = HEAP32[$2 + 4 >> 2];
     $4 = memcpy(HEAP32[$2 >> 2], $2 + 32 | 0, 192);
     HEAP32[$2 + 24 >> 2] = 1;
     HEAP32[$2 + 20 >> 2] = $3;
     HEAP32[$2 + 16 >> 2] = $4;
     $4 = $1 + 8 | 0;
     $5 = HEAP32[$4 + 4 >> 2];
     $3 = $2 + 40 | 0;
     HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
     HEAP32[$3 + 4 >> 2] = $5;
     $3 = HEAP32[$1 + 4 >> 2];
     HEAP32[$2 + 32 >> 2] = HEAP32[$1 >> 2];
     HEAP32[$2 + 36 >> 2] = $3;
     alloc__vec__Vec_T___extend_desugared__he10598498ae1398c($2 + 16 | 0, $2 + 32 | 0);
     HEAP32[$0 + 8 >> 2] = HEAP32[$2 + 24 >> 2];
     $1 = HEAP32[$2 + 20 >> 2];
     HEAP32[$0 >> 2] = HEAP32[$2 + 16 >> 2];
     HEAP32[$0 + 4 >> 2] = $1;
     break label$1;
    }
    HEAP32[$2 + 36 >> 2] = 2;
   }
   HEAP32[$0 + 8 >> 2] = 0;
   HEAP32[$0 >> 2] = 4;
   HEAP32[$0 + 4 >> 2] = 0;
  }
  global$0 = $2 + 224 | 0;
 }
 
 function stretch_layout__get_f32__ha7adebcd40baf7fe($0, $1, $2, $3) {
  var $4 = 0, $5 = 0.0, $6 = 0, $7 = Math_fround(0), wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $4 = global$0 - 32 | 0;
  global$0 = $4;
  label$1 : {
   if (!stretch_layout__has_key__hf2b3c8fbd22a58c3($1, $2, $3)) {
    break label$1
   }
   (wasm2js_i32$0 = $4, wasm2js_i32$1 = __wbindgen_string_new($2 | 0, $3 | 0) | 0), HEAP32[wasm2js_i32$0 + 24 >> 2] = wasm2js_i32$1;
   js_sys__Reflect__get__h47f550132b94fe08($4 + 16 | 0, $1, $4 + 24 | 0);
   $1 = HEAP32[$4 + 20 >> 2];
   if (HEAP32[$4 + 16 >> 2]) {
    if ($1 >>> 0 >= 36) {
     __wbindgen_object_drop_ref($1 | 0)
    }
    $1 = HEAP32[$4 + 24 >> 2];
    if ($1 >>> 0 < 36) {
     break label$1
    }
    __wbindgen_object_drop_ref($1 | 0);
    break label$1;
   }
   HEAP32[$4 + 28 >> 2] = $1;
   wasm_bindgen__JsValue__as_f64__h1f8b3e8c0b7cfbf2($4, $4 + 28 | 0);
   $1 = HEAP32[$4 >> 2];
   $5 = HEAPF64[$4 + 8 >> 3];
   $2 = HEAP32[$4 + 28 >> 2];
   if ($2 >>> 0 >= 36) {
    __wbindgen_object_drop_ref($2 | 0)
   }
   $2 = HEAP32[$4 + 24 >> 2];
   if ($2 >>> 0 >= 36) {
    __wbindgen_object_drop_ref($2 | 0)
   }
   $6 = ($1 | 0) != 0;
   $7 = Math_fround($5);
  }
  HEAPF32[$0 + 4 >> 2] = $7;
  HEAP32[$0 >> 2] = $6;
  global$0 = $4 + 32 | 0;
 }
 
 function stretch_layout__Node__is_dirty__h3755578e1850a7bb($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $1 = global$0 - 48 | 0;
  global$0 = $1;
  label$1 : {
   label$2 : {
    $3 = HEAP32[$0 >> 2];
    $2 = HEAP32[$3 + 8 >> 2];
    if (($2 | 0) < 0) {
     break label$2
    }
    if (($2 | 0) == 2147483647) {
     break label$2
    }
    $5 = $3 + 8 | 0;
    HEAP32[$5 >> 2] = $2 + 1;
    $4 = $0 + 12 | 0;
    $6 = HEAP32[$4 + 4 >> 2];
    $2 = $1 + 32 | 0;
    HEAP32[$2 >> 2] = HEAP32[$4 >> 2];
    HEAP32[$2 + 4 >> 2] = $6;
    $4 = HEAP32[$0 + 8 >> 2];
    HEAP32[$1 + 24 >> 2] = HEAP32[$0 + 4 >> 2];
    HEAP32[$1 + 28 >> 2] = $4;
    stretch__node__Stretch__dirty__hebadecda68782f09($1, $3 + 16 | 0, $1 + 24 | 0);
    if (HEAPU8[$1 | 0] == 1) {
     break label$1
    }
    $0 = HEAPU8[$1 + 1 | 0];
    HEAP32[$5 >> 2] = HEAP32[$5 >> 2] + -1;
    global$0 = $1 + 48 | 0;
    return $0;
   }
   core__result__unwrap_failed__h617b15fdce22e446();
   abort();
  }
  HEAP32[$1 + 40 >> 2] = HEAP32[$1 + 20 >> 2];
  $0 = $1 + 12 | 0;
  $3 = HEAP32[$0 + 4 >> 2];
  HEAP32[$2 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$2 + 4 >> 2] = $3;
  $0 = HEAP32[$1 + 8 >> 2];
  HEAP32[$1 + 24 >> 2] = HEAP32[$1 + 4 >> 2];
  HEAP32[$1 + 28 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($1 + 24 | 0);
  abort();
 }
 
 function stretch__node__Stretch__remove_child_at_index__hdbf293c63a3000e8($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $4 = global$0 - 48 | 0;
  global$0 = $4;
  $6 = $2 + 8 | 0;
  $7 = HEAP32[$6 + 4 >> 2];
  $5 = $4 + 40 | 0;
  HEAP32[$5 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$5 + 4 >> 2] = $7;
  $5 = HEAP32[$2 + 4 >> 2];
  HEAP32[$4 + 32 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$4 + 36 >> 2] = $5;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($4 + 8 | 0, $1, $4 + 32 | 0);
  $2 = 1;
  label$1 : {
   if (HEAP32[$4 + 8 >> 2] == 1) {
    $1 = HEAP32[$4 + 16 >> 2];
    HEAP32[$0 + 4 >> 2] = HEAP32[$4 + 12 >> 2];
    HEAP32[$0 + 8 >> 2] = $1;
    HEAP32[$0 + 20 >> 2] = HEAP32[$4 + 28 >> 2];
    $3 = $4 + 20 | 0;
    $5 = HEAP32[$3 + 4 >> 2];
    $1 = $0 + 12 | 0;
    HEAP32[$1 >> 2] = HEAP32[$3 >> 2];
    HEAP32[$1 + 4 >> 2] = $5;
    break label$1;
   }
   (wasm2js_i32$0 = $4, wasm2js_i32$1 = stretch__forest__Forest__remove_child_at_index__hebc91c7f2c6ef02a($1 + 104 | 0, HEAP32[$4 + 12 >> 2], $3)), HEAP32[wasm2js_i32$0 + 8 >> 2] = wasm2js_i32$1;
   $1 = $std__collections__hash__map__HashMap_K_2cV_2cS__20as_20core__ops__index__Index__Q____index__ha77d1aee23695641($1 + 40 | 0, $4 + 8 | 0);
   $2 = HEAP32[$1 + 4 >> 2];
   HEAP32[$0 + 4 >> 2] = HEAP32[$1 >> 2];
   HEAP32[$0 + 8 >> 2] = $2;
   $1 = $1 + 8 | 0;
   $3 = HEAP32[$1 + 4 >> 2];
   $2 = $0 + 12 | 0;
   HEAP32[$2 >> 2] = HEAP32[$1 >> 2];
   HEAP32[$2 + 4 >> 2] = $3;
   $2 = 0;
  }
  HEAP32[$0 >> 2] = $2;
  global$0 = $4 + 48 | 0;
 }
 
 function core__num__bignum__Big32x40__is_zero__hfabaf882dfbca75e($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $1 = HEAP32[$0 >> 2];
  if ($1 >>> 0 < 41) {
   $3 = $0 + 4 | 0;
   $4 = $1 << 2;
   $5 = $3 + $4 | 0;
   $1 = 0;
   label$2 : {
    while (1) {
     $2 = $0 + $1 | 0;
     if ($5 - $3 >>> 0 <= 12) {
      break label$2
     }
     label$4 : {
      if (HEAP32[$2 + 4 >> 2]) {
       break label$4
      }
      if (HEAP32[$2 + 8 >> 2]) {
       break label$4
      }
      if (HEAP32[$2 + 12 >> 2]) {
       break label$4
      }
      $1 = $1 + 16 | 0;
      $3 = $2 + 20 | 0;
      if (!HEAP32[$2 + 16 >> 2]) {
       continue
      }
     }
     break;
    };
    return 0;
   }
   $1 = $4 - $1 | 0;
   $0 = $2 + 4 | 0;
   label$5 : {
    while (1) {
     if (!$1) {
      break label$5
     }
     $1 = $1 + -4 | 0;
     $2 = HEAP32[$0 >> 2];
     $0 = $0 + 4 | 0;
     if (!$2) {
      continue
     }
     break;
    };
    return 0;
   }
   return 1;
  }
  core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($1, 40);
  abort();
 }
 
 function stretch__node__Stretch__dirty__hebadecda68782f09($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = global$0 - 48 | 0;
  global$0 = $3;
  $5 = $2 + 8 | 0;
  $6 = HEAP32[$5 + 4 >> 2];
  $4 = $3 + 40 | 0;
  HEAP32[$4 >> 2] = HEAP32[$5 >> 2];
  HEAP32[$4 + 4 >> 2] = $6;
  $4 = HEAP32[$2 + 4 >> 2];
  HEAP32[$3 + 32 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 36 >> 2] = $4;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($3 + 8 | 0, $1, $3 + 32 | 0);
  label$1 : {
   label$2 : {
    if (HEAP32[$3 + 8 >> 2] == 1) {
     HEAP8[$0 | 0] = 1;
     $2 = HEAP32[$3 + 16 >> 2];
     $1 = $0 + 4 | 0;
     HEAP32[$1 >> 2] = HEAP32[$3 + 12 >> 2];
     HEAP32[$1 + 4 >> 2] = $2;
     HEAP32[$0 + 20 >> 2] = HEAP32[$3 + 28 >> 2];
     $1 = $3 + 20 | 0;
     $2 = HEAP32[$1 + 4 >> 2];
     $0 = $0 + 12 | 0;
     HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
     HEAP32[$0 + 4 >> 2] = $2;
     break label$2;
    }
    $4 = HEAP32[$1 + 112 >> 2];
    $2 = HEAP32[$3 + 12 >> 2];
    if ($4 >>> 0 <= $2 >>> 0) {
     break label$1
    }
    HEAP8[$0 | 0] = 0;
    HEAP8[$0 + 1 | 0] = HEAPU8[(HEAP32[$1 + 104 >> 2] + Math_imul($2, 288) | 0) + 284 | 0];
   }
   global$0 = $3 + 48 | 0;
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051304, $2, $4);
  abort();
 }
 
 function core__num__diy_float__Fp__normalize__h3de17146ae536bff($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  $2 = HEAP32[$1 >> 2];
  $5 = $2;
  $4 = HEAP32[$1 + 4 >> 2];
  $7 = ($4 | 0) == 1 & $2 >>> 0 < 0 | $4 >>> 0 < 1;
  $2 = $7;
  $3 = $2 ? 0 : $5;
  $4 = $2 ? $5 : $4;
  $2 = $4;
  $4 = $2 << 16 | $3 >>> 16;
  $8 = ($2 | 0) == 65536 & $3 >>> 0 < 0 | $2 >>> 0 < 65536;
  $5 = $8;
  $3 = $5 ? $3 << 16 : $3;
  $4 = $5 ? $4 : $2;
  $2 = $4;
  $4 = $2 << 8 | $3 >>> 24;
  $9 = ($2 | 0) == 16777216 & $3 >>> 0 < 0 | $2 >>> 0 < 16777216;
  $5 = $9;
  $3 = $5 ? $3 << 8 : $3;
  $5 = $5 ? $4 : $2;
  $4 = $5;
  $2 = $3;
  $5 = $4 << 4 | $2 >>> 28;
  $6 = $2 << 4;
  $10 = ($4 | 0) == 268435456 & $2 >>> 0 < 0 | $4 >>> 0 < 268435456;
  $2 = $10;
  $3 = $2 ? $6 : $3;
  $4 = $2 ? $5 : $4;
  $2 = $4;
  $4 = $2 << 2 | $3 >>> 30;
  $11 = ($2 | 0) == 1073741824 & $3 >>> 0 < 0 | $2 >>> 0 < 1073741824;
  $5 = $11;
  $6 = $5 ? $3 << 2 : $3;
  $3 = $5 ? $4 : $2;
  $5 = $3;
  $4 = $6;
  $6 = ($3 ^ -1) >>> 31;
  $2 = $6;
  $6 = $0;
  $12 = $0;
  if (32 <= ($2 & 63) >>> 0) {
   $3 = $4 << $2;
   $2 = 0;
  } else {
   $3 = (1 << $2) - 1 & $4 >>> 32 - $2 | $3 << $2;
   $2 = $4 << $2;
  }
  HEAP32[$12 >> 2] = $2;
  HEAP32[$6 + 4 >> 2] = $3;
  $2 = $0;
  $0 = HEAPU16[$1 + 8 >> 1];
  $0 = $7 ? $0 + -32 | 0 : $0;
  $0 = $8 ? $0 + -16 | 0 : $0;
  $0 = $9 ? $0 + -8 | 0 : $0;
  $0 = $10 ? $0 + -4 | 0 : $0;
  HEAP16[$2 + 8 >> 1] = ($5 >> 31 ^ -1) + ($11 ? $0 + -2 | 0 : $0);
 }
 
 function core__num__dec2flt__rawfp__round_normal__ha876a267818aec99($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $4 = global$0 + -64 | 0;
  global$0 = $4;
  $6 = $3 + 40 | 0;
  $7 = $2;
  $2 = 0;
  $5 = $7 >>> 8;
  $8 = $0;
  label$1 : {
   if (!($7 & 128)) {
    HEAP16[$4 + 8 >> 1] = $6;
    HEAP32[$4 >> 2] = $5;
    HEAP32[$4 + 4 >> 2] = 0;
    $3 = HEAPU16[$4 + 8 >> 1];
    $2 = HEAP32[$4 + 4 >> 2];
    $1 = HEAP32[$4 >> 2];
    break label$1;
   }
   if (!(($1 | 0) != 0 | ($7 & 511) != 128)) {
    $1 = $4 + 16 | 0;
    HEAP16[$1 + 8 >> 1] = $6;
    HEAP32[$1 >> 2] = $5;
    HEAP32[$1 + 4 >> 2] = 0;
    $3 = HEAPU16[$4 + 24 >> 1];
    $2 = HEAP32[$4 + 20 >> 2];
    $1 = HEAP32[$4 + 16 >> 2];
    break label$1;
   }
   if (($5 | 0) == 16777215) {
    $1 = $4 + 32 | 0;
    HEAP16[$1 + 8 >> 1] = $3 + 41;
    HEAP32[$1 >> 2] = 8388608;
    HEAP32[$1 + 4 >> 2] = 0;
    $3 = HEAPU16[$4 + 40 >> 1];
    $2 = HEAP32[$4 + 36 >> 2];
    $1 = HEAP32[$4 + 32 >> 2];
    break label$1;
   }
   $1 = $4 + 48 | 0;
   HEAP16[$1 + 8 >> 1] = $6;
   $3 = $5 + 1 | 0;
   if ($3 >>> 0 < 1) {
    $2 = 1
   }
   HEAP32[$1 >> 2] = $3;
   HEAP32[$1 + 4 >> 2] = $2;
   $3 = HEAPU16[$4 + 56 >> 1];
   $2 = HEAP32[$4 + 52 >> 2];
   $1 = HEAP32[$4 + 48 >> 2];
  }
  HEAP32[$8 >> 2] = $1;
  HEAP32[$0 + 4 >> 2] = $2;
  HEAP16[$0 + 8 >> 1] = $3;
  global$0 = $4 - -64 | 0;
 }
 
 function stretch__node__Stretch__layout__h80f3380d515b813e($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = global$0 - 48 | 0;
  global$0 = $3;
  $5 = $2 + 8 | 0;
  $6 = HEAP32[$5 + 4 >> 2];
  $4 = $3 + 40 | 0;
  HEAP32[$4 >> 2] = HEAP32[$5 >> 2];
  HEAP32[$4 + 4 >> 2] = $6;
  $4 = HEAP32[$2 + 4 >> 2];
  HEAP32[$3 + 32 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 36 >> 2] = $4;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($3 + 8 | 0, $1, $3 + 32 | 0);
  label$1 : {
   label$2 : {
    if (HEAP32[$3 + 8 >> 2] == 1) {
     $1 = HEAP32[$3 + 16 >> 2];
     HEAP32[$0 + 4 >> 2] = HEAP32[$3 + 12 >> 2];
     HEAP32[$0 + 8 >> 2] = $1;
     HEAP32[$0 >> 2] = 1;
     HEAP32[$0 + 20 >> 2] = HEAP32[$3 + 28 >> 2];
     $1 = $3 + 20 | 0;
     $2 = HEAP32[$1 + 4 >> 2];
     $0 = $0 + 12 | 0;
     HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
     HEAP32[$0 + 4 >> 2] = $2;
     break label$2;
    }
    $4 = HEAP32[$1 + 112 >> 2];
    $2 = HEAP32[$3 + 12 >> 2];
    if ($4 >>> 0 <= $2 >>> 0) {
     break label$1
    }
    HEAP32[$0 >> 2] = 0;
    HEAP32[$0 + 4 >> 2] = (HEAP32[$1 + 104 >> 2] + Math_imul($2, 288) | 0) + 220;
   }
   global$0 = $3 + 48 | 0;
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051304, $2, $4);
  abort();
 }
 
 function stretch_layout__Node__remove_child_at_index__h2afdb0fdce240969($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  label$1 : {
   $5 = HEAP32[$0 >> 2];
   if (!HEAP32[$5 + 8 >> 2]) {
    $6 = $5 + 8 | 0;
    HEAP32[$6 >> 2] = -1;
    $4 = $0 + 12 | 0;
    $7 = HEAP32[$4 + 4 >> 2];
    $3 = $2 + 32 | 0;
    HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
    HEAP32[$3 + 4 >> 2] = $7;
    $4 = HEAP32[$0 + 8 >> 2];
    HEAP32[$2 + 24 >> 2] = HEAP32[$0 + 4 >> 2];
    HEAP32[$2 + 28 >> 2] = $4;
    stretch__node__Stretch__remove_child_at_index__hdbf293c63a3000e8($2, $5 + 16 | 0, $2 + 24 | 0, $1);
    if (HEAP32[$2 >> 2] == 1) {
     break label$1
    }
    HEAP32[$6 >> 2] = HEAP32[$6 >> 2] + 1;
    HEAP32[$0 + 24 >> 2] = HEAP32[$0 + 24 >> 2] + -1;
    global$0 = $2 + 48 | 0;
    return;
   }
   core__result__unwrap_failed__h2450ec3de4884319();
   abort();
  }
  HEAP32[$2 + 40 >> 2] = HEAP32[$2 + 20 >> 2];
  $0 = $2 + 12 | 0;
  $1 = HEAP32[$0 + 4 >> 2];
  HEAP32[$3 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $0 = HEAP32[$2 + 8 >> 2];
  HEAP32[$2 + 24 >> 2] = HEAP32[$2 + 4 >> 2];
  HEAP32[$2 + 28 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($2 + 24 | 0);
  abort();
 }
 
 function core__num__dec2flt__algorithm__fast_path__h475be7bf8e084dd6($0, $1, $2, $3, $4, $5, $6) {
  var $7 = 0, $8 = 0, $9 = 0, $10 = Math_fround(0), $11 = 0, $12 = 0, $13 = 0;
  $8 = global$0 - 32 | 0;
  global$0 = $8;
  label$1 : {
   if ($2 + $4 >>> 0 > 16) {
    break label$1
   }
   $11 = $6 >> 31;
   $7 = $6 + $11 | 0;
   $9 = $6 >> 31;
   $12 = $9 + $5 | 0;
   if ($12 >>> 0 < $9 >>> 0) {
    $7 = $7 + 1 | 0
   }
   $9 = $9 ^ $12;
   $7 = $7 ^ $11;
   if (($7 | 0) > 0) {
    $7 = 1
   } else {
    if (($7 | 0) >= 0) {
     $7 = $9 >>> 0 < 11 ? 0 : 1
    } else {
     $7 = 0
    }
   }
   if ($7) {
    break label$1
   }
   HEAP32[$8 + 16 >> 2] = $3;
   HEAP32[$8 + 20 >> 2] = $3 + $4;
   HEAP8[$8 + 24 | 0] = 0;
   HEAP32[$8 + 8 >> 2] = $1;
   HEAP32[$8 + 12 >> 2] = $1 + $2;
   $1 = core__num__dec2flt__num__from_str_unchecked__hceac95e679e8304a($8 + 8 | 0);
   $2 = i64toi32_i32$HIGH_BITS;
   $3 = $2;
   if (!$2 & $1 >>> 0 > 16777215 | $2 >>> 0 > 0) {
    break label$1
   }
   $10 = Math_fround(+($1 >>> 0) + 4294967296.0 * +($3 >>> 0));
   if (($6 | 0) < -1) {
    $1 = 1
   } else {
    if (($6 | 0) <= -1) {
     $1 = $5 >>> 0 > 4294967295 ? 0 : 1
    } else {
     $1 = 0
    }
   }
   label$3 : {
    if (!$1) {
     $10 = Math_fround($10 * $f32_20as_20core__num__dec2flt__rawfp__RawFloat___short_fast_pow10__h2cbe7cd7345f7d25($5));
     break label$3;
    }
    $10 = Math_fround($10 / $f32_20as_20core__num__dec2flt__rawfp__RawFloat___short_fast_pow10__h2cbe7cd7345f7d25(0 - $5 | 0));
   }
   $13 = 1;
  }
  HEAPF32[$0 + 4 >> 2] = $10;
  HEAP32[$0 >> 2] = $13;
  global$0 = $8 + 32 | 0;
 }
 
 function core__num__dec2flt__rawfp__prev_float__h84a9ca750e8146ac($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $1 = global$0 - 48 | 0;
  global$0 = $1;
  $2 = core__f32___impl_20f32___classify__h2cc2893972a149fc($0) & 255;
  if (($2 | 0) == 4) {
   $f32_20as_20core__num__dec2flt__rawfp__RawFloat___unpack__haddc0a4db1e502dc($1 + 32 | 0, $0);
   $2 = HEAPU16[$1 + 40 >> 1];
   $3 = HEAP32[$1 + 36 >> 2];
   $4 = $3;
   $5 = HEAP32[$1 + 32 >> 2];
   label$2 : {
    if (!(($5 | 0) != 8388608 | ($3 | 0) != 0)) {
     HEAP16[$1 + 8 >> 1] = $2 + -1;
     HEAP32[$1 >> 2] = 16777215;
     HEAP32[$1 + 4 >> 2] = 0;
     $2 = HEAP32[$1 >> 2];
     $3 = HEAP32[$1 + 4 >> 2];
     $4 = HEAPU16[$1 + 8 >> 1];
     break label$2;
    }
    $3 = $1 + 16 | 0;
    HEAP16[$3 + 8 >> 1] = $2;
    $2 = $4 + -1 | 0;
    $4 = $5 + -1 | 0;
    if ($4 >>> 0 < 4294967295) {
     $2 = $2 + 1 | 0
    }
    HEAP32[$3 >> 2] = $4;
    HEAP32[$3 + 4 >> 2] = $2;
    $2 = HEAP32[$1 + 16 >> 2];
    $3 = HEAP32[$1 + 20 >> 2];
    $4 = HEAPU16[$1 + 24 >> 1];
   }
   $0 = core__num__dec2flt__rawfp__encode_normal__h79788dc1a919ce5b($2, $3, $4);
   global$0 = $1 + 48 | 0;
   return $0;
  }
  label$4 : {
   if (($2 | 0) != 1) {
    if (($2 | 0) != 2) {
     if (($2 | 0) != 3) {
      break label$4
     }
     core__panicking__panic__h2d0bc53a963fb996(1049448);
     abort();
    }
    core__panicking__panic__h2d0bc53a963fb996(1049500);
    abort();
   }
   core__panicking__panic__h2d0bc53a963fb996(1049556);
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1049608);
  abort();
 }
 
 function $stretch__node__Stretch_20as_20core__ops__drop__Drop___drop__h4dc0d026bc6ad7fc($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $1 = global$0 - 32 | 0;
  global$0 = $1;
  HEAP32[$1 + 24 >> 2] = 1066128;
  if (HEAP32[266538] != 3) {
   HEAP32[$1 + 28 >> 2] = $1 + 24;
   HEAP32[$1 + 8 >> 2] = $1 + 28;
   std__sync__once__Once__call_inner__h49bf6a110bd0c1f8($1 + 8 | 0);
  }
  std__sync__mutex__Mutex_T___lock__h7318c0b80a9bd337($1 + 8 | 0, HEAP32[$1 + 24 >> 2]);
  $3 = $1 + 16 | 0;
  $4 = HEAPU8[$3 | 0];
  $2 = HEAP32[$1 + 12 >> 2];
  if (HEAP32[$1 + 8 >> 2] != 1) {
   $5 = HEAP32[$0 + 84 >> 2];
   HEAP32[$1 + 8 >> 2] = HEAP32[$0 + 80 >> 2];
   HEAP32[$1 + 12 >> 2] = $5;
   $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend__T_2ccore__slice__Iter_T_____spec_extend__hfa70796206e75b7a($2 + 12 | 0, $1 + 8 | 0, $3);
   label$3 : {
    if ($4) {
     break label$3
    }
    if (!std__panicking__panicking__hf26bc0dde81b7530()) {
     break label$3
    }
    HEAP8[$2 + 4 | 0] = 1;
   }
   HEAP8[HEAP32[$2 >> 2]] = 0;
   global$0 = $1 + 32 | 0;
   return;
  }
  core__result__unwrap_failed__hd436cac2acefb838($2, ($4 | 0) != 0);
  abort();
 }
 
 function core__num__dec2flt__extract_sign__hcb13026d4c78d8d0($0, $1, $2) {
  var $3 = 0;
  folding_inner0 : {
   if ($2) {
    label$4 : {
     label$5 : {
      $3 = HEAPU8[$1 | 0];
      if (($3 | 0) != 43) {
       if (($3 | 0) != 45) {
        break label$5
       }
       if (HEAP8[$1 + 1 | 0] <= -65 ? ($2 | 0) != 1 : 0) {
        break folding_inner0
       }
       HEAP8[$0 | 0] = 1;
       HEAP32[$0 + 4 >> 2] = $1 + 1;
       $2 = $2 + -1 | 0;
       break label$4;
      }
      if (HEAP8[$1 + 1 | 0] <= -65 ? ($2 | 0) != 1 : 0) {
       break folding_inner0
      }
      HEAP8[$0 | 0] = 0;
      HEAP32[$0 + 4 >> 2] = $1 + 1;
      $2 = $2 + -1 | 0;
      break label$4;
     }
     HEAP32[$0 + 4 >> 2] = $1;
     HEAP8[$0 | 0] = 0;
    }
    HEAP32[$0 + 8 >> 2] = $2;
    return;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1060160, 0, 0);
   abort();
  }
  core__str__slice_error_fail__h65b601301310b052($1, $2, 1, $2);
  abort();
 }
 
 function core__num__dec2flt__algorithm__quick_start__h42b2807582e4051c($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $4 = core__num__bignum__Big32x40__bit_length__h13ff63659f8edff3($0);
  $5 = core__num__bignum__Big32x40__bit_length__h13ff63659f8edff3($1);
  if (!HEAPU16[$2 >> 1]) {
   $7 = $4 - $5 | 0;
   $4 = 0;
   $5 = 0;
   while (1) {
    label$2 : {
     $3 = $6 & 65535;
     if (($3 | 0) == 104) {
      break label$2
     }
     if (($3 | 0) == 65387) {
      break label$2
     }
     $8 = $2;
     $3 = ($7 - $4 | 0) + $5 << 16 >> 16;
     label$4 : {
      if (($3 | 0) < 23) {
       $5 = $5 + 1 | 0;
       $3 = 65535;
       break label$4;
      }
      if (($3 | 0) <= 25) {
       break label$2
      }
      $4 = $4 + 1 | 0;
      $3 = 1;
     }
     $6 = $3 + $6 | 0;
     HEAP16[$8 >> 1] = $6;
     continue;
    }
    break;
   };
   core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e($0, $5 << 16 >> 16);
   core__num__bignum__Big32x40__mul_pow2__h9585b2465912363e($1, $4 << 16 >> 16);
   return;
  }
  core__panicking__panic__h2d0bc53a963fb996(1049216);
  abort();
 }
 
 function std__sync__once__Once__call_once___7b_7bclosure_7d_7d__h2a97768c037ba613($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $1 = global$0 - 48 | 0;
  global$0 = $1;
  $2 = HEAP32[$0 >> 2];
  $0 = HEAP32[$2 >> 2];
  HEAP32[$2 >> 2] = 0;
  if ($0) {
   $0 = HEAP32[$0 >> 2];
   $2 = $1 + 40 | 0;
   HEAP32[$2 >> 2] = 0;
   HEAP32[$2 + 4 >> 2] = 0;
   HEAP32[$1 + 32 >> 2] = 0;
   HEAP32[$1 + 36 >> 2] = 4;
   std__sync__mutex__Mutex_T___new__h15c6bb92134c3fd6($1 + 8 | 0, $1 + 32 | 0);
   $2 = HEAP32[$0 >> 2];
   $6 = HEAP32[$1 + 12 >> 2];
   HEAP32[$0 >> 2] = HEAP32[$1 + 8 >> 2];
   HEAP32[$0 + 4 >> 2] = $6;
   $6 = HEAP32[$0 + 12 >> 2];
   $3 = $1 + 16 | 0;
   $4 = HEAP32[$3 + 4 >> 2];
   $5 = $0 + 8 | 0;
   HEAP32[$5 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$5 + 4 >> 2] = $4;
   $3 = HEAP32[$0 + 16 >> 2];
   $4 = $1 + 24 | 0;
   $5 = HEAP32[$4 + 4 >> 2];
   HEAP32[$0 + 16 >> 2] = HEAP32[$4 >> 2];
   HEAP32[$0 + 20 >> 2] = $5;
   label$2 : {
    if (!$2) {
     break label$2
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($2);
    if (!$3) {
     break label$2
    }
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($6);
   }
   global$0 = $1 + 48 | 0;
   return;
  }
  core__panicking__panic__h2d0bc53a963fb996(1050104);
  abort();
 }
 
 function $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____from_iter__h332771a412e39cee($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  $4 = $1 + 8 | 0;
  $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___try_fold__hd9cbd0c9665d0d28($2 + 32 | 0, $1, $1 + 12 | 0, $4);
  label$1 : {
   if (HEAP32[$2 + 32 >> 2] == 1) {
    $5 = HEAP32[$2 + 40 >> 2];
    $6 = HEAP32[$2 + 36 >> 2];
    alloc__raw_vec__RawVec_T_2cA___allocate_in__h3e84c34d6de10075($2 + 8 | 0);
    $7 = HEAP32[$2 + 12 >> 2];
    $3 = HEAP32[$2 + 8 >> 2];
    HEAP32[$3 >> 2] = $6;
    HEAP32[$3 + 4 >> 2] = $5;
    HEAP32[$2 + 24 >> 2] = 1;
    HEAP32[$2 + 20 >> 2] = $7;
    HEAP32[$2 + 16 >> 2] = $3;
    $5 = HEAP32[$4 + 4 >> 2];
    $3 = $2 + 40 | 0;
    HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
    HEAP32[$3 + 4 >> 2] = $5;
    $4 = HEAP32[$1 + 4 >> 2];
    HEAP32[$2 + 32 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$2 + 36 >> 2] = $4;
    alloc__vec__Vec_T___extend_desugared__h87d878252a8e193c($2 + 16 | 0, $2 + 32 | 0);
    HEAP32[$0 + 8 >> 2] = HEAP32[$2 + 24 >> 2];
    $1 = HEAP32[$2 + 20 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$2 + 16 >> 2];
    HEAP32[$0 + 4 >> 2] = $1;
    break label$1;
   }
   HEAP32[$0 + 8 >> 2] = 0;
   HEAP32[$0 >> 2] = 4;
   HEAP32[$0 + 4 >> 2] = 0;
  }
  global$0 = $2 + 48 | 0;
 }
 
 function $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__h510d770044873e28($0) {
  var $1 = 0, $2 = Math_fround(0), $3 = 0, $4 = 0, $5 = Math_fround(0), $6 = 0, $7 = 0, $8 = Math_fround(0);
  $1 = HEAP32[$0 >> 2];
  $3 = HEAP32[$0 + 4 >> 2];
  if (($1 | 0) != ($3 | 0)) {
   $0 = HEAP8[HEAP32[$0 + 8 >> 2]];
   $4 = $0 << 2;
   $6 = HEAP32[$4 + 1051608 >> 2] << 2;
   $7 = ($0 & 255 | 2) == 3;
   while (1) {
    $0 = $1;
    $1 = $0 + 192 | 0;
    $8 = Math_fround(HEAPF32[$0 + (HEAP32[$4 + 1051592 >> 2] << 2) >> 2] + HEAPF32[$0 + $6 >> 2]);
    label$3 : {
     if (HEAPU8[$0 + 188 | 0]) {
      $2 = HEAPF32[$0 + 160 >> 2];
      if (!$7) {
       break label$3
      }
      $2 = HEAPF32[$0 + 164 >> 2];
      break label$3;
     }
     $2 = HEAPF32[$0 + 132 >> 2];
    }
    $5 = Math_fround($5 + Math_fround($8 + $2));
    if (($1 | 0) != ($3 | 0)) {
     continue
    }
    break;
   };
  }
  return $5;
 }
 
 function $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___fold__hb8a9376521c159f4($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0;
  $4 = global$0 - 16 | 0;
  global$0 = $4;
  $6 = HEAP32[$2 + 8 >> 2];
  $8 = HEAP32[$2 + 4 >> 2];
  if (($0 | 0) != ($1 | 0)) {
   $2 = HEAP32[$2 >> 2];
   while (1) {
    $3 = $0 + 8 | 0;
    $7 = HEAP32[$3 >> 2];
    $3 = HEAP32[$3 + 4 >> 2];
    $5 = HEAP32[$0 + 16 >> 2];
    $9 = HEAP32[$0 >> 2];
    $10 = HEAP32[$0 + 4 >> 2];
    $alloc__vec__Vec_T__20as_20core__clone__Clone___clone__ha7ce6132966c4db5($4, $0 + 20 | 0);
    HEAP32[$2 + 16 >> 2] = $5;
    $5 = $2 + 8 | 0;
    HEAP32[$5 >> 2] = $7;
    HEAP32[$5 + 4 >> 2] = $3;
    HEAP32[$2 >> 2] = $9;
    HEAP32[$2 + 4 >> 2] = $10;
    HEAP32[$2 + 28 >> 2] = HEAP32[$4 + 8 >> 2];
    $7 = HEAP32[$4 + 4 >> 2];
    $3 = $2 + 20 | 0;
    HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
    HEAP32[$3 + 4 >> 2] = $7;
    $2 = $2 + 32 | 0;
    $6 = $6 + 1 | 0;
    $0 = $0 + 32 | 0;
    if (($1 | 0) != ($0 | 0)) {
     continue
    }
    break;
   };
  }
  HEAP32[$8 >> 2] = $6;
  global$0 = $4 + 16 | 0;
 }
 
 function $core__iter__adapters__chain__Chain_A_2cB__20as_20core__iter__traits__iterator__Iterator___fold__h55b928ef9b835e95($0, $1) {
  var $2 = 0, $3 = 0, $4 = Math_fround(0), $5 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  HEAP32[$2 + 4 >> 2] = $1;
  $5 = HEAPU8[$0 + 16 | 0];
  label$1 : {
   if ($5 >>> 0 > 1) {
    break label$1
   }
   $3 = HEAP32[$0 + 4 >> 2];
   $1 = HEAP32[$0 >> 2];
   HEAP32[$2 + 8 >> 2] = $2 + 4;
   if (($1 | 0) == ($3 | 0)) {
    break label$1
   }
   while (1) {
    $4 = core__ops__function__impls___impl_20core__ops__function__FnMut_A__20for_20_mut_20F___call_mut__h5600ab8696bfafd2($2 + 8 | 0, $4, $1);
    $1 = $1 + 4 | 0;
    if (($3 | 0) != ($1 | 0)) {
     continue
    }
    break;
   };
  }
  label$3 : {
   if (($5 | 2) != 2) {
    break label$3
   }
   $3 = HEAP32[$0 + 12 >> 2];
   $1 = HEAP32[$0 + 8 >> 2];
   HEAP32[$2 + 12 >> 2] = $2 + 4;
   if (($1 | 0) == ($3 | 0)) {
    break label$3
   }
   while (1) {
    $4 = core__ops__function__impls___impl_20core__ops__function__FnMut_A__20for_20_mut_20F___call_mut__h5600ab8696bfafd2($2 + 12 | 0, $4, $1);
    $1 = $1 + 4 | 0;
    if (($3 | 0) != ($1 | 0)) {
     continue
    }
    break;
   };
  }
  global$0 = $2 + 16 | 0;
  return $4;
 }
 
 function core__num__dec2flt__num__compare_with_half_ulp__he9852dcf9bb66aab($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $3 = 255;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (!$1) {
       break label$4
      }
      $2 = $1 + -1 | 0;
      $1 = $2 >>> 5;
      if ($2 >>> 0 >= 1280) {
       break label$1
      }
      if (!(HEAP32[(($1 << 2) + $0 | 0) + 4 >> 2] & 1 << ($2 & 31))) {
       break label$4
      }
      $1 = 0;
      while (1) {
       if ($1 >>> 0 >= $2 >>> 0) {
        break label$3
       }
       $4 = $1 >>> 5;
       if ($1 >>> 0 >= 1280) {
        break label$2
       }
       $5 = $1 & 31;
       $3 = 1;
       $1 = $1 + 1 | 0;
       if (!(HEAP32[(($4 << 2) + $0 | 0) + 4 >> 2] & 1 << $5)) {
        continue
       }
       break;
      };
     }
     return $3;
    }
    return 0;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1065788, $4, 40);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1065788, $1, 40);
  abort();
 }
 
 function stretch_layout__Node__mark_dirty__h3a05b794bae86814($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $1 = global$0 - 48 | 0;
  global$0 = $1;
  label$1 : {
   $2 = HEAP32[$0 >> 2];
   if (!HEAP32[$2 + 8 >> 2]) {
    $5 = $2 + 8 | 0;
    HEAP32[$5 >> 2] = -1;
    $4 = $0 + 12 | 0;
    $6 = HEAP32[$4 + 4 >> 2];
    $3 = $1 + 32 | 0;
    HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
    HEAP32[$3 + 4 >> 2] = $6;
    $4 = HEAP32[$0 + 8 >> 2];
    HEAP32[$1 + 24 >> 2] = HEAP32[$0 + 4 >> 2];
    HEAP32[$1 + 28 >> 2] = $4;
    stretch__node__Stretch__mark_dirty__hb2148715e70da43d($1, $2 + 16 | 0, $1 + 24 | 0);
    if (HEAP32[$1 >> 2] != 2) {
     break label$1
    }
    HEAP32[$5 >> 2] = HEAP32[$5 >> 2] + 1;
    global$0 = $1 + 48 | 0;
    return;
   }
   core__result__unwrap_failed__h2450ec3de4884319();
   abort();
  }
  HEAP32[$1 + 40 >> 2] = HEAP32[$1 + 16 >> 2];
  $0 = $1 + 8 | 0;
  $2 = HEAP32[$0 + 4 >> 2];
  HEAP32[$3 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$3 + 4 >> 2] = $2;
  $0 = HEAP32[$1 + 4 >> 2];
  HEAP32[$1 + 24 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$1 + 28 >> 2] = $0;
  core__result__unwrap_failed__heaed4f1dd7f83a68($1 + 24 | 0);
  abort();
 }
 
 function node_new($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = global$0 + -64 | 0;
  global$0 = $2;
  label$1 : {
   if ($0) {
    $3 = HEAP32[$0 >> 2];
    if (($3 | 0) == -1) {
     break label$1
    }
    HEAP32[$0 >> 2] = $3 + 1;
    HEAP32[$2 + 32 >> 2] = $1;
    stretch_layout__Node__new__h74347de20ce72863($2, $0 + 4 | 0, $2 + 32 | 0);
    HEAP32[$0 >> 2] = HEAP32[$0 >> 2] + -1;
    HEAP32[$2 + 56 >> 2] = HEAP32[$2 + 24 >> 2];
    $1 = $2 + 16 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $0 = $2 + 48 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $3;
    $1 = $2 + 8 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $0 = $2 + 40 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $3;
    $0 = HEAP32[$2 + 4 >> 2];
    HEAP32[$2 + 32 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$2 + 36 >> 2] = $0;
    $0 = $stretch_layout__Node_20as_20wasm_bindgen__convert__traits__IntoWasmAbi___into_abi__hc3a75ef282dd9304($2 + 32 | 0);
    global$0 = $2 - -64 | 0;
    return $0 | 0;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function core__num__bignum__Big32x40__sub__ha94c81ecf8eacd8a($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  label$1 : {
   $2 = HEAP32[$0 >> 2];
   $4 = HEAP32[$1 >> 2];
   $2 = $4 >>> 0 < $2 >>> 0 ? $2 : $4;
   if ($2 >>> 0 <= 40) {
    if ($2) {
     $4 = $1 + 4 | 0;
     $1 = $0 + 4 | 0;
     $3 = 1;
     while (1) {
      $5 = $3 & 1;
      $6 = HEAP32[$1 >> 2];
      $3 = $6 + (HEAP32[$4 >> 2] ^ -1) | 0;
      $5 = $5 + $3 | 0;
      HEAP32[$1 >> 2] = $5;
      $3 = $3 >>> 0 < $6 >>> 0 | $5 >>> 0 < $3 >>> 0;
      $4 = $4 + 4 | 0;
      $1 = $1 + 4 | 0;
      $7 = $7 + 1 | 0;
      if ($7 >>> 0 < $2 >>> 0) {
       continue
      }
      break;
     };
     if (!$3) {
      break label$1
     }
    }
    HEAP32[$0 >> 2] = $2;
    return $0;
   }
   core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($2, 40);
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1065848);
  abort();
 }
 
 function $stretch_layout__Node_20as_20wasm_bindgen__convert__traits__FromWasmAbi___from_abi__h96859e12f99a66f2($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $4 = global$0 - 32 | 0;
  global$0 = $4;
  label$1 : {
   if ($1) {
    if (HEAP32[$1 >> 2]) {
     break label$1
    }
    HEAP32[$1 >> 2] = 0;
    $2 = $1 + 8 | 0;
    $5 = HEAP32[$2 + 4 >> 2];
    $3 = $4 + 8 | 0;
    HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$3 + 4 >> 2] = $5;
    $2 = $1 + 16 | 0;
    $5 = HEAP32[$2 + 4 >> 2];
    $3 = $4 + 16 | 0;
    HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$3 + 4 >> 2] = $5;
    $2 = $1 + 24 | 0;
    $5 = HEAP32[$2 + 4 >> 2];
    $3 = $4 + 24 | 0;
    HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$3 + 4 >> 2] = $5;
    $2 = HEAP32[$1 + 4 >> 2];
    HEAP32[$4 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$4 + 4 >> 2] = $2;
    $2 = HEAP32[$4 + 8 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$4 + 4 >> 2];
    HEAP32[$0 + 4 >> 2] = $2;
    $2 = $4 + 12 | 0;
    $5 = HEAP32[$2 + 4 >> 2];
    $3 = $0 + 8 | 0;
    HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$3 + 4 >> 2] = $5;
    $2 = $4 + 20 | 0;
    $5 = HEAP32[$2 + 4 >> 2];
    $3 = $0 + 16 | 0;
    HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$3 + 4 >> 2] = $5;
    HEAP32[$0 + 24 >> 2] = HEAP32[$4 + 28 >> 2];
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($1);
    global$0 = $4 + 32 | 0;
    return;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function stretch__node__Stretch__compute_layout__hef8bc57acfce3d43($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $4 = global$0 - 48 | 0;
  global$0 = $4;
  $6 = $2 + 8 | 0;
  $7 = HEAP32[$6 + 4 >> 2];
  $5 = $4 + 40 | 0;
  HEAP32[$5 >> 2] = HEAP32[$6 >> 2];
  HEAP32[$5 + 4 >> 2] = $7;
  $5 = HEAP32[$2 + 4 >> 2];
  HEAP32[$4 + 32 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$4 + 36 >> 2] = $5;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($4 + 8 | 0, $1, $4 + 32 | 0);
  label$1 : {
   if (HEAP32[$4 + 8 >> 2] == 1) {
    $1 = HEAP32[$4 + 16 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$4 + 12 >> 2];
    HEAP32[$0 + 4 >> 2] = $1;
    HEAP32[$0 + 16 >> 2] = HEAP32[$4 + 28 >> 2];
    $1 = $4 + 20 | 0;
    $2 = HEAP32[$1 + 4 >> 2];
    $0 = $0 + 8 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $2;
    break label$1;
   }
   $2 = HEAP32[$4 + 12 >> 2];
   $6 = $3 + 8 | 0;
   $7 = HEAP32[$6 + 4 >> 2];
   $5 = $4 + 16 | 0;
   HEAP32[$5 >> 2] = HEAP32[$6 >> 2];
   HEAP32[$5 + 4 >> 2] = $7;
   $5 = HEAP32[$3 + 4 >> 2];
   HEAP32[$4 + 8 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$4 + 12 >> 2] = $5;
   stretch__forest__Forest__compute_layout__h227d65179681f355($0, $1 + 104 | 0, $2, $4 + 8 | 0);
  }
  global$0 = $4 + 48 | 0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal__hidden_layout__h830f8cd711dd543e($0, $1, $2, $3) {
  var $4 = 0;
  label$1 : {
   $4 = HEAP32[$0 + 8 >> 2];
   if ($4 >>> 0 > $2 >>> 0) {
    $4 = HEAP32[$0 >> 2] + Math_imul($2, 288) | 0;
    HEAP32[$4 + 220 >> 2] = $3;
    $3 = $4 + 232 | 0;
    HEAP32[$3 >> 2] = 0;
    HEAP32[$3 + 4 >> 2] = 0;
    $3 = $4 + 224 | 0;
    HEAP32[$3 >> 2] = 0;
    HEAP32[$3 + 4 >> 2] = 0;
    $3 = HEAP32[$1 + 8 >> 2];
    if ($3 >>> 0 <= $2 >>> 0) {
     break label$1
    }
    $2 = HEAP32[$1 >> 2] + Math_imul($2, 12) | 0;
    $3 = HEAP32[$2 + 8 >> 2];
    if ($3) {
     $2 = HEAP32[$2 >> 2];
     $3 = $3 << 2;
     $4 = 0;
     while (1) {
      stretch__algo___impl_20stretch__forest__Forest___compute_internal__hidden_layout__h830f8cd711dd543e($0, $1, HEAP32[$2 >> 2], $4);
      $4 = $4 + 1 | 0;
      $2 = $2 + 4 | 0;
      $3 = $3 + -4 | 0;
      if ($3) {
       continue
      }
      break;
     };
    }
    return;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1051720, $2, $4);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051704, $2, $3);
  abort();
 }
 
 function roundf($0) {
  var $1 = Math_fround(0), $2 = Math_fround(0), $3 = 0, $4 = 0, $5 = 0;
  $5 = global$0 - 16 | 0;
  $3 = (wasm2js_scratch_store_f32($0), wasm2js_scratch_load_i32(0));
  $4 = $3 >>> 23 & 255;
  if ($4 >>> 0 <= 149) {
   $0 = ($3 | 0) < 0 ? Math_fround(-$0) : $0;
   if ($4 >>> 0 < 126) {
    HEAPF32[$5 + 12 >> 2] = $0 + Math_fround(8388608.0);
    return Math_fround($0 * Math_fround(0.0));
   }
   $1 = Math_fround(Math_fround(Math_fround($0 + Math_fround(8388608.0)) + Math_fround(-8388608.0)) - $0);
   label$3 : {
    if ($1 > Math_fround(.5)) {
     $2 = Math_fround(Math_fround($0 + $1) + Math_fround(-1.0));
     break label$3;
    }
    $0 = Math_fround($0 + $1);
    $2 = $0;
    if (!($1 <= Math_fround(-.5))) {
     break label$3
    }
    $2 = Math_fround($0 + Math_fround(1.0));
   }
   $0 = $2;
   $0 = ($3 | 0) < 0 ? Math_fround(-$0) : $0;
  }
  return $0;
 }
 
 function stretch__algo___impl_20stretch__forest__Forest___compute_internal__calc_baseline__h62c01a9be0888d54($0, $1, $2) {
  var $3 = 0, $4 = 0;
  label$1 : {
   $3 = HEAP32[$0 + 20 >> 2];
   if ($3 >>> 0 <= $1 >>> 0) {
    break label$1
   }
   label$2 : {
    label$3 : {
     $4 = HEAP32[$0 + 12 >> 2];
     if (HEAP32[($4 + Math_imul($1, 12) | 0) + 8 >> 2]) {
      $2 = HEAP32[$0 >> 2];
      $0 = HEAP32[$0 + 8 >> 2];
      while (1) {
       if ($3 >>> 0 <= $1 >>> 0) {
        break label$3
       }
       $1 = HEAP32[HEAP32[Math_imul($1, 12) + $4 >> 2] >> 2];
       if ($0 >>> 0 <= $1 >>> 0) {
        break label$2
       }
       if ($3 >>> 0 <= $1 >>> 0) {
        break label$1
       }
       if (HEAP32[(Math_imul($1, 12) + $4 | 0) + 8 >> 2]) {
        continue
       }
       break;
      };
      $2 = ($2 + Math_imul($1, 288) | 0) + 220 | 0;
     }
     return HEAPF32[$2 + 8 >> 2];
    }
    core__panicking__panic_bounds_check__h0537ade040df571e(1051704, $1, $3);
    abort();
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1051704, $1, $0);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051704, $1, $3);
  abort();
 }
 
 function layout_child($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = global$0 + -64 | 0;
  global$0 = $2;
  label$1 : {
   if ($0) {
    $3 = HEAP32[$0 >> 2];
    if (($3 | 0) == -1) {
     break label$1
    }
    HEAP32[$0 >> 2] = $3 + 1;
    stretch_layout__Layout__child__h3276324f50fb3c61($2, $0 + 4 | 0, $1);
    HEAP32[$0 >> 2] = HEAP32[$0 >> 2] + -1;
    $1 = $2 + 24 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $0 = $2 + 56 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $3;
    $1 = $2 + 16 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $0 = $2 + 48 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $3;
    $1 = $2 + 8 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $0 = $2 + 40 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $3;
    $0 = HEAP32[$2 + 4 >> 2];
    HEAP32[$2 + 32 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$2 + 36 >> 2] = $0;
    $0 = $stretch_layout__Layout_20as_20wasm_bindgen__convert__traits__IntoWasmAbi___into_abi__ha23bbae265851086($2 + 32 | 0);
    global$0 = $2 - -64 | 0;
    return $0 | 0;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function alloc__vec__Vec_T___extend_desugared__h87d878252a8e193c($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  $4 = $1 + 12 | 0;
  $5 = $1 + 8 | 0;
  $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___try_fold__hd9cbd0c9665d0d28($2, $1, $4, $5);
  if (HEAP32[$2 >> 2] == 1) {
   $8 = $0 + 4 | 0;
   while (1) {
    $9 = HEAP32[$2 + 8 >> 2];
    $10 = HEAP32[$2 + 4 >> 2];
    $6 = $0 + 8 | 0;
    $3 = HEAP32[$6 >> 2];
    if (($3 | 0) == HEAP32[$8 >> 2]) {
     alloc__raw_vec__RawVec_T_2cA___reserve__h23f4dea92ede66ce($0, $3, 1)
    }
    $7 = HEAP32[$0 >> 2] + ($3 << 3) | 0;
    HEAP32[$7 + 4 >> 2] = $9;
    HEAP32[$7 >> 2] = $10;
    HEAP32[$6 >> 2] = $3 + 1;
    $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___try_fold__hd9cbd0c9665d0d28($2, $1, $4, $5);
    if (HEAP32[$2 >> 2] == 1) {
     continue
    }
    break;
   };
  }
  global$0 = $2 + 16 | 0;
 }
 
 function node_computeLayout($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = global$0 + -64 | 0;
  global$0 = $2;
  label$1 : {
   if ($0) {
    if (HEAP32[$0 >> 2]) {
     break label$1
    }
    HEAP32[$0 >> 2] = -1;
    HEAP32[$2 + 32 >> 2] = $1;
    stretch_layout__Node__compute_layout__h28a27c3bee5a2ca8($2, $0 + 4 | 0, $2 + 32 | 0);
    HEAP32[$0 >> 2] = 0;
    $1 = $2 + 24 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $0 = $2 + 56 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $3;
    $1 = $2 + 16 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $0 = $2 + 48 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $3;
    $1 = $2 + 8 | 0;
    $3 = HEAP32[$1 + 4 >> 2];
    $0 = $2 + 40 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $3;
    $0 = HEAP32[$2 + 4 >> 2];
    HEAP32[$2 + 32 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$2 + 36 >> 2] = $0;
    $0 = $stretch_layout__Layout_20as_20wasm_bindgen__convert__traits__IntoWasmAbi___into_abi__ha23bbae265851086($2 + 32 | 0);
    global$0 = $2 - -64 | 0;
    return $0 | 0;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function $stretch_layout__Layout_20as_20wasm_bindgen__convert__traits__IntoWasmAbi___into_abi__ha23bbae265851086($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $4 = global$0 - 32 | 0;
  global$0 = $4;
  $3 = $0 + 24 | 0;
  $2 = HEAP32[$3 + 4 >> 2];
  $6 = $4 + 24 | 0;
  $1 = $6;
  HEAP32[$1 >> 2] = HEAP32[$3 >> 2];
  HEAP32[$1 + 4 >> 2] = $2;
  $2 = $0 + 16 | 0;
  $1 = HEAP32[$2 + 4 >> 2];
  $3 = $4 + 16 | 0;
  HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 4 >> 2] = $1;
  $1 = $0 + 8 | 0;
  $5 = HEAP32[$1 + 4 >> 2];
  $2 = $4 + 8 | 0;
  HEAP32[$2 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$2 + 4 >> 2] = $5;
  $1 = HEAP32[$0 + 4 >> 2];
  HEAP32[$4 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$4 + 4 >> 2] = $1;
  $0 = __rust_alloc(36, 4);
  if ($0) {
   $1 = HEAP32[$4 + 4 >> 2];
   HEAP32[$0 + 4 >> 2] = HEAP32[$4 >> 2];
   HEAP32[$0 + 8 >> 2] = $1;
   HEAP32[$0 >> 2] = 0;
   $1 = HEAP32[$2 + 4 >> 2];
   $5 = $0 + 12 | 0;
   HEAP32[$5 >> 2] = HEAP32[$2 >> 2];
   HEAP32[$5 + 4 >> 2] = $1;
   $2 = HEAP32[$3 + 4 >> 2];
   $1 = $0 + 20 | 0;
   HEAP32[$1 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$1 + 4 >> 2] = $2;
   $3 = HEAP32[$6 + 4 >> 2];
   $2 = $0 + 28 | 0;
   HEAP32[$2 >> 2] = HEAP32[$6 >> 2];
   HEAP32[$2 + 4 >> 2] = $3;
   global$0 = $4 + 32 | 0;
   return $0;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](36, 4);
  abort();
 }
 
 function $stretch_layout__Node_20as_20wasm_bindgen__convert__traits__IntoWasmAbi___into_abi__hc3a75ef282dd9304($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  $6 = $2 + 24 | 0;
  HEAP32[$6 >> 2] = HEAP32[$0 + 24 >> 2];
  $3 = $0 + 16 | 0;
  $1 = HEAP32[$3 + 4 >> 2];
  $5 = $2 + 16 | 0;
  $4 = $5;
  HEAP32[$4 >> 2] = HEAP32[$3 >> 2];
  HEAP32[$4 + 4 >> 2] = $1;
  $1 = $0 + 8 | 0;
  $4 = HEAP32[$1 + 4 >> 2];
  $3 = $2 + 8 | 0;
  HEAP32[$3 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$3 + 4 >> 2] = $4;
  $1 = HEAP32[$0 + 4 >> 2];
  HEAP32[$2 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$2 + 4 >> 2] = $1;
  $0 = __rust_alloc(32, 4);
  if ($0) {
   $1 = HEAP32[$2 + 4 >> 2];
   HEAP32[$0 + 4 >> 2] = HEAP32[$2 >> 2];
   HEAP32[$0 + 8 >> 2] = $1;
   HEAP32[$0 >> 2] = 0;
   $1 = HEAP32[$3 + 4 >> 2];
   $4 = $0 + 12 | 0;
   HEAP32[$4 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$4 + 4 >> 2] = $1;
   $3 = HEAP32[$5 + 4 >> 2];
   $1 = $0 + 20 | 0;
   HEAP32[$1 >> 2] = HEAP32[$5 >> 2];
   HEAP32[$1 + 4 >> 2] = $3;
   HEAP32[$0 + 28 >> 2] = HEAP32[$6 >> 2];
   global$0 = $2 + 32 | 0;
   return $0;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](32, 4);
  abort();
 }
 
 function alloc__vec__Vec_T___extend_desugared__hd805bf68d2af8d5c($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  HEAP32[$2 + 28 >> 2] = $1;
  $_mut_20I_20as_20core__iter__traits__iterator__Iterator___next__h612ae4917c912bb5($2 + 16 | 0, $2 + 28 | 0);
  if (HEAP32[$2 + 16 >> 2] == 1) {
   $3 = HEAP32[$2 + 20 >> 2];
   $5 = $0 + 4 | 0;
   $4 = $0 + 8 | 0;
   while (1) {
    $1 = HEAP32[$4 >> 2];
    if (($1 | 0) == HEAP32[$5 >> 2]) {
     alloc__raw_vec__RawVec_T_2cA___reserve__h52463841ac7c0460($0, $1)
    }
    HEAP32[HEAP32[$0 >> 2] + ($1 << 2) >> 2] = $3;
    HEAP32[$4 >> 2] = $1 + 1;
    $_mut_20I_20as_20core__iter__traits__iterator__Iterator___next__h612ae4917c912bb5($2 + 8 | 0, $2 + 28 | 0);
    $3 = HEAP32[$2 + 12 >> 2];
    if (HEAP32[$2 + 8 >> 2] == 1) {
     continue
    }
    break;
   };
  }
  global$0 = $2 + 32 | 0;
 }
 
 function $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____spec_extend__h9445b3b85bba6c91($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  alloc__raw_vec__RawVec_T_2cA___reserve__hba7a32ad1439175e($0, HEAP32[$0 + 8 >> 2], HEAP32[$1 + 12 >> 2] - HEAP32[$1 + 8 >> 2] >> 4);
  $5 = HEAP32[$0 >> 2];
  $4 = HEAP32[$0 + 8 >> 2];
  HEAP32[$2 + 24 >> 2] = HEAP32[$1 + 16 >> 2];
  $6 = HEAP32[$1 + 12 >> 2];
  $3 = $2 + 16 | 0;
  HEAP32[$3 >> 2] = HEAP32[$1 + 8 >> 2];
  HEAP32[$3 + 4 >> 2] = $6;
  $3 = HEAP32[$1 + 4 >> 2];
  HEAP32[$2 + 8 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$2 + 12 >> 2] = $3;
  HEAP32[$2 + 40 >> 2] = $4;
  HEAP32[$2 + 36 >> 2] = $0 + 8;
  HEAP32[$2 + 32 >> 2] = ($4 << 5) + $5;
  $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__h708e7d0fcd3f4aad($2 + 8 | 0, $2 + 32 | 0);
  global$0 = $2 + 48 | 0;
 }
 
 function $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____from_iter__h6dc1793ab3f658eb($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  HEAP32[$2 + 28 >> 2] = $1;
  $_mut_20I_20as_20core__iter__traits__iterator__Iterator___next__h612ae4917c912bb5($2 + 16 | 0, $2 + 28 | 0);
  label$1 : {
   if (HEAP32[$2 + 16 >> 2]) {
    $1 = HEAP32[$2 + 20 >> 2];
    alloc__raw_vec__RawVec_T_2cA___allocate_in__h37e24568f3387d91($2 + 8 | 0);
    $4 = HEAP32[$2 + 12 >> 2];
    $3 = HEAP32[$2 + 8 >> 2];
    HEAP32[$3 >> 2] = $1;
    HEAP32[$2 + 40 >> 2] = 1;
    HEAP32[$2 + 36 >> 2] = $4;
    HEAP32[$2 + 32 >> 2] = $3;
    alloc__vec__Vec_T___extend_desugared__hd805bf68d2af8d5c($2 + 32 | 0, HEAP32[$2 + 28 >> 2]);
    HEAP32[$0 + 8 >> 2] = HEAP32[$2 + 40 >> 2];
    $1 = HEAP32[$2 + 36 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$2 + 32 >> 2];
    HEAP32[$0 + 4 >> 2] = $1;
    break label$1;
   }
   HEAP32[$0 + 8 >> 2] = 0;
   HEAP32[$0 >> 2] = 4;
   HEAP32[$0 + 4 >> 2] = 0;
  }
  global$0 = $2 + 48 | 0;
 }
 
 function core__fmt__num___impl_20core__fmt__LowerHex_20for_20i8___fmt__h6285e90692b92d9d($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $3 = global$0 - 128 | 0;
  global$0 = $3;
  $2 = HEAPU8[$0 | 0];
  $0 = 0;
  while (1) {
   $4 = $2 & 15;
   HEAP8[($0 + $3 | 0) + 127 | 0] = $4 >>> 0 < 10 ? $4 | 48 : $4 + 87 | 0;
   $0 = $0 + -1 | 0;
   $2 = $2 >>> 4 & 15;
   if ($2) {
    continue
   }
   break;
  };
  $2 = $0 + 128 | 0;
  if ($2 >>> 0 < 129) {
   $0 = core__fmt__Formatter__pad_integral__h253f31941eb77fc7($1, 1, 1060872, 2, ($0 + $3 | 0) + 128 | 0, 0 - $0 | 0);
   global$0 = $3 + 128 | 0;
   return $0;
  }
  core__slice__slice_index_order_fail__ha75fa70416d3bc2f($2, 128);
  abort();
 }
 
 function core__fmt__num___impl_20core__fmt__UpperHex_20for_20i8___fmt__h0d6d3232e6cceb39($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $3 = global$0 - 128 | 0;
  global$0 = $3;
  $2 = HEAPU8[$0 | 0];
  $0 = 0;
  while (1) {
   $4 = $2 & 15;
   HEAP8[($0 + $3 | 0) + 127 | 0] = $4 >>> 0 < 10 ? $4 | 48 : $4 + 55 | 0;
   $0 = $0 + -1 | 0;
   $2 = $2 >>> 4 & 15;
   if ($2) {
    continue
   }
   break;
  };
  $2 = $0 + 128 | 0;
  if ($2 >>> 0 < 129) {
   $0 = core__fmt__Formatter__pad_integral__h253f31941eb77fc7($1, 1, 1060872, 2, ($0 + $3 | 0) + 128 | 0, 0 - $0 | 0);
   global$0 = $3 + 128 | 0;
   return $0;
  }
  core__slice__slice_index_order_fail__ha75fa70416d3bc2f($2, 128);
  abort();
 }
 
 function stretch__forest__Forest__mark_dirty__mark_dirty_impl__hdd964a1d064beeaf($0, $1, $2) {
  var $3 = 0;
  label$1 : {
   $3 = HEAP32[$0 + 8 >> 2];
   if ($3 >>> 0 > $2 >>> 0) {
    $3 = HEAP32[$0 >> 2] + Math_imul($2, 288) | 0;
    HEAP8[$3 + 284 | 0] = 1;
    HEAP32[$3 + 240 >> 2] = 2;
    $3 = HEAP32[$1 + 8 >> 2];
    if ($3 >>> 0 <= $2 >>> 0) {
     break label$1
    }
    $2 = HEAP32[$1 >> 2] + Math_imul($2, 12) | 0;
    $3 = HEAP32[$2 + 8 >> 2];
    if ($3) {
     $2 = HEAP32[$2 >> 2];
     $3 = $3 << 2;
     while (1) {
      stretch__forest__Forest__mark_dirty__mark_dirty_impl__hdd964a1d064beeaf($0, $1, HEAP32[$2 >> 2]);
      $2 = $2 + 4 | 0;
      $3 = $3 + -4 | 0;
      if ($3) {
       continue
      }
      break;
     };
    }
    return;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $2, $3);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051096, $2, $3);
  abort();
 }
 
 function stretch__node__Stretch__mark_dirty__hb2148715e70da43d($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = global$0 - 48 | 0;
  global$0 = $3;
  $5 = $2 + 8 | 0;
  $6 = HEAP32[$5 + 4 >> 2];
  $4 = $3 + 40 | 0;
  HEAP32[$4 >> 2] = HEAP32[$5 >> 2];
  HEAP32[$4 + 4 >> 2] = $6;
  $4 = HEAP32[$2 + 4 >> 2];
  HEAP32[$3 + 32 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 36 >> 2] = $4;
  stretch__node__Stretch__find_node__hfb9818efa90b275a($3 + 8 | 0, $1, $3 + 32 | 0);
  label$1 : {
   if (HEAP32[$3 + 8 >> 2] == 1) {
    $1 = HEAP32[$3 + 16 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$3 + 12 >> 2];
    HEAP32[$0 + 4 >> 2] = $1;
    HEAP32[$0 + 16 >> 2] = HEAP32[$3 + 28 >> 2];
    $1 = $3 + 20 | 0;
    $2 = HEAP32[$1 + 4 >> 2];
    $0 = $0 + 8 | 0;
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $2;
    break label$1;
   }
   stretch__forest__Forest__mark_dirty__mark_dirty_impl__hdd964a1d064beeaf($1 + 104 | 0, $1 + 128 | 0, HEAP32[$3 + 12 >> 2]);
   HEAP32[$0 >> 2] = 2;
  }
  global$0 = $3 + 48 | 0;
 }
 
 function core__ops__function__impls___impl_20core__ops__function__FnMut_A__20for_20_mut_20F___call_mut__h5600ab8696bfafd2($0, $1, $2) {
  var $3 = Math_fround(0), $4 = 0, $5 = 0, $6 = Math_fround(0);
  $2 = HEAP32[$2 >> 2];
  $4 = HEAPU8[HEAP32[HEAP32[$0 >> 2] >> 2]];
  label$1 : {
   if (($4 | 2) == 3) {
    $5 = $2 + 92 | 0;
    $0 = $2 + 96 | 0;
    break label$1;
   }
   $5 = $2 + 84 | 0;
   $0 = $2 + 88 | 0;
  }
  $6 = Math_fround(HEAPF32[$5 >> 2] + HEAPF32[$0 >> 2]);
  label$3 : {
   label$4 : {
    if (HEAPU8[$2 + 188 | 0]) {
     if ((($4 | 2) & 3) != 3) {
      break label$4
     }
     $3 = HEAPF32[$2 + 164 >> 2];
     break label$3;
    }
    $3 = HEAPF32[$2 + 132 >> 2];
    break label$3;
   }
   $3 = HEAPF32[$2 + 160 >> 2];
  }
  return Math_fround(Math_fround($6 + $3) + $1);
 }
 
 function core__fmt__num___impl_20core__fmt__LowerHex_20for_20i32___fmt__hc0126a1e228a0495($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $3 = global$0 - 128 | 0;
  global$0 = $3;
  $2 = HEAP32[$0 >> 2];
  $0 = 0;
  while (1) {
   $4 = $2 & 15;
   HEAP8[($0 + $3 | 0) + 127 | 0] = $4 >>> 0 < 10 ? $4 | 48 : $4 + 87 | 0;
   $0 = $0 + -1 | 0;
   $2 = $2 >>> 4;
   if ($2) {
    continue
   }
   break;
  };
  $2 = $0 + 128 | 0;
  if ($2 >>> 0 < 129) {
   $0 = core__fmt__Formatter__pad_integral__h253f31941eb77fc7($1, 1, 1060872, 2, ($0 + $3 | 0) + 128 | 0, 0 - $0 | 0);
   global$0 = $3 + 128 | 0;
   return $0;
  }
  core__slice__slice_index_order_fail__ha75fa70416d3bc2f($2, 128);
  abort();
 }
 
 function core__fmt__num___impl_20core__fmt__UpperHex_20for_20i32___fmt__hde8b8630775a2fae($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $3 = global$0 - 128 | 0;
  global$0 = $3;
  $2 = HEAP32[$0 >> 2];
  $0 = 0;
  while (1) {
   $4 = $2 & 15;
   HEAP8[($0 + $3 | 0) + 127 | 0] = $4 >>> 0 < 10 ? $4 | 48 : $4 + 55 | 0;
   $0 = $0 + -1 | 0;
   $2 = $2 >>> 4;
   if ($2) {
    continue
   }
   break;
  };
  $2 = $0 + 128 | 0;
  if ($2 >>> 0 < 129) {
   $0 = core__fmt__Formatter__pad_integral__h253f31941eb77fc7($1, 1, 1060872, 2, ($0 + $3 | 0) + 128 | 0, 0 - $0 | 0);
   global$0 = $3 + 128 | 0;
   return $0;
  }
  core__slice__slice_index_order_fail__ha75fa70416d3bc2f($2, 128);
  abort();
 }
 
 function core__fmt__builders__DebugTuple__finish__h0e3afe7bbfe02439($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0;
  $1 = HEAPU8[$0 + 8 | 0];
  $2 = HEAP32[$0 + 4 >> 2];
  if ($2) {
   $1 = $1 & 255;
   $4 = $0 + 8 | 0;
   $3 = 1;
   label$2 : {
    if ($1) {
     break label$2
    }
    label$3 : {
     if (($2 | 0) != 1) {
      break label$3
     }
     if (!HEAPU8[$0 + 9 | 0]) {
      break label$3
     }
     $2 = HEAP32[$0 >> 2];
     if (HEAPU8[$2 | 0] & 4) {
      break label$3
     }
     $3 = 1;
     if (FUNCTION_TABLE[HEAP32[HEAP32[$2 + 28 >> 2] + 12 >> 2]](HEAP32[$2 + 24 >> 2], 1061120, 1)) {
      break label$2
     }
    }
    $1 = HEAP32[$0 >> 2];
    $3 = FUNCTION_TABLE[HEAP32[HEAP32[$1 + 28 >> 2] + 12 >> 2]](HEAP32[$1 + 24 >> 2], 1061121, 1) | 0;
   }
   $1 = $3;
   HEAP8[$4 | 0] = $1;
  }
  return ($1 & 255) != 0;
 }
 
 function stretch__forest__Forest__remove_child_at_index__hebc91c7f2c6ef02a($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $3 = global$0 - 16 | 0;
  global$0 = $3;
  HEAP32[$3 + 12 >> 2] = $1;
  label$1 : {
   $4 = HEAP32[$0 + 20 >> 2];
   if ($4 >>> 0 > $1 >>> 0) {
    $1 = alloc__vec__Vec_T___remove__h3c8d676d0cefe866(HEAP32[$0 + 12 >> 2] + Math_imul($1, 12) | 0, $2);
    $2 = HEAP32[$0 + 32 >> 2];
    if ($2 >>> 0 <= $1 >>> 0) {
     break label$1
    }
    $2 = $0 + 24 | 0;
    alloc__vec__Vec_T___retain__h03ae853cde8d2bf8(HEAP32[$2 >> 2] + Math_imul($1, 12) | 0, $3 + 12 | 0);
    stretch__forest__Forest__mark_dirty__mark_dirty_impl__hdd964a1d064beeaf($0, $2, HEAP32[$3 + 12 >> 2]);
    global$0 = $3 + 16 | 0;
    return $1;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $1, $4);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051112, $1, $2);
  abort();
 }
 
 function alloc__vec__Vec_T___reserve__hc0f95e3f359a8226($0, $1) {
  var $2 = 0, $3 = 0;
  $2 = HEAP32[$0 + 4 >> 2];
  $3 = HEAP32[$0 + 8 >> 2];
  if ($2 - $3 >>> 0 < $1 >>> 0) {
   label$2 : {
    label$3 : {
     $1 = $1 + $3 | 0;
     if ($1 >>> 0 < $3 >>> 0) {
      break label$3
     }
     $3 = $2 << 1;
     $1 = $1 >>> 0 < $3 >>> 0 ? $3 : $1;
     if (($1 | 0) < 0) {
      break label$3
     }
     label$4 : {
      if ($2) {
       $2 = __rust_realloc(HEAP32[$0 >> 2], $2, 1, $1);
       if (!$2) {
        break label$4
       }
       break label$2;
      }
      $2 = __rust_alloc($1, 1);
      if ($2) {
       break label$2
      }
     }
     $0 = HEAP32[266546];
     FUNCTION_TABLE[$0 ? $0 : 56]($1, 1);
     abort();
    }
    alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
    abort();
   }
   HEAP32[$0 >> 2] = $2;
   HEAP32[$0 + 4 >> 2] = $1;
  }
 }
 
 function $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__hc1d85a0d86e2916e($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  $1 = $2 + 8 | 0;
  HEAP32[$1 + 4 >> 2] = HEAP32[$0 + 8 >> 2];
  HEAP32[$1 >> 2] = HEAP32[$0 >> 2];
  $0 = HEAP32[$2 + 12 >> 2];
  if ($0) {
   $1 = Math_imul($0, 288);
   $0 = HEAP32[$2 + 8 >> 2] + 216 | 0;
   while (1) {
    $3 = $0 + -4 | 0;
    $4 = HEAP32[$3 >> 2];
    label$3 : {
     if (!$4) {
      break label$3
     }
     FUNCTION_TABLE[HEAP32[HEAP32[$0 >> 2] >> 2]]($4);
     if (!HEAP32[HEAP32[$0 >> 2] + 4 >> 2]) {
      break label$3
     }
     dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$3 >> 2]);
    }
    $0 = $0 + 288 | 0;
    $1 = $1 + -288 | 0;
    if ($1) {
     continue
    }
    break;
   };
  }
  global$0 = $2 + 16 | 0;
 }
 
 function std__sync__mutex__Mutex_T___new__h15c6bb92134c3fd6($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = global$0 - 32 | 0;
  global$0 = $3;
  $6 = __rust_alloc(1, 1);
  if ($6) {
   HEAP8[$6 | 0] = 0;
   $2 = $1 + 8 | 0;
   $5 = HEAPU8[$2 + 4 | 0] | HEAPU8[$2 + 5 | 0] << 8 | (HEAPU8[$2 + 6 | 0] << 16 | HEAPU8[$2 + 7 | 0] << 24);
   $4 = $3 + 24 | 0;
   $2 = HEAPU8[$2 | 0] | HEAPU8[$2 + 1 | 0] << 8 | (HEAPU8[$2 + 2 | 0] << 16 | HEAPU8[$2 + 3 | 0] << 24);
   HEAP8[$4 | 0] = $2;
   HEAP8[$4 + 1 | 0] = $2 >>> 8;
   HEAP8[$4 + 2 | 0] = $2 >>> 16;
   HEAP8[$4 + 3 | 0] = $2 >>> 24;
   HEAP8[$4 + 4 | 0] = $5;
   HEAP8[$4 + 5 | 0] = $5 >>> 8;
   HEAP8[$4 + 6 | 0] = $5 >>> 16;
   HEAP8[$4 + 7 | 0] = $5 >>> 24;
   HEAP8[$0 + 4 | 0] = 0;
   HEAP32[$0 >> 2] = $6;
   $2 = HEAPU8[$1 + 4 | 0] | HEAPU8[$1 + 5 | 0] << 8 | (HEAPU8[$1 + 6 | 0] << 16 | HEAPU8[$1 + 7 | 0] << 24);
   $1 = HEAPU8[$1 | 0] | HEAPU8[$1 + 1 | 0] << 8 | (HEAPU8[$1 + 2 | 0] << 16 | HEAPU8[$1 + 3 | 0] << 24);
   HEAP8[$3 + 16 | 0] = $1;
   HEAP8[$3 + 17 | 0] = $1 >>> 8;
   HEAP8[$3 + 18 | 0] = $1 >>> 16;
   HEAP8[$3 + 19 | 0] = $1 >>> 24;
   HEAP8[$3 + 20 | 0] = $2;
   HEAP8[$3 + 21 | 0] = $2 >>> 8;
   HEAP8[$3 + 22 | 0] = $2 >>> 16;
   HEAP8[$3 + 23 | 0] = $2 >>> 24;
   $1 = HEAPU8[$3 + 17 | 0] | HEAPU8[$3 + 18 | 0] << 8 | (HEAPU8[$3 + 19 | 0] << 16 | HEAPU8[$3 + 20 | 0] << 24);
   $2 = HEAPU8[$3 + 13 | 0] | HEAPU8[$3 + 14 | 0] << 8 | (HEAPU8[$3 + 15 | 0] << 16 | HEAPU8[$3 + 16 | 0] << 24);
   HEAP8[$0 + 5 | 0] = $2;
   HEAP8[$0 + 6 | 0] = $2 >>> 8;
   HEAP8[$0 + 7 | 0] = $2 >>> 16;
   HEAP8[$0 + 8 | 0] = $2 >>> 24;
   HEAP8[$0 + 9 | 0] = $1;
   HEAP8[$0 + 10 | 0] = $1 >>> 8;
   HEAP8[$0 + 11 | 0] = $1 >>> 16;
   HEAP8[$0 + 12 | 0] = $1 >>> 24;
   $1 = $3 + 21 | 0;
   $4 = HEAPU8[$1 + 4 | 0] | HEAPU8[$1 + 5 | 0] << 8 | (HEAPU8[$1 + 6 | 0] << 16 | HEAPU8[$1 + 7 | 0] << 24);
   $2 = $0 + 13 | 0;
   $1 = HEAPU8[$1 | 0] | HEAPU8[$1 + 1 | 0] << 8 | (HEAPU8[$1 + 2 | 0] << 16 | HEAPU8[$1 + 3 | 0] << 24);
   HEAP8[$2 | 0] = $1;
   HEAP8[$2 + 1 | 0] = $1 >>> 8;
   HEAP8[$2 + 2 | 0] = $1 >>> 16;
   HEAP8[$2 + 3 | 0] = $1 >>> 24;
   HEAP8[$2 + 4 | 0] = $4;
   HEAP8[$2 + 5 | 0] = $4 >>> 8;
   HEAP8[$2 + 6 | 0] = $4 >>> 16;
   HEAP8[$2 + 7 | 0] = $4 >>> 24;
   $0 = $0 + 20 | 0;
   $1 = $3 + 28 | 0;
   $1 = HEAPU8[$1 | 0] | HEAPU8[$1 + 1 | 0] << 8 | (HEAPU8[$1 + 2 | 0] << 16 | HEAPU8[$1 + 3 | 0] << 24);
   HEAP8[$0 | 0] = $1;
   HEAP8[$0 + 1 | 0] = $1 >>> 8;
   HEAP8[$0 + 2 | 0] = $1 >>> 16;
   HEAP8[$0 + 3 | 0] = $1 >>> 24;
   global$0 = $3 + 32 | 0;
   return;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](1, 1);
  abort();
 }
 
 function $core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = HEAP32[$0 >> 2];
  $3 = HEAP32[$1 >> 2];
  $2 = $3 >>> 0 < $2 >>> 0 ? $2 : $3;
  if ($2 >>> 0 < 41) {
   $2 = $2 << 2;
   label$2 : {
    label$3 : {
     while (1) {
      if (!$2) {
       break label$3
      }
      if (!$2) {
       break label$2
      }
      $3 = $0 + $2 | 0;
      $4 = $1 + $2 | 0;
      $2 = $2 + -4 | 0;
      $3 = HEAP32[$3 >> 2];
      $4 = HEAP32[$4 >> 2];
      if (($3 | 0) == ($4 | 0)) {
       continue
      }
      break;
     };
     return $3 >>> 0 < $4 >>> 0 ? -1 : 1;
    }
    return $2 ? -1 : 0;
   }
   return 1;
  }
  core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($2, 40);
  abort();
 }
 
 function stretch_layout__Layout__child__h3276324f50fb3c61($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $3 = global$0 - 16 | 0;
  global$0 = $3;
  $4 = HEAP32[$1 + 28 >> 2];
  if ($4 >>> 0 > $2 >>> 0) {
   $1 = HEAP32[$1 + 20 >> 2] + ($2 << 5) | 0;
   $2 = HEAP32[$1 >> 2];
   $4 = HEAP32[$1 + 4 >> 2];
   $5 = HEAP32[$1 + 12 >> 2];
   $6 = HEAP32[$1 + 8 >> 2];
   $7 = HEAP32[$1 + 16 >> 2];
   $alloc__vec__Vec_T__20as_20core__clone__Clone___clone__ha7ce6132966c4db5($3, $1 + 20 | 0);
   HEAP32[$0 + 16 >> 2] = $7;
   HEAP32[$0 + 8 >> 2] = $6;
   HEAP32[$0 + 12 >> 2] = $5;
   HEAP32[$0 >> 2] = $2;
   HEAP32[$0 + 4 >> 2] = $4;
   $1 = HEAP32[$3 + 4 >> 2];
   HEAP32[$0 + 20 >> 2] = HEAP32[$3 >> 2];
   HEAP32[$0 + 24 >> 2] = $1;
   HEAP32[$0 + 28 >> 2] = HEAP32[$3 + 8 >> 2];
   global$0 = $3 + 16 | 0;
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1048740, $2, $4);
  abort();
 }
 
 function wasm_bindgen__convert__closures__invoke3_mut__h24492714bab77b7d($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $6 = 0;
  $6 = global$0 - 32 | 0;
  global$0 = $6;
  if ($1) {
   FUNCTION_TABLE[HEAP32[$2 + 12 >> 2]]($6, $1, $3, $4, $5);
   $1 = HEAP32[$6 + 8 >> 2];
   HEAP32[$6 + 24 >> 2] = $1;
   $2 = HEAP32[$6 + 4 >> 2];
   HEAP32[$6 + 16 >> 2] = HEAP32[$6 >> 2];
   HEAP32[$6 + 20 >> 2] = $2;
   $2 = HEAP32[$6 + 20 >> 2];
   if (($2 | 0) != ($1 | 0)) {
    alloc__raw_vec__RawVec_T_2cA___shrink_to_fit__h1b37de0da3b282bb($6 + 16 | 0, $1);
    $2 = HEAP32[$6 + 20 >> 2];
   }
   $1 = HEAP32[$6 + 16 >> 2];
   HEAP32[$0 + 4 >> 2] = $2;
   HEAP32[$0 >> 2] = $1;
   global$0 = $6 + 32 | 0;
   return;
  }
  wasm_bindgen__throw_str__hab9714ece8d522f1(1051788, 48);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___shrink_to_fit__h1b37de0da3b282bb($0, $1) {
  var $2 = 0, $3 = 0;
  label$1 : {
   $2 = HEAP32[$0 + 4 >> 2];
   if ($2 >>> 0 >= $1 >>> 0) {
    label$3 : {
     label$4 : {
      if ($1) {
       if (($1 | 0) == ($2 | 0)) {
        break label$3
       }
       $3 = $2 << 2;
       $2 = $1 << 2;
       $3 = __rust_realloc(HEAP32[$0 >> 2], $3, 4, $2);
       if (!$3) {
        break label$1
       }
       HEAP32[$0 >> 2] = $3;
       break label$4;
      }
      if ($2) {
       dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
      }
      HEAP32[$0 >> 2] = 4;
      $1 = 0;
     }
     HEAP32[$0 + 4 >> 2] = $1;
    }
    return;
   }
   core__panicking__panic__h2d0bc53a963fb996(1051896);
   abort();
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($2, 4);
  abort();
 }
 
 function $stretch_layout__Layout_20as_20wasm_bindgen__convert__traits__FromWasmAbi___from_abi__h1f55d298367ce725($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $3 = global$0 - 48 | 0;
  global$0 = $3;
  label$1 : {
   if ($1) {
    if (HEAP32[$1 >> 2]) {
     break label$1
    }
    HEAP32[$1 >> 2] = 0;
    memcpy($3 + 8 | 0, $1, 36);
    $2 = $3 + 36 | 0;
    $5 = HEAP32[$2 + 4 >> 2];
    $4 = $0 + 24 | 0;
    HEAP32[$4 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$4 + 4 >> 2] = $5;
    $2 = $3 + 28 | 0;
    $5 = HEAP32[$2 + 4 >> 2];
    $4 = $0 + 16 | 0;
    HEAP32[$4 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$4 + 4 >> 2] = $5;
    $2 = $3 + 20 | 0;
    $5 = HEAP32[$2 + 4 >> 2];
    $4 = $0 + 8 | 0;
    HEAP32[$4 >> 2] = HEAP32[$2 >> 2];
    HEAP32[$4 + 4 >> 2] = $5;
    $2 = HEAP32[$3 + 16 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$3 + 12 >> 2];
    HEAP32[$0 + 4 >> 2] = $2;
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($1);
    global$0 = $3 + 48 | 0;
    return;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function core__num__bignum__Big32x40__from_u64__hb47af5bbea157ebc($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  $3 = global$0 - 160 | 0;
  global$0 = $3;
  $3 = memset($3, 0, 160);
  label$1 : {
   if ($1 | $2) {
    $5 = $3;
    while (1) {
     if ($4 >>> 0 >= 40) {
      break label$1
     }
     HEAP32[$5 >> 2] = $1;
     $5 = $5 + 4 | 0;
     $4 = $4 + 1 | 0;
     $1 = $2;
     $2 = 0;
     if ($1 | $2) {
      continue
     }
     break;
    };
   }
   HEAP32[$0 >> 2] = $4;
   memcpy($0 + 4 | 0, $3, 160);
   global$0 = $3 + 160 | 0;
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1065772, $4, 40);
  abort();
 }
 
 function core__num__dec2flt__num__get_bits__h41e84022231dc9df($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  if ($2 - $1 >>> 0 <= 64) {
   label$2 : {
    if ($2 >>> 0 > $1 >>> 0) {
     while (1) {
      $2 = $2 + -1 | 0;
      $4 = $2 >>> 5;
      if ($2 >>> 0 >= 1280) {
       break label$2
      }
      $5 = $5 << 1 | $3 >>> 31;
      $3 = HEAP32[(($4 << 2) + $0 | 0) + 4 >> 2] >>> ($2 & 31) & 1 | $3 << 1;
      if ($2 >>> 0 > $1 >>> 0) {
       continue
      }
      break;
     }
    }
    i64toi32_i32$HIGH_BITS = $5;
    return $3;
   }
   core__panicking__panic_bounds_check__h0537ade040df571e(1065788, $4, 40);
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1059908);
  abort();
 }
 
 function $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____spec_extend__hd90720e4237c5918($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  alloc__raw_vec__RawVec_T_2cA___reserve__h9f93e4f95dcb69eb($0, HEAP32[$0 + 8 >> 2], HEAP32[$1 + 4 >> 2] - HEAP32[$1 >> 2] >>> 2);
  $4 = HEAP32[$0 >> 2];
  $3 = HEAP32[$0 + 8 >> 2];
  HEAP32[$2 + 8 >> 2] = HEAP32[$1 + 8 >> 2];
  $5 = HEAP32[$1 + 4 >> 2];
  HEAP32[$2 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$2 + 4 >> 2] = $5;
  HEAP32[$2 + 24 >> 2] = $3;
  HEAP32[$2 + 20 >> 2] = $0 + 8;
  HEAP32[$2 + 16 >> 2] = ($3 << 4) + $4;
  $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__he17f60e95f07a9cc($2, $2 + 16 | 0);
  global$0 = $2 + 32 | 0;
 }
 
 function core__num__diy_float__Fp__mul__ha783f4c77c52b6c1($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  HEAP16[$0 + 8 >> 1] = (HEAPU16[$1 + 8 >> 1] + HEAPU16[$2 + 8 >> 1] | 0) - -64;
  $7 = $0;
  $0 = HEAP32[$2 + 4 >> 2];
  $8 = HEAP32[$2 >> 2];
  $6 = HEAP32[$1 >> 2];
  $3 = HEAP32[$1 + 4 >> 2];
  $2 = __wasm_i64_mul($8, 0, $3);
  $5 = i64toi32_i32$HIGH_BITS;
  $1 = $5;
  $5 = $0;
  $0 = 0;
  $4 = __wasm_i64_mul($5, $0, $3);
  $3 = $1 + $4 | 0;
  $1 = i64toi32_i32$HIGH_BITS;
  $1 = $3 >>> 0 < $4 >>> 0 ? $1 + 1 | 0 : $1;
  $0 = __wasm_i64_mul($5, 0, $6);
  $4 = i64toi32_i32$HIGH_BITS;
  $5 = $4 + $3 | 0;
  $3 = $5;
  $4 = $3 >>> 0 < $4 >>> 0 ? $1 + 1 | 0 : $1;
  $1 = $2;
  __wasm_i64_mul($8, 0, $6);
  $2 = i64toi32_i32$HIGH_BITS;
  $6 = $1 + $2 | 0;
  $1 = $6 >>> 0 < $2 >>> 0 ? 1 : 0;
  $2 = $0 + $6 | 0;
  $1 = $2 >>> 0 < $0 >>> 0 ? $1 + 1 | 0 : $1;
  if ($2 + -2147483648 >>> 0 < 2147483648) {
   $1 = $1 + 1 | 0
  }
  $0 = $1;
  $1 = $1 + $3 | 0;
  $3 = $4;
  HEAP32[$7 >> 2] = $1;
  HEAP32[$7 + 4 >> 2] = $1 >>> 0 < $0 >>> 0 ? $3 + 1 | 0 : $3;
 }
 
 function hashbrown__raw__RawTable_T___reserve_rehash__h244ef51122edaa64($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = HEAP32[$0 + 16 >> 2];
  $3 = $2 + 1 | 0;
  if ($3 >>> 0 >= $2 >>> 0) {
   label$3 : {
    if ($3 >>> 0 >= $2 >>> 0) {
     $4 = $3;
     $2 = HEAP32[$0 >> 2];
     if ($2 >>> 0 >= 8) {
      $2 = Math_imul($2 + 1 >>> 3, 7)
     }
     if ($4 >>> 0 >= $2 >>> 1 >>> 0) {
      break label$3
     }
     hashbrown__raw__RawTable_T___rehash_in_place__h29ab772ddb92169d($0, $1);
    }
    return;
   }
   hashbrown__raw__RawTable_T___resize__h4d6b531161ae3e7d($0, $3, $1);
   return;
  }
  core__panicking__panic__h2d0bc53a963fb996(1050896);
  abort();
 }
 
 function hashbrown__raw__RawTable_T___reserve_rehash__he92b1e7507f00a16($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = HEAP32[$0 + 16 >> 2];
  $3 = $2 + 1 | 0;
  if ($3 >>> 0 >= $2 >>> 0) {
   label$3 : {
    if ($3 >>> 0 >= $2 >>> 0) {
     $4 = $3;
     $2 = HEAP32[$0 >> 2];
     if ($2 >>> 0 >= 8) {
      $2 = Math_imul($2 + 1 >>> 3, 7)
     }
     if ($4 >>> 0 >= $2 >>> 1 >>> 0) {
      break label$3
     }
     hashbrown__raw__RawTable_T___rehash_in_place__hfbd64bd86085452e($0, $1);
    }
    return;
   }
   hashbrown__raw__RawTable_T___resize__h49539e222be8da42($0, $3, $1);
   return;
  }
  core__panicking__panic__h2d0bc53a963fb996(1050896);
  abort();
 }
 
 function core__num__bignum__Big32x40__mul_digits__h7d68f43b76f883f5($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = global$0 - 160 | 0;
  global$0 = $2;
  $2 = memset($2, 0, 160);
  $3 = HEAP32[$0 >> 2];
  if ($3 >>> 0 < 41) {
   $4 = $0 + 4 | 0;
   label$2 : {
    if ($3 >>> 0 < 2) {
     $1 = core__num__bignum__Big32x40__mul_digits__mul_inner__h022b103c0ead7ba4($2, $4, $3, $1, 2);
     break label$2;
    }
    $1 = core__num__bignum__Big32x40__mul_digits__mul_inner__h022b103c0ead7ba4($2, $1, 2, $4, $3);
   }
   memcpy($4, $2, 160);
   HEAP32[$0 >> 2] = $1;
   global$0 = $2 + 160 | 0;
   return;
  }
  core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($3, 40);
  abort();
 }
 
 function stretch__forest__Forest__with_capacity__h017f7c44ebc5436e($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $1 = global$0 - 32 | 0;
  global$0 = $1;
  alloc__raw_vec__RawVec_T_2cA___allocate_in__h46a3f6103fca0798($1 + 24 | 0);
  $2 = HEAP32[$1 + 24 >> 2];
  $3 = HEAP32[$1 + 28 >> 2];
  alloc__raw_vec__RawVec_T_2cA___allocate_in__h6604dfdc71620874($1 + 16 | 0);
  $4 = HEAP32[$1 + 16 >> 2];
  $5 = HEAP32[$1 + 20 >> 2];
  alloc__raw_vec__RawVec_T_2cA___allocate_in__h6604dfdc71620874($1 + 8 | 0);
  $6 = HEAP32[$1 + 8 >> 2];
  $7 = HEAP32[$1 + 12 >> 2];
  HEAP32[$0 + 32 >> 2] = 0;
  HEAP32[$0 + 20 >> 2] = 0;
  HEAP32[$0 + 12 >> 2] = $4;
  HEAP32[$0 + 16 >> 2] = $5;
  HEAP32[$0 + 8 >> 2] = 0;
  HEAP32[$0 >> 2] = $2;
  HEAP32[$0 + 4 >> 2] = $3;
  HEAP32[$0 + 24 >> 2] = $6;
  HEAP32[$0 + 28 >> 2] = $7;
  global$0 = $1 + 32 | 0;
 }
 
 function $core__ops__range__Range_Idx__20as_20core__fmt__Debug___fmt__h6b10d5f1af7ade3c($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  label$1 : {
   if (!core__fmt__num___impl_20core__fmt__Debug_20for_20usize___fmt__h02e757fe1749b44e($0, $1)) {
    $3 = HEAP32[$1 + 28 >> 2];
    $4 = HEAP32[$1 + 24 >> 2];
    HEAP32[$2 + 28 >> 2] = 0;
    HEAP32[$2 + 24 >> 2] = 1053460;
    HEAP32[$2 + 12 >> 2] = 1;
    HEAP32[$2 + 16 >> 2] = 0;
    HEAP32[$2 + 8 >> 2] = 1060180;
    if (!core__fmt__write__h85435378f7fd6609($4, $3, $2 + 8 | 0)) {
     break label$1
    }
   }
   global$0 = $2 + 32 | 0;
   return 1;
  }
  $0 = core__fmt__num___impl_20core__fmt__Debug_20for_20usize___fmt__h02e757fe1749b44e($0 + 4 | 0, $1);
  global$0 = $2 + 32 | 0;
  return $0 | 0;
 }
 
 function alloc__raw_vec__RawVec_T_2cA___allocate_in__h2c60f5d3edabcb0a($0, $1) {
  var $2 = 0, $3 = 0;
  label$1 : {
   label$2 : {
    if (!($1 >>> 27)) {
     $2 = $1 << 5;
     if (($2 | 0) <= -1) {
      break label$2
     }
     label$4 : {
      if (!$2) {
       $3 = 4;
       break label$4;
      }
      $3 = __rust_alloc($2, 4);
      if (!$3) {
       break label$1
      }
     }
     HEAP32[$0 + 4 >> 2] = $1;
     HEAP32[$0 >> 2] = $3;
     return;
    }
    alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__h9ed5f03df2fd77d8();
    abort();
   }
   alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__h9ed5f03df2fd77d8();
   abort();
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($2, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___allocate_in__h37e24568f3387d91($0) {
  var $1 = 0;
  $1 = __rust_alloc(4, 4);
  if ($1) {
   HEAP32[$0 + 4 >> 2] = 1;
   HEAP32[$0 >> 2] = $1;
   return;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](4, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___allocate_in__h3e84c34d6de10075($0) {
  var $1 = 0;
  $1 = __rust_alloc(8, 4);
  if ($1) {
   HEAP32[$0 + 4 >> 2] = 1;
   HEAP32[$0 >> 2] = $1;
   return;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](8, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___allocate_in__h46a3f6103fca0798($0) {
  var $1 = 0, $2 = 0;
  $1 = __wasm_i64_mul(16, 0, 288);
  label$1 : {
   label$2 : {
    if (!i64toi32_i32$HIGH_BITS) {
     if (($1 | 0) <= -1) {
      break label$2
     }
     label$4 : {
      if (!$1) {
       $2 = 4;
       break label$4;
      }
      $2 = __rust_alloc($1, 4);
      if (!$2) {
       break label$1
      }
     }
     HEAP32[$0 + 4 >> 2] = 16;
     HEAP32[$0 >> 2] = $2;
     return;
    }
    alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__h9ed5f03df2fd77d8();
    abort();
   }
   alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__h9ed5f03df2fd77d8();
   abort();
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($1, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___allocate_in__h515997524f025491($0) {
  var $1 = 0, $2 = 0;
  $1 = __wasm_i64_mul(1, 0, 192);
  label$1 : {
   label$2 : {
    if (!i64toi32_i32$HIGH_BITS) {
     if (($1 | 0) <= -1) {
      break label$2
     }
     label$4 : {
      if (!$1) {
       $2 = 4;
       break label$4;
      }
      $2 = __rust_alloc($1, 4);
      if (!$2) {
       break label$1
      }
     }
     HEAP32[$0 + 4 >> 2] = 1;
     HEAP32[$0 >> 2] = $2;
     return;
    }
    alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__h9ed5f03df2fd77d8();
    abort();
   }
   alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__h9ed5f03df2fd77d8();
   abort();
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($1, 4);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___allocate_in__h6604dfdc71620874($0) {
  var $1 = 0, $2 = 0;
  $1 = __wasm_i64_mul(16, 0, 12);
  label$1 : {
   label$2 : {
    if (!i64toi32_i32$HIGH_BITS) {
     if (($1 | 0) <= -1) {
      break label$2
     }
     label$4 : {
      if (!$1) {
       $2 = 4;
       break label$4;
      }
      $2 = __rust_alloc($1, 4);
      if (!$2) {
       break label$1
      }
     }
     HEAP32[$0 + 4 >> 2] = 16;
     HEAP32[$0 >> 2] = $2;
     return;
    }
    alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__h9ed5f03df2fd77d8();
    abort();
   }
   alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__h9ed5f03df2fd77d8();
   abort();
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56]($1, 4);
  abort();
 }
 
 function core__result__unwrap_failed__hd436cac2acefb838($0, $1) {
  var $2 = 0;
  $2 = global$0 + -64 | 0;
  global$0 = $2;
  HEAP32[$2 + 12 >> 2] = 43;
  HEAP32[$2 + 8 >> 2] = 1051188;
  HEAP8[$2 + 20 | 0] = $1;
  HEAP32[$2 + 16 >> 2] = $0;
  HEAP32[$2 + 60 >> 2] = 15;
  HEAP32[$2 + 44 >> 2] = 2;
  HEAP32[$2 + 52 >> 2] = 7;
  HEAP32[$2 + 28 >> 2] = 2;
  HEAP32[$2 + 32 >> 2] = 0;
  HEAP32[$2 + 24 >> 2] = 1050132;
  HEAP32[$2 + 56 >> 2] = $2 + 16;
  HEAP32[$2 + 48 >> 2] = $2 + 8;
  HEAP32[$2 + 40 >> 2] = $2 + 48;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($2 + 24 | 0, 1050172);
  abort();
 }
 
 function alloc__vec__Vec_T___retain__h03ae853cde8d2bf8($0, $1) {
  var $2 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  HEAP32[$2 + 20 >> 2] = $1;
  $1 = HEAP32[$0 + 8 >> 2];
  HEAP32[$0 + 8 >> 2] = 0;
  HEAP32[$2 + 28 >> 2] = 0;
  HEAP32[$2 + 32 >> 2] = 0;
  HEAP32[$2 + 24 >> 2] = $0;
  HEAP32[$2 + 36 >> 2] = $1;
  HEAP32[$2 + 40 >> 2] = $2 + 20;
  while (1) {
   $alloc__vec__DrainFilter_T_2cF__20as_20core__iter__traits__iterator__Iterator___next__h24d94adb72f98975($2 + 8 | 0, $2 + 24 | 0);
   if (HEAP32[$2 + 8 >> 2] == 1) {
    continue
   }
   break;
  };
  HEAP32[HEAP32[$2 + 24 >> 2] + 8 >> 2] = HEAP32[$2 + 36 >> 2] - HEAP32[$2 + 32 >> 2];
  global$0 = $2 + 48 | 0;
 }
 
 function core__result__unwrap_failed__hf393a2f4cae996d3($0, $1) {
  var $2 = 0;
  $2 = global$0 + -64 | 0;
  global$0 = $2;
  HEAP32[$2 + 12 >> 2] = 43;
  HEAP32[$2 + 8 >> 2] = 1052388;
  HEAP8[$2 + 20 | 0] = $1;
  HEAP32[$2 + 16 >> 2] = $0;
  HEAP32[$2 + 60 >> 2] = 54;
  HEAP32[$2 + 44 >> 2] = 2;
  HEAP32[$2 + 52 >> 2] = 52;
  HEAP32[$2 + 28 >> 2] = 2;
  HEAP32[$2 + 32 >> 2] = 0;
  HEAP32[$2 + 24 >> 2] = 1052332;
  HEAP32[$2 + 56 >> 2] = $2 + 16;
  HEAP32[$2 + 48 >> 2] = $2 + 8;
  HEAP32[$2 + 40 >> 2] = $2 + 48;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($2 + 24 | 0, 1052372);
  abort();
 }
 
 function core__fmt__builders__DebugStruct__finish__hc40a0d34053a01e6($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  $1 = HEAPU8[$0 + 4 | 0];
  if (HEAPU8[$0 + 5 | 0]) {
   $2 = $1 & 255;
   $3 = $0 + 4 | 0;
   $1 = 1;
   label$2 : {
    if ($2) {
     break label$2
    }
    $1 = HEAP32[$0 >> 2];
    $2 = HEAP32[HEAP32[$1 + 28 >> 2] + 12 >> 2];
    $0 = HEAP32[$1 + 24 >> 2];
    if (!(HEAPU8[$1 | 0] & 4)) {
     $1 = FUNCTION_TABLE[$2]($0, 1061115, 2) | 0;
     break label$2;
    }
    $1 = FUNCTION_TABLE[$2]($0, 1061114, 1) | 0;
   }
   HEAP8[$3 | 0] = $1;
  }
  return ($1 & 255) != 0;
 }
 
 function stretch_layout__has_key__hf2b3c8fbd22a58c3($0, $1, $2) {
  var $3 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $3 = global$0 - 16 | 0;
  global$0 = $3;
  (wasm2js_i32$0 = $3, wasm2js_i32$1 = __wbindgen_string_new($1 | 0, $2 | 0) | 0), HEAP32[wasm2js_i32$0 + 12 >> 2] = wasm2js_i32$1;
  js_sys__Reflect__has__h09c742594f56720f($3, $0, $3 + 12 | 0);
  $0 = HEAPU8[$3 + 1 | 0] != 0;
  $1 = HEAPU8[$3 | 0];
  $2 = !$1;
  label$1 : {
   if (!$1) {
    break label$1
   }
   $1 = HEAP32[$3 + 4 >> 2];
   if ($1 >>> 0 < 36) {
    break label$1
   }
   __wbindgen_object_drop_ref($1 | 0);
  }
  $0 = $0 & $2;
  $1 = HEAP32[$3 + 12 >> 2];
  if ($1 >>> 0 >= 36) {
   __wbindgen_object_drop_ref($1 | 0)
  }
  global$0 = $3 + 16 | 0;
  return $0;
 }
 
 function js_sys__Reflect__has__h09c742594f56720f($0, $1, $2) {
  var $3 = 0;
  $3 = global$0 - 16 | 0;
  global$0 = $3;
  $1 = __wbg_has_27f12e65cef14759(HEAP32[$1 >> 2], HEAP32[$2 >> 2]) | 0;
  wasm_bindgen____rt__take_last_exception__h58f7370a4cce4e97($3 + 8 | 0);
  $2 = HEAP32[$3 + 8 >> 2];
  label$1 : {
   if ($2) {
    $1 = HEAP32[$3 + 12 >> 2];
    HEAP8[$0 | 0] = 1;
    HEAP32[$0 + 4 >> 2] = $1;
    if (($2 | 0) == 1) {
     break label$1
    }
    if ($1 >>> 0 <= 35) {
     break label$1
    }
    __wbindgen_object_drop_ref($1 | 0);
    break label$1;
   }
   HEAP8[$0 | 0] = 0;
   HEAP8[$0 + 1 | 0] = ($1 | 0) != 0;
  }
  global$0 = $3 + 16 | 0;
 }
 
 function memmove($0, $1, $2) {
  label$1 : {
   if ($1 >>> 0 < $0 >>> 0) {
    if (!$2) {
     break label$1
    }
    $1 = $1 + -1 | 0;
    $0 = $0 + -1 | 0;
    while (1) {
     HEAP8[$0 + $2 | 0] = HEAPU8[$1 + $2 | 0];
     $2 = $2 + -1 | 0;
     if ($2) {
      continue
     }
     break;
    };
    break label$1;
   }
   if (!$2) {
    break label$1
   }
   while (1) {
    HEAP8[$0 | 0] = HEAPU8[$1 | 0];
    $1 = $1 + 1 | 0;
    $0 = $0 + 1 | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue
    }
    break;
   };
  }
 }
 
 function __wbg_layout_free($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0;
  $1 = global$0 - 32 | 0;
  global$0 = $1;
  $stretch_layout__Layout_20as_20wasm_bindgen__convert__traits__FromWasmAbi___from_abi__h1f55d298367ce725($1, $0);
  $3 = HEAP32[$1 + 20 >> 2];
  $0 = HEAP32[$1 + 28 >> 2];
  if ($0) {
   $2 = $0 << 5;
   $0 = $3;
   while (1) {
    core__ptr__real_drop_in_place__h1f9c131b05839678($0);
    $0 = $0 + 32 | 0;
    $2 = $2 + -32 | 0;
    if ($2) {
     continue
    }
    break;
   };
  }
  if (HEAP32[$1 + 24 >> 2]) {
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($3)
  }
  global$0 = $1 + 32 | 0;
 }
 
 function $stretch__Error_20as_20core__fmt__Debug___fmt__h8d59d6d7ecfcc765($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  $3 = $0 + 4 | 0;
  label$1 : {
   if (HEAP32[$0 >> 2] == 1) {
    core__fmt__Formatter__debug_tuple__h9b1f009ef608acf0($2, $1, 1051736, 7);
    HEAP32[$2 + 12 >> 2] = $3;
    core__fmt__builders__DebugTuple__field__hb9640642e98eeefe($2, $2 + 12 | 0, 1051744);
    break label$1;
   }
   core__fmt__Formatter__debug_tuple__h9b1f009ef608acf0($2, $1, 1051760, 11);
   HEAP32[$2 + 12 >> 2] = $3;
   core__fmt__builders__DebugTuple__field__hb9640642e98eeefe($2, $2 + 12 | 0, 1051772);
  }
  $0 = core__fmt__builders__DebugTuple__finish__h0e3afe7bbfe02439($2);
  global$0 = $2 + 16 | 0;
  return $0 | 0;
 }
 
 function js_sys__Function__call2__h7c4e3107f8362d5f($0, $1, $2, $3, $4) {
  var $5 = 0;
  $5 = global$0 - 16 | 0;
  global$0 = $5;
  $1 = __wbg_call_98582f5ce3d4c1ab(HEAP32[$1 >> 2], HEAP32[$2 >> 2], HEAP32[$3 >> 2], HEAP32[$4 >> 2]) | 0;
  wasm_bindgen____rt__take_last_exception__h58f7370a4cce4e97($5 + 8 | 0);
  $3 = HEAP32[$5 + 8 >> 2];
  label$1 : {
   if ($3) {
    $1 = HEAP32[$5 + 12 >> 2];
    $2 = 1;
    if (($3 | 0) == 1) {
     break label$1
    }
    if ($1 >>> 0 <= 35) {
     break label$1
    }
    __wbindgen_object_drop_ref($1 | 0);
    break label$1;
   }
   $2 = 0;
  }
  HEAP32[$0 + 4 >> 2] = $1;
  HEAP32[$0 >> 2] = $2;
  global$0 = $5 + 16 | 0;
 }
 
 function core__num__dec2flt__algorithm__round_by_remainder__h3d86a91325e59e59($0, $1, $2, $3) {
  var $4 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  $4 = global$0 - 176 | 0;
  global$0 = $4;
  memcpy($4 + 8 | 0, $0, 164);
  core__num__bignum__Big32x40__sub__ha94c81ecf8eacd8a($4 + 8 | 0, $1);
  label$1 : {
   if (($core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($1, $4 + 8 | 0) & 255) == 255) {
    break label$1
   }
   if (wasm2js_i32$0 = 0, wasm2js_i32$1 = ($core__num__bignum__Big32x40_20as_20core__cmp__Ord___cmp__h9d6c8e8935c913cf($1, $4 + 8 | 0) & 255) != 1, wasm2js_i32$2 = $2 & 1, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1) {
    break label$1
   }
   $3 = core__num__dec2flt__rawfp__next_float__h96c2fc47f7b351c4($3);
  }
  global$0 = $4 + 176 | 0;
  return $3;
 }
 
 function core__result__unwrap_failed__h2450ec3de4884319() {
  var $0 = 0, $1 = 0;
  $0 = global$0 + -64 | 0;
  global$0 = $0;
  HEAP32[$0 + 12 >> 2] = 16;
  HEAP32[$0 + 8 >> 2] = 1048576;
  HEAP32[$0 + 4 >> 2] = 7;
  HEAP32[$0 >> 2] = $0 + 8;
  HEAP32[$0 + 52 >> 2] = 8;
  HEAP32[$0 + 36 >> 2] = 2;
  HEAP32[$0 + 20 >> 2] = 2;
  HEAP32[$0 + 24 >> 2] = 0;
  HEAP32[$0 + 16 >> 2] = 1049876;
  $1 = HEAP32[$0 + 4 >> 2];
  HEAP32[$0 + 40 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$0 + 44 >> 2] = $1;
  HEAP32[$0 + 48 >> 2] = $0 + 56;
  HEAP32[$0 + 32 >> 2] = $0 + 40;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($0 + 16 | 0, 1049916);
  abort();
 }
 
 function core__result__unwrap_failed__h617b15fdce22e446() {
  var $0 = 0, $1 = 0;
  $0 = global$0 + -64 | 0;
  global$0 = $0;
  HEAP32[$0 + 12 >> 2] = 24;
  HEAP32[$0 + 8 >> 2] = 1048592;
  HEAP32[$0 + 4 >> 2] = 7;
  HEAP32[$0 >> 2] = $0 + 8;
  HEAP32[$0 + 52 >> 2] = 9;
  HEAP32[$0 + 36 >> 2] = 2;
  HEAP32[$0 + 20 >> 2] = 2;
  HEAP32[$0 + 24 >> 2] = 0;
  HEAP32[$0 + 16 >> 2] = 1049876;
  $1 = HEAP32[$0 + 4 >> 2];
  HEAP32[$0 + 40 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$0 + 44 >> 2] = $1;
  HEAP32[$0 + 48 >> 2] = $0 + 56;
  HEAP32[$0 + 32 >> 2] = $0 + 40;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($0 + 16 | 0, 1049916);
  abort();
 }
 
 function core__result__unwrap_failed__heaed4f1dd7f83a68($0) {
  var $1 = 0, $2 = 0;
  $1 = global$0 + -64 | 0;
  global$0 = $1;
  HEAP32[$1 + 20 >> 2] = 43;
  HEAP32[$1 + 16 >> 2] = 1048696;
  $2 = $1 + 8 | 0;
  HEAP32[$2 + 4 >> 2] = 7;
  HEAP32[$2 >> 2] = $1 + 16;
  HEAP32[$1 + 60 >> 2] = 10;
  HEAP32[$1 + 44 >> 2] = 2;
  HEAP32[$1 + 56 >> 2] = $0;
  HEAP32[$1 + 28 >> 2] = 2;
  HEAP32[$1 + 32 >> 2] = 0;
  HEAP32[$1 + 24 >> 2] = 1049876;
  $0 = HEAP32[$1 + 12 >> 2];
  HEAP32[$1 + 48 >> 2] = HEAP32[$1 + 8 >> 2];
  HEAP32[$1 + 52 >> 2] = $0;
  HEAP32[$1 + 40 >> 2] = $1 + 48;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($1 + 24 | 0, 1049916);
  abort();
 }
 
 function alloc__sync__Arc_T___drop_slow__h51a4fa13661dd7d4($0) {
  var $1 = 0, $2 = 0;
  $1 = HEAP32[$0 >> 2];
  $2 = HEAP32[$1 + 16 >> 2];
  label$1 : {
   if (!$2) {
    break label$1
   }
   HEAP8[$2 | 0] = 0;
   if (!HEAP32[$1 + 20 >> 2]) {
    break label$1
   }
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$1 + 16 >> 2]);
  }
  dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$1 + 28 >> 2]);
  $2 = HEAP32[$0 >> 2];
  $1 = HEAP32[$2 + 4 >> 2];
  HEAP32[$2 + 4 >> 2] = $1 + -1;
  if (($1 | 0) == 1) {
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
  }
 }
 
 function $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__ha784d13dacaebb46($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = Math_fround(0);
  label$1 : {
   $1 = HEAP32[$0 >> 2];
   $3 = HEAP32[$0 + 4 >> 2];
   if (($1 | 0) != ($3 | 0)) {
    $4 = HEAP32[HEAP32[$0 + 8 >> 2] >> 2];
    $0 = HEAP32[$4 + 8 >> 2];
    while (1) {
     $5 = HEAP32[$1 >> 2];
     $2 = HEAP32[$5 >> 2];
     if ($0 >>> 0 <= $2 >>> 0) {
      break label$1
     }
     $6 = Math_fround($6 + Math_fround(HEAPF32[$5 + 136 >> 2] * HEAPF32[(HEAP32[$4 >> 2] + Math_imul($2, 288) | 0) + 132 >> 2]));
     $1 = $1 + 4 | 0;
     if (($3 | 0) != ($1 | 0)) {
      continue
     }
     break;
    };
   }
   return $6;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051560, $2, $0);
  abort();
 }
 
 function core__result__unwrap_failed__hb4247b58d8dfe44d() {
  var $0 = 0;
  $0 = global$0 + -64 | 0;
  global$0 = $0;
  HEAP32[$0 + 12 >> 2] = 57;
  HEAP32[$0 + 8 >> 2] = 1050264;
  HEAP32[$0 + 52 >> 2] = 14;
  HEAP32[$0 + 36 >> 2] = 2;
  HEAP32[$0 + 44 >> 2] = 7;
  HEAP32[$0 + 20 >> 2] = 2;
  HEAP32[$0 + 24 >> 2] = 0;
  HEAP32[$0 + 16 >> 2] = 1050132;
  HEAP32[$0 + 48 >> 2] = $0 + 56;
  HEAP32[$0 + 40 >> 2] = $0 + 8;
  HEAP32[$0 + 32 >> 2] = $0 + 40;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($0 + 16 | 0, 1050172);
  abort();
 }
 
 function core__result__unwrap_failed__hdc9bb8ca94a20a33() {
  var $0 = 0;
  $0 = global$0 + -64 | 0;
  global$0 = $0;
  HEAP32[$0 + 12 >> 2] = 16;
  HEAP32[$0 + 8 >> 2] = 1052072;
  HEAP32[$0 + 52 >> 2] = 8;
  HEAP32[$0 + 36 >> 2] = 2;
  HEAP32[$0 + 44 >> 2] = 52;
  HEAP32[$0 + 20 >> 2] = 2;
  HEAP32[$0 + 24 >> 2] = 0;
  HEAP32[$0 + 16 >> 2] = 1052332;
  HEAP32[$0 + 48 >> 2] = $0 + 56;
  HEAP32[$0 + 40 >> 2] = $0 + 8;
  HEAP32[$0 + 32 >> 2] = $0 + 40;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($0 + 16 | 0, 1052372);
  abort();
 }
 
 function core__result__unwrap_failed__hf5e9b5ec58b89940() {
  var $0 = 0;
  $0 = global$0 + -64 | 0;
  global$0 = $0;
  HEAP32[$0 + 12 >> 2] = 24;
  HEAP32[$0 + 8 >> 2] = 1052088;
  HEAP32[$0 + 52 >> 2] = 9;
  HEAP32[$0 + 36 >> 2] = 2;
  HEAP32[$0 + 44 >> 2] = 52;
  HEAP32[$0 + 20 >> 2] = 2;
  HEAP32[$0 + 24 >> 2] = 0;
  HEAP32[$0 + 16 >> 2] = 1052332;
  HEAP32[$0 + 48 >> 2] = $0 + 56;
  HEAP32[$0 + 40 >> 2] = $0 + 8;
  HEAP32[$0 + 32 >> 2] = $0 + 40;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($0 + 16 | 0, 1052372);
  abort();
 }
 
 function std__panicking__continue_panic_fmt__h1b22eea7f33d6c0a($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $1 = global$0 - 48 | 0;
  global$0 = $1;
  $2 = core__option__Option_T___unwrap__h066c49837ee94964($0 + 12 | 0);
  $5 = core__option__Option_T___unwrap__h066c49837ee94964(HEAP32[$0 + 8 >> 2]);
  $4 = HEAP32[$2 + 4 >> 2];
  $3 = $1 + 8 | 0;
  HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 4 >> 2] = $4;
  $4 = HEAP32[$1 + 12 >> 2];
  $3 = HEAP32[$1 + 8 >> 2];
  $6 = HEAP32[$2 + 8 >> 2];
  HEAP32[$1 + 28 >> 2] = HEAP32[$2 + 12 >> 2];
  HEAP32[$1 + 24 >> 2] = $6;
  HEAP32[$1 + 16 >> 2] = $3;
  HEAP32[$1 + 20 >> 2] = $4;
  HEAP32[$1 + 36 >> 2] = 0;
  HEAP32[$1 + 32 >> 2] = $5;
  std__panicking__rust_panic_with_hook__h6fe9d3817474ba5a($1 + 32 | 0, 1053124, HEAP32[$0 + 8 >> 2], $1 + 16 | 0);
  abort();
 }
 
 function $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__hb860eedaa429039d($0) {
  var $1 = 0, $2 = 0, $3 = Math_fround(0);
  $1 = HEAP32[$0 >> 2];
  $2 = HEAP32[$0 + 4 >> 2];
  if (($1 | 0) != ($2 | 0)) {
   $0 = ((HEAPU8[HEAP32[$0 + 8 >> 2]] | 2) & 3) == 3;
   while (1) {
    $3 = Math_fround($3 + ($0 ? HEAPF32[$1 + 172 >> 2] : HEAPF32[$1 + 168 >> 2]));
    $1 = $1 + 192 | 0;
    if (($1 | 0) != ($2 | 0)) {
     continue
    }
    break;
   };
  }
  return $3;
 }
 
 function $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___fold__h84bf3a74ef0c96ac($0) {
  var $1 = 0, $2 = 0, $3 = Math_fround(0);
  $1 = HEAP32[$0 >> 2];
  $2 = HEAP32[$0 + 4 >> 2];
  if (($1 | 0) != ($2 | 0)) {
   $0 = ((HEAPU8[HEAP32[$0 + 8 >> 2]] | 2) & 3) == 3;
   while (1) {
    $3 = Math_fround($3 + ($0 ? HEAPF32[$1 + 156 >> 2] : HEAPF32[$1 + 152 >> 2]));
    $1 = $1 + 192 | 0;
    if (($1 | 0) != ($2 | 0)) {
     continue
    }
    break;
   };
  }
  return $3;
 }
 
 function js_sys__Reflect__get__h47f550132b94fe08($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $3 = global$0 - 16 | 0;
  global$0 = $3;
  $1 = __wbg_get_a7395f826d52f42a(HEAP32[$1 >> 2], HEAP32[$2 >> 2]) | 0;
  wasm_bindgen____rt__take_last_exception__h58f7370a4cce4e97($3 + 8 | 0);
  $4 = HEAP32[$3 + 8 >> 2];
  label$1 : {
   if ($4) {
    $1 = HEAP32[$3 + 12 >> 2];
    $2 = 1;
    if (($4 | 0) == 1) {
     break label$1
    }
    if ($1 >>> 0 <= 35) {
     break label$1
    }
    __wbindgen_object_drop_ref($1 | 0);
    break label$1;
   }
   $2 = 0;
  }
  HEAP32[$0 + 4 >> 2] = $1;
  HEAP32[$0 >> 2] = $2;
  global$0 = $3 + 16 | 0;
 }
 
 function core__num__dec2flt__algorithm__power_of_ten__habacea71fff464e2($0, $1) {
  var $2 = 0;
  label$1 : {
   if ($1 << 16 >> 16 >= -305) {
    $2 = $1 + 305 | 0;
    $1 = $2 << 16 >> 16;
    if (($2 & 65535) >>> 0 >= 611) {
     break label$1
    }
    HEAP16[$0 + 8 >> 1] = HEAPU16[($1 << 1) + 1058448 >> 1];
    $1 = ($1 << 3) + 1053560 | 0;
    $2 = HEAP32[$1 + 4 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
    HEAP32[$0 + 4 >> 2] = $2;
    return;
   }
   core__panicking__panic__h2d0bc53a963fb996(1053532);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1059716, $1, 611);
  abort();
 }
 
 function $core__iter__adapters__Map_I_2cF__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__hbd3363d75bff1023($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $3 = HEAP32[HEAP32[HEAP32[$1 + 8 >> 2] >> 2] >> 2];
  $4 = HEAP32[$3 + 8 >> 2];
  $1 = HEAP32[$2 >> 2];
  if ($4 >>> 0 > $1 >>> 0) {
   $1 = HEAP32[$3 >> 2] + Math_imul($1, 288) | 0;
   $3 = 0;
   label$2 : {
    if (HEAPU8[$1 + 201 | 0] == 1) {
     break label$2
    }
    $3 = HEAPU8[$1 + 200 | 0] == 1 ? 0 : $2;
   }
   $2 = $3;
   HEAP32[$0 + 4 >> 2] = $1;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051560, $1, $4);
  abort();
 }
 
 function core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($0, $1) {
  var $2 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  HEAP32[$2 + 4 >> 2] = $1;
  HEAP32[$2 >> 2] = $0;
  HEAP32[$2 + 44 >> 2] = 75;
  HEAP32[$2 + 28 >> 2] = 2;
  HEAP32[$2 + 36 >> 2] = 75;
  HEAP32[$2 + 12 >> 2] = 2;
  HEAP32[$2 + 16 >> 2] = 0;
  HEAP32[$2 + 8 >> 2] = 1060480;
  HEAP32[$2 + 40 >> 2] = $2 + 4;
  HEAP32[$2 + 32 >> 2] = $2;
  HEAP32[$2 + 24 >> 2] = $2 + 32;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($2 + 8 | 0, 1060496);
  abort();
 }
 
 function core__panicking__panic_bounds_check__h0537ade040df571e($0, $1, $2) {
  var $3 = 0;
  $3 = global$0 - 48 | 0;
  global$0 = $3;
  HEAP32[$3 + 4 >> 2] = $2;
  HEAP32[$3 >> 2] = $1;
  HEAP32[$3 + 44 >> 2] = 75;
  HEAP32[$3 + 28 >> 2] = 2;
  HEAP32[$3 + 36 >> 2] = 75;
  HEAP32[$3 + 12 >> 2] = 2;
  HEAP32[$3 + 16 >> 2] = 0;
  HEAP32[$3 + 8 >> 2] = 1060284;
  HEAP32[$3 + 40 >> 2] = $3;
  HEAP32[$3 + 32 >> 2] = $3 + 4;
  HEAP32[$3 + 24 >> 2] = $3 + 32;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($3 + 8 | 0, $0);
  abort();
 }
 
 function core__slice__slice_index_order_fail__ha75fa70416d3bc2f($0, $1) {
  var $2 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  HEAP32[$2 + 4 >> 2] = $1;
  HEAP32[$2 >> 2] = $0;
  HEAP32[$2 + 44 >> 2] = 75;
  HEAP32[$2 + 28 >> 2] = 2;
  HEAP32[$2 + 36 >> 2] = 75;
  HEAP32[$2 + 12 >> 2] = 2;
  HEAP32[$2 + 16 >> 2] = 0;
  HEAP32[$2 + 8 >> 2] = 1060548;
  HEAP32[$2 + 40 >> 2] = $2 + 4;
  HEAP32[$2 + 32 >> 2] = $2;
  HEAP32[$2 + 24 >> 2] = $2 + 32;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($2 + 8 | 0, 1060564);
  abort();
 }
 
 function $core__fmt__Arguments_20as_20core__fmt__Display___fmt__hc018daa18b15c7f0($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  $6 = HEAP32[$1 + 28 >> 2];
  $1 = HEAP32[$1 + 24 >> 2];
  $4 = $0 + 16 | 0;
  $5 = HEAP32[$4 + 4 >> 2];
  $3 = $2 + 24 | 0;
  HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
  HEAP32[$3 + 4 >> 2] = $5;
  $4 = $0 + 8 | 0;
  $5 = HEAP32[$4 + 4 >> 2];
  $3 = $2 + 16 | 0;
  HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
  HEAP32[$3 + 4 >> 2] = $5;
  $3 = HEAP32[$0 + 4 >> 2];
  HEAP32[$2 + 8 >> 2] = HEAP32[$0 >> 2];
  HEAP32[$2 + 12 >> 2] = $3;
  $0 = core__fmt__write__h85435378f7fd6609($1, $6, $2 + 8 | 0);
  global$0 = $2 + 32 | 0;
  return $0 | 0;
 }
 
 function $alloc__vec__IntoIter_T__20as_20core__ops__drop__Drop___drop__he7ec7146ce50ca8c($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $1 = HEAP32[$0 + 8 >> 2];
  $2 = HEAP32[$0 + 12 >> 2] - $1 | 0;
  $4 = $0 + 8 | 0;
  while (1) {
   if ($2) {
    $3 = $1 + 192 | 0;
    HEAP32[$4 >> 2] = $3;
    $2 = $2 + -192 | 0;
    $5 = HEAP32[$1 + 4 >> 2];
    $1 = $3;
    if (($5 | 0) != 2) {
     continue
    }
   }
   break;
  };
  if (HEAP32[$0 + 4 >> 2]) {
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
  }
 }
 
 function $_T_20as_20core__fmt__Debug___fmt__h2ec535d2865cd60c($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  $0 = HEAP32[$0 >> 2];
  $3 = HEAP32[$0 + 8 >> 2];
  $0 = HEAP32[$0 >> 2];
  core__fmt__Formatter__debug_list__h6c42b170021f5d22($2, $1);
  if ($3) {
   while (1) {
    HEAP32[$2 + 12 >> 2] = $0;
    core__fmt__builders__DebugInner__entry__h37ef1f566aaa9690($2, $2 + 12 | 0);
    $0 = $0 + 1 | 0;
    $3 = $3 + -1 | 0;
    if ($3) {
     continue
    }
    break;
   }
  }
  if (HEAPU8[$2 + 4 | 0]) {
   $0 = 1
  } else {
   $0 = HEAP32[$2 >> 2];
   $0 = FUNCTION_TABLE[HEAP32[HEAP32[$0 + 28 >> 2] + 12 >> 2]](HEAP32[$0 + 24 >> 2], 1061124, 1) | 0;
  }
  global$0 = $2 + 16 | 0;
  return $0 | 0;
 }
 
 function __rdl_realloc($0, $1, $2, $3) {
  label$1 : {
   label$2 : {
    label$3 : {
     if (8 < $2 >>> 0) {
      if (8 >= $2 >>> 0) {
       break label$3
      }
      $2 = dlmalloc__dlmalloc__Dlmalloc__memalign__he461fff21ac8d1e2($2, $3);
      if (!$2) {
       break label$2
      }
      break label$1;
     }
     return dlmalloc__dlmalloc__Dlmalloc__realloc__h89a3982cb9693a20($0, $3);
    }
    $2 = dlmalloc__dlmalloc__Dlmalloc__malloc__haa66310b00a7bd6b($3);
    if ($2) {
     break label$1
    }
   }
   return 0;
  }
  $1 = memcpy($2, $0, $1 >>> 0 > $3 >>> 0 ? $3 : $1);
  dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($0);
  return $1;
 }
 
 function node_replaceChildAtIndex($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  label$1 : {
   label$2 : {
    if (!$0) {
     break label$2
    }
    if (HEAP32[$0 >> 2]) {
     break label$1
    }
    HEAP32[$0 >> 2] = -1;
    if (!$2) {
     break label$2
    }
    $3 = HEAP32[$2 >> 2];
    if (($3 | 0) == -1) {
     break label$1
    }
    HEAP32[$2 >> 2] = $3 + 1;
    stretch_layout__Node__replace_child_at_index__h2a6d31954cfde073($0 + 4 | 0, $1, $2 + 4 | 0);
    HEAP32[$2 >> 2] = HEAP32[$2 >> 2] + -1;
    HEAP32[$0 >> 2] = 0;
    return;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function $alloc__vec__Vec_T__20as_20core__clone__Clone___clone__ha7ce6132966c4db5($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  $3 = HEAP32[$1 >> 2];
  $1 = HEAP32[$1 + 8 >> 2];
  alloc__raw_vec__RawVec_T_2cA___allocate_in__h2c60f5d3edabcb0a($2 + 8 | 0, $1);
  HEAP32[$2 + 24 >> 2] = 0;
  $4 = HEAP32[$2 + 12 >> 2];
  HEAP32[$2 + 16 >> 2] = HEAP32[$2 + 8 >> 2];
  HEAP32[$2 + 20 >> 2] = $4;
  $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____spec_extend__hb33c529efa49e643($2 + 16 | 0, $3, ($1 << 5) + $3 | 0);
  HEAP32[$0 + 8 >> 2] = HEAP32[$2 + 24 >> 2];
  $1 = HEAP32[$2 + 20 >> 2];
  HEAP32[$0 >> 2] = HEAP32[$2 + 16 >> 2];
  HEAP32[$0 + 4 >> 2] = $1;
  global$0 = $2 + 32 | 0;
 }
 
 function $stretch__node__Node_20as_20core__hash__Hash___hash__h1591695e242000e2($0, $1) {
  var $2 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  HEAP32[$2 + 12 >> 2] = HEAP32[$0 >> 2];
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($1, $2 + 12 | 0);
  HEAP32[$2 + 12 >> 2] = HEAP32[$0 + 4 >> 2];
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($1, $2 + 12 | 0);
  HEAP32[$2 + 12 >> 2] = HEAP32[$0 + 8 >> 2];
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($1, $2 + 12 | 0);
  HEAP32[$2 + 12 >> 2] = HEAP32[$0 + 12 >> 2];
  $std__collections__hash__map__DefaultHasher_20as_20core__hash__Hasher___write__h7303af2f85960aff($1, $2 + 12 | 0);
  global$0 = $2 + 16 | 0;
 }
 
 function core__result__unwrap_failed__hae3003d4eb6b7de1($0) {
  var $1 = 0;
  $1 = global$0 - 48 | 0;
  global$0 = $1;
  HEAP32[$1 + 4 >> 2] = 47;
  HEAP32[$1 >> 2] = 1052739;
  HEAP32[$1 + 44 >> 2] = 53;
  HEAP32[$1 + 28 >> 2] = 2;
  HEAP32[$1 + 40 >> 2] = $0;
  HEAP32[$1 + 36 >> 2] = 52;
  HEAP32[$1 + 12 >> 2] = 2;
  HEAP32[$1 + 16 >> 2] = 0;
  HEAP32[$1 + 8 >> 2] = 1052332;
  HEAP32[$1 + 32 >> 2] = $1;
  HEAP32[$1 + 24 >> 2] = $1 + 32;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($1 + 8 | 0, 1052372);
  abort();
 }
 
 function $_mut_20W_20as_20core__fmt__Write___write_fmt__h5bb17cb408313c18($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  HEAP32[$2 + 4 >> 2] = HEAP32[$0 >> 2];
  $3 = $1 + 16 | 0;
  $4 = HEAP32[$3 + 4 >> 2];
  $0 = $2 + 24 | 0;
  HEAP32[$0 >> 2] = HEAP32[$3 >> 2];
  HEAP32[$0 + 4 >> 2] = $4;
  $3 = $1 + 8 | 0;
  $4 = HEAP32[$3 + 4 >> 2];
  $0 = $2 + 16 | 0;
  HEAP32[$0 >> 2] = HEAP32[$3 >> 2];
  HEAP32[$0 + 4 >> 2] = $4;
  $0 = HEAP32[$1 + 4 >> 2];
  HEAP32[$2 + 8 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$2 + 12 >> 2] = $0;
  $0 = core__fmt__write__h85435378f7fd6609($2 + 4 | 0, 1052032, $2 + 8 | 0);
  global$0 = $2 + 32 | 0;
  return $0 | 0;
 }
 
 function $_mut_20W_20as_20core__fmt__Write___write_fmt__h56aff2de7507f7ee($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  HEAP32[$2 + 4 >> 2] = HEAP32[$0 >> 2];
  $3 = $1 + 16 | 0;
  $4 = HEAP32[$3 + 4 >> 2];
  $0 = $2 + 24 | 0;
  HEAP32[$0 >> 2] = HEAP32[$3 >> 2];
  HEAP32[$0 + 4 >> 2] = $4;
  $3 = $1 + 8 | 0;
  $4 = HEAP32[$3 + 4 >> 2];
  $0 = $2 + 16 | 0;
  HEAP32[$0 >> 2] = HEAP32[$3 >> 2];
  HEAP32[$0 + 4 >> 2] = $4;
  $0 = HEAP32[$1 + 4 >> 2];
  HEAP32[$2 + 8 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$2 + 12 >> 2] = $0;
  $0 = core__fmt__write__h85435378f7fd6609($2 + 4 | 0, 1061128, $2 + 8 | 0);
  global$0 = $2 + 32 | 0;
  return $0 | 0;
 }
 
 function core__ops__function__FnOnce__call_once_7b_7bvtable_shim_7d_7d__h53e9c0fdf58804c3($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = global$0 - 32 | 0;
  global$0 = $3;
  $1 = HEAP32[$1 >> 2];
  $4 = $2 + 8 | 0;
  $6 = HEAP32[$4 + 4 >> 2];
  $5 = $3 + 24 | 0;
  HEAP32[$5 >> 2] = HEAP32[$4 >> 2];
  HEAP32[$5 + 4 >> 2] = $6;
  HEAP32[$3 + 12 >> 2] = $1;
  $1 = HEAP32[$2 + 4 >> 2];
  HEAP32[$3 + 16 >> 2] = HEAP32[$2 >> 2];
  HEAP32[$3 + 20 >> 2] = $1;
  stretch_layout__Node__set_measure___7b_7bclosure_7d_7d__h28a392002c378f9d($0, $3 + 12 | 0, $3 + 16 | 0);
  $0 = HEAP32[$3 + 12 >> 2];
  if ($0 >>> 0 >= 36) {
   __wbindgen_object_drop_ref($0 | 0)
  }
  global$0 = $3 + 32 | 0;
 }
 
 function node_addChild($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   label$2 : {
    if (!$0) {
     break label$2
    }
    if (HEAP32[$0 >> 2]) {
     break label$1
    }
    HEAP32[$0 >> 2] = -1;
    if (!$1) {
     break label$2
    }
    $2 = HEAP32[$1 >> 2];
    if (($2 | 0) == -1) {
     break label$1
    }
    HEAP32[$1 >> 2] = $2 + 1;
    stretch_layout__Node__add_child__h24958c907242c3db($0 + 4 | 0, $1 + 4 | 0);
    HEAP32[$1 >> 2] = HEAP32[$1 >> 2] + -1;
    HEAP32[$0 >> 2] = 0;
    return;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function node_removeChild($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   label$2 : {
    if (!$0) {
     break label$2
    }
    if (HEAP32[$0 >> 2]) {
     break label$1
    }
    HEAP32[$0 >> 2] = -1;
    if (!$1) {
     break label$2
    }
    $2 = HEAP32[$1 >> 2];
    if (($2 | 0) == -1) {
     break label$1
    }
    HEAP32[$1 >> 2] = $2 + 1;
    stretch_layout__Node__remove_child__h5ac3490bdd08e8f4($0 + 4 | 0, $1 + 4 | 0);
    HEAP32[$1 >> 2] = HEAP32[$1 >> 2] + -1;
    HEAP32[$0 >> 2] = 0;
    return;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function core__fmt__Write__write_fmt__ha2ab03f5dc69baa1($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  HEAP32[$2 + 4 >> 2] = $0;
  $3 = $1 + 16 | 0;
  $4 = HEAP32[$3 + 4 >> 2];
  $0 = $2 + 24 | 0;
  HEAP32[$0 >> 2] = HEAP32[$3 >> 2];
  HEAP32[$0 + 4 >> 2] = $4;
  $3 = $1 + 8 | 0;
  $4 = HEAP32[$3 + 4 >> 2];
  $0 = $2 + 16 | 0;
  HEAP32[$0 >> 2] = HEAP32[$3 >> 2];
  HEAP32[$0 + 4 >> 2] = $4;
  $0 = HEAP32[$1 + 4 >> 2];
  HEAP32[$2 + 8 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$2 + 12 >> 2] = $0;
  $0 = core__fmt__write__h85435378f7fd6609($2 + 4 | 0, 1061128, $2 + 8 | 0);
  global$0 = $2 + 32 | 0;
  return $0 | 0;
 }
 
 function $std__panicking__begin_panic__PanicPayload_A__20as_20core__panic__BoxMeUp___box_me_up__h6a0adeaa852e550f($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = HEAP32[$1 >> 2];
  HEAP32[$1 >> 2] = 0;
  label$1 : {
   $3 = $0;
   label$2 : {
    if ($2) {
     $4 = HEAP32[$1 + 4 >> 2];
     $1 = __rust_alloc(8, 4);
     if (!$1) {
      break label$1
     }
     HEAP32[$1 + 4 >> 2] = $4;
     HEAP32[$1 >> 2] = $2;
     $2 = 1050368;
     break label$2;
    }
    $1 = 1;
    $2 = 1050384;
   }
   HEAP32[$3 + 4 >> 2] = $2;
   HEAP32[$0 >> 2] = $1;
   return;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](8, 4);
  abort();
 }
 
 function $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___try_fold___7b_7bclosure_7d_7d__h9d3a14a313358ba8($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $4 = HEAP32[HEAP32[HEAP32[$1 >> 2] >> 2] >> 2];
  $3 = HEAP32[$4 + 8 >> 2];
  $2 = HEAP32[$2 >> 2];
  if ($3 >>> 0 > $2 >>> 0) {
   $1 = HEAP32[$1 + 4 >> 2];
   $3 = HEAP32[$1 >> 2];
   HEAP32[$0 + 4 >> 2] = $3;
   HEAP32[$0 + 8 >> 2] = $2;
   HEAP32[$0 >> 2] = HEAPU8[(HEAP32[$4 >> 2] + Math_imul($2, 288) | 0) + 201 | 0];
   HEAP32[$1 >> 2] = $3 + 1;
   return;
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1051560, $2, $3);
  abort();
 }
 
 function $std__panicking__begin_panic__PanicPayload_A__20as_20core__panic__BoxMeUp___box_me_up__h220d30503ac86e8b($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = HEAP32[$1 >> 2];
  HEAP32[$1 >> 2] = 0;
  label$1 : {
   $3 = $0;
   label$2 : {
    if ($2) {
     $4 = HEAP32[$1 + 4 >> 2];
     $1 = __rust_alloc(8, 4);
     if (!$1) {
      break label$1
     }
     HEAP32[$1 + 4 >> 2] = $4;
     HEAP32[$1 >> 2] = $2;
     $2 = 1053180;
     break label$2;
    }
    $1 = 1;
    $2 = 1053196;
   }
   HEAP32[$3 + 4 >> 2] = $2;
   HEAP32[$0 >> 2] = $1;
   return;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](8, 4);
  abort();
 }
 
 function core__panicking__panic__h2d0bc53a963fb996($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $1 = global$0 - 48 | 0;
  global$0 = $1;
  $2 = HEAP32[$0 + 8 >> 2];
  $3 = HEAP32[$0 + 12 >> 2];
  $4 = HEAP32[$0 + 16 >> 2];
  $5 = HEAP32[$0 + 20 >> 2];
  $6 = HEAP32[$0 + 4 >> 2];
  $0 = HEAP32[$0 >> 2];
  HEAP32[$1 + 20 >> 2] = 0;
  HEAP32[$1 + 24 >> 2] = $0;
  HEAP32[$1 + 28 >> 2] = $6;
  HEAP32[$1 + 16 >> 2] = 1053460;
  HEAP32[$1 + 4 >> 2] = 1;
  HEAP32[$1 + 8 >> 2] = 0;
  HEAP32[$1 >> 2] = $1 + 24;
  HEAP32[$1 + 40 >> 2] = $4;
  HEAP32[$1 + 44 >> 2] = $5;
  HEAP32[$1 + 32 >> 2] = $2;
  HEAP32[$1 + 36 >> 2] = $3;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($1, $1 + 32 | 0);
  abort();
 }
 
 function core__ptr__real_drop_in_place__h1f9c131b05839678($0) {
  var $1 = 0, $2 = 0;
  $1 = HEAP32[$0 + 28 >> 2];
  if ($1) {
   $2 = HEAP32[$0 + 20 >> 2];
   $1 = $1 << 5;
   while (1) {
    core__ptr__real_drop_in_place__h1f9c131b05839678($2);
    $2 = $2 + 32 | 0;
    $1 = $1 + -32 | 0;
    if ($1) {
     continue
    }
    break;
   };
  }
  if (HEAP32[$0 + 24 >> 2]) {
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 + 20 >> 2])
  }
 }
 
 function $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend_T_2cI____spec_extend__hb33c529efa49e643($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  $3 = global$0 - 16 | 0;
  global$0 = $3;
  alloc__raw_vec__RawVec_T_2cA___reserve__hba7a32ad1439175e($0, HEAP32[$0 + 8 >> 2], $2 - $1 >>> 5);
  $5 = HEAP32[$0 >> 2];
  $4 = HEAP32[$0 + 8 >> 2];
  HEAP32[$3 + 8 >> 2] = $4;
  HEAP32[$3 + 4 >> 2] = $0 + 8;
  HEAP32[$3 >> 2] = ($4 << 5) + $5;
  $core__iter__adapters__Cloned_I__20as_20core__iter__traits__iterator__Iterator___fold__hb8a9376521c159f4($1, $2, $3);
  global$0 = $3 + 16 | 0;
 }
 
 function $stretch__id__Id_20as_20core__fmt__Debug___fmt__h87ea841616a7ea48($0, $1) {
  var $2 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  core__fmt__Formatter__debug_struct__h5df6422ae6e44bef($2, $1, 1050584, 2);
  HEAP32[$2 + 12 >> 2] = $0;
  core__fmt__builders__DebugStruct__field__hab3f8a77cf8c4394($2, 1050586, 2, $2 + 12 | 0, 1050588);
  HEAP32[$2 + 12 >> 2] = $0 + 4;
  core__fmt__builders__DebugStruct__field__hab3f8a77cf8c4394($2, 1050604, 10, $2 + 12 | 0, 1050588);
  $0 = core__fmt__builders__DebugStruct__finish__hc40a0d34053a01e6($2);
  global$0 = $2 + 16 | 0;
  return $0;
 }
 
 function $stretch__node__Node_20as_20core__fmt__Debug___fmt__hf538d2cee6a5838a($0, $1) {
  var $2 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  core__fmt__Formatter__debug_struct__h5df6422ae6e44bef($2, $1, 1051336, 4);
  HEAP32[$2 + 12 >> 2] = $0;
  core__fmt__builders__DebugStruct__field__hab3f8a77cf8c4394($2, 1051340, 8, $2 + 12 | 0, 1051348);
  HEAP32[$2 + 12 >> 2] = $0 + 8;
  core__fmt__builders__DebugStruct__field__hab3f8a77cf8c4394($2, 1051364, 5, $2 + 12 | 0, 1051348);
  $0 = core__fmt__builders__DebugStruct__finish__hc40a0d34053a01e6($2);
  global$0 = $2 + 16 | 0;
  return $0;
 }
 
 function core__num__dec2flt__num__to_u64__h5d5282c7dcdcfd3f($0) {
  var $1 = 0;
  label$1 : {
   label$2 : {
    if (core__num__bignum__Big32x40__bit_length__h13ff63659f8edff3($0) >>> 0 <= 63) {
     $1 = HEAP32[$0 >> 2];
     if ($1 >>> 0 >= 41) {
      break label$2
     }
     if ($1 >>> 0 < 2) {
      if (!$1) {
       break label$1
      }
      i64toi32_i32$HIGH_BITS = 0;
      return HEAP32[$0 + 4 >> 2];
     }
     i64toi32_i32$HIGH_BITS = HEAP32[$0 + 8 >> 2];
     return HEAP32[$0 + 4 >> 2];
    }
    core__panicking__panic__h2d0bc53a963fb996(1059800);
    abort();
   }
   core__slice__slice_index_len_fail__h4544fc57f3d8a7a0($1, 40);
   abort();
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1059856, 0, 0);
  abort();
 }
 
 function $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__h6e997e740088a7d8($0) {
  var $1 = 0, $2 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  $1 = $2 + 8 | 0;
  HEAP32[$1 + 4 >> 2] = HEAP32[$0 + 8 >> 2];
  HEAP32[$1 >> 2] = HEAP32[$0 >> 2];
  $1 = HEAP32[$2 + 12 >> 2];
  if ($1) {
   $0 = HEAP32[$2 + 8 >> 2];
   $1 = Math_imul($1, 12);
   while (1) {
    if (HEAP32[$0 + 4 >> 2]) {
     dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
    }
    $0 = $0 + 12 | 0;
    $1 = $1 + -12 | 0;
    if ($1) {
     continue
    }
    break;
   };
  }
  global$0 = $2 + 16 | 0;
 }
 
 function alloc__vec__Vec_T___remove__h3c8d676d0cefe866($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = HEAP32[$0 + 8 >> 2];
  if ($2 >>> 0 > $1 >>> 0) {
   $3 = HEAP32[$0 >> 2] + ($1 << 2) | 0;
   $4 = HEAP32[$3 >> 2];
   memmove($3, $3 + 4 | 0, ($1 ^ -1) + $2 << 2);
   HEAP32[$0 + 8 >> 2] = $2 + -1;
   return $4;
  }
  core__panicking__panic__h2d0bc53a963fb996(1050664);
  abort();
 }
 
 function std__panicking__begin_panic_fmt__hb7825530f38bd066($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  $4 = HEAP32[$1 >> 2];
  $5 = HEAP32[$1 + 4 >> 2];
  $6 = HEAP32[$1 + 8 >> 2];
  $3 = $2 + 32 | 0;
  HEAP32[$3 + 12 >> 2] = HEAP32[$1 + 12 >> 2];
  HEAP32[$3 + 8 >> 2] = $6;
  HEAP32[$3 + 4 >> 2] = $5;
  HEAP32[$3 >> 2] = $4;
  $1 = $2 + 40 | 0;
  $3 = HEAP32[$1 + 4 >> 2];
  $4 = $2 + 20 | 0;
  HEAP32[$4 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$4 + 4 >> 2] = $3;
  HEAP32[$2 + 8 >> 2] = $0;
  HEAP32[$2 + 4 >> 2] = 1052196;
  HEAP32[$2 >> 2] = 1052196;
  $0 = HEAP32[$2 + 36 >> 2];
  HEAP32[$2 + 12 >> 2] = HEAP32[$2 + 32 >> 2];
  HEAP32[$2 + 16 >> 2] = $0;
  std__panicking__continue_panic_fmt__h1b22eea7f33d6c0a($2);
  abort();
 }
 
 function core__option__expect_failed__h4b77ebe6e62ec3a1($0) {
  var $1 = 0;
  $1 = global$0 - 48 | 0;
  global$0 = $1;
  HEAP32[$1 + 12 >> 2] = 22;
  HEAP32[$1 + 8 >> 2] = $0;
  HEAP32[$1 + 36 >> 2] = 1;
  HEAP32[$1 + 44 >> 2] = 76;
  HEAP32[$1 + 20 >> 2] = 1;
  HEAP32[$1 + 24 >> 2] = 0;
  HEAP32[$1 + 16 >> 2] = 1060388;
  HEAP32[$1 + 40 >> 2] = $1 + 8;
  HEAP32[$1 + 32 >> 2] = $1 + 40;
  core__panicking__panic_fmt__h2daf88b2616ca2b2($1 + 16 | 0, 1060396);
  abort();
 }
 
 function wasm_bindgen__JsValue__as_string__h07e31cacac40de29($0, $1) {
  var $2 = 0, $3 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  HEAP32[$2 + 12 >> 2] = 0;
  $1 = __wbindgen_string_get(HEAP32[$1 >> 2], $2 + 12 | 0) | 0;
  label$1 : {
   if ($1) {
    $3 = HEAP32[$2 + 12 >> 2];
    HEAP32[$0 + 4 >> 2] = $3;
    HEAP32[$0 >> 2] = $1;
    HEAP32[$0 + 8 >> 2] = $3;
    break label$1;
   }
   HEAP32[$0 >> 2] = 0;
  }
  global$0 = $2 + 16 | 0;
 }
 
 function $std__ffi__c_str__NulError_20as_20core__fmt__Debug___fmt__hf4efecf81595b660($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  core__fmt__Formatter__debug_tuple__h9b1f009ef608acf0($2, $1, 1053212, 8);
  HEAP32[$2 + 12 >> 2] = $0;
  core__fmt__builders__DebugTuple__field__hb9640642e98eeefe($2, $2 + 12 | 0, 1052516);
  HEAP32[$2 + 12 >> 2] = $0 + 4;
  core__fmt__builders__DebugTuple__field__hb9640642e98eeefe($2, $2 + 12 | 0, 1053220);
  $0 = core__fmt__builders__DebugTuple__finish__h0e3afe7bbfe02439($2);
  global$0 = $2 + 16 | 0;
  return $0 | 0;
 }
 
 function node_setMeasure($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  label$1 : {
   if ($0) {
    if (HEAP32[$0 >> 2]) {
     break label$1
    }
    HEAP32[$0 >> 2] = -1;
    HEAP32[$2 + 12 >> 2] = $1;
    stretch_layout__Node__set_measure__h59d145755cdb3f8d($0 + 4 | 0, $2 + 12 | 0);
    HEAP32[$0 >> 2] = 0;
    global$0 = $2 + 16 | 0;
    return;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function node_setStyle($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  label$1 : {
   if ($0) {
    if (HEAP32[$0 >> 2]) {
     break label$1
    }
    HEAP32[$0 >> 2] = -1;
    HEAP32[$2 + 12 >> 2] = $1;
    stretch_layout__Node__set_style__h516a5766908e8697($0 + 4 | 0, $2 + 12 | 0);
    HEAP32[$0 >> 2] = 0;
    global$0 = $2 + 16 | 0;
    return;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__h7c20999486fb1b77($0) {
  var $1 = 0;
  $1 = HEAP32[$0 + 8 >> 2];
  if ($1) {
   $0 = HEAP32[$0 >> 2];
   $1 = Math_imul($1, 20);
   while (1) {
    if (HEAP32[$0 + 4 >> 2]) {
     dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
    }
    $0 = $0 + 20 | 0;
    $1 = $1 + -20 | 0;
    if ($1) {
     continue
    }
    break;
   };
  }
 }
 
 function $alloc__vec__Vec_T__20as_20core__ops__drop__Drop___drop__hf813763ce0f151ff($0) {
  var $1 = 0;
  $1 = HEAP32[$0 + 8 >> 2];
  if ($1) {
   $0 = HEAP32[$0 >> 2];
   $1 = Math_imul($1, 12);
   while (1) {
    if (HEAP32[$0 + 4 >> 2]) {
     dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
    }
    $0 = $0 + 12 | 0;
    $1 = $1 + -12 | 0;
    if ($1) {
     continue
    }
    break;
   };
  }
 }
 
 function $alloc__vec__IntoIter_T__20as_20core__ops__drop__Drop___drop__h33a9bff91200e1a0($0) {
  var $1 = 0, $2 = 0;
  $2 = HEAP32[$0 + 12 >> 2];
  $1 = HEAP32[$0 + 8 >> 2];
  if (($2 | 0) != ($1 | 0)) {
   HEAP32[$0 + 8 >> 2] = ($1 + (($2 + -8 | 0) - $1 & -8) | 0) + 8
  }
  if (HEAP32[$0 + 4 >> 2]) {
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
  }
 }
 
 function core__fmt__Formatter__pad_integral__write_prefix__h8ff96a3030fbf13b($0, $1, $2, $3) {
  var $4 = 0;
  label$1 : {
   label$2 : {
    if (($1 | 0) != 1114112) {
     $4 = 1;
     if (FUNCTION_TABLE[HEAP32[HEAP32[$0 + 28 >> 2] + 16 >> 2]](HEAP32[$0 + 24 >> 2], $1)) {
      break label$2
     }
    }
    if (!$2) {
     break label$1
    }
    $4 = FUNCTION_TABLE[HEAP32[HEAP32[$0 + 28 >> 2] + 12 >> 2]](HEAP32[$0 + 24 >> 2], $2, $3) | 0;
   }
   return $4;
  }
  return 0;
 }
 
 function node_getStyle($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   if ($0) {
    $1 = HEAP32[$0 >> 2];
    if (($1 | 0) == -1) {
     break label$1
    }
    HEAP32[$0 >> 2] = $1 + 1;
    $1 = __wbindgen_object_clone_ref(HEAP32[$0 + 24 >> 2]) | 0;
    HEAP32[$0 >> 2] = HEAP32[$0 >> 2] + -1;
    return $1 | 0;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function memcmp($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   if ($2) {
    while (1) {
     $4 = HEAPU8[$0 + $3 | 0];
     $5 = HEAPU8[$1 + $3 | 0];
     if (($4 | 0) != ($5 | 0)) {
      break label$1
     }
     $3 = $3 + 1 | 0;
     if ($3 >>> 0 < $2 >>> 0) {
      continue
     }
     break;
    };
    return 0;
   }
   return 0;
  }
  return $4 - $5 | 0;
 }
 
 function node_isDirty($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   if ($0) {
    $1 = HEAP32[$0 >> 2];
    if (($1 | 0) == -1) {
     break label$1
    }
    HEAP32[$0 >> 2] = $1 + 1;
    $1 = stretch_layout__Node__is_dirty__h3755578e1850a7bb($0 + 4 | 0);
    HEAP32[$0 >> 2] = HEAP32[$0 >> 2] + -1;
    return $1 | 0;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function allocator_new() {
  var $0 = 0, $1 = 0;
  $0 = global$0 - 304 | 0;
  global$0 = $0;
  stretch__node__Stretch__with_capacity__he42f2add5ee12749($0 + 160 | 0);
  HEAP32[$0 + 8 >> 2] = 0;
  memcpy($0 + 16 | 0, $0 + 160 | 0, 144);
  $1 = $stretch_layout__Allocator_20as_20wasm_bindgen__convert__traits__IntoWasmAbi___into_abi__h37b07a46002ab954(alloc__rc__Rc_T___new__h45e8788f05bbd8bc($0 + 8 | 0));
  global$0 = $0 + 304 | 0;
  return $1 | 0;
 }
 
 function wasm_bindgen__JsValue__as_f64__h1f8b3e8c0b7cfbf2($0, $1) {
  var $2 = 0, $3 = 0.0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  HEAP8[$2 + 15 | 0] = 0;
  $3 = +__wbindgen_number_get(HEAP32[$1 >> 2], $2 + 15 | 0);
  $1 = HEAPU8[$2 + 15 | 0];
  HEAPF64[$0 + 8 >> 3] = $3;
  HEAP32[$0 >> 2] = ($1 | 0) != 1;
  HEAP32[$0 + 4 >> 2] = 0;
  global$0 = $2 + 16 | 0;
 }
 
 function core__ptr__real_drop_in_place__h4667a55ad65e99f0($0) {
  var $1 = 0;
  label$1 : {
   if (!HEAP32[$0 >> 2]) {
    break label$1
   }
   $1 = $0 + 8 | 0;
   FUNCTION_TABLE[HEAP32[HEAP32[$1 >> 2] >> 2]](HEAP32[$0 + 4 >> 2]);
   if (!HEAP32[HEAP32[$1 >> 2] + 4 >> 2]) {
    break label$1
   }
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 + 4 >> 2]);
  }
 }
 
 function std__sync__mutex__Mutex_T___lock__h7318c0b80a9bd337($0, $1) {
  var $2 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $2 = HEAP32[$1 >> 2];
  if (!HEAPU8[$2 | 0]) {
   HEAP8[$2 | 0] = 1;
   (wasm2js_i32$0 = $0 + 8 | 0, wasm2js_i32$1 = std__panicking__panicking__hf26bc0dde81b7530()), HEAP8[wasm2js_i32$0 | 0] = wasm2js_i32$1;
   HEAP32[$0 + 4 >> 2] = $1;
   HEAP32[$0 >> 2] = HEAPU8[$1 + 4 | 0] != 0;
   return;
  }
  std__panicking__begin_panic__h5b411e7fa21cfdf8();
  abort();
 }
 
 function core__panicking__panic_fmt__h2daf88b2616ca2b2($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  $4 = HEAP32[$1 >> 2];
  $5 = HEAP32[$1 + 4 >> 2];
  $6 = HEAP32[$1 + 12 >> 2];
  $3 = $2 + 20 | 0;
  HEAP32[$3 >> 2] = HEAP32[$1 + 8 >> 2];
  HEAP32[$3 + 4 >> 2] = $6;
  HEAP32[$2 + 12 >> 2] = $4;
  HEAP32[$2 + 16 >> 2] = $5;
  HEAP32[$2 + 8 >> 2] = $0;
  HEAP32[$2 + 4 >> 2] = 1060216;
  HEAP32[$2 >> 2] = 1053460;
  std__panicking__continue_panic_fmt__h1b22eea7f33d6c0a($2);
  abort();
 }
 
 function $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend__T_2ccore__slice__Iter_T_____spec_extend__hfa70796206e75b7a($0, $1, $2) {
  var $3 = 0;
  $2 = $2 - $1 >>> 3;
  alloc__raw_vec__RawVec_T_2cA___reserve__h23f4dea92ede66ce($0, HEAP32[$0 + 8 >> 2], $2);
  $3 = HEAP32[$0 + 8 >> 2];
  HEAP32[$0 + 8 >> 2] = $2 + $3;
  core__slice___impl_20_5bT_5d___copy_from_slice__h2863b55bca734ebe(HEAP32[$0 >> 2] + ($3 << 3) | 0, $2, $1, $2);
 }
 
 function core__f32___impl_20f32___classify__h2cc2893972a149fc($0) {
  var $1 = 0, $2 = 0;
  $1 = (wasm2js_scratch_store_f32($0), wasm2js_scratch_load_i32(0));
  $2 = $1 & 8388607;
  label$1 : {
   $1 = $1 & 2139095040;
   if ($1) {
    if (($1 | 0) != 2139095040) {
     break label$1
    }
    return !$2;
   }
   return $2 ? 3 : 2;
  }
  return 4;
 }
 
 function alloc__raw_vec__RawVec_T_2cA___dealloc_buffer__h706c3aae176f3002($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  $1 = global$0 - 16 | 0;
  global$0 = $1;
  $2 = $1 + 8 | 0;
  $3 = HEAP32[$0 + 4 >> 2];
  HEAP32[$2 >> 2] = Math_imul($3, 288);
  HEAP32[$2 + 4 >> 2] = (($3 | 0) != 0) << 2;
  if (HEAP32[$1 + 12 >> 2]) {
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
  }
  global$0 = $1 + 16 | 0;
 }
 
 function alloc__raw_vec__RawVec_T_2cA___dealloc_buffer__hcfc71f822a24d45c($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  $1 = global$0 - 16 | 0;
  global$0 = $1;
  $2 = $1 + 8 | 0;
  $3 = HEAP32[$0 + 4 >> 2];
  HEAP32[$2 >> 2] = Math_imul($3, 12);
  HEAP32[$2 + 4 >> 2] = (($3 | 0) != 0) << 2;
  if (HEAP32[$1 + 12 >> 2]) {
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
  }
  global$0 = $1 + 16 | 0;
 }
 
 function std__thread__local__LocalKey_T___with__h4101f28caa7b56ee($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $1 = FUNCTION_TABLE[HEAP32[262796]]() | 0;
  if ($1) {
   $2 = HEAP32[$1 + 4 >> 2];
   $5 = $2;
   $3 = HEAP32[$1 >> 2];
   $4 = $3 + 1 | 0;
   if ($4 >>> 0 < 1) {
    $2 = $2 + 1 | 0
   }
   HEAP32[$1 >> 2] = $4;
   HEAP32[$1 + 4 >> 2] = $2;
   $2 = HEAP32[$1 + 12 >> 2];
   HEAP32[$0 + 8 >> 2] = HEAP32[$1 + 8 >> 2];
   HEAP32[$0 + 12 >> 2] = $2;
   HEAP32[$0 >> 2] = $3;
   HEAP32[$0 + 4 >> 2] = $5;
   return;
  }
  core__result__unwrap_failed__hb4247b58d8dfe44d();
  abort();
 }
 
 function $f32_20as_20core__num__dec2flt__rawfp__RawFloat___unpack__haddc0a4db1e502dc($0, $1) {
  var $2 = 0, $3 = 0;
  $2 = (wasm2js_scratch_store_f32($1), wasm2js_scratch_load_i32(0));
  $3 = $2 >>> 23 & 255;
  HEAP16[$0 + 8 >> 1] = $3 + -150;
  $2 = $2 & 8388607;
  HEAP32[$0 >> 2] = $3 ? $2 | 8388608 : $2 << 1;
  HEAP32[$0 + 4 >> 2] = 0;
 }
 
 function core__num__dec2flt__rawfp__encode_normal__h79788dc1a919ce5b($0, $1, $2) {
  var $3 = 0;
  $2 = $2 + 150 << 16;
  $3 = $2 >> 31;
  $2 = $2 >> 16;
  $0 = $0 & -8388609 | $2 << 23;
  $1 = $1 | ($3 << 23 | $2 >>> 9);
  if (!(($1 | 0) == 1 & $0 >>> 0 >= 0 | $1 >>> 0 > 1)) {
   return wasm2js_scratch_store_i32(0, $0), wasm2js_scratch_load_f32()
  }
  core__panicking__panic__h2d0bc53a963fb996(1049780);
  abort();
 }
 
 function __wbindgen_malloc($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0 >>> 0 > 4294967292) {
    break label$1
   }
   if ($0) {
    $0 = __rust_alloc($0, ($0 >>> 0 < 4294967293) << 2);
    if (!$0) {
     break label$1
    }
    return $0 | 0;
   }
   return 4;
  }
  abort();
 }
 
 function memcpy($0, $1, $2) {
  var $3 = 0;
  if ($2) {
   $3 = $0;
   while (1) {
    HEAP8[$3 | 0] = HEAPU8[$1 | 0];
    $3 = $3 + 1 | 0;
    $1 = $1 + 1 | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue
    }
    break;
   };
  }
  return $0;
 }
 
 function $stretch_layout__Allocator_20as_20wasm_bindgen__convert__traits__FromWasmAbi___from_abi__hb6f22a877e0ac8fb($0) {
  var $1 = 0;
  label$1 : {
   if ($0) {
    if (HEAP32[$0 >> 2]) {
     break label$1
    }
    HEAP32[$0 >> 2] = 0;
    $1 = HEAP32[$0 + 4 >> 2];
    dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($0);
    return $1;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function node_removeChildAtIndex($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if ($0) {
    if (HEAP32[$0 >> 2]) {
     break label$1
    }
    HEAP32[$0 >> 2] = -1;
    stretch_layout__Node__remove_child_at_index__h2afdb0fdce240969($0 + 4 | 0, $1);
    HEAP32[$0 >> 2] = 0;
    return;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve__hba7a32ad1439175e($0, $1, $2) {
  $0 = alloc__raw_vec__RawVec_T_2cA___reserve_internal__h8d71322955e7b7f1($0, $1, $2) & 255;
  if (($0 | 0) == 2) {
   return
  }
  if (!($0 & 1)) {
   alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1049304);
  abort();
 }
 
 function core__num__dec2flt__rawfp__next_float__h96c2fc47f7b351c4($0) {
  var $1 = 0;
  label$1 : {
   $1 = core__f32___impl_20f32___classify__h2cc2893972a149fc($0) & 255;
   if (($1 | 0) != 1) {
    if (!$1) {
     break label$1
    }
    return wasm2js_scratch_store_i32(0, (wasm2js_scratch_store_f32($0), wasm2js_scratch_load_i32(0)) + 1 | 0), wasm2js_scratch_load_f32();
   }
   return Math_fround(infinity);
  }
  core__panicking__panic__h2d0bc53a963fb996(1049388);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve__h23f4dea92ede66ce($0, $1, $2) {
  $0 = alloc__raw_vec__RawVec_T_2cA___reserve_internal__h28a36e5702bfaf69($0, $1, $2) & 255;
  if (($0 | 0) == 2) {
   return
  }
  if (!($0 & 1)) {
   alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1049996);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve__h52463841ac7c0460($0, $1) {
  $0 = alloc__raw_vec__RawVec_T_2cA___reserve_internal__h8add1c9e76e271f3($0, $1) & 255;
  if (($0 | 0) == 2) {
   return
  }
  if (!($0 & 1)) {
   alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1049996);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve__h6ab7b297962633ea($0, $1) {
  $0 = alloc__raw_vec__RawVec_T_2cA___reserve_internal__h8443634e8050c0d7($0, $1) & 255;
  if (($0 | 0) == 2) {
   return
  }
  if (!($0 & 1)) {
   alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1049996);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve__h7e75e39abff808bb($0, $1) {
  $0 = alloc__raw_vec__RawVec_T_2cA___reserve_internal__hd0068c913e781a6c($0, $1) & 255;
  if (($0 | 0) == 2) {
   return
  }
  if (!($0 & 1)) {
   alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1049996);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve__h9214e91843dca51d($0, $1) {
  $0 = alloc__raw_vec__RawVec_T_2cA___reserve_internal__h8b9c496d8cbceb29($0, $1) & 255;
  if (($0 | 0) == 2) {
   return
  }
  if (!($0 & 1)) {
   alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1049996);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve__h975e5b4298fee389($0, $1) {
  $0 = alloc__raw_vec__RawVec_T_2cA___reserve_internal__hdf0cc57226d33c45($0, $1) & 255;
  if (($0 | 0) == 2) {
   return
  }
  if (!($0 & 1)) {
   alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1049996);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve__h9f93e4f95dcb69eb($0, $1, $2) {
  $0 = alloc__raw_vec__RawVec_T_2cA___reserve_internal__h5b451f0e173ccf3c($0, $1, $2) & 255;
  if (($0 | 0) == 2) {
   return
  }
  if (!($0 & 1)) {
   alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
   abort();
  }
  core__panicking__panic__h2d0bc53a963fb996(1049996);
  abort();
 }
 
 function core__ptr__real_drop_in_place__ha30d3a7460946ab5($0) {
  var $1 = 0;
  $1 = HEAP32[$0 >> 2];
  label$1 : {
   if (!$1) {
    break label$1
   }
   FUNCTION_TABLE[HEAP32[HEAP32[$0 + 4 >> 2] >> 2]]($1);
   if (!HEAP32[HEAP32[$0 + 4 >> 2] + 4 >> 2]) {
    break label$1
   }
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2]);
  }
 }
 
 function $_T_20as_20core__fmt__Debug___fmt__h82f806ed7a74d544($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $0 = HEAP32[$0 >> 2];
  if ((HEAPU8[$1 | 0] & 16) >>> 4) {
   return core__fmt__num___impl_20core__fmt__LowerHex_20for_20i32___fmt__hc0126a1e228a0495($0, $1) | 0
  }
  if ((HEAPU8[$1 | 0] & 32) >>> 5) {
   return core__fmt__num___impl_20core__fmt__UpperHex_20for_20i32___fmt__hde8b8630775a2fae($0, $1) | 0
  }
  return core__fmt__num__imp___impl_20core__fmt__Display_20for_20u32___fmt__h7aa4e3c5490ccb71($0, $1) | 0;
 }
 
 function $_T_20as_20core__fmt__Debug___fmt__haf557208929af496($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $0 = HEAP32[$0 >> 2];
  if ((HEAPU8[$1 | 0] & 16) >>> 4) {
   return core__fmt__num___impl_20core__fmt__LowerHex_20for_20i8___fmt__h6285e90692b92d9d($0, $1) | 0
  }
  if ((HEAPU8[$1 | 0] & 32) >>> 5) {
   return core__fmt__num___impl_20core__fmt__UpperHex_20for_20i8___fmt__h0d6d3232e6cceb39($0, $1) | 0
  }
  return core__fmt__num__imp__fmt_u64__h529ebc247831d1ee(HEAPU8[$0 | 0], 0, 1, $1) | 0;
 }
 
 function __wbg_get_layout_height($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   if ($0) {
    $1 = HEAP32[$0 >> 2];
    if (($1 | 0) == -1) {
     break label$1
    }
    HEAP32[$0 >> 2] = $1;
    return Math_fround(HEAPF32[$0 + 8 >> 2]);
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function __wbg_get_layout_x($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   if ($0) {
    $1 = HEAP32[$0 >> 2];
    if (($1 | 0) == -1) {
     break label$1
    }
    HEAP32[$0 >> 2] = $1;
    return Math_fround(HEAPF32[$0 + 12 >> 2]);
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function __wbg_get_layout_y($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   if ($0) {
    $1 = HEAP32[$0 >> 2];
    if (($1 | 0) == -1) {
     break label$1
    }
    HEAP32[$0 >> 2] = $1;
    return Math_fround(HEAPF32[$0 + 16 >> 2]);
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function __wbg_get_layout_childCount($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   if ($0) {
    $1 = HEAP32[$0 >> 2];
    if (($1 | 0) == -1) {
     break label$1
    }
    HEAP32[$0 >> 2] = $1;
    return HEAP32[$0 + 20 >> 2];
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function __wbg_node_free($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = global$0 - 32 | 0;
  global$0 = $1;
  $stretch_layout__Node_20as_20wasm_bindgen__convert__traits__FromWasmAbi___from_abi__h96859e12f99a66f2($1, $0);
  $alloc__rc__Rc_T__20as_20core__ops__drop__Drop___drop__h43384082c72e7313($1);
  $0 = HEAP32[$1 + 20 >> 2];
  if ($0 >>> 0 >= 36) {
   __wbindgen_object_drop_ref($0 | 0)
  }
  global$0 = $1 + 32 | 0;
 }
 
 function __wbg_get_node_childCount($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   if ($0) {
    $1 = HEAP32[$0 >> 2];
    if (($1 | 0) == -1) {
     break label$1
    }
    HEAP32[$0 >> 2] = $1;
    return HEAP32[$0 + 28 >> 2];
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function node_markDirty($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0) {
    if (HEAP32[$0 >> 2]) {
     break label$1
    }
    HEAP32[$0 >> 2] = -1;
    stretch_layout__Node__mark_dirty__h3a05b794bae86814($0 + 4 | 0);
    HEAP32[$0 >> 2] = 0;
    return;
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function alloc__rc__Rc_T___new__h45e8788f05bbd8bc($0) {
  var $1 = 0;
  $1 = __rust_alloc(160, 8);
  if ($1) {
   HEAP32[$1 >> 2] = 1;
   HEAP32[$1 + 4 >> 2] = 1;
   memcpy($1 + 8 | 0, $0, 152);
   return $1;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](160, 8);
  abort();
 }
 
 function std__sync__condvar__Condvar__verify__h4afacbcb46c33d4f($0, $1) {
  var $2 = 0;
  $2 = $0;
  $0 = HEAP32[$0 + 4 >> 2];
  HEAP32[$2 + 4 >> 2] = $0 ? $0 : $1;
  if (!(($0 | 0) != ($1 | 0) ? !!$0 : 0)) {
   return
  }
  std__panicking__begin_panic__haa7e8f73e4c17ace(1052876, 54, 1052860);
  abort();
 }
 
 function $std__thread__local__AccessError_20as_20core__fmt__Debug___fmt__h18a95f5b7790d1ed($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $0 = global$0 - 16 | 0;
  global$0 = $0;
  core__fmt__Formatter__debug_struct__h5df6422ae6e44bef($0 + 8 | 0, $1, 1052532, 11);
  $1 = core__fmt__builders__DebugStruct__finish__hc40a0d34053a01e6($0 + 8 | 0);
  global$0 = $0 + 16 | 0;
  return $1 | 0;
 }
 
 function std__panicking__panicking__hf26bc0dde81b7530() {
  var $0 = 0;
  label$1 : {
   if (HEAP32[266672] == 1) {
    $0 = HEAP32[266673];
    break label$1;
   }
   HEAP32[266672] = 1;
   HEAP32[266673] = 0;
  }
  HEAP32[266673] = $0;
  return ($0 | 0) != 0;
 }
 
 function core__fmt__Formatter__debug_tuple__h9b1f009ef608acf0($0, $1, $2, $3) {
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  (wasm2js_i32$0 = $0, wasm2js_i32$1 = FUNCTION_TABLE[HEAP32[HEAP32[$1 + 28 >> 2] + 12 >> 2]](HEAP32[$1 + 24 >> 2], $2, $3) | 0), HEAP8[wasm2js_i32$0 + 8 | 0] = wasm2js_i32$1;
  HEAP32[$0 >> 2] = $1;
  HEAP8[$0 + 9 | 0] = !$3;
  HEAP32[$0 + 4 >> 2] = 0;
 }
 
 function __wbg_get_layout_width($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   if ($0) {
    $1 = HEAP32[$0 >> 2];
    if (($1 | 0) == -1) {
     break label$1
    }
    HEAP32[$0 >> 2] = $1;
    return Math_fround(HEAPF32[$0 + 4 >> 2]);
   }
   wasm_bindgen____rt__throw_null__h3b84a8acea878c63();
   abort();
  }
  wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31();
  abort();
 }
 
 function core__slice___impl_20core__cmp__PartialEq__5bB_5d__20for_20_5bA_5d___eq__h2b75469410f254a8($0, $1, $2, $3) {
  label$1 : {
   if (($1 | 0) == ($3 | 0)) {
    if (($0 | 0) == ($2 | 0)) {
     break label$1
    }
    $0 = !memcmp($0, $2, $1);
   } else {
    $0 = 0
   }
   return $0;
  }
  return 1;
 }
 
 function $_mut_20W_20as_20core__fmt__Write___write_str__hbf7de4ae56983baf($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $0 = HEAP32[$0 >> 2];
  alloc__vec__Vec_T___reserve__hc0f95e3f359a8226($0, $2);
  $3 = HEAP32[$0 + 8 >> 2];
  HEAP32[$0 + 8 >> 2] = $3 + $2;
  memcpy(HEAP32[$0 >> 2] + $3 | 0, $1, $2);
  return 0;
 }
 
 function core__fmt__Formatter__debug_struct__h5df6422ae6e44bef($0, $1, $2, $3) {
  $2 = FUNCTION_TABLE[HEAP32[HEAP32[$1 + 28 >> 2] + 12 >> 2]](HEAP32[$1 + 24 >> 2], $2, $3) | 0;
  HEAP8[$0 + 5 | 0] = 0;
  HEAP8[$0 + 4 | 0] = $2;
  HEAP32[$0 >> 2] = $1;
 }
 
 function core__fmt__Formatter__debug_list__h6c42b170021f5d22($0, $1) {
  var $2 = 0;
  $2 = FUNCTION_TABLE[HEAP32[HEAP32[$1 + 28 >> 2] + 12 >> 2]](HEAP32[$1 + 24 >> 2], 1061123, 1) | 0;
  HEAP8[$0 + 5 | 0] = 0;
  HEAP8[$0 + 4 | 0] = $2;
  HEAP32[$0 >> 2] = $1;
 }
 
 function memset($0, $1, $2) {
  var $3 = 0;
  if ($2) {
   $3 = $0;
   while (1) {
    HEAP8[$3 | 0] = $1;
    $3 = $3 + 1 | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue
    }
    break;
   };
  }
  return $0;
 }
 
 function $stretch_layout__Allocator_20as_20wasm_bindgen__convert__traits__IntoWasmAbi___into_abi__h37b07a46002ab954($0) {
  var $1 = 0;
  $1 = __rust_alloc(8, 4);
  if ($1) {
   HEAP32[$1 + 4 >> 2] = $0;
   HEAP32[$1 >> 2] = 0;
   return $1;
  }
  $0 = HEAP32[266546];
  FUNCTION_TABLE[$0 ? $0 : 56](8, 4);
  abort();
 }
 
 function std__panicking__begin_panic__h5b411e7fa21cfdf8() {
  var $0 = 0;
  $0 = global$0 - 16 | 0;
  global$0 = $0;
  HEAP32[$0 + 12 >> 2] = 32;
  HEAP32[$0 + 8 >> 2] = 1050232;
  std__panicking__rust_panic_with_hook__h6fe9d3817474ba5a($0 + 8 | 0, 1050348, 0, 1050216);
  abort();
 }
 
 function std__panicking__begin_panic__haa7e8f73e4c17ace($0, $1, $2) {
  var $3 = 0;
  $3 = global$0 - 16 | 0;
  global$0 = $3;
  HEAP32[$3 + 12 >> 2] = $1;
  HEAP32[$3 + 8 >> 2] = $0;
  std__panicking__rust_panic_with_hook__h6fe9d3817474ba5a($3 + 8 | 0, 1053160, 0, $2);
  abort();
 }
 
 function core__ops__function__FnOnce__call_once_7b_7bvtable_shim_7d_7d__h49635cc930387f64($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  HEAP32[$2 + 12 >> 2] = HEAP32[$0 >> 2];
  std__sync__once__Once__call_once___7b_7bclosure_7d_7d__h2a97768c037ba613($2 + 12 | 0, $1);
  global$0 = $2 + 16 | 0;
 }
 
 function core__num__dec2flt__bound_intermediate_digits__h2886e07128e9448a($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $4 = 0 - ($2 + (17 < $1 >>> 0) | 0) | 0;
  $3 = HEAP32[$0 + 20 >> 2];
  $0 = HEAP32[$0 + 12 >> 2];
  $3 = $3 + $0 | 0;
  if ($3 >>> 0 < $0 >>> 0) {
   $5 = 1
  }
  $6 = $3;
  $3 = $1;
  $7 = 17 - $1 | 0;
  $0 = $2;
  if (($0 | 0) > -1) {
   $0 = 1
  } else {
   if (($0 | 0) >= -1) {
    $0 = $1 >>> 0 <= 4294967295 ? 0 : 1
   } else {
    $0 = 0
   }
  }
  $3 = $0 ? $3 : $7;
  $1 = $6 + $3 | 0;
  $0 = ($0 ? $2 : $4) + $5 | 0;
  $0 = $1 >>> 0 < $3 >>> 0 ? $0 + 1 | 0 : $0;
  i64toi32_i32$HIGH_BITS = $0;
  return $1;
 }
 
 function __wbg_allocator_free($0) {
  $0 = $0 | 0;
  var $1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $1 = global$0 - 16 | 0;
  global$0 = $1;
  (wasm2js_i32$0 = $1, wasm2js_i32$1 = $stretch_layout__Allocator_20as_20wasm_bindgen__convert__traits__FromWasmAbi___from_abi__hb6f22a877e0ac8fb($0)), HEAP32[wasm2js_i32$0 + 12 >> 2] = wasm2js_i32$1;
  $alloc__rc__Rc_T__20as_20core__ops__drop__Drop___drop__h43384082c72e7313($1 + 12 | 0);
  global$0 = $1 + 16 | 0;
 }
 
 function wasm_bindgen__convert__closures__invoke4_mut__he288c12dcf406b22($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  if ($0) {
   return FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, $2, $3, $4, $5) | 0
  }
  wasm_bindgen__throw_str__hab9714ece8d522f1(1051788, 48);
  abort();
 }
 
 function wasm_bindgen____rt__take_last_exception__h58f7370a4cce4e97($0) {
  var $1 = 0, $2 = 0;
  $1 = HEAP32[266544];
  $2 = HEAP32[266545];
  HEAP32[266544] = 0;
  HEAP32[266545] = 0;
  HEAP32[$0 + 4 >> 2] = $2;
  HEAP32[$0 >> 2] = ($1 | 0) == 1;
 }
 
 function __wbindgen_realloc($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   if ($1 >>> 0 > 4294967292) {
    break label$1
   }
   $0 = __rust_realloc($0, $1, 4, $2);
   if (!$0) {
    break label$1
   }
   return $0 | 0;
  }
  abort();
 }
 
 function core__ptr__real_drop_in_place__h9607bab7a262d57f($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = HEAP32[$0 + 4 >> 2];
  label$1 : {
   if (!$1) {
    break label$1
   }
   if (!HEAP32[$0 + 8 >> 2]) {
    break label$1
   }
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877($1);
  }
 }
 
 function $f32_20as_20core__num__dec2flt__rawfp__RawFloat___short_fast_pow10__h2cbe7cd7345f7d25($0) {
  if ($0 >>> 0 <= 10) {
   return HEAPF32[($0 << 2) + 1059964 >> 2]
  }
  core__panicking__panic_bounds_check__h0537ade040df571e(1060048, $0, 11);
  abort();
 }
 
 function wasm_bindgen__convert__closures__invoke3_mut__h269c6d7eec989eb2($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  if ($0) {
   FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, $2, $3, $4);
   return;
  }
  wasm_bindgen__throw_str__hab9714ece8d522f1(1051788, 48);
  abort();
 }
 
 function wasm_bindgen__convert__closures__invoke3_mut__h2882444d53742a18($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  if ($0) {
   return FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, $2, $3, $4) | 0
  }
  wasm_bindgen__throw_str__hab9714ece8d522f1(1051788, 48);
  abort();
 }
 
 function wasm_bindgen__convert__closures__invoke3_mut__h386980c832a9a38d($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = +$2;
  $3 = $3 | 0;
  $4 = $4 | 0;
  if ($0) {
   FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, $2, $3, $4);
   return;
  }
  wasm_bindgen__throw_str__hab9714ece8d522f1(1051788, 48);
  abort();
 }
 
 function wasm_bindgen__convert__closures__invoke3_mut__hba7540a8a6a25757($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = Math_fround($2);
  $3 = $3 | 0;
  $4 = $4 | 0;
  if ($0) {
   FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, $2, $3, $4);
   return;
  }
  wasm_bindgen__throw_str__hab9714ece8d522f1(1051788, 48);
  abort();
 }
 
 function std__collections__hash__map__RandomState__new__KEYS____getit__hace98a9e78dbc0fb() {
  if (!(!HEAP32[266551] & HEAP32[266550] == 1)) {
   HEAP32[266554] = 2;
   HEAP32[266555] = 0;
   HEAP32[266552] = 1;
   HEAP32[266553] = 0;
   HEAP32[266550] = 1;
   HEAP32[266551] = 0;
  }
  return 1066208;
 }
 
 function $core__num__bignum__Big32x40_20as_20core__cmp__PartialEq___eq__h59a6aa076884368c($0, $1) {
  if (($0 | 0) != ($1 | 0)) {
   return !memcmp($0 + 4 | 0, $1 + 4 | 0, 160)
  }
  return 1;
 }
 
 function wasm_bindgen__convert__closures__invoke2_mut__h792e0a7b1f9c8fb5($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  if ($0) {
   FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, $2, $3);
   return;
  }
  wasm_bindgen__throw_str__hab9714ece8d522f1(1051788, 48);
  abort();
 }
 
 function core__fmt__num__imp___impl_20core__fmt__Display_20for_20i16___fmt__h5e51fde45daf1962($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = HEAP16[$0 >> 1];
  $0 = $3 >> 31;
  $6 = $3;
  $2 = $0;
  $5 = $2 >> 31;
  $4 = $2 >> 31;
  $2 = $2 + $5 | 0;
  $3 = $3 + $4 | 0;
  if ($3 >>> 0 < $4 >>> 0) {
   $2 = $2 + 1 | 0
  }
  $3 = $3 ^ $4;
  $2 = $2 ^ $5;
  if (($0 | 0) > -1) {
   $0 = 1
  } else {
   if (($0 | 0) >= -1) {
    $0 = $6 >>> 0 <= 4294967295 ? 0 : 1
   } else {
    $0 = 0
   }
  }
  return core__fmt__num__imp__fmt_u64__h529ebc247831d1ee($3, $2, $0, $1) | 0;
 }
 
 function $std__panicking__begin_panic__PanicPayload_A__20as_20core__panic__BoxMeUp___get__hd6c52858587de979($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = HEAP32[$1 >> 2];
  HEAP32[$0 + 4 >> 2] = $2 ? 1050368 : 1050384;
  HEAP32[$0 >> 2] = $2 ? $1 : 1050368;
 }
 
 function wasm_bindgen__convert__closures__invoke1_mut__ha67df87f38cf6cc3($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  if ($0) {
   return FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, $2) | 0
  }
  wasm_bindgen__throw_str__hab9714ece8d522f1(1051788, 48);
  abort();
 }
 
 function wasm_bindgen__anyref__HEAP_SLAB____getit__h2f4a504ab33fb747() {
  if (!HEAP32[266539]) {
   HEAP32[266542] = 0;
   HEAP32[266543] = 0;
   HEAP32[266540] = 0;
   HEAP32[266541] = 0;
   HEAP32[266539] = 4;
  }
  return 1066156;
 }
 
 function $std__panicking__begin_panic__PanicPayload_A__20as_20core__panic__BoxMeUp___get__h9a801acfcc17125f($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = HEAP32[$1 >> 2];
  HEAP32[$0 + 4 >> 2] = $2 ? 1053180 : 1053196;
  HEAP32[$0 >> 2] = $2 ? $1 : 1052196;
 }
 
 function core__num__bignum__Big32x40__from_small__h597a0b75ac140389($0, $1) {
  HEAP32[$0 + 4 >> 2] = $1;
  HEAP32[$0 >> 2] = 1;
  memset($0 + 8 | 0, 0, 156);
 }
 
 function $core__num__bignum__Big32x40_20as_20core__clone__Clone___clone__h6d9ab1cb70598592($0, $1) {
  HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
  memcpy($0 + 4 | 0, $1 + 4 | 0, 160);
 }
 
 function core__num__dec2flt__rawfp__encode_subnormal__h6cdda8501f4182df($0, $1) {
  if (!(!$1 & $0 >>> 0 > 8388607 | $1 >>> 0 > 0)) {
   return wasm2js_scratch_store_i32(0, $0), wasm2js_scratch_load_f32()
  }
  core__panicking__panic__h2d0bc53a963fb996(1049844);
  abort();
 }
 
 function $alloc__raw_vec__RawVec_T_2cA__20as_20core__ops__drop__Drop___drop__hea72d4f82201e60d($0) {
  if (HEAP32[$0 + 4 >> 2]) {
   dlmalloc__dlmalloc__Dlmalloc__free__h4acdae787fb6f877(HEAP32[$0 >> 2])
  }
 }
 
 function $core__cell__BorrowError_20as_20core__fmt__Debug___fmt__h93a0698d28d7fdbe($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return FUNCTION_TABLE[HEAP32[HEAP32[$1 + 28 >> 2] + 12 >> 2]](HEAP32[$1 + 24 >> 2], 1060191, 11) | 0;
 }
 
 function $core__cell__BorrowMutError_20as_20core__fmt__Debug___fmt__h048798b77d59bbb7($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return FUNCTION_TABLE[HEAP32[HEAP32[$1 + 28 >> 2] + 12 >> 2]](HEAP32[$1 + 24 >> 2], 1060202, 14) | 0;
 }
 
 function core__ptr__real_drop_in_place__h2d71aab7a2e116e4($0) {
  if (HEAP32[$0 >> 2]) {
   $alloc__raw_vec__RawVec_T_2cA__20as_20core__ops__drop__Drop___drop__hea72d4f82201e60d($0)
  }
 }
 
 function core__ptr__real_drop_in_place__hdc1e99b704e1afd5($0) {
  $0 = $0 | 0;
  $0 = HEAP32[$0 >> 2];
  if ($0 >>> 0 >= 36) {
   __wbindgen_object_drop_ref($0 | 0)
  }
 }
 
 function core__option__Option_T___unwrap__h066c49837ee94964($0) {
  if ($0) {
   return $0
  }
  core__panicking__panic__h2d0bc53a963fb996(1052304);
  abort();
 }
 
 function __rust_realloc($0, $1, $2, $3) {
  return __rdl_realloc($0, $1, $2, $3);
 }
 
 function $_T_20as_20core__fmt__Debug___fmt__h16827be1f4c9a1e9($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return core__fmt__Formatter__pad__h68a31bee2c5b56a5($1, 1060188, 3) | 0;
 }
 
 function __rust_alloc($0, $1) {
  __inlined_func$__rdl_alloc : {
   if (8 < $1 >>> 0) {
    $0 = dlmalloc__dlmalloc__Dlmalloc__memalign__he461fff21ac8d1e2($1, $0);
    break __inlined_func$__rdl_alloc;
   }
   $0 = dlmalloc__dlmalloc__Dlmalloc__malloc__haa66310b00a7bd6b($0);
  }
  return $0;
 }
 
 function $_T_20as_20core__fmt__Display___fmt__h38d52cd3818add36($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return core__fmt__Formatter__pad__h68a31bee2c5b56a5($1, HEAP32[$0 >> 2], HEAP32[$0 + 4 >> 2]) | 0;
 }
 
 function __wbindgen_exn_store($0) {
  $0 = $0 | 0;
  HEAP32[266545] = $0;
  HEAP32[266544] = 1;
 }
 
 function core__fmt__num__imp___impl_20core__fmt__Display_20for_20u32___fmt__h7aa4e3c5490ccb71($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return core__fmt__num__imp__fmt_u64__h529ebc247831d1ee(HEAP32[$0 >> 2], 0, 1, $1) | 0;
 }
 
 function $_mut_20W_20as_20core__fmt__Write___write_str__hb811685833686aff($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  return $core__fmt__builders__PadAdapter_20as_20core__fmt__Write___write_str__h09f53eef721a952f(HEAP32[$0 >> 2], $1, $2) | 0;
 }
 
 function $std__sys_common__poison__PoisonError_T__20as_20core__fmt__Debug___fmt__h75a1ba5db42e9200($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $str_20as_20core__fmt__Debug___fmt__hc8f3c3cee2cdcf2f(1050321, $1) | 0;
 }
 
 function $_T_20as_20core__fmt__Debug___fmt__hb9c05088784254b0($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $stretch__id__Id_20as_20core__fmt__Debug___fmt__h87ea841616a7ea48(HEAP32[$0 >> 2], $1) | 0;
 }
 
 function $_T_20as_20core__fmt__Debug___fmt__hf34a6ebb2db61a24($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $stretch__node__Node_20as_20core__fmt__Debug___fmt__hf538d2cee6a5838a(HEAP32[$0 >> 2], $1) | 0;
 }
 
 function wasm_bindgen__throw_str__hab9714ece8d522f1($0, $1) {
  __wbindgen_throw($0 | 0, $1 | 0);
  abort();
 }
 
 function wasm_bindgen____rt__throw_null__h3b84a8acea878c63() {
  wasm_bindgen__throw_str__hab9714ece8d522f1(1051924, 27);
  abort();
 }
 
 function wasm_bindgen____rt__borrow_fail__hfaa75b4633825a31() {
  wasm_bindgen__throw_str__hab9714ece8d522f1(1051951, 79);
  abort();
 }
 
 function $std__sys_common__poison__PoisonError_T__20as_20core__fmt__Debug___fmt__ha5791ce006169b27($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $str_20as_20core__fmt__Debug___fmt__hc8f3c3cee2cdcf2f(1053096, $1) | 0;
 }
 
 function $_mut_20W_20as_20core__fmt__Write___write_char__ha13f0d6f25252451($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return core__fmt__Write__write_char__h3c3cb45a8d017382(HEAP32[$0 >> 2], $1) | 0;
 }
 
 function alloc__raw_vec__capacity_overflow__he79b434a8a95c170() {
  core__panicking__panic__h2d0bc53a963fb996(1053432);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__h9ed5f03df2fd77d8() {
  alloc__raw_vec__capacity_overflow__he79b434a8a95c170();
  abort();
 }
 
 function $T_20as_20core__any__Any___type_id__h8cbb8d2b3068c734($0) {
  $0 = $0 | 0;
  i64toi32_i32$HIGH_BITS = 1757840133;
  return -801715452;
 }
 
 function $T_20as_20core__any__Any___type_id__hb6ff18d5649dfbdd($0) {
  $0 = $0 | 0;
  i64toi32_i32$HIGH_BITS = 286299353;
  return 1890621284;
 }
 
 function $T_20as_20core__any__Any___type_id__h5a5e59c100317b95($0) {
  $0 = $0 | 0;
  i64toi32_i32$HIGH_BITS = -456898414;
  return 616890957;
 }
 
 function $T_20as_20core__any__Any___type_id__h6fe3f59eb2ccfbad($0) {
  $0 = $0 | 0;
  i64toi32_i32$HIGH_BITS = -221651336;
  return -1700508087;
 }
 
 function core__ptr__real_drop_in_place__he209f2a42eb71450($0) {
  $0 = $0 | 0;
 }
 
 function std__alloc__default_alloc_error_hook__h90fd00710b001a16($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
 }
 
 function legalfunc$wasm2js_scratch_store_i64($0, $1) {
  legalimport$wasm2js_scratch_store_i64($0 | 0, $1 | 0);
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $4 = $2 >>> 16;
  $3 = $0 >>> 16;
  $7 = Math_imul($4, $3);
  $5 = $2 & 65535;
  $0 = $0 & 65535;
  $6 = Math_imul($5, $0);
  $3 = ($6 >>> 16) + Math_imul($3, $5) | 0;
  $0 = ($3 & 65535) + Math_imul($0, $4) | 0;
  i64toi32_i32$HIGH_BITS = (($7 + Math_imul($1, $2) | 0) + ($3 >>> 16) | 0) + ($0 >>> 16) | 0;
  return $6 & 65535 | $0 << 16;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  label$3 : {
   label$9 : {
    if ($1) {
     break label$9
    }
    $1 = $0;
    $0 = ($0 >>> 0) / 1e4 | 0;
    legalfunc$wasm2js_scratch_store_i64($1 - Math_imul($0, 1e4) | 0, 0);
    i64toi32_i32$HIGH_BITS = 0;
    return $0;
   }
   $6 = 51 - Math_clz32($1) | 0;
   $4 = 0 - $6 | 0;
   break label$3;
  }
  $3 = $6 & 63;
  $2 = $3 & 31;
  if (32 <= $3 >>> 0) {
   $3 = 0;
   $5 = $1 >>> $2;
  } else {
   $3 = $1 >>> $2;
   $5 = ((1 << $2) - 1 & $1) << 32 - $2 | $0 >>> $2;
  }
  $4 = $4 & 63;
  $2 = $4 & 31;
  if (32 <= $4 >>> 0) {
   $1 = $0 << $2;
   $0 = 0;
  } else {
   $1 = (1 << $2) - 1 & $0 >>> 32 - $2 | $1 << $2;
   $0 = $0 << $2;
  }
  if ($6) {
   while (1) {
    $4 = $3 << 1 | $5 >>> 31;
    $3 = $5 << 1 | $1 >>> 31;
    $5 = 0 - ($4 + (9999 < $3 >>> 0) | 0) | 0;
    $7 = $5 >> 31;
    $2 = $7 & 1e4;
    $5 = $3 - $2 | 0;
    $3 = $4 - ($3 >>> 0 < $2 >>> 0) | 0;
    $1 = $1 << 1 | $0 >>> 31;
    $0 = $8 | $0 << 1;
    $7 = $7 & 1;
    $8 = $7;
    $6 = $6 + -1 | 0;
    if ($6) {
     continue
    }
    break;
   }
  }
  legalfunc$wasm2js_scratch_store_i64($5, $3);
  i64toi32_i32$HIGH_BITS = $1 << 1 | $0 >>> 31;
  return $7 | $0 << 1;
 }
 
 function __wasm_i64_mul($0, $1, $2) {
  return _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE($0, $1, $2);
 }
 
 function __wasm_rotl_i32($0) {
  var $1 = 0;
  $1 = $0 & 31;
  $0 = 0 - $0 & 31;
  return (-1 >>> $1 & -2) << $1 | (-1 << $0 & -2) >>> $0;
 }
 
 function __wasm_rotl_i64($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $6 = $2 & 63;
  $5 = $6;
  $3 = $5 & 31;
  if (32 <= $5 >>> 0) {
   $3 = -1 >>> $3
  } else {
   $4 = -1 >>> $3;
   $3 = (1 << $3) - 1 << 32 - $3 | -1 >>> $3;
  }
  $5 = $3 & $0;
  $3 = $1 & $4;
  $4 = $6 & 31;
  if (32 <= $6 >>> 0) {
   $3 = $5 << $4;
   $6 = 0;
  } else {
   $3 = (1 << $4) - 1 & $5 >>> 32 - $4 | $3 << $4;
   $6 = $5 << $4;
  }
  $5 = $3;
  $4 = 0 - $2 & 63;
  $3 = $4;
  $2 = $3 & 31;
  if (32 <= $3 >>> 0) {
   $3 = -1 << $2;
   $2 = 0;
  } else {
   $3 = (1 << $2) - 1 & -1 >>> 32 - $2 | -1 << $2;
   $2 = -1 << $2;
  }
  $0 = $2 & $0;
  $3 = $1 & $3;
  $1 = $4 & 31;
  if (32 <= $4 >>> 0) {
   $2 = 0;
   $0 = $3 >>> $1;
  } else {
   $2 = $3 >>> $1;
   $0 = ((1 << $1) - 1 & $3) << 32 - $1 | $0 >>> $1;
  }
  $0 = $0 | $6;
  i64toi32_i32$HIGH_BITS = $2 | $5;
  return $0;
 }
 
 var FUNCTION_TABLE = [null, core__ptr__real_drop_in_place__hdc1e99b704e1afd5, stretch_layout__Node__set_measure___7b_7bclosure_7d_7d__h28a392002c378f9d, core__ops__function__FnOnce__call_once_7b_7bvtable_shim_7d_7d__h53e9c0fdf58804c3, core__ptr__real_drop_in_place__he209f2a42eb71450, $T_20as_20core__any__Any___type_id__hb6ff18d5649dfbdd, core__fmt__num__imp___impl_20core__fmt__Display_20for_20i16___fmt__h5e51fde45daf1962, $_T_20as_20core__fmt__Display___fmt__h38d52cd3818add36, $core__cell__BorrowMutError_20as_20core__fmt__Debug___fmt__h048798b77d59bbb7, $core__cell__BorrowError_20as_20core__fmt__Debug___fmt__h93a0698d28d7fdbe, $stretch__Error_20as_20core__fmt__Debug___fmt__h8d59d6d7ecfcc765, core__ptr__real_drop_in_place__he209f2a42eb71450, std__sync__once__Once__call_once___7b_7bclosure_7d_7d__h2a97768c037ba613, core__ops__function__FnOnce__call_once_7b_7bvtable_shim_7d_7d__h49635cc930387f64, $std__thread__local__AccessError_20as_20core__fmt__Debug___fmt__h18a95f5b7790d1ed, $std__sys_common__poison__PoisonError_T__20as_20core__fmt__Debug___fmt__h75a1ba5db42e9200, core__ptr__real_drop_in_place__he209f2a42eb71450, $std__panicking__begin_panic__PanicPayload_A__20as_20core__panic__BoxMeUp___box_me_up__h6a0adeaa852e550f, $std__panicking__begin_panic__PanicPayload_A__20as_20core__panic__BoxMeUp___get__hd6c52858587de979, core__ptr__real_drop_in_place__he209f2a42eb71450, core__ptr__real_drop_in_place__he209f2a42eb71450, $T_20as_20core__any__Any___type_id__h8cbb8d2b3068c734, $core__fmt__Arguments_20as_20core__fmt__Display___fmt__hc018daa18b15c7f0, $_T_20as_20core__fmt__Debug___fmt__h82f806ed7a74d544, core__ptr__real_drop_in_place__he209f2a42eb71450, $_T_20as_20core__fmt__Debug___fmt__h82f806ed7a74d544, std__collections__hash__map__RandomState__new__KEYS____getit__hace98a9e78dbc0fb, core__ptr__real_drop_in_place__he209f2a42eb71450, $_T_20as_20core__fmt__Debug___fmt__hb9c05088784254b0, core__ptr__real_drop_in_place__he209f2a42eb71450, $_T_20as_20core__fmt__Debug___fmt__h16827be1f4c9a1e9, core__ptr__real_drop_in_place__he209f2a42eb71450, $_T_20as_20core__fmt__Debug___fmt__hf34a6ebb2db61a24, wasm_bindgen__convert__closures__invoke1_mut__ha67df87f38cf6cc3, wasm_bindgen__convert__closures__invoke2_mut__h792e0a7b1f9c8fb5, wasm_bindgen__convert__closures__invoke2_mut__h792e0a7b1f9c8fb5, wasm_bindgen__convert__closures__invoke3_mut__h386980c832a9a38d, wasm_bindgen__convert__closures__invoke3_mut__h269c6d7eec989eb2, wasm_bindgen__convert__closures__invoke3_mut__h2882444d53742a18, wasm_bindgen__convert__closures__invoke3_mut__h24492714bab77b7d, wasm_bindgen__convert__closures__invoke3_mut__h269c6d7eec989eb2, wasm_bindgen__convert__closures__invoke3_mut__h269c6d7eec989eb2, wasm_bindgen__convert__closures__invoke3_mut__hba7540a8a6a25757, wasm_bindgen__convert__closures__invoke3_mut__h269c6d7eec989eb2, wasm_bindgen__convert__closures__invoke3_mut__h269c6d7eec989eb2, wasm_bindgen__convert__closures__invoke3_mut__h269c6d7eec989eb2, wasm_bindgen__convert__closures__invoke3_mut__h269c6d7eec989eb2, wasm_bindgen__convert__closures__invoke3_mut__h269c6d7eec989eb2, wasm_bindgen__convert__closures__invoke3_mut__h269c6d7eec989eb2, wasm_bindgen__convert__closures__invoke3_mut__h2882444d53742a18, wasm_bindgen__convert__closures__invoke4_mut__he288c12dcf406b22, wasm_bindgen__anyref__HEAP_SLAB____getit__h2f4a504ab33fb747, $_T_20as_20core__fmt__Display___fmt__h38d52cd3818add36, $std__ffi__c_str__NulError_20as_20core__fmt__Debug___fmt__hf4efecf81595b660, $std__sys_common__poison__PoisonError_T__20as_20core__fmt__Debug___fmt__ha5791ce006169b27, $_T_20as_20core__fmt__Debug___fmt__h82f806ed7a74d544, std__alloc__default_alloc_error_hook__h90fd00710b001a16, core__ptr__real_drop_in_place__he209f2a42eb71450, $_mut_20W_20as_20core__fmt__Write___write_str__hbf7de4ae56983baf, $_mut_20W_20as_20core__fmt__Write___write_char__h1c21fdd05686cba7, $_mut_20W_20as_20core__fmt__Write___write_fmt__h5bb17cb408313c18, $_T_20as_20core__fmt__Debug___fmt__haf557208929af496, core__ptr__real_drop_in_place__he209f2a42eb71450, $T_20as_20core__any__Any___type_id__h5a5e59c100317b95, core__ptr__real_drop_in_place__h9607bab7a262d57f, $std__panicking__continue_panic_fmt__PanicPayload_20as_20core__panic__BoxMeUp___box_me_up__h8011f8530b5a8041, $std__panicking__continue_panic_fmt__PanicPayload_20as_20core__panic__BoxMeUp___get__h10b76064b0aa5d4d, $alloc__raw_vec__RawVec_T_2cA__20as_20core__ops__drop__Drop___drop__hea72d4f82201e60d, $T_20as_20core__any__Any___type_id__h6fe3f59eb2ccfbad, core__ptr__real_drop_in_place__he209f2a42eb71450, $std__panicking__begin_panic__PanicPayload_A__20as_20core__panic__BoxMeUp___box_me_up__h220d30503ac86e8b, $std__panicking__begin_panic__PanicPayload_A__20as_20core__panic__BoxMeUp___get__h9a801acfcc17125f, $T_20as_20core__any__Any___type_id__hb6ff18d5649dfbdd, $T_20as_20core__any__Any___type_id__h8cbb8d2b3068c734, $_T_20as_20core__fmt__Debug___fmt__h2ec535d2865cd60c, core__fmt__num__imp___impl_20core__fmt__Display_20for_20u32___fmt__h7aa4e3c5490ccb71, $_T_20as_20core__fmt__Display___fmt__h38d52cd3818add36, $core__ops__range__Range_Idx__20as_20core__fmt__Debug___fmt__h6b10d5f1af7ade3c, $char_20as_20core__fmt__Debug___fmt__h8724f2c9877f6e71, core__fmt__num__imp___impl_20core__fmt__Display_20for_20u32___fmt__h7aa4e3c5490ccb71, core__ptr__real_drop_in_place__he209f2a42eb71450, $T_20as_20core__any__Any___type_id__h5a5e59c100317b95, core__ptr__real_drop_in_place__he209f2a42eb71450, $core__fmt__builders__PadAdapter_20as_20core__fmt__Write___write_str__h09f53eef721a952f, core__fmt__Write__write_char__h3c3cb45a8d017382, core__fmt__Write__write_fmt__ha2ab03f5dc69baa1, core__ptr__real_drop_in_place__he209f2a42eb71450, $_mut_20W_20as_20core__fmt__Write___write_str__hb811685833686aff, $_mut_20W_20as_20core__fmt__Write___write_char__ha13f0d6f25252451, $_mut_20W_20as_20core__fmt__Write___write_fmt__h56aff2de7507f7ee];
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new global.Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = newHEAP8;
   HEAP8 = new global.Int8Array(newBuffer);
   HEAP16 = new global.Int16Array(newBuffer);
   HEAP32 = new global.Int32Array(newBuffer);
   HEAPU8 = new global.Uint8Array(newBuffer);
   HEAPU16 = new global.Uint16Array(newBuffer);
   HEAPU32 = new global.Uint32Array(newBuffer);
   HEAPF32 = new global.Float32Array(newBuffer);
   HEAPF64 = new global.Float64Array(newBuffer);
   buffer = newBuffer;
  }
  return oldPages;
 }
 
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__wbg_layout_free": __wbg_layout_free, 
  "__wbg_get_layout_width": __wbg_get_layout_width, 
  "__wbg_get_layout_height": __wbg_get_layout_height, 
  "__wbg_get_layout_x": __wbg_get_layout_x, 
  "__wbg_get_layout_y": __wbg_get_layout_y, 
  "__wbg_get_layout_childCount": __wbg_get_layout_childCount, 
  "layout_child": layout_child, 
  "__wbg_allocator_free": __wbg_allocator_free, 
  "allocator_new": allocator_new, 
  "__wbg_node_free": __wbg_node_free, 
  "__wbg_get_node_childCount": __wbg_get_node_childCount, 
  "node_new": node_new, 
  "node_setMeasure": node_setMeasure, 
  "node_addChild": node_addChild, 
  "node_removeChild": node_removeChild, 
  "node_replaceChildAtIndex": node_replaceChildAtIndex, 
  "node_removeChildAtIndex": node_removeChildAtIndex, 
  "node_getStyle": node_getStyle, 
  "node_setStyle": node_setStyle, 
  "node_markDirty": node_markDirty, 
  "node_isDirty": node_isDirty, 
  "node_computeLayout": node_computeLayout, 
  "__wbindgen_exn_store": __wbindgen_exn_store, 
  "__wbindgen_malloc": __wbindgen_malloc, 
  "__wbindgen_realloc": __wbindgen_realloc
 };
}

var memasmFunc = new ArrayBuffer(1114112);
var assignasmFunc = (
    function(mem) {
      var _mem = new Uint8Array(mem);
      return function(offset, s) {
        var bytes;
        if (typeof Buffer === 'undefined') {
          bytes = atob(s);
          for (var i = 0; i < bytes.length; i++)
            _mem[offset + i] = bytes.charCodeAt(i);
        } else {
          bytes = Buffer.from(s, 'base64');
          for (var i = 0; i < bytes.length; i++)
            _mem[offset + i] = bytes[i];
        }
      }
    }
  )(memasmFunc);
assignasmFunc(1048576, "YWxyZWFkeSBib3Jyb3dlZGFscmVhZHkgbXV0YWJseSBib3Jyb3dlZA==");
assignasmFunc(1048624, "L3J1c3RjL2VhZTM0MzdkZmU5OTE2MjFlOGFmZGM4MjczNGY0YTE3MmQ3ZGRmOWIvc3JjL2xpYmNvcmUvc2xpY2UvbW9kLnJzY2FsbGVkIGBSZXN1bHQ6OnVud3JhcCgpYCBvbiBhbiBgRXJyYCB2YWx1ZQAwABAASAAAAHkKAAAKAAAAZGlzcGxheXBvc2l0aW9uVHlwZWRpcmVjdGlvbmZsZXhEaXJlY3Rpb25mbGV4V3JhcG92ZXJmbG93YWxpZ25JdGVtc2FsaWduU2VsZmFsaWduQ29udGVudGp1c3RpZnlDb250ZW50c3RhcnRlbmR0b3Bib3R0b21tYXJnaW5TdGFydG1hcmdpbkVuZG1hcmdpblRvcG1hcmdpbkJvdHRvbXBhZGRpbmdTdGFydHBhZGRpbmdFbmRwYWRkaW5nVG9wcGFkZGluZ0JvdHRvbWJvcmRlclN0YXJ0Ym9yZGVyRW5kYm9yZGVyVG9wYm9yZGVyQm90dG9tZmxleEdyb3dmbGV4U2hyaW5rZmxleEJhc2lzd2lkdGhoZWlnaHRtaW5XaWR0aG1pbkhlaWdodG1heFdpZHRobWF4SGVpZ2h0YXNwZWN0UmF0aW9hdXRvAAAAAQAAAAQAAAAEAAAAAgAAAAIAAAADAAAARmFpbGVkIGluIGphdmFzY3JpcHQEAAAACAAAAAQAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogKmsgPT0gMHNyYy9saWJjb3JlL251bS9kZWMyZmx0L2FsZ29yaXRobS5ycwAAAEACEAAZAAAAWQIQACQAAABXAQAABQAAAHNyYy9saWJhbGxvYy9yYXdfdmVjLnJzaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZQCvAhAAKAAAAJgCEAAXAAAA7QEAAB4AAABuZXh0X2Zsb2F0OiBhcmd1bWVudCBpcyBOYU5zcmMvbGliY29yZS9udW0vZGVjMmZsdC9yYXdmcC5ycwDwAhAAGwAAAAsDEAAgAAAAWwEAABAAAABwcmV2X2Zsb2F0OiBhcmd1bWVudCBpcyBzdWJub3JtYWwAAABEAxAAIQAAAAsDEAAgAAAASAEAABYAAABwcmV2X2Zsb2F0OiBhcmd1bWVudCBpcyB6ZXJvgAMQABwAAAALAxAAIAAAAEkBAAARAAAAcHJldl9mbG9hdDogYXJndW1lbnQgaXMgaW5maW5pdGW0AxAAIAAAAAsDEAAgAAAARgEAABUAAABwcmV2X2Zsb2F0OiBhcmd1bWVudCBpcyBOYU4A7AMQABsAAAALAxAAIAAAAEcBAAAQAAAAZnBfdG9fZmxvYXQ6IGV4cG9uZW50ICB0b28gbGFyZ2UgBBAAFgAAADYEEAAKAAAACwMQACAAAAD6AAAACQAAACB0b28gc21hbGwAACAEEAAWAAAAYAQQAAoAAAALAxAAIAAAAP4AAAAJAAAAaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZYwEEAAoAAAACwMQACAAAAAjAQAANQAAAGVuY29kZV9zdWJub3JtYWw6IG5vdCBhY3R1YWxseSBzdWJub3JtYWzMBBAAKAAAAAsDEAAgAAAAKAEAAAUAAABpbmZOYU46IBIFEAAAAAAAEgUQAAIAAABzcmMvbGliY29yZS9yZXN1bHQucnMAAAAkBRAAFQAAAOcDAAAFAAAAc3JjL2xpYmFsbG9jL3Jhd192ZWMucnNpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlAGMFEAAoAAAATAUQABcAAADtAQAAHgAAAAsAAAAEAAAABAAAAAwAAAANAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZXNyYy9saWJjb3JlL29wdGlvbi5yc7gFEAArAAAA4wUQABUAAABbAQAAFQAAADogAAAQBhAAAAAAABAGEAACAAAAc3JjL2xpYmNvcmUvcmVzdWx0LnJzAAAAJAYQABUAAADnAwAABQAAAHNyYy9saWJzdGQvc3lzL3dhc20vbXV0ZXgucnNMBhAAHAAAABYAAAAJAAAAY2Fubm90IHJlY3Vyc2l2ZWx5IGFjcXVpcmUgbXV0ZXhjYW5ub3QgYWNjZXNzIGEgVExTIHZhbHVlIGR1cmluZyBvciBhZnRlciBpdCBpcyBkZXN0cm95ZWRQb2lzb25FcnJvciB7IGlubmVyOiAuLiB9AAAQAAAACAAAAAQAAAARAAAAEgAAABMAAAAIAAAABAAAAAUAAAAUAAAAAAAAAAEAAAAVAAAAYXNzZXJ0aW9uIGZhaWxlZDogYChsZWZ0ID09IHJpZ2h0KWAKICBsZWZ0OiBgYCwKIHJpZ2h0OiBgYDogIAcQAC0AAABNBxAADAAAAFkHEAADAAAAZGVzdGluYXRpb24gYW5kIHNvdXJjZSBzbGljZXMgaGF2ZSBkaWZmZXJlbnQgbGVuZ3Roc3QHEAA0AAAAc3JjL2xpYmNvcmUvc2xpY2UvbW9kLnJzsAcQABgAAAA+CAAACQAAAElkaWQYAAAABAAAAAQAAAAZAAAAZ2VuZXJhdGlvbmFzc2VydGlvbiBmYWlsZWQ6IGluZGV4IDwgbGVuc3JjL2xpYmFsbG9jL3ZlYy5ycwAA9gcQAB0AAAATCBAAEwAAANsDAAAJAAAAL3J1c3RjL2VhZTM0MzdkZmU5OTE2MjFlOGFmZGM4MjczNGY0YTE3MmQ3ZGRmOWIvc3JjL2xpYmFsbG9jL3ZlYy5ycwBACBAAQwAAAM4KAAAlAAAAQAgQAEMAAADUCgAALAAAAC9jYXJnby9yZWdpc3RyeS9zcmMvZ2l0aHViLmNvbS0xZWNjNjI5OWRiOWVjODIzL2hhc2hicm93bi0wLjQuMC9zcmMvcmF3L21vZC5yc0hhc2ggdGFibGUgY2FwYWNpdHkgb3ZlcmZsb3cAAPIIEAAcAAAApAgQAE4AAABOAAAAKAAAAP////9jYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlc3JjL2xpYmNvcmUvb3B0aW9uLnJzLAkQACsAAABXCRAAFQAAAFsBAAAV");
assignasmFunc(1051024, "L3J1c3RjL2VhZTM0MzdkZmU5OTE2MjFlOGFmZGM4MjczNGY0YTE3MmQ3ZGRmOWIvc3JjL2xpYmNvcmUvc2xpY2UvbW9kLnJzkAkQAEgAAAB5CgAACgAAAJAJEABIAAAAfwoAAA4AAAAXAAAAFQAAABcAAAAVAAAAGAAAABYAAAAYAAAAFgAAAG5vIGVudHJ5IGZvdW5kIGZvciBrZXkAABoAAABjYWxsZWQgYFJlc3VsdDo6dW53cmFwKClgIG9uIGFuIGBFcnJgIHZhbHVlAC9ydXN0Yy9lYWUzNDM3ZGZlOTkxNjIxZThhZmRjODI3MzRmNGExNzJkN2RkZjliL3NyYy9saWJjb3JlL3NsaWNlL21vZC5yc2AKEABIAAAAeQoAAAoAAABgChAASAAAAH8KAAAOAAAATm9kZWluc3RhbmNlGwAAAAQAAAAEAAAAHAAAAGxvY2Fsbm8gZW50cnkgZm91bmQgZm9yIGtleWNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWVzcmMvbGliY29yZS9vcHRpb24ucnMA/woQACsAAAAqCxAAFQAAAFsBAAAV");
assignasmFunc(1051488, "L3J1c3RjL2VhZTM0MzdkZmU5OTE2MjFlOGFmZGM4MjczNGY0YTE3MmQ3ZGRmOWIvc3JjL2xpYmNvcmUvc2xpY2UvbW9kLnJzYAsQAEgAAAB5CgAACgAAAGALEABIAAAAfwoAAA4AAAAVAAAAFwAAABUAAAAXAAAAFgAAABgAAAAWAAAAGA==");
assignasmFunc(1051632, "L3J1c3RjL2VhZTM0MzdkZmU5OTE2MjFlOGFmZGM4MjczNGY0YTE3MmQ3ZGRmOWIvc3JjL2xpYmNvcmUvc2xpY2UvbW9kLnJz8AsQAEgAAAB5CgAACgAAAPALEABIAAAAfwoAAA4AAABNZWFzdXJlAB0AAAAEAAAABAAAAB4AAABJbnZhbGlkTm9kZQAfAAAABAAAAAQAAAAgAAAAY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGRlc3Ryb3llZCBhbHJlYWR5VHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5c3JjL2xpYmFsbG9jL3Jhd192ZWMucnMAvAwQACQAAADgDBAAFwAAAEACAAAJAAAAMwAAAG51bGwgcG9pbnRlciBwYXNzZWQgdG8gcnVzdHJlY3Vyc2l2ZSB1c2Ugb2YgYW4gb2JqZWN0IGRldGVjdGVkIHdoaWNoIHdvdWxkIGxlYWQgdG8gdW5zYWZlIGFsaWFzaW5nIGluIHJ1c3QAADkAAAAEAAAABAAAADoAAAA7AAAAPAAAADkAAAAEAAAABAAAAD0AAABhbHJlYWR5IGJvcnJvd2VkYWxyZWFkeSBtdXRhYmx5IGJvcnJvd2VkYXNzZXJ0aW9uIGZhaWxlZDogYChsZWZ0ID09IHJpZ2h0KWAKICBsZWZ0OiBgYCwKIHJpZ2h0OiBgYAAA0A0QAC0AAAD9DRAADAAAAAkOEAABAAAAPgAAAAAAAAABAAAAPwAAAGA6IADQDRAALQAAAP0NEAAMAAAANA4QAAMAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlc3JjL2xpYmNvcmUvb3B0aW9uLnJzUA4QACsAAAB7DhAAFQAAAFsBAAAVAAAAOiAAACQOEAAAAAAAqA4QAAIAAABzcmMvbGliY29yZS9yZXN1bHQucnMAAAC8DhAAFQAAAOcDAAAFAAAAY2FsbGVkIGBSZXN1bHQ6OnVud3JhcCgpYCBvbiBhbiBgRXJyYCB2YWx1ZXNyYy9saWJhbGxvYy9yYXdfdmVjLnJzVHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5AAAmDxAAJAAAAA8PEAAXAAAAQAIAAAkAAAA5AAAABAAAAAQAAAA3AAAAQWNjZXNzRXJyb3JzcmMvbGlic3RkL3RocmVhZC9tb2QucnMAfw8QABgAAACMAwAAEwAAAGluY29uc2lzdGVudCBwYXJrIHN0YXRlAAIAAABwYXJrIHN0YXRlIGNoYW5nZWQgdW5leHBlY3RlZGx5AMQPEAAfAAAAfw8QABgAAACJAwAADQAAAH8PEAAYAAAAIgQAABEAAABmYWlsZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIHRocmVhZCBJRDogYml0c3BhY2UgZXhoYXVzdGVkdGhyZWFkIG5hbWUgbWF5IG5vdCBjb250YWluIGludGVyaW9yIG51bGwgYnl0ZXMAAH8PEAAYAAAAlwQAABIAAABpbmNvbnNpc3RlbnQgc3RhdGUgaW4gdW5wYXJrc3JjL2xpYnN0ZC9zeW5jL2NvbmR2YXIucnMAAKAQEAAaAAAASAIAABIAAABhdHRlbXB0ZWQgdG8gdXNlIGEgY29uZGl0aW9uIHZhcmlhYmxlIHdpdGggdHdvIG11dGV4ZXNzcmMvbGlic3RkL3N5bmMvb25jZS5ycwAAAAIREAAXAAAAkwEAABUAAABhc3NlcnRpb24gZmFpbGVkOiBzdGF0ZSAmIFNUQVRFX01BU0sgPT0gUlVOTklORwACERAAFwAAAG8BAAAVAAAAT25jZSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkAAACERAAFwAAAMUBAAAJAAAAUG9pc29uRXJyb3IgeyBpbm5lcjogLi4gfQAAAEAAAAAQAAAABAAAAEEAAABCAAAAQwAAAAwAAAAEAAAARAAAAEUAAAAIAAAABAAAAEYAAABHAAAARQAAAAgAAAAEAAAASAAAAD4AAAAAAAAAAQAAAEkAAABOdWxFcnJvcjkAAAAEAAAABAAAAEoAAABzcmMvbGlic3RkL3N5cy93YXNtL2NvbmR2YXIucnMAADQSEAAeAAAAFwAAAAkAAABjYW4ndCBibG9jayB3aXRoIHdlYiBhc3NlbWJseXNyYy9saWJzdGQvc3lzL3dhc20vbXV0ZXgucnMAAACBEhAAHAAAABYAAAAJAAAAY2Fubm90IHJlY3Vyc2l2ZWx5IGFjcXVpcmUgbXV0ZXhzcmMvbGliYWxsb2MvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG935xIQABEAAADQEhAAFwAAAOwCAAAFAAAAYAAAAGFzc2VydGlvbiBmYWlsZWQ6IGUgPj0gdGFibGU6Ok1JTl9Fc3JjL2xpYmNvcmUvbnVtL2RlYzJmbHQvYWxnb3JpdGhtLnJzABQTEAAjAAAANxMQACQAAAARAAAABQAAAAAAAAA8qKspKS624CZJC7rZ3HGMbxuOKBBUjq9LorEyFOlx228Fr5+sMSeJysaaxxf+cKt9eIG5nT1N1k7r8JOCRvCFIibtOCNYbKeqbygHLG5H0cpFeYTbpMyCPZeXZRLOf6MMff3+lsFfzE/cvL78sXf/sQk29z3Pqp8ejAN1DYOVxyVvRNLQ43r5d8Vqg2LO7JvVdkUk+wHoworUVu15AqLz10RWNIxBRZgM1mtB75FWvo/LxhFrNuztOT8c6wKis5QIT+Olg4rgucoiXI8krVjovpWZ2TZsN5Eu+/+PREeFtfn5/7MVmebiPPx/kK0f0I1L+5/0mCdEsR36xzF/MZXdUvwcf+8+fYpnO+Req44crUFKnTZWsmPYaE4i4nVPPocC4qpaU+MNqYOaVTEoXFHTkoDVHpnZEoS24Ipm/48XpeSYLUD/c13Ojn8ciH9o+oBynyNqnwI5oU+HrERHQ4fJIqnXFRkU6fu1yaatj6xxnSN8EJmzF87EK5tUf6CdAfb74JRPhALBmToZemMlQzHAiJ9YvO6TPfC1Y7c1dXwmlqM8JYOSG7C7y4vuI3cinOpfF3V2ipWhkjddEhTt+km3hfQWWah5HOXTWK43CcwxjwjvmYULP/6yyWoAZ87Ovd++QmAAQaHWi21TeECRScyuSWiWkPVbf9otAV56eZmPiHmB9djXf7Oq1+Eyz81fYNUmzX+h4DtchXDA38nYSrOmjLBX/I4dYNBXzrZdeRI8gu2BJLUXF8uiaaJtot3cfcsDCwkLFVRd/uKm5SaNVPqemhCfcLDpuMbB1MaMHCRn+PhE/NeRdkCbN1b7TTaUEMLEK3rhQ7mU8ltb7GzK85yXMXInCL0whL2+TjFK7Dzl7DfRXq4TRg+UhIX2mZgXE7nlJnTAft1X50+YSDhv6paQY75aBgulvLT8bfHHTc7r4b3k9pzwYDON7Z00xCw5gLBoxUH1d0eg3GEbSfmqLOSJOWKbt9U3XazHOoIly4V0171kcfee06iG7L1NtYYIU6hnLaFiqMpn0mC8pD2p3oCDeOsNjVMWYaRWZlFw6Ft5zfbfMkZx2WuA9Je/l83PhqDwfa/9wIOoyGxdGz2xpNL6ZBoxxu6mw5z9YL13qpD0wzy5rBXVtPH0xfOLLQURF5m38O54RtVcv+WsKheYCjTvD6x6Dp+GgJUTVxnSRqjgutesn4ZY0pjpBswjVHeD/5EIvywpVWR/tsrud3NqPR/kPvUqiGKGk46OsjUq+2c4sjEfw/T5gcbef/P5ODwRPItfcDhHixULrnaMBhnu2o3Zyhekz9So+Ie8HY0DCtP2qStlcITMh3TUOz/G0t/UyIQKz3fHFwr7pczCVbmdzHnPwJnVk+IfrIEwAMs42ycXojzA/QbS8ZzKSzC9iEYuRP0vPnYV7JxKnrrN0xonRN3FKcGI4TCVVPe6ePWMPt2UmujWMjCOFDrBoow/vLGZiPHlt6cVD2D1lt6lEdsSuLK8Vg/WkRdm3+uWySW7zp9rk/s772nCh0a4+gprBLMpWObc5sLiDxr3j5Ogc9uT4PSzuIhQ0rgY8uBzVXKDc0+XjNDqTmRQI72vhKVifSRsrNtyp13OlsNLiU8R9YF8tJ6ro1VyopthhtaGdYdFAf0ThudS6ZZB/Jinoaej/FE7f9HFSOY9E4XvgvbaXw1YZqujs9G3EO4/lswgxuWU6c+7/9SbD/3xYdWfyYJTfG66ysd7Y2gbCmm9+S0+IVGmYRacuI1p5Q/6G8Mm8cPek/ji87h2Omtc222YZhQJhjNSib5/WYtnwKYr7vAXt0A4SNuU7N3kUEYaErpmFR7l16CW6GDNMu+GJF6RuID/qqittbXmYL/VEhkj45Ccl8Wr7/WNtIP9tpZrc7Gh5LxkfEbQ3eQO9r4NLKKKnpKzLhG3Sq1Fd2B61WSd2ItKfGwFX2KHLl2bx8b2Oql5NIJ5eLSJ08xg8UvLEDaE/7jtHv6UQ6U+J6mmPXqUzoe4KYhmzByBqSY0KoD/Y6FTMME0YP+8yWh88UE4Pyz8we02KYOnm50xqYTzY5ECxX3TZfC8NUP2LqQ/FpYB6pk6jc+b+4FkwIhww4J6on3wVSa6kYyFTpbrryi27ybiu+XbsqOrsNrqb8lPRmuuyJLLu+MXBtp6t76q3J2HkFnlt+qpwlT6V49kZVTz6fgts71+KXAkd/nfNu8Zxnbq+4sEa6B3FOX6rsWFiJVZnrnam1N1/fcCtIiCqNL8tQPhqqJSB3yjRJnVpZOELebKf4WPuOW4n73fprImH6cHrZfQMHhzyCTMXoI7VpD6LX/2osprNHn5HrTLvYaB17cmof429LDmMrgkn0QxXaA/5u3GlH10iM9fqfh9zki14dtpmxwCmyLaUkTCo8JBq5Bn1fKmGQlrumDFlw9gywXpuLa9Ezg+RyNnJO0M44YMdsA2lM+bqI+TcES5w8KSc7iMlee6uTtI83e9kCioShrw1ey0MlLdIGwLKOJfU4qUIwdZjTforHnsSK+wRSIYmCcb29xrFQ+/+PAIisba0u42LYusd5GHqoT4rdfrupTqUrvMhqXpOaUn6n+oD2SIjrHkn9KJPhX57u6jgyuOWreq6oyktjExZVUlsM0Svz5fVReOgNZuDrcqnbGgjArSZHUE3sgvjQa+koUV+z0YxLZ7c+2cTR51pFrQKMTgZZJNcQQz9ax/e9DG4j+Zl1+ahHjbj79998ClVtJz766amCd2Y6iVWcF+sVN8Eruwcd6daBvX6Q4Hq2IhcSaS0chVu2kNsLYGOysqxBBc5OMEW5p6irmOHMbxQBntZ7KjNy6RX+gB38bivLo7MWGLeBtsqYp9Oa5WIsdT7dzH2XV1XFQU6hyI05JzaZkkJKqId9DDvy2t1LVKYtqXPOyEYt360L1LJ6a6lDlFrR6xz/X8Q0sss86BMvwUXvdfQqI+O5o19ffSyg7KAIPytYf9SH7gkbfRdJ7bnVh2JQYSxlHF7tOuh5b3Uzt1RM0UvponipKVAJptwbEs97qAAMnx73vadFCgHZfrGhGSZAjlvKVhlbZ9Sh7sB10dko7ukpNJtKQ2Mqp3uFvhTcS+lJXm2aywOvd8HZAP2FwJNdwktBMOtEtCEy7hzIhQbwnMvIz/qiTLC//rr7/V7b3O/ubbl6W0NkFfcIn9zmGEEXfMq7xCeuXVlL/WtmlsrwW9N4YjhEcbR6zFpyxlGeJYF7fRO99PjZduEoMK16NwPQrXo83MzMzMzMzMAAAAAAAAAIAAAAAAAAAAoAAAAAAAAADIAAAAAAAAAPoAAAAAAABAnAAAAAAAAFDDAAAAAAAAJPQAAAAAAICWmAAAAAAAILy+AAAAAAAoa+4AAAAAAPkClQAAAABAt0O6AAAAABCl1OgAAAAAKueEkQAAAID0IOa1AAAAoDGpX+MAAAAEv8kbjgAAAMUuvKKxAABAdjprC94AAOiJBCPHigAAYqzF63itAIB6F7cm19gAkKxuMniGhwC0Vwo/FmipAKHtzM4bwtOghBRAYVFZhMilGZC5pW+lOg8g9CePy86ECZT4eDk/geULuTbXB4+h305nBM3J8smWIoFFQHxv/J61cCuorcWdBeNMNhIZN8XHG+DDVt+E9lwRbDqWCxOasxUHyXvOl8Ag20i7GsK98PSIDbVQmXaWMetQ4qQ/FLz9JeUajk8Z6743z9C40e+SrgUDBSfGq7cZx0PGsLeW5XBc6nvOMn6PjPPkGoK/XbNvMJ6hYi814EXeAqWdPSGM15VDDgWNKa9Me9RRRvDz2hDNJPMrdtiIVADu77aTDqtogOmrpDjS1UHwcetmY6OFUmxOpkA8DKdmB+LPUEvP0KBE7YESj4GCyJVoItfyIaM6uwLrjG/qywhqwyVwC+X+RSKaFyYnT5/WqoCd7/Aix4zV4IQrrev4d4UMMztMk5vVps//SR94wouQw38cJxbzVzraz3HY7ZfsyNBDjk7pvSf7xNQxomPt+Rz7JF9FXpQ35DnuttZ1uURdyKlkTNPnSzod6r4P5JDdiKSkrhMdtRWrzU2aWGTi7YqgcGC3fo2orciMOGXesBLZ+q+G/hXdq8f8LRS/LYqW+Xs52S65rPz32oePeufX/drotJms8Ia9ESMiwNesqCzWqyqwDdjS22WrGo4Ix4NSP1ahscq4pCfPqwle/ebNeGELxlpesIDWOY538XXcoEzIcdVtkxPJXzrOSkl4WPt75MDOLUsXnZodcUL5HV3EAWUNk3dldPUgX+i7ar9omel24mpF78K/oxSbxRars+/m7IA77krQlR8oYcqpXUS7J3L5PBR1FepY5xumLGlNki7hos93w+C2epmLw1X0mOTsPzeatZjfjucPxQDjfpey4VP2wJtePd9t9JlYIVuGi4hxwK7p8Weu6o1wGmTuAdqyWIaQ/jRBiN/upzQ+glGqlurRwc3i5dSeMiOZwK0PhUb/a78wmVOmF/9G73x/6M9uX4wVrk/xgUp375qZo22iHFWrAYAMCctjKhYCoE/L/X7aTQHEEZ+eHlGhATXWRsZlpQlCwovY918HRmlZV+eaN4mXwy8tocGFa320e3gJ8jNjzlBN60WXAPwBpSBmF70Ae0LOqD9d7OCM6YDJR7qTGPAj4bvZqLge7GzZKhDT5pMT5Mca6kOQdxjdeaHkVLSVXlTYyR1q4R27NCeeUuKM5OkBsUXnGrBdZEIdF6Eh3Lp+SXKuBJWJad7bDtpF+qsD1pKSUNf41sLFm1uShluGM7eC8jZo8qf/ZCOvRALv0R8fdu1qYTWD56bTqMW5AqShkAgTN2gDzWVa5WsiISKA/rDeBmupKqA9XZbIxVM1yI30uzq3qEL62Hi1hHKpaZwO1+IlzxOEw9GMW+/CGGX0AziZ1Xkvv5gEhv9KWPvuvoVnv10uuqrus6CX+ly0KpXgiD05dGF1uhfrjEfRuRLp7xK4zCK0q5GqF+Z/K6EWtpWd3192SZzjfcLr++mtQY4cs+Z6ZBnSseNfoJm9n0be7jsEgNYj7IrqSgUgzCynraSdBij/9xDZhyIEef+aqocoK0VXv0GVqfJ1Fi0vkvrTtwkufF2bfIQljDnbNMKbpS/vBxLCsgLPffVES7mvYYHcMhaepxu6oZO/m4WRoijKeK8C5zXLsvyrrWGwAb/vnRYZehzCrmvFXJ+Yo3KaxvaZYz+mhyA8moA8z4+pKMvAnwvD89Py/fBE51l4xLeelhVhcJa1ZUa8WnkM/CL/V+vYy4fddf8Wk86+6VRTv9y3gi4kKijv0+URnVYaeXWkj1VE7GDXko2za1UnOY33cOBjlbhDuJpGjLu6plRmQVivamnQ6b9RLtviQSLyF/P8iFvSqu7dLzyr8oZVatU7C9ZXdHViZQXHhW3REru+xjinyIXXaW74BtGdsyYCRVukgoRgsEIWck2jpXhc05vOIMzOljPIQgIp/0E+IL1poXmf0U1oLMQJWMdGYYI3NQwu+cx8sUKhx7yb/ttdk4n5q8L+UjX46/dW899TIXvzWhaY1qjpWbDxG74ME2RwHO6i7eiLPsbR1IWU4S7ONwZKp7mausHFhxwR6KAUmdvUsQqRyFl/EkpeTbU6MB+X3LWg4iR+c96pcaSNrV0QVhSODbEZdZRrmfFQ3TDJPOP/llKKe/sL3L8856xa+g7T7wsh2Hhc6eN1pxSHlrPjXFPR2ah8oBw0qEUQ007kkSCJK+qDYV22aGu25KS59ONCBuQdzvR4zumDrtKAMRdC5CRaB6H9nFIdrjBJyTxEp6TZfJv7poroBgguQZ1PraIIinmRxKNYy4rs17X1Zhe/1vOmkZk/3W7MsBD2v4+Uiv/clPPv2Zy2Hwo9+JUQRKSnTEx2uxRVjdFf31PqLFX44ptrdJJ3arbbgoYRtxUFpJIj6NXkLYOmOxaxBY/4I5DKWx3HsvcsNL2y5HjfGpxAtu+Oq4shw9Cjq3KWrunzxIxWDzzacRj7F5aJZYiO3vmd++t+qjFWeIX6ph7V3zVrk1woM4VXA0a4c/J/piyEV6YQ7x/QnLL2Z2r1E4JDX/QBxfKYohN3cUJ2Lz/L2NQN01P7Dv4HpehjFF3JnknO4nxZtHvG24Eb3G+hGvgpMZHp5aQQm3N99WMfztTB0NzyPKcBSvICyheGCEFul4K8nadK0Um9oyuFUZ1FnOxGO/NSgqvhkxcKsOdiFtq4nQycofubEOfihwFFfWFqkNvpQZbc+YS0UWTSu1M4puGzfmNVNOMHjWBevGoB3Emw93VrxQFTXNy7KWMb4bO5iSn0O2LZICisNPHKug8pMtfA1r7UqVl/hnCM7kkUMB+ojC9qXBn8JtK4XcLZj11Ygyb1MtDzdC6kb7I/xDASOs2Fz6d6XktEgGfDURk2XlWgQTSmn8O1ashRwY+HNGOF+tLYudQAXpOcB0/oCYE1uMPJYmJM4UKm9L59vc/M6eeYLd2sA0DkIb94FJgEUF3q7ssM3wJSelKV/s+Wg+YYp7r9g3wkIN9Q6X7SzRZ0i9KRy/vP+9L71fvZ+9z73/vj++b76fvt+/D78/v2+/r7/fsA/AT8B/wK/A78EfwU/Bj8G/we/CL8Jfwo/Cz8L/wy/Db8Ofw8/ED8Q/xG/Er8TfxQ/FT8V/xa/F38Yfxk/Gf8a/xu/HH8dfx4/Hv8f/yC/IX8ifyM/I/8k/yW/Jn8nfyg/KP8p/yq/K38sfy0/Lf8uvy+/MH8xPzI/Mv8zvzS/NX82Pzc/N/84vzm/On87Pzw/PP89vz6/P38AP0E/Qf9Cv0O/RH9FP0Y/Rv9Hv0h/SX9KP0r/S/9Mv01/Tn9PP0//UP9Rv1J/U39UP1T/Vf9Wv1d/WH9ZP1n/Wv9bv1x/XX9eP17/X79gv2F/Yj9jP2P/ZL9lv2Z/Zz9oP2j/ab9qv2t/bD9tP23/br9vv3B/cT9yP3L/c790v3V/dj92/3f/eL95f3p/ez97/3z/fb9+f39/QD+A/4H/gr+Df4R/hT+F/4b/h7+If4l/ij+K/4v/jL+Nf45/jz+P/5C/kb+Sf5M/lD+U/5W/lr+Xf5g/mT+Z/5q/m7+cf50/nj+e/5+/oL+hf6I/oz+j/6S/pb+mf6c/p/+o/6m/qn+rf6w/rP+t/66/r3+wf7E/sf+y/7O/tH+1f7Y/tv+3/7i/uX+6f7s/u/+8/72/vn+/f4A/wP/Bv8K/w3/EP8U/xf/Gv8e/yH/JP8o/yv/Lv8y/zX/OP88/z//Qv9G/0n/TP9Q/1P/Vv9a/13/YP9j/2f/av9t/3H/dP93/3v/fv+B/4X/iP+L/4//kv+V/5n/nP+f/6P/pv+p/63/sP+z/7f/uv+9/8H/xP/H/8r/zv/R/9T/2P/b/97/4v/l/+j/7P/v//L/9v/5//z/AAADAAYACgANABAAFAAXABoAHgAhACQAJwArAC4AMQA1ADgAOwA/AEIARQBJAEwATwBTAFYAWQBdAGAAYwBnAGoAbQBxAHQAdwB7AH4AgQCEAIgAiwCOAJIAlQCYAJwAnwCiAKYAqQCsALAAswC2ALoAvQDAAMQAxwDKAM4A0QDUANgA2wDeAOIA5QDoAOsA7wDyAPUA+QD8AP8AAwEGAQkBDQEQARMBFwEaAR0BIQEkAScBKwEuATEBNQE4ATsBPwFCAUUBSAFMAU8BUgFWAVkBXAFgAWMBZgFqAW0BcAF0AXcBegF+AYEBhAGIAYsBjgGSAZUBmAGcAZ8BogGmAakBrAGvAbMBtgG5Ab0BwAHDAccBygHNAdEB1AHXAdsB3gHhAeUB6AHrAe8B8gH1AfkB/AH/AQMCBgIJAgwCEAITAhYCGgIdAiACJAInAioCLgIxAjQCOAI7Aj4CQgJFAkgCTAJPAlICVgJZAlwCYAJjAmYCaQJtAnACcwJ3AnoCfQKBAoQChwKLAo4CkQKVApgCmwKfAqICpQKpAqwCrwKzArYCuQK9AsACwwLHAsoCzQLQAtQC1wLaAt4C4QLkAugC6wLuAvIC9QL4AvwC/wICAwYDCQMMAxADEwMWAxoDHQMgAyQDJwMqAy0DMQM0AzcDOwM+A0EDRQNIA0sDTwNSA1UDWQNcA18DYwNmA2kDbQNwA3MDdwN6A30DgQOEA4cDiwOOA5EDlAOYA5sDngOiA6UDqAOsA68DsgO2Aw==");
assignasmFunc(1059680, "c3JjL2xpYmNvcmUvbnVtL2RlYzJmbHQvYWxnb3JpdGhtLnJzYCsQACQAAAATAAAADwAAAGFzc2VydGlvbiBmYWlsZWQ6IHguYml0X2xlbmd0aCgpIDwgNjRzcmMvbGliY29yZS9udW0vZGVjMmZsdC9udW0ucnMAlCsQACUAAAC5KxAAHgAAAD4AAAAFAAAAc3JjL2xpYmNvcmUvbnVtL2RlYzJmbHQvbnVtLnJzAADwKxAAHgAAAEEAAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZW5kIC0gc3RhcnQgPD0gNjQAICwQACMAAAC5KxAAHgAAAE0AAAAFAAAAc3JjL2xpYmNvcmUvbnVtL2RlYzJmbHQvcmF3ZnAucnMAAIA/AAAgQQAAyEIAAHpEAEAcRgBQw0cAJHRJgJYYSyC8vkwoa25O+QIVUA==");
assignasmFunc(1060016, "c3JjL2xpYmNvcmUvbnVtL2RlYzJmbHQvcmF3ZnAucnOwLBAAIAAAALwAAAAJAAAAYmlnX3RvX2ZwOiB1bmV4cGVjdGVkbHksIGlucHV0IGlzIHplcm8AAOAsEAAmAAAAXCwQACAAAAAwAQAABQAAAHNyYy9saWJjb3JlL251bS9kZWMyZmx0L21vZC5ycwAAIC0QAB4AAADWAAAACwAAAC4uAABQLRAAAgAAAEFueUJvcnJvd0Vycm9yQm9ycm93TXV0RXJyb3JQAAAAAAAAAAEAAABRAAAAaW5kZXggb3V0IG9mIGJvdW5kczogdGhlIGxlbiBpcyAgYnV0IHRoZSBpbmRleCBpcyAAAIgtEAAgAAAAqC0QABIAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlc3JjL2xpYmNvcmUvb3B0aW9uLnJzzC0QACsAAAD3LRAAFQAAAFsBAAAVAAAAFBMQAAAAAAD3LRAAFQAAAAoEAAAFAAAAOiBzcmMvbGliY29yZS9zbGljZS9tb2QucnNpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAABWLhAABgAAAFwuEAAiAAAAPi4QABgAAAD7CQAABQAAAHNsaWNlIGluZGV4IHN0YXJ0cyBhdCAgYnV0IGVuZHMgYXQgAKAuEAAWAAAAti4QAA0AAAA+LhAAGAAAAAEKAAAFAAAAc3JjL2xpYmNvcmUvc3RyL21vZC5yc1suLi5dYnl0ZSBpbmRleCAgaXMgb3V0IG9mIGJvdW5kcyBvZiBg/y4QAAsAAAAKLxAAFgAAABATEAABAAAA5C4QABYAAADhBwAACQAAAGJlZ2luIDw9IGVuZCAoIDw9ICkgd2hlbiBzbGljaW5nIGAAAEgvEAAOAAAAVi8QAAQAAABaLxAAEAAAABATEAABAAAA5C4QABYAAADlBwAABQAAACBpcyBub3QgYSBjaGFyIGJvdW5kYXJ5OyBpdCBpcyBpbnNpZGUgIChieXRlcyApIG9mIGD/LhAACwAAAJwvEAAmAAAAwi8QAAgAAADKLxAABgAAABATEAABAAAA5C4QABYAAADyBwAABQAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkAAFIAAAAMAAAABAAAAFMAAABUAAAAVQAAACAgICAgewosCiwgIHsgfSB9KAooLCkKW10AAABWAAAABAAAAAQAAABXAAAAWAAAAFkAAABzcmMvbGliY29yZS9mbXQvbW9kLnJzAAAgMRAAFgAAAEgEAAAoAAAAIDEQABYAAABUBAAAEQ==");
assignasmFunc(1061216, "c3JjL2xpYmNvcmUvdW5pY29kZS9ib29sX3RyaWUucnNgMRAAIAAAACcAAAAZAAAAYDEQACAAAAAoAAAAIAAAAGAxEAAgAAAAKgAAABkAAABgMRAAIAAAACsAAAAYAAAAYDEQACAAAAAsAAAAIAAAAAABAwUFBgYDBwYICAkRChwLGQwUDRIOFg8EEAMSEhMJFgEXBRgCGQMaBxwCHQEfFiADKwYsAi0LLgEwAzECMgKpAqoEqwj6AvsF/QT+A/8JrXh5i42iMFdYi4yQHB3dDg9LTPv8Li8/XF1fteKEjY6RkqmxurvFxsnK3uTl/wAEERIpMTQ3Ojs9SUpdhI6SqbG0urvGys7P5OUABA0OERIpMTQ6O0VGSUpeZGWEkZudyc7PDREpRUlXZGWNkam0urvFyd/k5fAEDRFFSWRlgIGEsry+v9XX8PGDhYaJi4yYoKSmqKmsur6/xcfOz9rbSJi9zcbOz0lOT1dZXl+Jjo+xtre/wcbH1xEWF1tc9vf+/4ANbXHe3w4PH25vHB1ffX6ur7u8+hYXHh9GR05PWFpcXn5/tcXU1dzw8fVyc490dZaXyf8vXyYuL6evt7/Hz9ffmkCXmDCPH//O/05PWlsHCA8QJy/u725vNz0/QkWQkf7/U2d1yMnQ0djZ5/7/ACBfIoLfBIJECBsEBhGBrA6AqzUeFYDgAxkIAQQvBDQEBwMBBwYHEQpQDxIHVQgCBBwKCQMIAwcDAgMDAwwEBQMLBgEOFQU6AxEHBgUQCFYHAgcVDVAEQwMtAwEEEQYPDDoEHSUNBkwgbQRqJYDIBYKwAxoGgv0DWQcVCxcJFAwUDGoGCgYaBlkHKwVGCiwEDAQBAzELLAQaBgsDgKwGCgYfQUwELQN0CDwDDwM8BzgIKgaC/xEYCC8RLQMgECEPgIwEgpcZCxWIlAUvBTsHAg4YCYCvMXQMgNYaDAWA/wWAtgUkDJvGCtIwEISNAzcJgVwUgLgIgLo9NQQKBjgIRggMBnQLHgNaBFkJgIMYHAoWCUYKgIoGq6QMFwQxoQSB2iYHDAUFgKURgW0QeCgqBkwEgI0EgL4DGwMPDQAGAQEDAQQCCAgJAgoFCwIQAREEEgUTERQCFQIXAhoCHAUdCCQBagNrArwC0QLUDNUJ1gLXAtoB4AXoAu4g8AT5BAwnOz5OT4+enp8GBwk2PT5W89DRBBQYNjdWV701zs/gEoeJjp4EDQ4REikxNDpFRklKTk9kZVpctrcbHISFCTeQkagHCjs+ZmmPkm9f7u9aYpqbJyhVnaCho6SnqK26vMQGCwwVHTo/RVGmp8zNoAcZGiIlxcYEICMlJigzODpISkxQU1VWWFpcXmBjZWZrc3h9f4qkqq+wwNA/cXJ7XiJ7BQMELQNlBAEvLoCCHQMxDxwEJAkeBSsFRAQOKoCqBiQEJAQoCDQLAYCQgTcJFgoIgJg5A2MICTAWBSEDGwUBQDgESwUvBAoHCQdAICcEDAk2AzoFGgcEDAdQSTczDTMHLggKgSYfgIEoCCqApk4EHg9DDhkHCgZHCScJdQs/QSoGOwUKBlEGAQUQAwWAi18hSAgKgKZeIkULCgYNEzgICjYsBBCAwDxkUwwBgQBICFMdOYEHRgodA0dJNwMOCAoGOQcKgTYZgQeDmmZ1C4DEiryEL4/RgkehuYI5ByoEAmAmCkYKKAUTgrBbZUULLxARQAIel/IOgvOlDYEfUYGMiQRrBQ0DCQcQk2CA9gpzCG4XRoCaFAxXCRmAh4FHA4VCDxWFUCuH1YDXKUsFCgQCgxFEgUs8BgEEVQUbNAKBDiwEZAxWCg0DXAQ9OR0NLAQJBwIOBoCag9ULDQMKBnQMWScMBDgICgYoCB5SDARnAykNCgYDDTBgDoWSAADA++8+AAAAAAAO");
assignasmFunc(1062658, "+P/7////BwAAAAAAABT+If4ADAAAAAIAAAAAAABQHiCAAAwAAEAGAAAAAAAAEIY5AgAAACMAviEAAAwAAPwCAAAAAAAA0B4gwAAMAAAABAAAAAAAAEABIIAAAAAAABEAAAAAAADAwT1gAAwAAAACAAAAAAAAkEQwYAAMAAAAAwAAAAAAAFgeIIAADAAAAACEXIA=");
assignasmFunc(1062814, "8geAfw==");
assignasmFunc(1062830, "8hsAPw==");
assignasmFunc(1062843, "AwAAoAIAAAAAAAD+f9/g//7///8fQA==");
assignasmFunc(1062877, "4P1mAAAAwwEAHgBkIAAgAAAAAAAAAOAAAAAAAAAcAAAAHAAAAAwAAAAMAAAAAAAAALA/QP4PIAAAAAAAOAAAAAAAAGAAAAAAAgAAAAAAAIcBBA4AAIAJAAAAAAAAQH/lH/ifAAAAAAAA/38PAAAAAADQFwQAAAAA+A8AAwAAADw7AAAAAAAAQKMDAAAAAAAA8M8AAAD3//0hEAP/////////+wAQ");
assignasmFunc(1063050, "/////wEAAAAAAACAAw==");
assignasmFunc(1063071, "gAAAAAD/////AAAAAAD8AAAAAAAG");
assignasmFunc(1063101, "gPc/AAAAwA==");
assignasmFunc(1063118, "AwBECAAAYAAAADAAAAD//wOAAAAAAMA/AACA/wMAAAAAAAcAAAAAAMgTAAAAACA=");
assignasmFunc(1063173, "fmYACBAAAAAAABAAAAAAAACdwQIAAAAAMEAAAAAAACAhAAAAAABAAAAAAP//AAD//w==");
assignasmFunc(1063231, "AQAAAAIAAw==");
assignasmFunc(1063264, "BAAABQ==");
assignasmFunc(1063276, "Bg==");
assignasmFunc(1063285, "BwAACAkKAAsMDQ4PAAAQERIAABMUFRYAABcYGRobABwAAAAdAAAAAAAAAB4fIAAAAAAAIQAiACMkJQAAAAAm");
assignasmFunc(1063459, "Jyg=");
assignasmFunc(1063478, "KQ==");
assignasmFunc(1063530, "Kg==");
assignasmFunc(1063549, "KywAAC0=");
assignasmFunc(1063584, "Li8w");
assignasmFunc(1063608, "MQ==");
assignasmFunc(1063643, "MgAz");
assignasmFunc(1063672, "NDUAADU1NTY=");
assignasmFunc(1063751, "IAAAAAAB");
assignasmFunc(1063766, "wAdu8AAAAAAAhwAAAABgAAAAAAAAAPAAAADA/wEAAAAAAAIAAAAAAAD/fwAAAAAAAIADAAAAAAB4BgcAAACA7x8AAAAAAAAACAADAAAAAADAfwAe");
assignasmFunc(1063861, "gNNAAAAAgPgHAAADAAAAAAAAWAEAgADAHx8=");
assignasmFunc(1063895, "/1wAAEA=");
assignasmFunc(1063910, "+aUN");
assignasmFunc(1063925, "gDywAQAAMA==");
assignasmFunc(1063942, "+KcB");
assignasmFunc(1063957, "KL8AAAAA4LwPAAAAAAAAAID/Bv4HAAAAAPh5gAB+DgAAAAAA/H8D");
assignasmFunc(1064006, "f78AAPz///xtAAAAAAAAAH60vw==");
assignasmFunc(1064034, "ow==");
assignasmFunc(1064046, "GAAAAAAAAAAfAAAAAAAAAH8AAIAH");
assignasmFunc(1064075, "YA==");
assignasmFunc(1064084, "oMMH+OcPAAAAPAAAHAAAAAAAAAD///////9/+P//////HyAAEAAA+P7/AAB////52wcAAAAAfwAAAAAA8Ac=");
assignasmFunc(1064156, "////////////////////////");
assignasmFunc(1064272, "//////////////////8=");
assignasmFunc(1064320, "+AM=");
assignasmFunc(1064354, "/v////+/tg==");
assignasmFunc(1064370, "/wcAAAAAAPj//wAAAQ==");
assignasmFunc(1064394, "wJ+fPQAAAAACAAAA////Bw==");
assignasmFunc(1064420, "wP8BAAAAAAAA+A8g6DYQAEoAAAA4ORAAAAIAADg7EAA3AAAAAAECAwQFBgcICQgKCwwNDg8QERITFAIVFhcYGRobHB0eHyACAgICAgICAgICIQICAgICAgICAgICAgICIiMkJSYCJwIoAgICKSorAiwtLi8wAgIxAgICMgICAgICAgICMwICNAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNQI2AjcCAgICAgICAjgCOQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICOjs8AgICAj0CAj4/QEFCQ0RFRgICAkcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICSAICAgICAgICAgICSQICAgICOwIAAQICAgIDAgICAgQCBQYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc3JjL2xpYmNvcmUvbnVtL2JpZ251bS5ycw==");
assignasmFunc(1065744, "c3JjL2xpYmNvcmUvbnVtL2JpZ251bS5ycwAAABBDEAAZAAAAiAAAABUAAAAQQxAAGQAAAJ4AAAATAAAAEEMQABkAAADaAAAAIgAAAGFzc2VydGlvbiBmYWlsZWQ6IG5vYm9ycm93AABcQxAAGgAAAOhCEAAZAAAA4QEAAAEAAAAQQxAAGQAAAAMBAAAVAAAAYXNzZXJ0aW9uIGZhaWxlZDogZGlnaXRzIDwgNDAAAACgQxAAHQAAAOhCEAAZAAAA4QEAAAEAAAAQQxAAGQAAABgBAAArAAAAEEMQABkAAAAYAQAAFQAAABBDEAAZAAAAGwEAABUAAAAQQxAAGQAAACIBAAAkAAAAEEMQABkAAAAkAQAAGQAAABBDEAAZAAAAKQEAACkAAAAQQxAAGQAAAF0BAAA8AAAAEEMQABkAAABiAQAAHQAAAGFzc2VydGlvbiBmYWlsZWQ6ICFkLmlzX3plcm8oKQAAWEQQAB4AAADoQhAAGQAAAOEBAAAB");
assignasmFunc(1066704, "AQ==");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },__wbindgen_object_drop_ref,__wbindgen_string_new,__wbindgen_object_clone_ref,__wbindgen_number_new,__wbg_call_98582f5ce3d4c1ab,__wbg_get_a7395f826d52f42a,__wbg_has_27f12e65cef14759,__wbindgen_number_get,__wbindgen_string_get,__wbindgen_throw},memasmFunc);
export var memory = retasmFunc.memory;
export var __wbg_layout_free = retasmFunc.__wbg_layout_free;
export var __wbg_get_layout_width = retasmFunc.__wbg_get_layout_width;
export var __wbg_get_layout_height = retasmFunc.__wbg_get_layout_height;
export var __wbg_get_layout_x = retasmFunc.__wbg_get_layout_x;
export var __wbg_get_layout_y = retasmFunc.__wbg_get_layout_y;
export var __wbg_get_layout_childCount = retasmFunc.__wbg_get_layout_childCount;
export var layout_child = retasmFunc.layout_child;
export var __wbg_allocator_free = retasmFunc.__wbg_allocator_free;
export var allocator_new = retasmFunc.allocator_new;
export var __wbg_node_free = retasmFunc.__wbg_node_free;
export var __wbg_get_node_childCount = retasmFunc.__wbg_get_node_childCount;
export var node_new = retasmFunc.node_new;
export var node_setMeasure = retasmFunc.node_setMeasure;
export var node_addChild = retasmFunc.node_addChild;
export var node_removeChild = retasmFunc.node_removeChild;
export var node_replaceChildAtIndex = retasmFunc.node_replaceChildAtIndex;
export var node_removeChildAtIndex = retasmFunc.node_removeChildAtIndex;
export var node_getStyle = retasmFunc.node_getStyle;
export var node_setStyle = retasmFunc.node_setStyle;
export var node_markDirty = retasmFunc.node_markDirty;
export var node_isDirty = retasmFunc.node_isDirty;
export var node_computeLayout = retasmFunc.node_computeLayout;
export var __wbindgen_exn_store = retasmFunc.__wbindgen_exn_store;
export var __wbindgen_malloc = retasmFunc.__wbindgen_malloc;
export var __wbindgen_realloc = retasmFunc.__wbindgen_realloc;
